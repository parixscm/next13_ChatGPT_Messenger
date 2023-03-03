"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  return (
    <div className="bg-gray-700/50 rounded-lg text-gray-400 text-sm">
      <form className="p-5 flex space-x-5">
        <input
          type="text"
          value={prompt}
          placeholder="type message..."
          onChange={e => setPrompt(e.target.value)}
          disabled={!session}
          className="flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300"
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="px-4 py-2 bg-[#11A37F] hover:opacity-50 text-white font-bold rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
        </button>
      </form>
      <div>{/* Model Selection */}</div>
    </div>
  );
}

export default ChatInput;
