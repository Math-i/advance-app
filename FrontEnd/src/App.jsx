import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import LazyLayout from "./components/ui/LazyLayout";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";

const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAbout = lazy(() => import("./pages/user/About"));
const LazyDashBoard = lazy(() => import("./pages/admin/DashBoard"));
const LazyUserInfo = lazy(() => import("./pages/admin/UserInfo"));

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route
          path="/about"
          element={<LazyLayout component={LazyAbout} />}
        />
      </Routes>
    </UserLayout>
  );
};
const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route
          path="/dashboard"
          element={<LazyLayout component={<LazyDashBoard />} />}
        />
        <Route
          path="/user-info"
          element={<LazyLayout component={<LazyUserInfo />} />}
        />
      </Routes>
    </AdminLayout>
  );
};

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/agrofunds/login" />} />
      <Route
        path="/agrofunds/login"
        element={<LazyLayout component={LazyLogin} />}
      />
      <Route
        path="/agrofunds/signup"
        element={<LazyLayout component={LazyRegister} />}
      />
      <Route path="/agrofunds/user/*" element={<UserRoutes/>} />
      <Route path="/agrofunds/admin/*" element={<AdminRoutes/>} />
    </Routes>
  );
}

export default App;
