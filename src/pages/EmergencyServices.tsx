import Table from '../components/molecules/Table'
import React from 'react'

// Define the structure of the data
interface FireStation {
  id: number
  location: string
  hod: string
  phone: string
  email: string
  [key: string]: string | number
}

interface PoliceStation {
  id: number
  station: string
  hod: string
  phone: string
  email: string
  [key: string]: string | number
}

const EmergencyServices: React.FC = () => {
  // Fire Stations Data
  const fireStations = {
    title: 'Fire Stations',
    columns: ['S/N', 'Location', 'HoD', 'Phone number', 'Email address'],
    data: [
      {
        id: 1,
        location: 'Alausa HQ',
        hod: 'Governor’s road, The secretariat. Alausa, Ikeja',
        phone: '08012345678',
        email: 'nigerianfiredept@lagosstate.gov.ng',
      },
      {
        id: 2,
        location: 'Ikeja',
        hod: 'Mobolaji bank anthony way, Ikeja',
        phone: '09098765432',
        email: 'emergencyservices@.gov.ng',
      },
      {
        id: 3,
        location: 'Agege',
        hod: 'Abeokuta express-way, Ile-Epo bustop. Oke-odo',
        phone: '08123456789',
        email: 'fireprotection@state.gov.ng',
      },
    ] as FireStation[],
  }

  // Police Stations Data
  const policeStations = {
    title: 'Police Stations',
    columns: ['S/N', 'Station', 'HoD', 'Phone number', 'Email address'],
    data: [
      {
        id: 1,
        station: 'Area G',
        hod: 'Ogba Area G Police command, Aguda, Ojodu',
        phone: '07543219876',
        email: 'contact.lagosfire@police.gov.ng',
      },
      {
        id: 2,
        station: 'Red House',
        hod: 'Iju Police Divisional HQ, Government Office.',
        phone: '06234578901',
        email: 'lagospolice@emergency.gov.ng',
      },
      {
        id: 3,
        station: 'NPF',
        hod: 'Agbado Road, Ifako - Ijaiye, Lagos.',
        phone: '05432167890',
        email: 'support.firedept@lagospolice.ng',
      },
    ] as PoliceStation[],
  }

  return (
    <div className="w-full py-20 mx-auto space-y-20 text-center max-w-screen-2xl px-5 lg:px-20">
      <Table
        title={fireStations.title}
        columns={fireStations.columns}
        data={fireStations.data}
      />
      <Table
        title={policeStations.title}
        columns={policeStations.columns}
        data={policeStations.data}
      />
    </div>
  )
}

export default EmergencyServices
