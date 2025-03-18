import React from 'react'
import { useFetchData } from '@/hooks/useApiHooks'
import { Member } from './LegislativeArm'

const CouncilExcos: React.FC = () => {
  const { data } = useFetchData('members?office=council')

  return (
    <>
      <h2 className="text-center text-4xl mb-6 font-bold">
        Council Executives
      </h2>
      <div className="container mx-auto px-4 py-8 grid gap-6 grid-cols-12">
        {data.slice(0, 2).map((member: Member) => (
          <div key={member.id} className="col-span-12 md:col-span-6 rounded-lg">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-96 object-cover object-top"
            />
            <p className="text-center text-xl font-bold  mt-2">{member.name}</p>
            <p className="text-center text-xs text-gray-600">
              {member.position}
            </p>
          </div>
        ))}

        {/* Medium members (3rd, 4th, 5th) should be in one row */}
        {/* <div className=""> */}
        {data.slice(2, 5).map((member: Member) => (
          <div key={member.id} className="col-span-12 md:col-span-4 rounded-lg">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-96 object-cover object-top"
            />
            <p className="text-center text-lg font-semibold mt-2">
              {member.name}
            </p>
            <p className="text-center text-xs text-gray-600">
              {member.position}
            </p>
          </div>
        ))}
        {/* </div> */}

        {/* Remaining members - standard layout */}
        {data.slice(5).map((member: Member) => (
          <div
            key={member.id}
            className="col-span-12 sm:col-span-6 md:col-span-3 rounded-lg"
          >
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
    </>
  )
}

export default CouncilExcos
