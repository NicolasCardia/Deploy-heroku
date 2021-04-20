const express = require("express");
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    
    res.send("Tô rodando Heroku")
    
  });

  app.listen(port, () => {
    console.log(`rastreamento sendo feito com nodemom http://localhost:${port}`)
    
  })