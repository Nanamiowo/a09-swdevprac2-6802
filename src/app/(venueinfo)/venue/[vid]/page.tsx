import getVenue from "@/libs/getVenue"
import Image from "next/image"

export default async function Page({ params }: any){

  const vid = await params.vid
  const venueJson = await getVenue(vid)
  const venue = venueJson.data

  return(

    <main>

      <Image src={venue.picture} alt={venue.name} width={100} height={100}/>

      <h1>{venue.name}</h1>

      <p>{venue.address}</p>
      <p>{venue.province}</p>
      <p>{venue.postalcode}</p>

      <p>{venue.tel}</p>

      <p>{venue.dailyrate}</p>

    </main>

  )
}