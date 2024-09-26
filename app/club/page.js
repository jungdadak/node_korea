import { connectDB } from '../../utils/database';
import Link from 'next/link';

export default async function Home() {
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div className="view-box">
      {result.map((a, i) => (
        <div className="forum-wrapper" key={i}>
          <Link href={'./details/' + result[i]._id}>
            <div className="line-wrapper">
              <div className="title-wrapper">
                <h6 style={{ paddingRight: '10px' }}>Title : {a.title}</h6>
              </div>
              <div className="content-holder">
                <p style={{ fontSize: '14px' }}>{a.content}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
