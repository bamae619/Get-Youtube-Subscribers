const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
let subscribers = require("./models/subscribers");

/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: Get all subscribers
 *     description: Retrieve the list of all subscribers
 *     responses:
 *       200:
 *         description: List of all subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   subscribedChannel:
 *                     type: string
 */
router.get("/", async (req, res) => {
  try {
    let client = await subscribers.find();
    console.log(client);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).send("Error while fetching data");
  }
});

/**
 * @swagger
 * /subscribers/names:
 *   get:
 *     summary: Get subscriber names and subscribed channels
 *     description: Retrieve the names of subscribers along with the channels they are subscribed to.
 *     responses:
 *       200:
 *         description: List of subscriber names and subscribed channels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   subscribedChannel:
 *                     type: string
 */
router.get("/names", async (req, res) => {
  try {
    let client = await subscribers.find(
      {},
      { _id: 0, name: 1, subscribedChannel: 1 }
    );
    console.log(client);
    res.status(200).json(client);
  } catch (error) {
    res.status(400).send("Error while fetching data");
  }
});

/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     summary: Get subscriber by ID
 *     description: Retrieve a subscriber's information based on their unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique ID of the subscriber to fetch
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subscriber details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 subscribedChannel:
 *                   type: string
 *       400:
 *         description: Invalid ID supplied
 */
router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let client = await subscribers.find({ _id: id });
    console.log(client);
    res.status(200).json(client);
  } catch (error) {
    res.status(400).send("Id not found");
  }
});

// Export this router to use in index.js
module.exports = router;
