import { connectDB } from '@/utils/database';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23lipqL7PvaiGrIH1y',
      clientSecret: '24396c84b3e28b61d70bd7dc4ef677a2359a1a75',
    }),
    KakaoProvider({
      clientId: 'cd0174b41cd4b9c0ce670774d0e60a6d',
      clientSecret: 'UhWIrvnJBdzu5XV1hE3ygJURXGJHqWyT',
    }),
  ],
  secret: 'wnddkdrh12',
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
