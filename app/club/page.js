import 'bootstrap/dist/css/bootstrap.min.css';
import { connectDB } from './database';
export default async function Home() {
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  return result.map((a, i) => {
    return (
      <div className="view-box" key={i}>
        <div className="forum-wrapper">
          <div className="line-wrapper">
            <div className="title-wrapper">
              <h6 style={{ paddingRight: '10px' }}>
                Title : {result[i].title}
              </h6>
            </div>
            <div className="content-holder">
              <p style={{ fontSize: '14px' }}>{result[i].content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
