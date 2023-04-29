// Require Function

const http = require('http');
const express = require('express');

// local module
const locally = require('./my_module');

// import multi methods in module
const {readFile, writeFile} = require('fs');

// local module from same directory
const locally = require('./module/my_module/module');

// local module from different directory
const locally = require('../Beginner/Lectures/1');

// import a file
const file_data = require('./data.txt');

// import a module as a class
class my_class{
    //.....
}
module.exports = my_class;
////
const my_classo = require('./my_class.js');
const instance = new my_classo();
