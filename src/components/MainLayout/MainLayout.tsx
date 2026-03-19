import { Outlet } from 'react-router';

import { Container, Header } from '..';

export const MainLayout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Outlet />
    </>
  );
};
