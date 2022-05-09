import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPageLayout from './components/landing-page-layout';
import LandingPageLayoutLogin from './components/landing-page-layout -login';
import HomePage from './pages/home-page';
import HomeworkPage from './pages/homework-page';
import AboutPage from './pages/about-page';
import GalleryPage from './pages/gallery-page';
import ContactPage from './pages/contact-page';
import LoginPage from './pages/login-page/index';
import RegisterPage from './pages/register-page/index';
import AdminPage from './pages/admin-page';
import { AuthProvider } from './features/auth/auth-context';

const App: React.FC = () => (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<LandingPageLayoutLogin />}>
        <Route path="admin/login" element={<LoginPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>
    </Routes>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="homework" element={<HomeworkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="auth/register" element={<RegisterPage />} />
      </Route>
    </Routes>

  </AuthProvider>

);

export default App;
