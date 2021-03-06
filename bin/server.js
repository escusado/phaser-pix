#! /usr/local/bin/node

var serverPort = 3000;

var express = require('express'),
    http    = require('http'),
    app     = express(),
    server  = http.createServer(app),
    io      = require('socket.io').listen(server, {debug:false}),
    fs      = require('fs');

require('./vendor/neon.js');

Class('Server')({
    prototype : {
        init : function (){
            this._configureApp();
            this._setRoutes();
            this._serverStart();

            return this;
        },

        _configureApp : function(){
            //body post size
            app.use(express.bodyParser({ maxFieldsSize: '2 * 1024 * 1024 * 1024 ' }));
            app.use(express.limit('50mb'));

            app.use(function (req, res, next) {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "X-Requested-With");
                next();
            });

            //Static routes
            app.use('/assets', express.static('assets'));

            app.use(app.router);

            return this;
        },

        _setRoutes : function(){
            app.get('/', function(req, res){
                res.sendfile('views/index.html');
            });

            return this;
        },

        _serverStart : function(){
            console.log('Server ready');
            console.log('http://localhost:'+serverPort.toString());
            server.listen(serverPort);
        }
    }
});

var server = new Server();