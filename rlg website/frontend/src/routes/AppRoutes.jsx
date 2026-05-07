import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Public Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import ProgramDetails from '../pages/ProgramDetails';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Donate from '../pages/Donate';
import Events from '../pages/Events';
import EventDetails from '../pages/EventDetails';

// Auth Pages
import Login from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';

// Admin Pages
import Dashboard from '../pages/admin/Dashboard';
import AdminBlogs from '../pages/admin/Blogs';
import AdminGallery from '../pages/admin/Gallery';
import AdminDonations from '../pages/admin/Donations';
import AdminPrograms from '../pages/admin/Programs';
import AdminContacts from '../pages/admin/Contacts';
import AdminUsers from '../pages/admin/Users';
import AdminSettings from '../pages/admin/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:id" element={<ProgramDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<PrivateRoute adminOnly />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="blogs" element={<AdminBlogs />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="donations" element={<AdminDonations />} />
        <Route path="programs" element={<AdminPrograms />} />
        <Route path="contacts" element={<AdminContacts />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;