import './globals.css'; 
import Navbar from './components/Navbar'; 
import { CartProvider } from './context/CartContext'; // 1. Ye import add karein

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* 2. CartProvider se sab kuch wrap karein */}
        <CartProvider>
          <Navbar /> 
          <main className="min-h-screen">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}