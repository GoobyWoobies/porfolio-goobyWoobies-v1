import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoobyWoobies | Portfolio",
  description: "Portfolio en Glassmorphism de GoobyWoobies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-gray-900 to-black text-white">
        <Header />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Header Component
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/10 border-b border-white/20 py-4 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">GoobyWoobies</h1>
        <ul className="flex space-x-6">
          {["Accueil", "Projets", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-all duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="mt-16 py-8 text-center bg-white/10 backdrop-blur-lg border-t border-white/20">
      <p>Contactez-moi : <a href="mailto:goobywoobies@example.com" className="text-blue-400">goobywoobies@example.com</a></p>
      <div className="mt-4 flex justify-center space-x-6">
        <a href="https://github.com/GoobyWoobies" className="hover:scale-110 transition-all duration-300">GitHub</a>
        <a href="https://linkedin.com" className="hover:scale-110 transition-all duration-300">LinkedIn</a>
      </div>
    </footer>
  );
};