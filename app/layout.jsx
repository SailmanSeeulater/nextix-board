import "./globals.css";

export const metadata = {
  title: "nexTix sample",
  description: "A tiny app nexTix agents change, so runs have screenshots to compare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a href="/" className="brand">
            nexTix sample
          </a>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
