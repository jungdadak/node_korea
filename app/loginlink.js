'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function LoginLink() {
  return (
    <Link
      href="#"
      className="login-link"
      onClick={(e) => {
        e.preventDefault(); // Link의 기본 동작 방지
        signIn(); // 로그인 함수 호출
      }}
    >
      Sign in
    </Link>
  );
}
