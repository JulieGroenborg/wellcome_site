import "./globals.scss";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
//   //no index, no follow
// };

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <title>YIT</title>
        <link rel="stylesheet" href="https://use.typekit.net/owy3ilv.css"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
