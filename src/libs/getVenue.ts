export default async function getVenue(vid:string){

  const res = await fetch(
    `https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${vid}`,
    { cache:"no-store" }
  )

  const data = await res.json()

  return data
}