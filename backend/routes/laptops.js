const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const uri = process.env.MONGO_URI;
const dbName = "pb_tech";

router.get("/laptops", (req, res) => {
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      res.status(500).json({ error: "Error connecting to the database" });
      return;
    }

    const db = client.db(dbName);
    const laptops = db.collection("laptops");
    laptops.find({}).toArray((err, docs) => {
      if (err) {
        res.status(500).json({ error: "Error retrieving documents" });
        return;
      }
      res.status(200).json({ laptops: docs });
      client.close();
    });
  });
});

module.exports = router;
