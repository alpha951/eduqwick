import "./App.css";
import NavbarComponent from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Announcement from "./components/announcement/Announce";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <>
      <NavbarComponent />
      <Body />
      <Announcement />
      <Stats />
    </>
  );
}

export default App;
