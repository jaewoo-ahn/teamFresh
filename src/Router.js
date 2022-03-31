import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/main";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
