import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import LandingPageLayout from './components/landing-page-layout';
import LandingPageLayoutLogin from './components/landing-page-layout -login';

import HomePage from './pages/home-page';
import GalleryPage from './pages/gallery-page';
import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';
import LoginPage from './pages/login-page/index';
import AdminPage from './pages/admin-page';
import UpdateSculpturePage from './pages/admin-page/admin-sculptures-page/update-sculpture-page';

import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';
import { useRootSelector, useRootDispatch } from './store/hooks';
import { selectAuthToken, selectAuthLoggedIn, selectAuthLoading } from './store/selectors';
import { createAuthenticateActionThunk } from './store/action-creators';
import Loading from './components/loading/loading';
import AdminSculpturePage from './pages/admin-page/admin-sculptures-page';
import CreateNewSculpturePage from './pages/admin-page/admin-sculptures-page/create-new-sculpture-page';
import AdminAboutPageInfoCardsPage from './pages/admin-page/admin-about-page-info-cards-page';
import CreateNewAboutPageInfoCardPage from './pages/admin-page/admin-about-page-info-cards-page/create-new-about-page-info-card';
import UpdateAdminPageInfoCardPage from './pages/admin-page/admin-about-page-info-cards-page/update-about-page-info-card-page';

const App: React.FC = () => {
  const location = useLocation();
  const token = useRootSelector(selectAuthToken);
  const loggedIn = useRootSelector(selectAuthLoggedIn);
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  if (!loggedIn && token) {
    if (!loading) {
      dispatch(createAuthenticateActionThunk(token, location.pathname));
    }
    return <Loading />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPageLayoutLogin />}>
          <Route path="admin/login" element={<RequireVisitor><LoginPage /></RequireVisitor>} />
          <Route path="admin" element={<RequireAuth><AdminPage /></RequireAuth>} />
          <Route path="/admin/sculptures" element={<RequireAuth><AdminSculpturePage /></RequireAuth>} />
          <Route path="/admin/sculptures/create" element={<RequireAuth><CreateNewSculpturePage /></RequireAuth>} />
          <Route path="/admin/sculptures/update/:id" element={<RequireAuth><UpdateSculpturePage /></RequireAuth>} />

          <Route path="/admin/infoCard" element={<RequireAuth><AdminAboutPageInfoCardsPage /></RequireAuth>} />
          <Route path="/admin/infoCard/create" element={<RequireAuth><CreateNewAboutPageInfoCardPage /></RequireAuth>} />
          <Route path="/admin/infoCard/update/:id" element={<RequireAuth><UpdateAdminPageInfoCardPage /></RequireAuth>} />
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
    </>
  );
};

export default App;
