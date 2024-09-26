import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="main-wrapper">
      <h1 style={{ margin: '4vw' }}>어서와라 "닝겐"</h1>
      <h4>
        jobs,contactus는 구현아직.
        <br /> <br />
        한예슬누나 쓰다듬으면 나오는 귀요미들도 <br />
        심심하면 눌러봐라.
        <br />
        <br /> <br />
        <Link href={'/write'} style={{ color: 'yellow', background: 'black' }}>
          이곳을 누르면 가볍게 글을 작성해볼수 있다.
        </Link>{' '}
        <br /> <br />
        <br /> 위에 장난감도 준비함
        <br /> 제목을 짓지 않고 글을 작성하면 이스터에그가 있다.
        <br />
        <br />
        Club은 모임 페이지 인데 지금은 그냥 게시글 보여준다
        <br />
        거기있는 버튼은 아무기능없다
        <br />
        <br />
        글을 누르면 세부 정보가 뜬다
        <br />
        <br />
        니가 방금쓴 글도 있을거다.
        <br />
        <br />
        지금은
        <span>새벽 4시 43분이다 </span>
        <span style={{ textDecoration: 'line-through', opacity: '0.3' }}>
          내일 어케 일어나지 <span style={{ color: 'red' }}>씨발</span>
        </span>
        <br />
        배포만 하고 자러감 ㅅㄱ <br /> <br />
        생각보다 진도가 빠른게 기분좋다.
      </h4>
    </div>
  );
}
