import { SkeletonCard } from '@/components/atoms/SkeletonCard'
import { useFetchData } from '@/hooks/useApiHooks'
import { useNavigate } from 'react-router-dom'

export interface News {
  header: string
  date: string // Date as a string format
  imageUrl: string // URL of the image
  view: number // Number of views
  id: string // Unique identifier
  hidden: boolean // Flag to hide the news
}

const NewsList = () => {
  const navigate = useNavigate()

  const { data, isLoading, isError, error } = useFetchData('main/news')

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-center text-2xl font-medium mb-6">
        Stay Informed With The Latest Updates
      </h2>

      {isError && (
        <p className="mb-3 text-sm text-red-600">{(error as Error).message}</p>
      )}

      {isLoading ? (
        <SkeletonCard />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(
            (news: News) =>
              !news.hidden && (
                <div
                  key={news.id}
                  className="overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/news/${news.id}`)}
                >
                  <img
                    src={news.imageUrl}
                    alt={news.header}
                    className="w-full h-48 object-cover"
                  />

                  {/* <div className="w-full h-48 bg-gray-200"></div> */}
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">{news.date}</p>
                    <h3 className="font-semibold text-lg mt-2 truncate">
                      {news.header}
                    </h3>
                    <p className="text-green mt-2">Read more...</p>
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </section>
  )
}

export default NewsList
