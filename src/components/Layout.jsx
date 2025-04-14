import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Container from './Container/Container';
import Header from './Header/Header';
import Loader from './Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            padding: '16px',
            marginTop: '80px',
          },
        }}
      />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
