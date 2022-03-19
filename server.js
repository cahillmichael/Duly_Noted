const express = require('express');
const PORT = process.env.PORT || 3001;

const htmlRoutes = require('./routes/htmlRoutes/index');
const apiRoutes = require('./routes/apiRoutes/apiRoutes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });