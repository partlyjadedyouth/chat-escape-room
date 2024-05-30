"use client";

import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="flex justify-center h-screen bg-black text-white">
      {session ? (
        <div className="grid m-auto text-center">
          <img src="title.png" alt="Escape Anywhere" className="m-4" />
          <div className="flex flex-col items-center justify-center">
            <button className="w-40 py-2 px-4 bg-transparent hover:underline focus:outline-none" onClick={() => router.push('/')}>이어하기</button>
            <button className="w-40 py-2 px-4 bg-transparent hover:underline focus:outline-none" onClick={() => router.push('/')}>새로 시작하기</button>
            <button className="w-40 py-2 px-4 bg-transparent hover:underline focus:outline-none" onClick={() => signOut()}>로그아웃</button>
          </div>
        </div>
      ) : (
        <div className="grid m-auto text-center">
          <img src="title.png" alt="Escape Anywhere" className="m-4" />
          <div className="flex flex-col items-center justify-center">
            <button className="w-40 py-2 px-4 bg-transparent hover:underline focus:outline-none" onClick={() => signIn()}>로그인 후 시작하기</button>
            <button className="w-40 py-2 px-4 bg-transparent hover:underline focus:outline-none" onClick={() => router.push('/')}>바로 시작하기</button>
         </div>
        </div>
      )}
    </div>
  );
}
