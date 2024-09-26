import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';

export default async function Detail(props) {
  let client = await connectDB;
  const db = client.db('forum');
  const now_id = props.params.article_id;
  let article = await db
    .collection('post')
    .findOne({ _id: new ObjectId(now_id) });
  return (
    <div style={{ display: 'flex', padding: '0vw', margin: 0 }}>
      <div className="side-bar-wrapper">
        <div className="side-bar">
          <p style={{ textAlign: 'end', color: 'white', letterSpacing: 'vh' }}>
            사<br></br>이<br></br>드<br />
            <br />바<br />
            <br />지<br />롱
          </p>
        </div>
      </div>
      <div className="detail-box">
        <h2 style={{ marginBottom: '3vh', textAlign: 'center' }}>
          ##상세 페이지임##
        </h2>
        <h4
          style={{
            marginBottom: '3vh',
            marginLeft: '3vw',
            marginRight: '3vw',
            borderBottom: '0.2vw solid black',
            padding: '0.5vw',
          }}
        >
          Title : {article.title}
        </h4>
        <p style={{ margin: '3vw' }}>{article.content}</p>
      </div>
    </div>
  );
}
