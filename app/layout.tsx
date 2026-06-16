import './globals.css'; // Yeh line zaruri hai, isay mat hatayein!
import Navbar from './components/Navbar'; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {/* Main content ko thoda top margin dein taake Navbar ke neeche chupa na ho */}
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}