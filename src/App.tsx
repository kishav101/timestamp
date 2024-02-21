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
      element: <HomeContainer/>,
    },
    {
      path: "/FQAs",
      element: <h2>To Build</h2>,
    },
    {
      path: "/Help",
      element: <h2>To Build</h2>,
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />
};

export default App;
