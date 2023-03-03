"use client";
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="p-2 h-screen flex flex-col">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* Model Selection */}</div>
          {/* Map Through the Chat Rows */}
        </div>
      </div>

      {session && (
        <img
          src={session.user?.image!}
          alt="profile pic"
          onClick={() => signOut()}
          className="mx-auto mb-2 w-12 h-12 rounded-full cursor-pointer hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
