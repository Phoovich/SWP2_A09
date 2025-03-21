import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function venuePage({
  params,
}: {
  params: { vid: string };
}) {
  /**
   * Mock Data
   */

  // const mockVenueRepo = new Map();
  // mockVenueRepo.set("001", {
  //   name: "The Bloom Pavilion",
  //   image: "/img/bloom.jpg",
  // });
  // mockVenueRepo.set("002", {
  //   name: "Spark Space",
  //   image: "/img/sparkspace.jpg",
  // });
  // mockVenueRepo.set("003", {
  //   name: "The Grand Table",
  //   image: "/img/grandtable.jpg",
  // });

  // "_id": "67d044e0c0062950a985c509",
  //    "name": "The Bloom Pavilion",
  //    "address": "342 Rama IV Road",
  //    "district": "Pathumwan",
  //    "province": "Bangkok",
  //    "postalcode": "10330",
  //    "tel": "024435595",
  //    "picture": "https://drive.google.com/uc?id=1GJPsjTt8k-2ILv6A4ER1sRr6yTG_M2f5",
  //    "dailyrate": 90000,
  //    "__v": 0,
  //    "id": "67d044e0c0062950a985c509"

  const venueDetails = await getVenue(params.vid);

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium">{venueDetails.data.name}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={venueDetails.data.picture}
          alt="venue picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%] bg-black"
        />
        <div className="text-md mx-5 text-left">
          <div>name: {venueDetails.data.name}</div>
          <div>address: {venueDetails.data.address}</div>
          <div>province: {venueDetails.data.province}</div>
          <div>postalcode: {venueDetails.data.postalcode}</div>
          <div>tel: {venueDetails.data.tel}</div>
          <div>dailyrate: {venueDetails.data.dailyrate}</div>
        </div>
      </div>
    </main>
  );
}
