import SideBar from "../components/SideBar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
          <div className="max-w-xs h-screen overflow-y-auto bg-[#202123] md:min-w-[20rem]">
            <SideBar />
          </div>

          {/* Client Provider - Notification */}

          {/* Content */}
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
