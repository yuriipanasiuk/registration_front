import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Register from "./pages/Register";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks/useAuth";
import { RestrictedRoute } from "./RestrictRoute";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser(token));
    }
  }, [dispatch, token]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route
              path="home"
              element={<PrivateRoute component={Home} redirectTo="/login" />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={Login} redirectTo="/home" />}
            />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </>
    )
  );
}

export default App;
