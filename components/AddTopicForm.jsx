'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AddTopicForm() {
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
  
}