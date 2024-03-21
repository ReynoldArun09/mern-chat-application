import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import { Toaster } from "@/components/ui/toaster";
import { useAuthContext } from "./context/AuthContext";
import Loading from "./components/shared/Loading";

export default function App() {
  const { isAuthLoading, authUser } = useAuthContext();

  if (isAuthLoading) {
    return <Loading />;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Homepage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Loginpage /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!authUser ? <Registerpage /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </>
  );
}
