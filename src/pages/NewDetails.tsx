import { useFetchById, useFetchData } from '@/hooks/useApiHooks'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export interface NewsDetail {
  id: number
  header: string
  date: string
  imageUrl: string
  content: string
}

const NewsDetail: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  // const newsItem = newsDetails.find((item) => item.id === parseInt(id || '0'))

  const { data: newsItem, isLoading } = useFetchById('news', id || '')
  const { data: relatedNews } = useFetchData('news')
  console.log(newsItem)

  if (isLoading) {
    return <p>Loading...</p>
  }
  console.log(isLoading)

  // if (error) {
  //   return <p>Error: {error.message}</p>
  // }

  if (!newsItem) {
    return <p className="text-center text-red-500">News not found!</p>
  }

  const newsContent = newsItem.content.replace(/\ng/g, '<br />')

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main News Content */}
      <div className="w-full lg:w-3/4">
        <button
          className="mb-4 text-blue-600 text-2xl cursor-pointer
        "
          onClick={() => navigate(-1)}
        >
          ← Back to News
        </button>

        <h1 className="text-3xl font-bold">{newsItem.header}</h1>
        <p className="text-gray-500 text-sm mt-1">{newsItem.date}</p>

        <img
          src={newsItem.imageUrl}
          alt={newsItem.header}
          className="w-full h-64 object-cover rounded-lg mt-4"
        />

        <p className="mt-4 text-gray-700">{newsContent}</p>
      </div>

      {/* Related News Sidebar */}
      <div className="w-full lg:w-1/4">
        <h2 className="text-xl font-semibold mb-4">Other News</h2>
        <div className="space-y-4">
          {relatedNews?.map((news: NewsDetail) => (
            <div
              key={news.id}
              className="flex flex-col cursor-pointer"
              onClick={() => navigate(`/news/${news.id}`)}
            >
              <img
                src={news.imageUrl}
                alt={news.header}
                className="w-full h-36 object-cover rounded"
              />
              <div>
                <p className="text-sm text-gray-500">{news.date}</p>
                <h4 className="text-md font-medium truncate">{news.header}</h4>
                <p className="text-green-600 text-sm">Read more...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
