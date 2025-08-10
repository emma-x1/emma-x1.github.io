import './styles/global.css';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Thoughts from './pages/Thoughts';
import Trinkets from './pages/Trinkets';
import Entry from './pages/Entry';
import NotFound from './pages/NotFound';
// import { LengthModeProvider } from './contexts/LengthModeContext';

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const hideNav = location.pathname != "/home";

  return (
    // <LengthModeProvider>
    <div>
      {!hideNav && <Navbar />}
      <div className={!hideNav ? "page-with-nav" : "page-no-nav"}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Entry />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/trinkets" element={<Trinkets />} />
        </Routes>
      </div>
    </div>
    // </LengthModeProvider>
  );
}
