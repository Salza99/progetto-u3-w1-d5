import "./App.css";
import HomePage from "./components/HomePage";
import MyFooter from "./components/MyFooter";
import TopBar from "./components/TopBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="bg-dark">
      <TopBar />
      <HomePage />
      <MyFooter />
    </div>
  );
}

export default App;
