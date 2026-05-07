import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Loader from './components/Common/Loader';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <Loader fullScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;