const router = require("express").Router()
const maincategoryRouter = require("./MaincategoryRouter")
const subcategoryRouter = require("./SubcategoryRouter")
const brandRouter = require("./BrandRouter")
const cartRouter = require("./CartRouter")
const checkoutRouter = require("./CheckoutRouter")
const contactUsRouter = require("./ContactUsRouter")
const newsletterRouter = require("./NewslettterRouter")
const productRouter = require("./ProductRouter")
const testimonialRouter = require("./TestimonialRouter")
const userRouter = require("./UserRouter")
const wishlistRouter = require("./WishlistRouter")







router.use("/maincategory", maincategoryRouter)
router.use("/subcategory", subcategoryRouter)
router.use("/brand", brandRouter)
router.use("/cart", cartRouter)
router.use("/checkout", checkoutRouter)
router.use("/contactus", contactUsRouter)
router.use("/newsletter", newsletterRouter)
router.use("/product", productRouter)
router.use("/testimonial", testimonialRouter)
router.use("/user", userRouter)
router.use("/wishlist", wishlistRouter)

module.exports = router
