const express = require('express');
const app = express();
const port = 3500;
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const boolUtils = require('./utils/boolean');

const adapter = new FileSync('./data/words.json');
const db = lowdb(adapter);

app
  .get('/words', (req, res) => {

    const count = req.query.count || 10;
    const learnt = boolUtils.parseFromString(req.query.learnt);

    const words = db.get('words')
      .filter({learnt})
      .sampleSize(1 * count);

    res.json({result: words});

  })
  .post('/mark-as-learnt', (req, res) => {
    // todo: Implement Mark as learnt
    res.json({result: 'success'});
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
