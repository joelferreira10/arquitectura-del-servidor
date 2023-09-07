import Services from "./class.services.js";
import persistence from "../daos/persistence.js";
// import ProductDaoMongo from '../daos/mongo/product.dao.js'
// import ProductFS from "../daos/filesystem/product.dao.js";

// const productDaoMongo=new ProductDaoMongo()
// const productFS=new ProductFS()
const {productDao}=persistence
export default class ProductService extends Services{
    constructor() {
        super(productDao)
    }
    
}