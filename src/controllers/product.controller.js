import Controllers from "./class.controller.js";
import ProductService from "../services/product.service.js";
import ProductFS from "../daos/filesystem/product.dao.js";

// const produtService=new ProductService()
// const prodFS=new ProductFS()
const prodService=new ProductService()
export default class ProductController extends Controllers{
    constructor(){
        super(prodService);
    }
}