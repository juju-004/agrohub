import Head from "next/head";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Agrohub - Agricultural business organisation</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
