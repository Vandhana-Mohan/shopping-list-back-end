const express = require("express");
 const groceries = express.Router();
 const { getAllGroceries} = require("../queries/groceries.js");


 // INDEX
 groceries.get("/", async (req, res) => {
    const allGroceries = await getAllGroceries();
    if(!allGroceries.error){
        res.status(200).json(allGroceries);
    }else{
        res.status(500).json({ error: "server error" });
    }
});

module.exports = groceries;