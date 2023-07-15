const { Router } = require("express");
const { authtication } = require("../middleware/authtication");
const { cartModel } = require("../model/cartModel");

const cartRouter = Router();
cartRouter.post("/cart", async (req, res) => {
  try {
    const data = new cartModel(req.body);
    await data.save();
    res.status(200).send({ Massage: "Add to the Cart" });
  } catch (error) {
    res.status(501).send({ Massage: "Something went wrong" });
  }
});

cartRouter.get("/cart", async (req, res) => {
  try {
    const data = await cartModel.find({ user_id: req.body.user_id });
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(501).send({ Massage: "some went wrong" });
  }
});

cartRouter.post("/cartquntity/:mock", async (req, res) => {
  const { mock } = req.params;

  try {
    let data = await cartModel.findOne(req.body);
    if (mock === "increase") {
      data.quntity += 1;
    } else {
      data.quntity -= 1;
    }
    await data.save();
    
    res.status(200).send({ Massage: "data updated" });
  } catch (err) {
    res.send(err);
  }

  
});

cartRouter.delete("/cart/:id", async (req, res) => {
  const { id } = req.params;

  await cartModel.deleteOne({ _id: id });
  res.status(200).send({ Massage: "Removed item successfully" });
});

cartRouter.delete("/paymentdone", async (req, res) => {
  const data = req.body;
  console.log(data);
  await cartModel.deleteMany(req.body);
  res.status(200).send({ Massage: "done" });
});

module.exports = {
  cartRouter,
};
