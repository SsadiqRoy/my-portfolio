import './globals.scss';

export const metadata = {
  title: 'Ssadiq Roy Web Design & Development',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
