// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const port = 3200;
  const server = express();
  
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  server.use('/', router);
  // server.get('/name', (req, res) => {
  //   res.status(200).send('This is your get request, modify this file to use your router!')
  // })
  
  // server.post('/name', (req, res) => {
  //   res.status(200).send('This is your post request, modify this file to use your router!')
  // })
  
  // server.put('/name', (req, res) => {
  //   res.status(200).send('This is your put request, modify this file to use your router!')
  // })
  
  // server.delete('/name', (req, res) => {
  //   res.status(200).send('This is your delete request, modify this file to use your router!')
  // })

  server.listen(port, () => console.log(`Example app listening on port ${port}!`))