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
        <div>
          {/* Side Bar */}

          {/* Client Provider - Notification */}

          {/* Content */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
