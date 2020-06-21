const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST Route
router.post('/', (req, res) => {
  const query = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4);`;
  pool.query(query, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then(out => {
      console.log(`Added entry ${req.body}`);
      res.sendStatus(201);
    })
    .catch(err => {
      console.log(`Error adding entry ${req.body}`, err);
      res.sendStatus(500);
    })
}); // END POST Route

module.exports = router;