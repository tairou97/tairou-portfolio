import { Route, Routes } from "react-router-dom";
import routes from "./componets/routes";
import Layout from "./layout/Layout";
import "./App.css";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <Routes>
        {routes.map((rou) => (
          <Route key={rou.Id} {...rou} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
