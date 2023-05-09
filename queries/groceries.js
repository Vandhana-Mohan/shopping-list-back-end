
const db = require("../db/dbConfig.js");//

 const getAllGroceries = async () => {
     try {
         const allGroceries = await db.any("SELECT * FROM groceries");
         return allGroceries;
     }catch (error) {
         return{ error: error }
     }
 };

 module.export = {
    getAllGroceries,
 }