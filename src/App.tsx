import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeContainer from './Pages/Home';
import AboutContainer from './Pages/About';
import LoginContainer from './Pages/Login';
import NavBarContainer from './Components/Navbar';
import NavDrawerConatiner from './Components/NavBarDrawer';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <NavBarContainer />
      <NavDrawerConatiner />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/About" element={<AboutContainer />} />
        <Route path="/Home" element={<HomeContainer />} />
        <Route path="/FQAs" element={<h2>To Build</h2>} />
        <Route path="/Help" element={<h2>To Build</h2>} />
        <Route path="/Login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  )
};

export default App;
