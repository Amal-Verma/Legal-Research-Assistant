const express = require('express');
const app = express();
const cors = require('cors');

PORT = 3001;

app.use(cors());
app.use(express.json());

require('./db')();

app.use('/user', require('./routes/userRoutes'));

app.listen(PORT, () => {
  console.log('Server is running on port 3001');
});