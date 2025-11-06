import { useFetchData } from '@/hooks/useApiHooks'

const Heeds = () => {
  const {
    data: heeds,
    isLoading,
    isError,
    error,
  } = useFetchData('main/images/agenda')

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>Heeds Agenda</h1>
      {isError && (
        <p className="mb-3 text-sm mt-2 text-red-600">
          {(error as Error).message}
        </p>
      )}
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
