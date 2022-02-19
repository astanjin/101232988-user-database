const express = require('express');
const userModel = require('../model/user');
const app = express();

//Read ALL
//http://localhost:8081/users
app.get('/users', async (req, res) => {
  const users = await userModel.find({});

  try {
    console.log(users[0].name)
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});


//http://localhost:8081/user
app.post('/user', async (req, res) => {
    const user = new userModel(req.body);
    
    try {
      await user.save((err) => {
        if(err){
          
          res.send(err)
        }else{
          res.send(user);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });


module.exports = app
