import { connectDB } from '../../utils/database';
import Link from 'next/link';
import DetailLink from './detail_link';
import Listitem from './Listitem';

export default async function Home() {
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().sort({ _id: -1 }).toArray();

  return (
    <div className="view-box">
      <Listitem result={result} />
    </div>
  );
}
