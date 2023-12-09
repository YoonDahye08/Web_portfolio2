import React from 'react'
import RemoveBtn from './RemoveBtn'

const getTopics = async () => {
  const apiUrl = process.env.API_URL
  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch topics')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function TopicList() {
  const { topics } = await getTopics()

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="border p-4 my-3 flex justify-between items-start mt-16"
        >
          <div>
            <h2 className="flex gap-4">작성자: {topic.title}</h2>
            <div className='flex gap-4'>내용: {topic.description}</div>
            <div className="flex gap-4"><p>작성된 날짜: {topic.createdAt}</p></div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic._id}/>
          </div>
        </div>
      ))}
    </>
  )
}