'use client';

import Link from 'next/link';

export default function Listitem({ result }) {
  return (
    <div className="view-box">
      {result.map((a, i) => (
        <div className="forum-wrapper" key={i}>
          <Link href={'./details/' + result[i]._id}>
            <div className="line-wrapper">
              <div className="title-wrapper">
                <h6 style={{ paddingRight: '7px' }}>Title : {a.title}</h6>
              </div>
              <div className="content-holder">
                <p style={{ fontSize: '10px' }}>{a.content}</p>
              </div>
            </div>
          </Link>
          <Link href={'/write/' + result[i]._id}>
            <button>글 쓸래요..</button>
          </Link>
          <span
            onClick={() => {
              fetch('/api/delete/', {
                method: 'DELETE',
              });
            }}
          >
            🗑️
          </span>
        </div>
      ))}
    </div>
  );
}
