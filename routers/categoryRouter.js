const { json } = require('body-parser');
var express = require('express');
const router = require('../api');
const routes = (categoryModel) => {
  const categoryRouter = express.Router();
  categoryRouter.route("/categories").get((req, res) => {
    categoryModel.find((err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result)
    });

  });
  categoryRouter
    .route("/categories/:id")
    .get((req, res) => {
      categoryModel.findById(req.params.id, (err, result) => {
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    });

    categoryRouter.post("/categories",(req,res,next)=>{
      const category = new categoryModel(req.body);
      category.save();
      console.log(category);
      return res.status(201).json(category); 
    })


  return categoryRouter;
}

module.exports = routes;