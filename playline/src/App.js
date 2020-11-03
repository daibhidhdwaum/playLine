import Header from "./components/Header";
import Contest from "./components/Contest";
import Footer from "./components/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Header />
          <Contest />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
