
//External modules
const AuthRouter = require("express").Router();


//local modules


//Middlewares 
const {singInValidator,singUpValidator} = require("../Middlewares/loginValidator")

//controllers
const {singIn,singUp} = require("../Controllers/AuthController")



//if requiest is post and url is Auth/singIn
AuthRouter.post("/signin",singInValidator,singIn)

//if requiest is post and url is Aut/singUp
AuthRouter.post("/signup",singUpValidator,singUp)


module.exports = AuthRouter