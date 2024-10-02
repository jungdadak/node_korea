import { connectDB } from '@/utils/database';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(request, response) {
  let session = getServerSession(request, response, authOptions);
  // if (request.method == 'POST') {
  //   if (request.body.title == '') {
  //     return response.status(400).json({ error: '제목을 입력해주세요.' });
  //   }
  //   try {
  //     const db = (await connectDB).db('forum');
  //     let result = await db.collection('post').insertOne(request.body);
  //     return response.status(200).redirect('/club');
  //   } catch (error) {
  //     console.error(error);
  //     return response.status(500).json({ error: '서버 오류가 발생했습니다.' });
  //   }
  // } else
  //   return response.status(405).json({ error: '허용되지 않는 메소드입니다.' });
}
