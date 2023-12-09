import TopicList from '@/components/TopicList'
import Link from 'next/link'
import Image from "next/image";

export default async function Home() {
  return (
      <div className="text-center">

      <div>
        <Image src={'/image/joongbu.png'} width={150} height={100} className="float-right mr-48"/>
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
          <Link href="https://crud2-eight.vercel.app/" target="_blank"><Image src={'/image/crud.png'} width={520} height={100} className="ml-60 mt-10" alt='image' /></Link>
          <Link href="https://github.com/YoonDahye08/crud2" target="_blank">깃허브 바로가기</Link>
        </div>
      </div>

      <hr className="h-0.5 mx-auto bg-gray-100 border-0 rounded md:my-10" />

      <div>
        {/* 팀 프로젝트  */}
      </div>

      <div>
        <h1 className="font-bold text-2xl float-left -mt-14">댓글 달기</h1>
        <Link href="/addTopic" className="bg-yellow-200 text-lg font-bold px-4 py-2 rounded-md float-right -mt-14">ADD</Link>
        <TopicList />
      </div>
      </div>
  )
}
