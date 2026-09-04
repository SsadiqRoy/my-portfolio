import "./globals.scss";

export const metadata = {
  title: "Ssadiq Roy Web Design & Development",
  description:
    "A full stack web developer skilled in backend development, front end development and UI/UX design. Have a project or need a website? Contact me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
