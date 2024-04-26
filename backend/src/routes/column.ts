import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { columnSchema, updateColumnSchema } from "@mame_26_11/column-common"


const column = new Hono<{
    Bindings: {
        DATABASE_URL : string,
        JWT_SECRET : string,
    },
    Variables :   {
        userId : string,
        prisma : PrismaClient,
    }
}>();

column.use('/*', async (c, next)=>{
    const header = c.req.header("authorization") || "";

   try{
        const decode = await verify(header, c.env.JWT_SECRET);

            if(decode){
                c.set("userId", decode.id);
                await next()
            }else{
                c.status(403)
                return c.json({
                    message : "You are not logged in"
                })
            }
   }
   catch(error){
        console.log("error during authentication", error);

        c.status(500)
        return c.json({
            message :  "Internal server error",
        });
   }
    
})

column.use('/*', async(c, next)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate()) as unknown as PrismaClient;
    
    c.set('prisma', prisma)
    await next();
})

    column.post('/', async (c) => {
        const body = await c.req.json();
        
        const prisma = c.get('prisma')
        const authorId = c.get('userId')


        try{
            
            const parsedData = columnSchema.safeParse(body);

            if (!parsedData.success) {
                const error = parsedData.error;
                c.status(400);
                return c.json({
                    message: "Validation Error",
                    errors: error.errors.map(err => err.message)
                });
            }

            const column = await prisma.column.create({
                data : {
                    title : body.title,
                    content : body.content,
                    published : true,
                    author_id : authorId,
                }
            })

            return c.json({
                id : column.id,
            })

        }
        catch(error){
            console.log("Error while creating column", error);
            c.status(500)
            return c.json({
                message : "Error while creating column"
            })        
        }
    })

    column.put('/', async (c) => {
        const body = await c.req.json();
        const prisma = c.get('prisma')


        try {

            const parsedData = updateColumnSchema.safeParse(body);

            if (!parsedData.success) {
                const error = parsedData.error;
                c.status(400);
                return c.json({
                    message: "Validation Error",
                    errors: error.errors.map(err => err.message)
                });
            }

            const column = await prisma.column.update({
                where : {
                    id : body.id
                },
                data : {
                    title : body.title,
                    content : body.content,
                }
            })

            return c.json({
                id : column.id,
            })
        }
        catch(error){
            console.log("Error while updating" , error);
            c.status(500)
            return c.json({
                message : "Internal server error"
            })
        }
    })

    column.get('/bulk', async (c) => {
        const prisma = c.get('prisma')
        const authorId = c.get('userId')

        try{
            const columns = await prisma.column.findMany({
                select : {
                    id : true,
                    title : true,
                    content : true,
                    user : {
                        select : {
                            name : true
                        }
                    }
                }
            })

            return c.json({
                columns
            })
        }
        catch(error){
            console.log("Error while fetching the data", error);
            c.status(411)
            return c.json({
                message : "Internal server error"
            })
        }
    })

    // column.post('/:author-name', async (c) => {
    //     const prisma = c.get('prisma')
    // })

    column.post('/:id', async (c) => {
        const prisma = c.get('prisma')
        const authorId = c.get('userId');

        const targetId = c.req.param("id");

        try{
            const column = await prisma.column.findFirst({
                where : {
                    id : targetId,
                },
                select : {
                    id : true,
                    title : true,
                    content : true,
                    user : {
                        select : {
                            name : true,
                        }
                    }
                }
            })
            
            return c.json({
                column,
            })
        }
        catch(error){
            console.log("Error while fetching data", error);
            c.status(411)
            return c.json({
                message : "Internal server error"
            })
        }
    })

export default column;