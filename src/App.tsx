import 'assets/styles/global.scss';

import { ProtectedRoute, Wrapper } from 'components';
import { Auth, Burse, Competitions, CreateOrder, CreateWork, Main, Works } from 'pages';
import { Route, Routes } from 'react-router';
import { routes } from 'utils/core/routes';

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path={routes.main} element={<Main />} />
        <Route path={routes.auth} element={<Auth />} />

        <Route element={<ProtectedRoute />}>
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
