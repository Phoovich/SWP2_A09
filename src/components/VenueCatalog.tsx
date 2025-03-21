import Link from "next/link";
import Card from "./Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  const venues = await venuesJson;

  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-around",
        padding: "10px",
      }}
    >
      {venues.data.map((venue: VenueItem) => (
        <Link href={`/venue/${venue.id}`} className="w-1/5">
          <Card key={venue.id} venueName={venue.name} imgSrc={venue.picture} />
        </Link>
      ))}
    </div>
  );
}
