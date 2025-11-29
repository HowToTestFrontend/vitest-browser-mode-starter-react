import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HowToTestFrontend.com demo app with Vitest Browser Mode and Next.js',
  description: 'HowToTestFrontend.com demo app with Vitest Browser Mode and Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <p>
          From <a href="https://howtotestfrontend.com">How To Test Frontend</a>
        </p>
      </body>
    </html>
  );
}
