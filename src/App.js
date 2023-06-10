import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Home></Home>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
