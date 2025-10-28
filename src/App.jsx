import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
import ProtectedRoute from "./components/ProtectedRoute";
import { Error } from "./pages/Error";
import ResMenu from "./pages/ResMenu";
import Cart from "./pages/Cart";
import Loader from "./shimmers/LoaderShimmer";
import ThankYou from "./pages/ThankYou";
import Register from "./pages/Register";

const Search = lazy(() => import("./pages/Search"));
const SignIn = lazy(() => import("./pages/SignIn"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loader />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/restaurant",
        element: (
        <ProtectedRoute>
          <Body />
        </ProtectedRoute>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<Loader />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/thankyou",
        element: (
          <ProtectedRoute>
            <ThankYou />
          </ProtectedRoute>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <ProtectedRoute>
            <ResMenu />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export { appRouter };
