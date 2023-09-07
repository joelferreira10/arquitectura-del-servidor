import { Router } from "express";
import userRouter from './user.router.js'
import productRouter from './product.router.js'


export default class MainRouter{
    constructor(){
        this.router=Router()
        this.initRoutes();
    }

    initRoutes(){
    this.router.use('/users',userRouter)
    this.router.use('/products',productRouter)
    }

    getRouter(){
        return this.router
    }
}
