//multiple branch
//require all packages here
const express = require("express")
const app = express()
const ejs = require("ejs")
const bodyParser = require("body-parser")
const https = require("https")

//express files are static so we 
app.use(express.static("Public"))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.set("view engine", "ejs")


//we listen for aclient to make a request to the home directy. When this event is triggerted, we render the home index ejs file
app.get("/", function (req, res) {
    res.render("index", {

    })

})

//when a client request a city in the url
app.get("/:City", function (req, res) {
    res.render("dynamic", {
        CityName: req.params.City

    })
})


//we recieve a post request. We recieve a from request.
app.post("/citySearch", function (req, res) {
    res.render("dynamic", {
        CityName: req.body.City

    })
})



//we listent for useres to send request to the server
app.listen(3000, function () {
    console.log("server is runnig")
})

