const { json } = require('body-parser');
var express = require('express');
const router = require('../api');
const routes = (productModel) => {
  const productRouter = express.Router();
  productRouter.route("/products").get((req, res) => {
    productModel.find((err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result)
    });

  });
  productRouter
    .route("/products/:id")
    .get((req, res) => {
      productModel.findById(req.params.id, (err, result) => {
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    });
    productRouter
    .route("/products/categories/:id")
    .get((req, res) => {
      productModel.find({categoryId: req.params.id}, (err, result) => {
        if (err) {
          res.send(err);
        }
        console.log(result);
        res.send(result);
      });
    });

    productRouter.post("/products",(req,res,next)=>{
      const product = new productModel(req.body);
      product.save();
      console.log(product);
      return res.status(201).json(product); 
    })
    productRouter.put('/products/:id', async (req, res) => {
      try {
          const id = req.params.id;
          const updatedData = req.body;
          const options = { new: true };
  
          const result = await productModel.findByIdAndUpdate(
              id, updatedData, options
          )
  
          res.send(result)
      }
      catch (error) {
          res.status(400).json({ message: error.message })
      }
  })
  router.patch('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await productModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

  productRouter.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await productModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

  return productRouter;
}

module.exports = routes;