import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

interface NewsDetail {
  id: number
  title: string
  date: string
  image: string
  content: string
}

const newsDetails: NewsDetail[] = [
  {
    id: 1,
    title: 'IFAKO-IJAIYE LG BEGINS 2025 FREE UTME FORMS DISTRIBUTION',
    date: 'Sunday 26th January, 2025',
    image: 'https://via.placeholder.com/600', // Replace with actual image
    content:
      'The Ifako-Ijaiye Local Government, under the leadership of its Executive Chairman, Prince Usman Akanbi Hamzat, organized a screening exercise for prospective JAMB candidates...',
  },
]

const relatedNews = [
  {
    id: 2,
    title: 'Breast cancer awareness month in Ifako...',
    date: '16th Jan. 2025',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    title: 'LNSCDC awareness session at Ifako-Ijaiye...',
    date: '16th Jan. 2025',
    image: 'https://via.placeholder.com/100',
  },
]

const NewsDetail: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const newsItem = newsDetails.find((item) => item.id === parseInt(id || '0'))

  if (!newsItem) {
    return <p className="text-center text-red-500">News not found!</p>
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main News Content */}
      <div className="w-full lg:w-3/4">
        <button className="mb-4 text-blue-600" onClick={() => navigate(-1)}>
          ← Back to News
        </button>

        <h1 className="text-3xl font-bold">{newsItem.title}</h1>
        <p className="text-gray-500 text-sm mt-1">{newsItem.date}</p>

        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-64 object-cover rounded-lg mt-4"
        />

        <p className="mt-4 text-gray-700">{newsItem.content}</p>
      </div>

      {/* Related News Sidebar */}
      <div className="w-full lg:w-1/4">
        <h2 className="text-xl font-semibold mb-4">Other News</h2>
        <div className="space-y-4">
          {relatedNews.map((news) => (
            <div
              key={news.id}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate(`/news/${news.id}`)}
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm text-gray-500">{news.date}</p>
                <h4 className="text-md font-medium">{news.title}</h4>
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
