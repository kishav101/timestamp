import './App.css';
import NavBarContainer from './Components/Navbar';
import mainStyles from './GloablStyles';
import { HomeContainer } from './Pages/Home/Container';

function App() {

  const {classes} = mainStyles();

  return (
    <>
      <div className={classes.root}>
        <NavBarContainer />
        <HomeContainer />
      </div>
    </>
  );
}

export default App;
