// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Intensive Driving Lessons | Get On The Road Faster',
  description: 'Fast-track your driving test with intensive driving lessons from PassMeFast.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}