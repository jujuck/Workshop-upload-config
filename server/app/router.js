const express = require("express");

const router = express.Router();

const upload = require("./services/upload");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const items = require("./controllers/itemActions");

// Route to get a list of items
router.get("/items", items.browse);

// Route to get a specific item by ID
router.get("/items/:id", items.read);

// Route to add a new item
router.post("/items", upload.single("items"), items.add);

/* ************************************************************************* */

module.exports = router;
