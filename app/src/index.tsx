import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Login from './pages/Login/Login';
import UploadFile from './pages/Webtool/UploadFile';
import Glasses from './pages/Glasses/Glasses';
import Appl from "./pages/App/App";
import Ally from './pages/Ally/Ally';
import Enterprise from './pages/Enterprise/Enterprise';
import Community from './pages/Community/Community';
import Support from './pages/Support/Support';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/glasses" element={<Glasses />} />
          <Route path="/app" element={<Appl />} />
          <Route path="/ally" element={<Ally />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/community" element={<Community />} />
          <Route path="/support" element={<Support />} />
          <Route path="/webtool" element={<UploadFile />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
