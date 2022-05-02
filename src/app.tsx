import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPageLayout from './components/landing-page-layout';
import HomePage from './pages/home-page';
import HomeworkPage from './pages/homework-page';
import AboutPage from './pages/about-page';
import GalleryPage from './pages/gallery-page';
import ContactPage from './pages/contact-page';
import LoginPage from './pages/login-page/index';
import RegisterPage from './pages/register-page/index';
import { AuthProvider } from './features/auth/auth-context';

const App: React.FC = () => (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="homework" element={<HomeworkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="wp-admin" element={<LoginPage />} />
        <Route path="auth/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  </AuthProvider>

);

export default App;
