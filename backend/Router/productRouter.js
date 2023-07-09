const { Router } = require("express");
const productRouter = Router();
const fs = require("fs");
const { menModel } = require("../model/menModel");
const { womenModel } = require("../model/womenModel");
const { kidsModel } = require("../model/kidModel");
const { kitchenModel } = require("../model/kitchenModel");

productRouter.get("/men", async (req, res) => {
  let data,
    pages = 1;
  const { limit, skip } = req.query;
  try {
    let count = await menModel.count();
    pages = Math.ceil(count / limit);
    if (limit && skip) {
      data = await menModel
        .find()
        .skip((skip - 1) * limit)
        .limit(limit);
    } else {
      data = await menModel.find();
    }
    res.status(200).send({ data: data, pages });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

productRouter.get("/women", async (req, res) => {
  let data,
    pages = 1;
  const { limit, skip } = req.query;
  try {
    if (limit && skip) {
      let count = await menModel.count();
      pages = Math.ceil(count / limit);
      data = await womenModel
        .find()
        .skip((skip - 1) * limit)
        .limit(limit);
    } else {
      data = await womenModel.find();
    }
    res.status(200).send({ data: data, pages });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

productRouter.get("/kids", async (req, res) => {
  let data,
    pages = 1;
  const { limit, skip } = req.query;
  try {
    if (limit && skip) {
      let count = await menModel.count();
      pages = Math.ceil(count / limit);
      data = await kidsModel
        .find()
        .skip((skip - 1) * limit)
        .limit(limit);
    } else {
      data = await kidsModel.find();
    }
    res.status(200).send({ data: data, pages });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

productRouter.get("/kitchen", async (req, res) => {
  let data,
    pages = 1;
  const { limit, skip } = req.query;
  try {
    if (limit && skip) {
      let count = await menModel.count();
      pages = Math.ceil(count / limit);
      data = await kitchenModel
        .find()
        .skip((skip - 1) * limit)
        .limit(limit);
    } else {
      data = await kitchenModel.find();
    }
    res.status(200).send({ data: data, pages });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// productRouter.get("/man/:id", (req, res) => {
//   let { id } = req.params;
//   // console.log(id)

//   let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

//   const parseData = JSON.parse(data);

//   const Data = parseData.mens_data;

//   // console.log(Data);

//   const SigleData = Data.find((e) => Number(e.id) == id);
//   // console.log(SigleData)

//   res.status(200).send(SigleData);
// });
// productRouter.get("/woman/:id", (req, res) => {
//   let { id } = req.params;
//   let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

//   const parseData = JSON.parse(data);

//   const Data = parseData.womensData;

//   const SigleData = Data.find((e) => e.id == id);

//   res.status(200).send(SigleData);
// });
// productRouter.get("/kids/:id", (req, res) => {
//   let { id } = req.params;
//   let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

//   const parseData = JSON.parse(data);

//   const Data = parseData.kids;

//   const SigleData = Data.find((e) => e.id == id);
//   // console.log(SigleData)

//   res.status(200).send(SigleData);
// });
// productRouter.get("/kitchen/:id", (req, res) => {
//   let { id } = req.params;
//   let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

//   console.log(id);

//   const parseData = JSON.parse(data);

//   const Data = parseData.kitchenData;
//   // console.log(Data)

//   const SigleData = Data.find((e) => e.id == id);

//   console.log(SigleData);

//   res.status(200).send(SigleData);
// });

// productRouter.get("/trendingData", (req, res) => {
//   let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
//   const parseData = JSON.parse(data);
//   const Data = parseData.trendingData;
//   res.status(200).send(Data);
// });

// productRouter.get("/trendingData/:id", (req, res) => {
//   let { id } = req.params;
//   let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
//   console.log(id);
//   const parseData = JSON.parse(data);
//   const Data = parseData.trendingData;
//   // console.log(Data)

//   const SigleData = Data.find((e) => e.id == id);

//   // console.log(SigleData)

//   res.status(200).send(SigleData);
// });

module.exports = {
  productRouter,
};
