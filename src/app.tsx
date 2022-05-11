import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
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
import SculpturePage from './pages/sculpture-page';

import store from './store';

const App: React.FC = () => (
  <AuthProvider>
    <ReduxProvider store={store}>
      <Routes>
        <Route path="/" element={<LandingPageLayoutLogin />}>
          <Route path="admin/login" element={<LoginPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="auth/register" element={<RegisterPage />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="homework" element={<HomeworkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="sculpture" element={<SculpturePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </ReduxProvider>
  </AuthProvider>

);

export default App;
