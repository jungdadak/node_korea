import { connectDB } from '@/utils/database';
export default async function handler(request, response) {
  console.log(request.body);
  if (request.method == 'POST') {
    if (request.body.title == '') {
      return response.status(500).json('니가 지드래곤이냐');
    }
    try {
      const db = (await connectDB).db('forum');
      let result = await db.collection('post').insertOne(request.body);
      return response.status(200).redirect('/write');
    } catch (error) {
      response.status(500).json('디비가뻗었음 ㅈㅅ');
    }
  }
}
