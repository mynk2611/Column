import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupSchema, loginSchema } from "@mame_26_11/column-common";

const userAuth = new Hono<{
    Bindings : {
      DATABASE_URL : string,
      JWT_SECRET : string   
    }
}>();

userAuth.post('/signup', async(c)=>{
    const body = await c.req.json();
    const { success } = signupSchema.safeParse(body);

        if(!success){
            c.status(411)
            return c.json({
                message : "Incorrect inputs"
            })
        }

     const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
     }).$extends(withAccelerate())

     
     try{
            const existUser = await prisma.column_User.findUnique({
                where : {
                    email : body.email,
                }
            }) 

            if(existUser){
                c.status(400)
                return c.json({
                    message : "User already exist"
                });
            }


            const user = await prisma.column_User.create({
                data : {
                    name : body.name,
                    email : body.email,
                    password : body.password,
                    bio : body.bio,
                }
            })

            const token = await sign({ id : user.id}, c.env.JWT_SECRET)

            return c.text(token);
     }
     catch(error){
        console.error("Error while signup", error);

        c.status(500);
        return c.json({
            message : "Error while signup",
        })
     }
})
userAuth.post('/login', async(c)=>{
    const body = await c.req.json();
    const { success } = loginSchema.safeParse(body);

        if(!success){
            c.status(411);
            return c.json({
                message: "Incorrect inputs"
            })
        }

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());


  try{
        const user = await prisma.column_User.findFirst({
            where : {
                email : body.email,
                password : body.password
            }
        })
                if(!user){
                    c.status(403)
                    return c.json({
                        message : "User not exist"
                    })
                }

        const token = await sign({id : user.id}, c.env.JWT_SECRET);

        return c.json({
            token
        })

  }
  catch(error){
        console.log("Error while login", error)

        c.status(500)
        return c.json({
            message : "Error while login"
        })
  }
})

export default userAuth;