var express = require('express'),
    path    = require('path'),
    bodyParser= require('body-parser'),
    cons = require('consolidate'),
    pg = require('pg');

var app = express();

var connect = "pg://postgres:99569@localhost:1997/prashant";

app.engine('dust',cons.dust);