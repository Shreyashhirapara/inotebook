// const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook";

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => console.log("Connected to Mongo Successfully"))
//         .catch(err => console.error("Could not connect to MongoDB", err));
// }

// module.exports = connectToMongo;

const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to Mongo Successfully"))
  .catch(err => console.error("Could not connect to MongoDB", err));
}

module.exports = connectToMongo;
