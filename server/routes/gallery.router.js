const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `
    SELECT * FROM "gallery"
    ORDER BY "id"
  `
  pool.query(sqlText)
    .then((dbRes) => {
      console.log('data:', dbRes.rows)
      res.send(dbRes.rows)
    })
    .catch((dbErr) => {
      console.log('GET /api/gallery', dbErr)
    })
});

module.exports = router;
