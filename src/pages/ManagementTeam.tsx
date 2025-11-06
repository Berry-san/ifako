import { useFetchData } from '@/hooks/useApiHooks'
import { Member } from './LegislativeArm'

const ManagementTeam = () => {
  const { data, isError, error } = useFetchData(
    'main/members?office=management'
  )
  return (
    <>
      {isError && (
        <p className="mb-3 text-sm text-red-600">{(error as Error).message}</p>
      )}
      <div className="grid">
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-5 order-1 md:order-0 hidden sm:block">
            {data.slice(0, 1).map((member: Member) => (
              <div key={member.id} className="md:col-span-5 rounded-lg">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-96 object-cover object-top"
                />
                <p className="text-center text-xl font-bold  mt-2">
                  {member.name}
                </p>
                <p className="text-center text-xs text-gray-600">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-7 order-0 md:order-1 ">
            <h2 className="flex flex-col text-3xl md:text-6xl font-bold md:mb-22 mb-4">
              <span>The</span> <span>Management Team</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
              {data.slice(0, 1).map((member: Member) => (
                <div key={member.id} className="rounded-lg sm:hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-44 object-cover object-top"
                  />
                  <p className="text-center text-lg font-semibold mt-2">
                    {member.name}
                  </p>
                  <p className="text-center text-xs text-gray-600">
                    {member.position}
                  </p>
                </div>
              ))}
              {data.slice(1, 4).map((member: Member) => (
                <div key={member.id} className="rounded-lg">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-44 object-cover object-top"
                  />
                  <p className="text-center text-lg font-semibold mt-2">
                    {member.name}
                  </p>
                  <p className="text-center text-xs text-gray-600">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Remaining members - standard layout */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-10">
          {data.slice(5).map((member: Member) => (
            <div key={member.id} className="md:col-span-1 rounded-lg">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-64 object-cover object-top"
              />
              <p className="text-center text-sm font-medium mt-2">
                {member.name}
              </p>
              <p className="text-center text-xs text-gray-600">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
    // <div className=""></div>
  )
}

export default ManagementTeam
