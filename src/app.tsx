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
import CreateNewSculpturePage from './pages/admin-page/create-new-sculpture-page';
import UpdateSculpturePage from './pages/admin-page/update-sculpture-page';

import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';
import { useRootSelector, useRootDispatch } from './store/hooks';
import { selectAuthToken, selectAuthLoggedIn, selectAuthLoading } from './store/selectors';
import { createAuthenticateActionThunk } from './store/action-creators';
import Loading from './components/loading/loading';

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
    return <Loading />; // Galima uždėti loading animaciją
  }

  return (
    <>
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
    </>
  );
};

export default App;
