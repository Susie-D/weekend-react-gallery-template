const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

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

// PUT /gallery/like/:id
router.put('/:id', (req, res) => {
  const sqlText = `
    UPDATE "gallery" 
    SET "likes" = "likes" + 1 
    WHERE "id" = $1;  
  `
  const sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200)
    })
    .catch((dbErr) => {
      console.log('PUT /api/gallery:id', dbErr);
      res.sendStatus(500)
    })
});


module.exports = router;
