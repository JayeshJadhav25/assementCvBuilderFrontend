import logo from "./logo.svg";
import "./App.css";
import'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import { Button } from "antd";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/Login';
import LayoutSelect from './components/LayoutSelect';
import RegisterPage  from './components/RegisterPage';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Templates from "./pages/templates";
import LayoutPage from "./pages/layouts"
import Layouts from './components/Layouts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute ><Home /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute ><Home /></ProtectedRoute>} />
          <Route path="/profile/:id" element={<ProtectedRoute ><Profile /></ProtectedRoute>} />
          <Route path="/templates/:id/:name" element={<ProtectedRoute ><Templates /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/layoutSelect/:name" element={<ProtectedRoute><LayoutSelect /></ProtectedRoute>} />
          <Route path="/layouts" element={<ProtectedRoute><Layouts /></ProtectedRoute>} />
          <Route path="/layoutsPage/:id" element={<ProtectedRoute><LayoutPage /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

