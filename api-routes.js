var router = require("express").Router()
const productController = require("./controller/productController")
const userController  = require("./controller/userController")
const roleController = require("./controller/roleController")




// app.post("/products",productController.saveProduct)
router.route("/products").post(productController.saveProduct)

// app.get("/products",productController.getAllProducts)
// app.get("/product/:productId",productController.getProduct)


// app.post("/signup",userController.signup)
// app.get("/users",userController.getAllUsers)
// app.delete("/users/:userId",userController.deleteUserById)
// app.get("/users/:userId",userController.getUserById)
// app.put("/users",userController.updateUser)


router.route("/signup").post(userController.signup)
router.route("/users").get(userController.getAllUsers)
router.route("/users/:userId").delete(userController.deleteUserById)
router.route("/users/:userId").get(userController.getUserById)
router.route("/user").put(userController.updateUser)

router.route("/roles").post(roleController.addRole)
module.exports = router 
