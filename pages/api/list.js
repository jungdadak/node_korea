import { connectDB } from '@/utils/database';

export default async function PushList(request, response) {
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result);
  if (request.method == 'GET') {
    return response.status(200).json(result);
  }
}
