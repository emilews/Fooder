require('express-group-routes');
var app = require('express');
 
app.group("/api/u", (router) => {
    router.get("/login", ); // /api/v1/login 
});