const db = require("../db/dbConfig");

const getAllGroceries = async () => {
  try {
    const allGroceries = await db.any("SELECT * FROM groceries ORDER BY id");
    return allGroceries;
  } catch (error) {
    throw error;
  }
};

const getGrocery = async (id) => {
  try {
    const oneGrocery = await db.oneOrNone(
      "SELECT * FROM groceries WHERE id=$1",
      id
    );
    return { result: oneGrocery };
  } catch (error) {
    throw { error };
  }
};

const createGrocery = async (grocery) => {
  try {
    const newGrocery = await db.one(
      "INSERT INTO groceries (name, category, image_url, description, price, quantity, unit, is_organic) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        grocery.name,
        grocery.category,
        grocery.image_url,
        grocery.description,
        grocery.price,
        grocery.quantity,
        grocery.unit,
        grocery.is_organic,
      ]
    );

    return { result: newGrocery };
  } catch (error) {
    throw { error };
  }
};

const updateGrocery = async (id, grocery) => {
  try {
    const updateGrocery = await db.one(
      "UPDATE groceries SET name=$1, category=$2, image_url=$3, description=$4, price=$5, quantity=$6, unit=$7, is_organic=$8  WHERE id=$9 RETURNING *",
      [
        grocery.name,
        grocery.category,
        grocery.image_url,
        grocery.description,
        grocery.price,
        grocery.quantity,
        grocery.unit,
        grocery.is_organic,
        id,
      ]
    );
    return { result: updateGrocery };
  } catch (error) {
    throw { error };
  }
};

const deleteGrocery = async (id) => {
  try {
    const deleteGrocery = await db.one(
      "DELETE FROM groceries WHERE id=$1 RETURNING *",
      id
    );
    return deleteGrocery;
  } catch (error) {
    throw { error };
  }
};

module.exports = {
  getAllGroceries,
  getGrocery,
  createGrocery,
  updateGrocery,
  deleteGrocery,
};
