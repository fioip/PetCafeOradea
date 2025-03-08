import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiPawPrintFill } from 'react-icons/pi';

const TabletLayout = () => {
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();
  
  const getPageInfo = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Home',
          motto: (
            <>
              Where <span className="text-orange-500">Paws</span> &{' '}
              <span className="text-orange-500">People</span> meet for a{' '}
              <span className="text-orange-500">Treat</span>!
            </>
          )
        };
      case '/meniu':
        return { title: 'Meniu', motto: 'Our Menu' };
      case '/galerie':
        return { title: 'Galerie', motto: 'Our Gallery' };
      case '/contact':
        return { title: 'Contact', motto: 'Get in Touch' };
      default:
        return { title: 'Home', motto: 'Welcome!' };
    }
  };

  return (
    <div className="hidden sm:flex md:flex lg:hidden min-h-screen bg-gradient-to-br from-amber-950 to-amber-900">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 w-full h-24 bg-amber-950 backdrop-blur-sm z-50 flex items-center justify-between px-8 shadow-lg border-b border-amber-800/30">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center shadow-lg">
            <PiPawPrintFill className="text-amber-950 text-4xl" />
          </div>
          <span className="text-amber-100 font-bold text-2xl tracking-wide">Pet Cafe</span>
        </div>
        
        <nav className="flex gap-4">
          {['home', 'menu', 'gallery', 'contact'].map((tab) => (
            <Link
              key={tab}
              to={tab === 'home' ? '/' : `/${tab === 'menu' ? 'meniu' : tab === 'gallery' ? 'galerie' : tab}`}
              className={`text-amber-100 px-8 py-3 rounded-xl transition-all duration-300 font-medium text-lg ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-amber-800 to-amber-700 shadow-lg transform scale-105' 
                  : 'hover:bg-amber-800/50 hover:scale-105'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full pt-28 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12 bg-amber-950/50 rounded-2xl p-8 shadow-lg border border-amber-800/30">
            <div className="flex items-center justify-center gap-6">
              <PiPawPrintFill className="text-7xl text-orange-500 transform -rotate-12" />
              <h1 className="text-8xl font-bold text-amber-100 tracking-tight">Pet Cafe</h1>
              <PiPawPrintFill className="text-7xl text-orange-500 transform rotate-12" />
            </div>
            <h2 className="text-4xl text-amber-100 font-medium tracking-wide">{getPageInfo().motto}</h2>
          </div>

          {/* Schedule Section */}
          <div className="bg-gradient-to-r from-amber-900/70 to-amber-800/70 rounded-2xl p-8 shadow-lg border border-amber-700/50 mb-12">
            <h3 className="text-3xl font-bold text-amber-100 mb-8 text-center">Program</h3>
            <div className="flex justify-around items-center">
              <div className="text-center px-12">
                <h4 className="text-2xl font-bold text-amber-100 mb-4">Luni - Vineri</h4>
                <div className="text-xl text-amber-100/90">
                  <p>07:00 - 21:30</p>
                </div>
              </div>
              <div className="h-20 w-px bg-amber-700/50" />
              <div className="text-center px-12">
                <h4 className="text-2xl font-bold text-amber-100 mb-4">Sambata - Duminica</h4>
                <div className="text-xl text-amber-100/90">
                  <p>10:00 - 21:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Notice */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
            <div className="bg-gradient-to-r from-amber-900 to-orange-800 px-10 py-3 rounded-xl 
              shadow-lg transform hover:scale-105 transition-all duration-300">
              <p className="text-amber-100 text-lg font-semibold tracking-wide">
                ⚠️ NOT PET FRIENDLY ⚠️
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletLayout;