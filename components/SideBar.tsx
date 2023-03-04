"use client";
import { collection, orderBy, query } from "@firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="p-2 h-screen flex flex-col">
      <div className="flex-1">
        <div>
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>
          <div className="my-2 flex flex-col space-y-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map(chat => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
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
