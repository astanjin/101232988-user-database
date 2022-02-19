const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./route/userRouter.js');

const app = express();
app.use(express.json());//comes back as json
url ="mongodb+srv://Mina:Mina8860@comp3123.2pj6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(userRouter);

app.listen(8081, () => { console.log('Server is running...') });