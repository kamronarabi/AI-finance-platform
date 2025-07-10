import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import "./globals.css";
import {Inter} from 'next/font/google'
import {Toaster} from 'sonner'
const inter = Inter({subsets:['latin']})

export const metadata = {
  title: "Budget.ai",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider  appearance={{
      cssLayerName: 'clerk',     
    }}>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <Header/>
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster/>
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made by Kamron Arabi</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
