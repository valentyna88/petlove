import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../../components/Layout';
// import './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('../../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('../../pages/OurFriendsPage/OurFriendsPage')
);
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage/ProfilePage'));
const AddPetPage = lazy(() => import('../../pages/AddPetPage/AddPetPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="add-pet" element={<AddPetPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
