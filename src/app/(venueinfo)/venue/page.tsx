"use client";

import getVenues from "@/libs/getVenues";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import VenueCatalog from "@/components/VenueCatalog";

export default function Car() {
  const cars = getVenues();

  return (
    <main>
      <Suspense
        fallback={
          <p>
            Loading ...
            <LinearProgress />
          </p>
        }
      >
        <VenueCatalog venuesJson={cars} />
      </Suspense>
    </main>
  );
}
