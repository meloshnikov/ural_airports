import React from 'react'
import { IAirport } from './models/models'

interface AirportCardProps {
  airport: IAirport
}

const AirportCard: React.FC<AirportCardProps> = ({ airport }) => {
  return (
    <div>
      {airport.name}
    </div>
  )
}

export default AirportCard
