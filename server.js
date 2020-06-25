const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => res.send('Welcome to contact keepers app'));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const port = process.env.PORT || 5000;
app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server is running on port ' + port);
});
