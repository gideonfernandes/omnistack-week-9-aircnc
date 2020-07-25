const config = require('config');
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected!')
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  };
};

module.exports = dbConnection;
