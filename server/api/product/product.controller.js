'use strict';

var http = require('http');
var request = require('request');
var Q = require('q');

var _ = require('lodash');

// Get list of products
exports.index = function(req, res) {

    var fts = req.params.fts;
    console.log(fts);

    var articleUrl = 'http://api.shopstyle.com/api/v2/products?pid=uid8025-25655195-60&fts='+fts+'&offset=0&limit=10';

    var options = {
        url:articleUrl,
        timeout:10000
    };

    request(options,function (error, response, html){

        if(!error && response.statusCode == 200){

            return res.json(200, JSON.parse(response.body));

//            deferred.resolve(createArticleDescrition(articleUrl,html));
        }else{

            return res.json(200,'error' );
            console.log('error');
//            deferred.resolve(createArticleErrorDescrition(articleUrl, error));
        }
    });


//  res.json([]);
};