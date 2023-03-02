import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 h-screen flex flex-col">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* Model Selection */}</div>
          {/* Map Through the Chat Rows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
