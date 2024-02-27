import { Route, Routes } from "react-router-dom";
import SignIn from "./view/SingIn/index";
import SignUp from "./view/SingUp";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Api from "./Api";
import Home from "./view/Home";
import DriversManager from "./view/Drivers"; 

const Rutas = () => <h1>Rutas</h1>;

const Veiculos = () => <h1>Vehiculos</h1>;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si hay un token de autenticación en localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      email: data.get("email"),
      password: data.get("password"),
      twoFactorCode: "",
      twoFactorRecoveryCode: "",
    };

    Api.post("/login", user)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("expiresIn", response.data.expiresIn);
        setIsAuthenticated(!isAuthenticated);
      })

      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  };

  const handlerLogout = (event) => {
    event.preventDefault();
    setIsAuthenticated(!isAuthenticated)
    console.log(isAuthenticated)
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('expiresIn')
    
  }
  return (
    <Routes>
      <Route
        path="/singIn"
        element={
          <SignIn
            onLoginSuccess={handleLogin}
            isAuthenticated={isAuthenticated}
          />
        }
      />
      <Route path="/singUp" element={<SignUp />} />
      <Route
        path="/"
        element={isAuthenticated ? <Home onLogOut={handlerLogout}/> : <Navigate to="/singIn" />}
      >
        <Route path="/routes" element={<Rutas />} />
        <Route path="/vehiculos" element={<Veiculos />} />
        <Route path="/drivers" element={<DriversManager />} />
      </Route>
    </Routes>
  );
};

export default App;
