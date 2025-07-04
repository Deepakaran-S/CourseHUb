import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16"> {/* Add margin to avoid overlapping navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
