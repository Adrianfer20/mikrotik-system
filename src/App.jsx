import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ErrorPages from './pages/ErrorPages';
import useUser from './hooks/useUser';
import Footer from './components/Footer';

function App() {
  const { user } = useUser();

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-between'>
      <Navbar />
      <main className="max-w-4xl w-full flex flex-col items-center gap-16 p-6">
          <Routes>
            <Route path="/mikrotik-system/" element={user?.email ? <Dashboard /> : <Home />} />
            <Route path="/mikrotik-system/about" element={<About />} />
            <Route path="/mikrotik-system/dashboard" element={<PrivateRoute component={<Dashboard />} />} />
            <Route path="/mikrotik-system/*" element={<ErrorPages />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
