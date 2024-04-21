import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";


const column = new Hono<{
    Bindings: {
        DATABASE_URL : string,
        JWT_SECRET : string,
    },
    Variables : {
        userId : string,
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

column.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
})

column.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
})

column.post('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
})

column.post('/:author-name', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
})

column.post('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
})

export default column;