import "./globals.css";

export const metadata = {
  title: "Iron Republic Logistics",
  description: "Hot shot freight across Texas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-body">
        {children}
      </body>
    </html>
  );
}
