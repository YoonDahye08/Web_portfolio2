'use client'
import Link from 'next/link'
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const {status, data:session} = useSession()
  return (
      <div className="text-center">

      <div>
        <Image src={'/image/joongbu.png'} width={150} height={100} className="float-right mr-48" alt='img'/>
      </div>
      <div className="mr-96 text-3xl">
        <p>안녕하세요.</p>
        <p>정보보호학전공</p>
        <p>윤다혜입니다.</p>
        
      </div>

      <hr className="h-0.5 mx-auto bg-gray-100 border-0 rounded md:my-10" />

      <div className="text-xl">
        <p>윤다혜</p>
        <p>2003.08.01</p>
        <p>경기도 고양시</p>
        <p>ydh_0801@naver.com</p>
      </div>

      <hr className="h-0.5 mx-auto bg-gray-100 border-0 rounded md:my-10" />
      {
          status ==='authenticated' ? (
            <>
            {/* 로그인 된 상태 */}
            <div>
        <h1 className="text-3xl mb-10">PORTFOLIO</h1>
        <div>
          <Link href="https://webprogramming.vercel.app/" target="_blank"><Image src={'/image/project1.png'} width={520} height={100} className="ml-60" alt='image' /></Link>
          <Link href="https://github.com/YoonDahye08/webprogramming1" target="_blank">깃허브 바로가기</Link>
        </div>
        <div>
          <Link href="https://clerk2-nine.vercel.app/" target="_blank">
            <Image src={'/image/project2.png'} width={520} height={100} className="ml-60 mt-10" alt='image'/></Link>
          <Link href="https://github.com/YoonDahye08/clerk2" target="_blank">깃허브 바로가기</Link>
        </div>
        <div>
          <Link href="https://dapara2-tawny.vercel.app/" target="_blank"><Image src={'/image/dapara.png'} width={520} height={100} className="ml-60 mt-10" alt='image' /></Link>
          <Link href="https://github.com/YoonDahye08/Dapara2" target="_blank">깃허브 바로가기</Link>
        </div>
        <div>
          <Link href="https://crud2-chi.vercel.app/" target="_blank"><Image src={'/image/crud.png'} width={520} height={100} className="ml-60 mt-10" alt='image' /></Link>
          <Link href="https://github.com/YoonDahye08/crud2" target="_blank">깃허브 바로가기</Link>
        </div>
      </div>
            </>
          ) : (
            <>
              {/* 로그인 안 된 상태 */}
              
            </>
          )
}

      </div>
  )
}
