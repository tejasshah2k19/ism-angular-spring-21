const http = require("http")


// console.log("ahmedabad")
// console.log(http);


http.createServer(function (req, res) { 
        console.log("i im inside create server");
        console.log(req.url);

        if(req.url == "/login"){
            console.log("login");
            res.write("login");
            res.end()
        }else if(req.url == "/signup"){
            console.log("signup");     
            res.write("signup")
            res.end()
        }

}).listen(3000)

//signup
//login 

//express  ----