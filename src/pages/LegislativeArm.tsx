import { useFetchData } from '@/hooks/useApiHooks'
import { Skeleton } from '@/components/ui/skeleton'

export interface Member {
  id: string
  imageUrl: string
  name: string
  position: string
}

const LegislativeArm = () => {
  const { data, isLoading, isError, error } = useFetchData(
    'main/members?office=Legislative'
  )
  if (isLoading) return <Skeleton className="w-[100px] h-[20px] rounded-full" />

  return (
    <>
      <h2 className="text-center text-4xl mb-6 font-bold">Legislative Arm</h2>
      {isError && (
        <p className="mb-3 text-sm text-red-600">{(error as Error).message}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((member: Member, index: number) => {
          const isFirst = index === 0 // First staff member gets a unique style
          return (
            <div
              key={member.id}
              className={`text-left ${
                isFirst
                  ? 'md:col-span-2 flex flex-col items-center justify-center lg:col-span-4 mb-4'
                  : 'col-span-1 flex flex-col items-center justify-center '
              }`}
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="h-64 w-64 object-cover rounded-xl bg-red-400"
              />
              {/* <div className="bg-slate-500 h-40 w-full"></div> */}
              <h2>{member.name}</h2>
              <p className="text-slate-700">{member.position}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default LegislativeArm
