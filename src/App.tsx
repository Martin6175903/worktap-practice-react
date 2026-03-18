import 'assets/styles/global.scss';

import { useState } from 'react';
import { Route, Routes } from 'react-router';

import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Wrapper } from './components/Wrapper/Wrapper';
import { Auth } from './pages/Auth/Auth';
import { Burse } from './pages/Burse/Burse';
import { Competitions } from './pages/Competitions/Competitions';
import { CreateOrder } from './pages/CreateOrder/CreateOrder';
import { CreateWork } from './pages/CreateWork/CreateWork';
import { Main } from './pages/Main/Main';
import { Works } from './pages/Works/Works';
import { routes } from './utils/core/routes';

const App = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <Wrapper>
      <Routes>
        <Route path={routes.auth} element={<Auth isAuth={isAuth} />} />

        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path={routes.main} element={<Main />} />
          <Route path={routes.burse} element={<Burse />} />
          <Route path={routes.works} element={<Works />} />
          <Route path={routes.competitions} element={<Competitions />} />
          <Route path={routes.createWork} element={<CreateWork />} />
          <Route path={routes.createOrder} element={<CreateOrder />} />
        </Route>
      </Routes>
    </Wrapper>
  );
};

export default App;
