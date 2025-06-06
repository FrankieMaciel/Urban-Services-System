import { Route, Routes } from 'react-router-dom';
import RequestList from '../pages/requestList';
import CreateRequest from '../pages/createRequest';
import { useState } from 'react';
import AdminRequest from '../pages/AdminRequest';

export const AppRoutes = () => {
  const [headerText, setHeaderText] = useState<string>('');

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
