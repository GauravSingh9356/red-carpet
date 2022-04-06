const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routers/userRoutes');
const app = express();

mongoose
  .connect(
    'mongodb+srv://gauravsingh9356:mypassword@cluster0.rpqi4.mongodb.net/tasks?retryWrites=true&w=majority'
  )
  .then(
    () => {
      /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
      console.log('Connected!');
    },
    (err) => {
      /** handle initial connection error */
      console.log(err);
    }
  );
const corsOption = {
  origins: ['https://redcarpetbygs.netlify.app'],
};
app.use(cors(corsOption));
app.use(express.json());

app.use('/', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
