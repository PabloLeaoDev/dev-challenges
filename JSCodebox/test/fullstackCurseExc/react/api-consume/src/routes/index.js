import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Student from '../pages/Student';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function CustomRouter() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<Students />} />} />
      <Route path="/login" element={<PrivateRoute element={<Login />} />} />
      <Route
        path="/register"
        element={<PrivateRoute element={<Register />} />}
      />
      <Route
        path="/student/:id/edit"
        element={<PrivateRoute element={<Student />} isClosed />}
      />
      <Route
        path="/student/"
        element={<PrivateRoute element={<Student />} isClosed />}
      />
      <Route
        path="/photos/:id"
        element={<PrivateRoute element={<Photos />} isClosed />}
      />
      <Route path="*" element={<PrivateRoute element={<Page404 />} />} />
    </Routes>
  );
}
