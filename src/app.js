const express = require("express");
require("../src/db/db");

const MensRanking = require("../src/models/mens");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

//get request 

app.get("/mens", async (req, res) => {
 try {
  const getMens = await MensRanking.find({});
   res.status(201).send(getMens);
 } catch (e) {
   res.status(400).send(e);
 }
});


// handle request for specific id 
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById(_id);
    res.status(201).send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
 });


// post request
app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const insertmens = await addingMensRecords.save();
    res.status(201).send(insertmens);
  } catch (e) {
    res.status(400).send(e);
  }
});


// patch request to update individual

app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id,);  
    res.status(201).send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
 });








app.listen(port, () => {
  console.log(`connection port ${port}`);
});


