const express = require("express");
 const groceries = express.Router();
 const { getAllGroceries, getGrocery} = require("../queries/groceries.js");


 // INDEX
 groceries.get("/", async (req, res) => {
    const allGroceries = await getAllGroceries();
    if(!allGroceries.error){
        res.status(200).json(allGroceries);
    }else{
        res.status(500).json({ error: "server error" });
    }
});

//Show
groceries.get("/:id", async(req, res) => {
    const { id } = req.params;
    const grocery = await getGrocery(id);
    if(grocery) {
        res.status(200).json(grocery);
    }else {
        res.status(404).json({error: "grocery not found"})
    }
})

module.exports = groceries;