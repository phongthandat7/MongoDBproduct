const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');


const app = express();

const adminRoutes = require('./routes/admin');



app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'server is okela',
  });
});
// app.use((req, res, next) => {
//   User.findById('5bab316ce0a7c75f783cb8a8')
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });
app.use(bodyParser.json());
app.use('/admin', adminRoutes);
app.use(errorController.get404); 
mongoose
  .connect(
    'mongodb://localhost:27017/shop',{ useNewUrlParser: true, useUnifiedTopology: true }, console.log('Connected to MongoDB') 
  ).catch(err => {
    console.log(err);
      console.log('Connected to MongoDB');
  });
const port = app.get('port') || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));