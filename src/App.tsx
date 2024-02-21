import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBarContainer from './Components/Navbar';
import mainStyles from './GloablStyles';
import { HomeContainer } from './Pages/Home/Container';
import AboutContainer from './Pages/About';

const App = () => {
  const routes = [
    {
      path: "/",
      element: <HomeContainer/>,
    },
    {
      path: "/About",
      element: <AboutContainer />,
    },
     {
      path: "/Home",
      element: <h2>jhhh</h2>,
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />
};

export default App;
