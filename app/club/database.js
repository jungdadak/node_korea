import { MongoClient } from 'mongodb';
const url =
  'mongodb+srv://junghyun21110:wnddkdrh12@codingapple.uhfwz.mongodb.net/?retryWrites=true&w=majority&appName=codingapple';
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
