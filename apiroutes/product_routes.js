//utility library required for processing
// lodash is an improvised performance library for generic colelction/datastructure 
var _ = require('lodash');
var Product = require('../models/product.model.js');


module.exports = function(app) {

    /* Create */
    app.post('/api/product/create', function (req, res) {
        var newProduct = new Product(req.body);
        newProduct.save(function(err) {
            if (err) {
                res.json({info: 'error during Product create', error: err});
            };
            res.json({info: 'Product created successfully'});
        });
    });

    /* Read */
    
    app.get('/api/products', function (req, res) {
        Product.find(function(err, Products) {
            if (err) {
                res.json({info: 'error during find Product', error: err});
            };
           // res.json({info: 'Products found successfully', data: Products});
           res.json({Products: Products});
        });
    });

    app.get('/api/product/:id', function (req, res) {
        Product.findById(req.params.id, function(err, Product) {
            if (err) {
                res.json({info: 'error during find Product', error: err});
            };
            if (Product) {
                // res.json({info: 'Product found successfully', data: Product});
                setTimeout(function(){
                    res.json({info: 'Product found successfully', data: Product});
                }, 10000);
            } else {
                res.json({info: 'Product not found'});
            }
        });
    });

    /* Update */
    app.put('/api/product/:id', function (req, res) {
        Product.findById(req.params.id, function(err, Product) {
            if (err) {
                res.json({info: 'error during find Product', error: err});
            };
            if (Product) {
                _.merge(Product, req.body);
                Product.save(function(err) {
                    if (err) {
                        res.json({info: 'error during Product update', error: err});
                    };
                    res.json({info: 'Product updated successfully'});
                });
            } else {
                res.json({info: 'Product not found'});
            }

        });
    });

    /* Delete */
    app.delete('/api/product/:id', function (req, res) {
        Product.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info: 'error during remove Product', error: err});
            };
            res.json({info: 'Product removed successfully'});
        });
    });


};
