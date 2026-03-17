import Banner from "@/components/Banner"
import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog"

export default function Page() {

  const venues = getVenues()

  return (
    <main>

      <Banner />

      <VenueCatalog venuesJson={venues}/>

    </main>
  )
}