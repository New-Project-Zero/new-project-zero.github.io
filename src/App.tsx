import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white font-serif relative">
      <img
        src="/bg.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-10 pointer-events-none" 
      />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Home />
        <div className="mt-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}