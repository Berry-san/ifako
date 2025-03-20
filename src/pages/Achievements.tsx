import { useFetchData } from '@/hooks/useApiHooks'

const Achievements = () => {
  const { data: achievements } = useFetchData('images/achievements')
  return (
    <div>
      <h1>Achievements</h1>
      {achievements[0]?.imageUrls?.map((imageUrl: string) => (
        <img
          src={imageUrl}
          alt="achievement"
          className="w-full h-full object-cover mt-4"
        />
      ))}
    </div>
  )
}

export default Achievements
