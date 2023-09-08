import "./App.css";
import HomePage from "./components/HomePage";
import MyFooter from "./components/MyFooter";
import TopBar from "./components/TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";
import ProfileNav from "./components/ProfileNav";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="bg-dark">
      <TopBar />
      <HomePage />
      <MyFooter />
      {/* <ProfileNav />
      <ProfilePage /> */}
    </div>
  );
}

export default App;
