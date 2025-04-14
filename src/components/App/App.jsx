import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import NoticesPage from '../../pages/NoticesPage/NoticesPage';
import OurFriendsPage from '../../pages/OurFriendsPage/OurFriendsPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import AddPetPage from '../../pages/AddPetPage/AddPetPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Layout from '../../components/Layout';
// import './App.module.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} redirectTo="/home" />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
