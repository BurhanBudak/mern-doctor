const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
const helmet = require('helmet')
const elizaRouter = require("./routes/elizaAPI");
require('dotenv').config();

const app = express();


app.use(helmet())
app.use(cors());
app.use(express.json());

app.use('/eliza', elizaRouter);
  // const uri = process.env.ATLAS_URI;
  // mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  // );
  // const connection = mongoose.connection;
  // connection.once('open', () => {
    //   console.log("MongoDB database connection established successfully");
    // })
//Serv static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
      app.get('/', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  })
}else{
  app.use(express.static(path.join(__dirname, 'client/build')));
      app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
      })
}

const port = process.env.PORT || 5000;




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})