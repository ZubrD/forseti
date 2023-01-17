const express = require("express");
const app3001 = express();
const app3002 = express();
const app3003 = express();
const port3001 = 3001;
const port3002 = 3002;
const port3003 = 3003;

const deputyModel = require("./deputyModel");
const ruleModel = require("./ruleModel");
const regionModel = require("./regionModel")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////    DEPUTY MODEL    //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app3001.use(express.json());
app3001.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app3001.get("/", (req, res) => {
  deputyModel
    .getDeputy()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app3001.listen(port3001, () => {
  console.log(`App running on port ${port3001}.`);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////    RULE MODEL    ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app3002.use(express.json());
app3002.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app3002.get("/", (req, res) => {
  ruleModel
    .getRule()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app3002.listen(port3002, () => {
  console.log(`App running on port ${port3002}.`);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////    REGION MODEL    //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app3003.use(express.json());
app3003.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app3003.get("/", (req, res) => {
  regionModel
    .getRegion()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app3003.listen(port3003, () => {
  console.log(`App running on port ${port3003}.`);
});