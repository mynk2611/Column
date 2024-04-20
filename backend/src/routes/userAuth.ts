import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

const userAuth = new Hono<{
    Bindings : {
      DATABASE_URL : string,
      JWT_SECRET : string   
    }
}>();

userAuth.post('/signup', async(c)=>{
     const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
     }).$extends(withAccelerate())

     const body = await c.req.json();
     
     try{
            const existUser = await prisma.Column_User.findUnique({
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


            const user = await prisma.Column_User.create({
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
 
})

export default userAuth;