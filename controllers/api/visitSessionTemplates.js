'use strict';

var constants         = require('../../scripts/constants');
var dataService     = require(constants.paths.services + '/visitSessionTemplates');

var controller = {}

controller.getAll               = getAll;
controller.getAllByVisitId      = getAllByVisitId;
controller.create               = create;

controller.getOneById           = getOneById;
controller.updateById           = updateById;
controller.deleteById           = deleteById;
controller.getWithQuery         = getWithQuery;

module.exports = controller;

function getAll(req,res){
  dataService.getAll()
    .then(function(list){
        if (list){
            res.send(list);
        }else {
            res.status(404).send('Doc not found');
        }
    })
    .catch(function (err){
        console.log("exception" + err);
        res.status(500).send(err);
    });
}

function getOneById(req,res){
  dataService.getOneById(req.params.id)
    .then(function(list){
        if (list){
            res.send(list);
        }else {
            res.status(404).send('Doc not found');
        }
    })
    .catch(function (err){
        console.log("exception" + err);
        res.status(500).send(err);
    });
}

function getAllByVisitId(req,res){
  dataService.getAllByVisitId(req.params.id)
    .then(function(list){
        if (list){
            res.send(list);
        }else {
            res.status(404).send('Doc not found');
        }
    })
    .catch(function (err){
        console.log("exception" + err);
        res.status(500).send(err);
    });
}

function create(req, res) {
  dataService.create(req.body)
    .then(function () {
        res.status(200).send("Doc added successfully");
    })
    .catch(function (err) {
        console.log("cntrl create: err - " + err);
        res.status(500).send(err);
    });
}

function deleteById(req, res) {
  dataService.deleteById(req.params.id)
    .then(function () {
        res.status(200).send("Doc deleted successfully");
    })
    .catch(function (err) {
        console.log("controller delete err: " + err);
        res.status(500).send(err);
    });
}

function updateById(req, res) {
  dataService.updateById(req.params.id, req.body)
    .then(function () {
        res.status(200).send("Doc updated successfully");
    })
    .catch(function (err) {
        console.log(err);
        res.status(500).send(err);
    });
}

function getWithQuery(req,res){
    var query = req.params.id;
    var maxRecs = req.param('maxRecs');
    var fields = req.param('fields');
    var sort = req.param('sort');
    dataService.getWithQuery(query,fields ,maxRecs, sort)
    .then(function(data){
        if (data){
            res.send(data);
        }else {
            res.sendStatus(404).send("Doc dont exists");
        }
    })
    .catch(function (err){
        console.log("doc dont exists" + err);
        res.status(500).send(err);
    });
}