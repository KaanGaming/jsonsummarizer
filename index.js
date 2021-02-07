const express = require('express');
const fs = require('fs');
const app = express();
const port = 8081;

app.use(express.static('www'));

app.get(/\/.+\.html/g, function (req, res) {
  var filename = "." + req.path;
  if (req.path == "/") req.path = "/index.html";
  var newmethod = req.query.newmethod ?? "false";
  if ((req.query.newmethod ?? "aaaa") == "aaaa") {
    console.log('used null coalescensing method');
  }
  console.log(req.path);
  if (newmethod == "true") {
    res.sendFile(req.path);
    res.end();
  } else {
    fs.readFile("./www/" + filename, function (err, data) {
      if (err) {
        res.set('Content-Type', 'text/plain');
        res.sendStatus(404);
        res.send("requested " + "./www/" + filename + ", got 404 instead");
        return res.end();
      }
      res.send(data);
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});