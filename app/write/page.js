export default function write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/test" method="POST">
        <button type="submit">제출벝흔</button>
      </form>
      <form action="/api/list" method="GET">
        <button type="submit">글목록 주셈 현기증난단 말이에요</button>
      </form>
      <form action="/api/date" method="GET">
        <button type="submit">지금이 멫시고</button>
      </form>
      <form action="/api/write" method="POST">
        <input type="text" name="title" placeholder="글제목쓰세요" />
        <input type="text" name="content" placeholder="글내용 쓰세요" />
        <button type="submit">슈슉~</button>
      </form>
    </div>
  );
}
