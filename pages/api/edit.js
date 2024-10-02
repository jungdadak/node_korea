import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  if (request.method == 'POST') {
    let db = (await connectDB).db('forum');
    let result = await db
      .collection('post')
      .updateOne(
        { _id: new ObjectId(request.body._id) },
        { $set: { title: request.body.title, content: request.body.content } }
      );
    return response.redirect(302, '/club');
  }
}
