import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/router";
import MasterLayout from './pages/users/theme/masterLayout';
import { HomePage, ProfilePage } from './pages';


const renderUserRoutes = () => {
  const userRoutes = [
    {
      path: ROUTES.USERS.HOME,
      element: <HomePage />,
    },

    {
      path: ROUTES.USERS.PROFILE,
      element: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRoutes.map((item, key) => (
          <Route key={key} path={item.path} element={item.element} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRoutes();
};

export default RouterCustom;
