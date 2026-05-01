import mongoose from "mongoose";

let connection = {};

export async function dbConnect() {
  if (connection.isConnected) {
    console.log(`DB is Already Connected`);
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;
    console.log(`DB URI ${db.connection.host}`);
  } catch (error) {
    console.error(error);
    console.log(`DB CONNECTION FAILED`);
    // process.exit(1);
  }
}
