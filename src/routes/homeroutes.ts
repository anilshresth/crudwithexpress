import express from 'express'

const HomeRoutes=()=>{
    const router=express.Router()
    router.get("/api/home",(request,response)=>{
        response.send({name:"anil",age:34})
    })
    return router
}
export default HomeRoutes;