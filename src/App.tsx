import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "layouts";

const Surveys = React.lazy(() => import("pages/Surveys/index"));
const Survey = React.lazy(() => import("pages/Survey/index"));
const Profile = React.lazy(() => import("pages/Profile/index"));
const Favorites = React.lazy(() => import("pages/Favorites/index"));

const App = () => {
  return (
    <main>
      <Toaster
        position="top-left"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={[] as React.ReactNode} />
          <Route path="surveys" element={<Surveys />} />
          <Route path="surveys/:id" element={<Survey />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="progress" element={[] as React.ReactNode} />
        </Route>
        <Route index element={<Navigate to="surveys" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
};

export default App;
