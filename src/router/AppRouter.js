import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { lazy, Suspense } from "react"



const PostsPage = lazy(() => import('../pages/Posts'));
const PostDetailPage = lazy(() => import('../pages/PostDetail'))


const TodosPage = lazy(() => import('../pages/Todos'));
const UsersPage = lazy(() => import('../pages/Users'));



const AppRouter = () => {
  return (
    <Suspense fallback = "loding component...">
      <Routes>
        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path=":id" element={<PostDetailPage />} />
        </Route>
        <Route path="todos" element={<TodosPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="*" element={<Navigate to="posts" />} />
      </Routes>
    </Suspense>
    
  );
};

export default AppRouter;
