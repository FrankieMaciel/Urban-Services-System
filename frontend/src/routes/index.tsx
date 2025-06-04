import { Route, Routes } from 'react-router-dom';
import RequestList from '../pages/requestList';
import { useState } from 'react';

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
    </Routes>
  );
};
