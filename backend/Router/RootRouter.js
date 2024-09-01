const RootRouter = require("express").Router();

const userRouter = require("./UserRouter");
const ProductRouter = require("./ProductRouter");
const cartRouter = require("./CartRouter");
const checkoutRouter = require("./CheckoutRouter");
const contactUsRouter = require("./ContactUsRouter")

RootRouter.use("/user", userRouter);
RootRouter.use("/product", ProductRouter);
RootRouter.use("/cart", cartRouter);
RootRouter.use("/checkout", checkoutRouter);
RootRouter.use("/contactUs", contactUsRouter)

module.exports = RootRouter;
