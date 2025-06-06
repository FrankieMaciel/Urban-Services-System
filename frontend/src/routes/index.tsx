import { Route, Routes } from 'react-router-dom';
import RequestList from '../pages/requestList';
import CreateRequest from '../pages/createRequest';
import AdminRequest from '../pages/AdminRequest';

export const AppRoutes = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <RequestList />
          </>
        }
      />
      <Route
        path="/create"
        element={
          <>
            <CreateRequest />
          </>
        }
      />
      <Route
        path="/admin"
        element={
          <>
            <AdminRequest />
          </>
        }
      />
    </Routes>
  );
};
