import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        This is layout!
      	{children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho con amor por la gente de vercel!!!
        </footer>
      </body>
    </html>
  );
}
