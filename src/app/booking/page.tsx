"use client";

import { TextField, Button, Box } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Reservations() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div>{profile.data.name}</div>

      <table className="table-auto border-separate border-spacing-2">
        <tbody>
          <tr>
            <td>Email</td>
            <td>{profile.data.email}</td>
          </tr>
          <tr>
            <td>Tel.</td>
            <td>{profile.data.tel}</td>
          </tr>
          <tr>
            <td>Member Since</td>
            <td>{createdAt.toString()}</td>
          </tr>
        </tbody>
      </table>

      <Box
        className="w-fit"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
        }}
      >
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
          fullWidth
        />

        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
          fullWidth
        />

        <Box sx={{ width: "100%" }}>
          <div className="text-md text-left text-gray-600">Event Date</div>
          <DateReserve />
        </Box>

        <Button
          name="Book Venue"
          variant="contained"
          sx={{
            backgroundColor: "#0288d1",
            "&:hover": { backgroundColor: "#0277bd" },
            mt: 2,
          }}
        >
          Book Venue
        </Button>
      </Box>
    </main>
  );
}
