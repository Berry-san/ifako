import { useFetchData } from '@/hooks/useApiHooks'
import { useEffect } from 'react'

const Heeds = () => {
  const { data: heeds, isLoading } = useFetchData('images/agenda')

  useEffect(() => {
    if (heeds) console.log(heeds)
  }, [heeds])

  console.log(heeds)
  //   console.log(heeds[0].imageUrls)
  //   if (!heeds || !heeds.length || !heeds[0].imageUrls) {
  //     return <p>No images available</p>
  //   }
  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>Heeds Agenda</h1>
      {heeds[0]?.imageUrls?.map((imageUrl: string, index: number) => (
        <img
          key={index} // Always add a key when mapping
          src={imageUrl}
          alt="achievement"
          className="w-full h-full object-cover mt-4"
        />
      ))}
    </div>
  )
}

export default Heeds
