const { Router } = require('express');
const express = require('express')

const productRouter = Router();

const app = express();
const fs= require('fs')
app.use(express.json());


productRouter.get('/man', (req, res) => {

    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

    const parseData = JSON.parse(data);

    const Data = parseData.mens_data

    res.status(200).send(Data)
})


productRouter.get('/man/:id', (req, res) => {

    let {id} = req.params
    // console.log(id)

    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

    const parseData = JSON.parse(data);

    const Data = parseData.mens_data

    // console.log(Data);

    const SigleData = Data.find((e) => Number(e.id) == id)
    // console.log(SigleData)

    res.status(200).send(SigleData)
})

productRouter.get('/woman', (req, res) => {
    
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

    const parseData = JSON.parse(data);

    const Data = parseData.womensData

    res.status(200).send(Data)
})

productRouter.get('/woman/:id', (req, res) => {

    let {id} = req.params
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

    const parseData = JSON.parse(data);

    const Data = parseData.womensData

    const SigleData = Data.find((e) => e.id == id)

    res.status(200).send(SigleData)
})

productRouter.get('/kids', (req, res) => {
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

    const parseData = JSON.parse(data);

    const Data = parseData.kids

    res.status(200).send(Data)
   
})

productRouter.get('/kids/:id', (req, res) => {
    let {id} = req.params
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

    const parseData = JSON.parse(data);

    const Data = parseData.kids

    const SigleData = Data.find((e) => e.id == id)
    // console.log(SigleData)

    res.status(200).send(SigleData)
   
})


productRouter.get('/kitchen', (req, res) => {
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

    const parseData = JSON.parse(data);

    const Data = parseData.kitchenData
    res.status(200).send(Data)
})

productRouter.get('/kitchen/:id', (req, res) => {
    let {id} = req.params
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });

    console.log(id)
    
    const parseData = JSON.parse(data);

    const Data = parseData.kitchenData
    // console.log(Data)

    const SigleData = Data.find((e) => e.id == id)

    console.log(SigleData)

    res.status(200).send(SigleData)
})


productRouter.get('/trendingData', (req, res) => {
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
    const parseData = JSON.parse(data);
    const Data = parseData.trendingData
    res.status(200).send(Data)
})

productRouter.get('/trendingData/:id', (req, res) => {
    let {id} = req.params
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
    console.log(id)
    const parseData = JSON.parse(data);
    const Data = parseData.trendingData
    // console.log(Data)

    const SigleData = Data.find((e) => e.id == id)

    // console.log(SigleData)

    res.status(200).send(SigleData)
})


module.exports = {
    productRouter
}