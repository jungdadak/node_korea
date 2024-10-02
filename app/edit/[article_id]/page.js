import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';

export default async function Edit(props) {
  console.log(props);
  let client = await connectDB;
  const db = client.db('forum');
  const now_id = props.params.article_id;
  let article = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.article_id) });

  return (
    <div className="p-20">
      <h4>수정 페이지 ㅎㅎ</h4>
      <form action="/api/edit" method="POST">
        <input type="text" name="title" defaultValue={article.title} />
        <input type="text" name="content" defaultValue={article.content} />
        <input
          type="text"
          name="_id"
          defaultValue={article._id}
          style={{ display: 'none' }}
        />
        <button type="submit">수정~</button>
      </form>
    </div>
  );
}
