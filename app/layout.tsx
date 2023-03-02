import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import SideBar from "../components/SideBar";
import "../styles/globals.css";
import { getServers } from "dns";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          <div className="flex">
            <div className="max-w-xs h-screen overflow-y-auto bg-[#202123] md:min-w-[20rem]">
              <SideBar />
            </div>

            {/* Client Provider - Notification */}

            {/* Content */}
            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
