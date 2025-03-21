import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-12 bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex justify-end">
      <div className="flex items-center space-x-4 px-4 h-full w-[200px]">
        <TopMenuItem title="Booking" pageRef="/booking" />
        <Image
          src="/img/logo.png"
          className="h-full w-auto"
          alt="logo"
          width={50} // Adjust based on your logo's aspect ratio
          height={50} // Adjust based on your logo's aspect ratio
        />
      </div>
      {session ? (
        <Link href="/api/auth/signout">
          <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">
            Sign-Out
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">
            Sing-In
          </div>
        </Link>
      )}
    </div>
  );
}
