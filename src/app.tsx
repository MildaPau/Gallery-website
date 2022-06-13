import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import LandingPageLayout from './components/landing-page-layout';
import LandingPageLayoutLogin from './components/landing-page-layout -login';

import HomePage from './pages/home-page';
import GalleryPage from './pages/gallery-page';
import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';
import LoginPage from './pages/login-page/index';
import AdminPage from './pages/admin-page';
import CreateNewSculpturePage from './pages/admin-page/create-new-sculpture-page';
import UpdateSculpturePage from './pages/admin-page/update-sculpture-page';

import store from './store';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

const App: React.FC = () => (
  <ReduxProvider store={store}>
    <Routes>
      <Route path="/" element={<LandingPageLayoutLogin />}>
        <Route path="admin/login" element={<RequireVisitor><LoginPage /></RequireVisitor>} />
        <Route path="admin" element={<RequireAuth><AdminPage /></RequireAuth>} />
        <Route path="create" element={<RequireAuth><CreateNewSculpturePage /></RequireAuth>} />
        <Route path="update/:id" element={<RequireAuth><UpdateSculpturePage /></RequireAuth>} />
      </Route>
    </Routes>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </ReduxProvider>
);

export default App;
