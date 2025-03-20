import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import princeHamzat from '/assets/images/prince_hamzat.png'
import hero from '/assets/images/hero.png'
import { useFetchData } from '@/hooks/useApiHooks'
import { SkeletonCard } from '@/components/atoms/SkeletonCard'
import { NewsDetail } from './NewDetails'
import { useNavigate } from 'react-router-dom'

const cardsData = [
  {
    title: 'Our Mission',
    description:
      'Deliver inclusive, transparent, and efficient governance to improve residents’ quality of life.',
    icon: '/assets/icons/missionIcon.svg', // Replace with actual icon/image URL
    textColor: 'text-[#075E3C]',
    bgColor: 'bg-[#075E3C]/10',
  },
  {
    title: 'Our Agenda',
    description:
      'Foster good governance, economic growth, and community well-being through sustainable development and engagement.',
    icon: '/assets/icons/agendaIcon.svg', // Replace with actual icon/image URL
    textColor: 'text-[#FFCC29]',
    bgColor: 'bg-[#FFCC29]/10',
  },
  {
    title: 'Our Vision',
    description:
      'Create a model local government with quality infrastructure, education, healthcare, and economic opportunities.',
    icon: '/assets/icons/visionIcon.svg', // Replace with actual icon/image URL
    textColor: 'text-[#6A0E35]',
    bgColor: 'bg-[#6A0E35]/10',
  },
]

// const newsData = [
//   {
//     id: 1,
//     date: '16th Jan, 2025',
//     title:
//       'IFAKO-IJAIYE LG BEGINS 2025 FREE UTME FORMS DISTRIBUTION AND 3-MONTH TRAINING',
//     // image: 'https://via.placeholder.com/300', // Replace with actual image
//     content: 'Full news content for article 1...',
//   },
//   {
//     id: 2,
//     date: '16th Jan, 2025',
//     title: 'BEING A SPEECH DELIVERED BY THE EXECUTIVE CHAIRMAN OF IFAKO-IJAIYE',
//     // image: 'https://via.placeholder.com/300',
//     content: 'Full news content for article 2...',
//   },
//   {
//     id: 3,
//     date: '16th Jan, 2025',
//     title:
//       'IFAKO-IJAIYE SUSTAINS CONTINUOUS SUPPORT PROGRAM FOR WIDOWS AND MORE',
//     // image: 'https://via.placeholder.com/300',
//     content: 'Full news content for article 3...',
//   },
//   {
//     id: 4,
//     date: '16th Jan, 2025',
//     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     // image: 'https://via.placeholder.com/300',
//     content: 'Full news content for article 4...',
//   },
// ]

const Home = () => {
  const navigate = useNavigate()

  const { data: newsData, isLoading } = useFetchData('news')

  return (
    <div className="text-black relative p-6 space-y-10">
      <section className="">
        {/* {' relative max-w-[90%] mx-auto'} */}
        {/* Adjust width to keep arrows at edges */}
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              {/* <div
                // src="https://via.placeholder.com/800x400?text=Slide+1"
                // alt="Slide 1"
                className="w-full h-76 object-cover rounded-lg bg-red-400"
              ></div> */}
              <img
                src={hero}
                alt="Slide 1"
                className="w-full h-76 object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              {/* <div
                // src="https://via.placeholder.com/800x400?text=Slide+1"
                // alt="Slide 1"
                className="w-full h-76 object-cover rounded-lg bg-blue-400"
              ></div> */}
              <img
                src={hero}
                alt="Slide 1"
                className="w-full h-76 object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              {/* <div
                // src="https://via.placeholder.com/800x400?text=Slide+1"
                // alt="Slide 1"
                className="w-full h-76 object-cover rounded-lg bg-green-400"
              ></div> */}
              <img
                src={hero}
                alt="Slide 1"
                className="w-full h-76 object-cover rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      {/* Chairman */}
      <section className="flex flex-col xl:flex-row gap-4 xl:gap-10 mt-10">
        <div className="flex flex-col w-full xl:w-2/3 order-2 xl:order-1">
          <h2 className="text-2xl font-medium">Meet the Chairman</h2>
          <p className="mt-2">
            Prince Usman Akanbi Hamzat is an icon of community activism,
            renowned for his exceptional leadership style. Currently serving as
            the Chairman of the Ifako-Ijaiye local government, he has been the
            driving force behind the successes and development trajectory of
            community work in the Ifako-Ijaiye Local Government. Since assuming
            his position as Chairman.
          </p>
          <p className="mt-2">
            Prince Usman Akanbi Hamzat has blazed the trail with groundbreaking
            achievements, choosing the path of objectivity, selflessness,
            innovation, teamwork, transparency, and mission-oriented policies.
            These qualities have made him and his team the first chairman to
            deliver significant projects and continuously win accolades, which
            are both unprecedented and mind-blowing.
          </p>
        </div>
        <div className="order-1 xl:order-2 xl:w-1/3">
          {/* <div className="w-full h-48 xl:h-full bg-amber-700"></div> */}
          <img
            src={princeHamzat}
            alt="Prince Hamzat"
            className="w-full h-96 xl:h-full"
          />
        </div>
      </section>
      {/* Card section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-stretch">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="border border-[#C4C4C41A] bg-[#D9D9D91A] p-6 flex flex-col items-center text-center w-full h-full"
          >
            <div className={`p-5 mb-4 ${card.bgColor} rounded-full`}>
              <img src={card.icon} alt="" />
            </div>
            <h3 className={`text-lg font-semibold my-3 ${card.textColor}`}>
              {card.title}
            </h3>
            <p className="max-w-72 flex-grow">{card.description}</p>{' '}
            {/* 🔹 Text expands to match height */}
          </div>
        ))}
      </section>

      {/* News */}
      <section className="container mx-auto py-8">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <>
            <h2 className="text-center text-2xl font-medium mb-6">
              Stay Informed With The Latest Updates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData?.map((news: NewsDetail) => (
                <div
                  key={news.id}
                  className="overflow-hidden cursor-pointer h-full flex flex-col"
                  onClick={() => navigate(`/news/${news.id}`)}
                >
                  {/* Image Placeholder */}
                  {/* <div className="w-full h-48 bg-gray-200"></div>
                   */}

                  <img
                    src={news.imageUrl}
                    alt={news.header}
                    className="w-full h-48 object-cover"
                  />

                  {/* Content Wrapper (flex-grow to push "Read more" to the bottom) */}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex-grow">
                      {' '}
                      {/* 🔹 Allows content to take space and push "Read more" down */}
                      <p className="text-sm text-gray-500">{news.date}</p>
                      <h3 className="font-semibold text-lg mt-2 truncate">
                        {news.header}
                      </h3>
                    </div>

                    {/* Read More (Always at the bottom) */}
                    <p className="text-green-600 mt-4">Read more...</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default Home
