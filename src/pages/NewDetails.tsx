import { useFetchById, useFetchData } from '@/hooks/useApiHooks'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IoLogoFacebook } from 'react-icons/io'
import { FaWhatsapp, FaCopy } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

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

  const shareUrl = `${window.location.origin}/news/${id}`
  console.log(shareUrl)

  const { data: newsItem, isLoading } = useFetchById('main/news', id || '')
  const { data: relatedNews } = useFetchData('main/news')

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast.success('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy link:', err)
      toast.error('Failed to copy link.')
    }
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  // if (error) {
  //   return <p>Error: {error.message}</p>
  // }

  if (!newsItem) {
    return <p className="text-center text-red-500">News not found!</p>
  }

  const newsContent = newsItem.content

  function formatNewsContent(content: string): string {
    if (!content) return ''

    // Step 1: Clean escaped quotes and backslashes
    const cleaned = content
      .replace(/^"(.*)"$/, '$1') // remove starting and ending quotes if present
      .replace(/\\"/g, '"') // fix escaped double quotes
      .replace(/\\\\n/g, '\\n') // normalize escaped newlines (if content is double escaped)
      .replace(/\\n/g, '\n') // convert \n to actual newline

    // Step 2: Convert to paragraph + line break formatting
    const paragraphs = cleaned
      .split('\n\n') // new paragraph
      .map((para) => `<p>${para.replace(/\n/g, '<br />')}</p>`)

    return paragraphs.join('')
  }

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

        {/* <pre className="mt-4 text-gray-700 whitespace-pre-wrap break-words text-base">
          {newsContent}
        </pre> */}
        <div
          className="mt-4 text-gray-700 text-base leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: formatNewsContent(newsContent) }}
        ></div>

        <div className="p-4 space-y-4 text-center flex flex-col items-center justify-center mt-6">
          <h2 className="text-xl font-semibold">Share this News</h2>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}&text=${encodeURIComponent(newsItem.header)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green text-white px-4 py-4 rounded-full cursor-pointer"
            >
              <FaXTwitter className="w-8 h-8" />
            </a>

            <a
              href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green text-white px-4 py-4 rounded-full cursor-pointer"
            >
              <IoLogoFacebook className="w-8 h-8" />
            </a>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                newsItem.header + ' ' + shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green text-white px-4 py-4 rounded-full cursor-pointer"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>

            <button
              onClick={handleCopyLink}
              className="px-4 py-4 bg-green text-white rounded-full cursor-pointer"
            >
              <FaCopy className="w-8 h-8" />
            </button>
          </div>
        </div>
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
      np
    </div>
  )
}

export default NewsDetail
