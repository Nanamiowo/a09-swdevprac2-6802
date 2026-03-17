import { VenueJson } from "../../interface"

export default async function getVenues(){

  const res = await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/venues",
    { cache:"no-store" }
  )

  const data: VenueJson = await res.json()

  return data
}