import "semantic-ui-css/semantic.min.css";
import { Inter } from "next/font/google";
import "../global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YT1S",
  description: "Download YouTube videos and musics ",
  image: "https://i.imgur.com/2Q7GUig.png",
  keywords:
    "downtube,youtube downloader,nextjs,react,procet,download youtube,youtube mp3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
