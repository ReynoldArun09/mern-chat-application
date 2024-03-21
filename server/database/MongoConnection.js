import mongoose from "mongoose";

function MongoConnection() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((success) => {
      console.log(`[Mongo]: Connection success ${success.connection.host}`);
    })
    .catch((error) => {
      console.log(`[Mongo]: Connection failed ${error.message}`);
    });
}

export default MongoConnection;
