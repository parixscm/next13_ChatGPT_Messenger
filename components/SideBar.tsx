"use client";
import { collection } from "@firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  );

  return (
    <div className="p-2 h-screen flex flex-col">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* Model Selection */}</div>
          {chats?.docs.map(chat => (
            <div></div>
            // <ChatRow key={chat.id} id={chat.id} />
          ))}
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
