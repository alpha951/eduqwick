import "./App.css";
import NavbarComponent from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Announcement from "./components/announcement/Announce";
import Stats from "./components/stats/Stats";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <Body />
      <Announcement />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
