const { ProductService } = require("../service/ProductService");
const { insertOne } = require("../DB/Base");
const { Product } = require("../DB/Product");

class ProductControllers {

    async list(req, res) {
        let service = new ProductService();
        res.json({
            list: await service.list(req.user, req.page, 10)
        });
    }


    async viewOne(req, res) {
        const id = req.params.id;

        let service = new ProductService();
        res.json({
            product: await service.one(id)
        });
    }

    async create(req, res) {
        let product = new Product();
        let data = req.body;
        data.idDeleted = false;

        await product.insertOne(data);

        res.json({
            message: "product created successfully"
        });
    }

    async update(req, res) {
        const id = req.params.id;
        const data = req.body;

        let service = new ProductService();
        res.json({
            product: await service.update(id, data)
        });
    }

    async delete(req, res) {
        const { id } = req.params;

        let service = new ProductService();
        await service.delete(id)
        res.json({
            message: "product deleted successfully"
        });
    }
    // async changeStatus(req, res) {
    //     const { id } = req.params;

    //     let service = new ProductService();
    //     let product = await service.one(id);
    //     let status = "active";
    //     if (!product.status || product.status != "active")
    //         status = "active";
    //     else
    //         status = "deactivate";

    //     await service.update(id, { status })
    //     res.json({
    //         message: "product status changed successfully"
    //     });
    // }


}


module.exports = {
    ProductControllers
}