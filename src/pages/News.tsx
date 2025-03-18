import { useNavigate } from 'react-router-dom'

const newsData = [
  {
    id: 1,
    date: '16th Jan, 2025',
    title:
      'IFAKO-IJAIYE LG BEGINS 2025 FREE UTME FORMS DISTRIBUTION AND 3-MONTH TRAINING',
    image: 'https://via.placeholder.com/300', // Replace with actual image
    content: 'Full news content for article 1...',
  },
  {
    id: 2,
    date: '16th Jan, 2025',
    title: 'BEING A SPEECH DELIVERED BY THE EXECUTIVE CHAIRMAN OF IFAKO-IJAIYE',
    image: 'https://via.placeholder.com/300',
    content: 'Full news content for article 2...',
  },
  {
    id: 3,
    date: '16th Jan, 2025',
    title:
      'IFAKO-IJAIYE SUSTAINS CONTINUOUS SUPPORT PROGRAM FOR WIDOWS AND MORE',
    image: 'https://via.placeholder.com/300',
    content: 'Full news content for article 3...',
  },
  {
    id: 4,
    date: '16th Jan, 2025',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://via.placeholder.com/300',
    content: 'Full news content for article 4...',
  },
]

const NewsList = () => {
  const navigate = useNavigate()

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-center text-2xl font-medium mb-6">
        Stay Informed With The Latest Updates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="overflow-hidden cursor-pointer"
            onClick={() => navigate(`/news/${news.id}`)}
          >
            {/* {news.image ? (
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
              ) : ( */}
            <div className="w-full h-48 bg-gray-200"></div>
            {/* )} */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">{news.date}</p>
              <h3 className="font-semibold text-lg mt-2">{news.title}</h3>
              <p className="text-green mt-2">Read more...</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewsList
