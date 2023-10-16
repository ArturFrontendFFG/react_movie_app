import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Auth from "./components/screens/Auth/Auth";
import List from "./components/screens/List/List";
import SigUp from "./components/screens/signup/SigUp";
import Video from "./components/screens/Details/Video";
import People from "./components/screens/People/People";
import Details from "./components/screens/Details/Details";
import Account from "./components/screens/Account/Account";
import Catalog from "./components/screens/Catalog/Catalog";
import AllActors from "./components/screens/AllActors/AllActors";
import Undefined from "./components/screens/Undefined/Undefined";
import MostPopularCatalog from "./components/screens/MostPopular/MostPopularCatalog";
import { Suspense, lazy } from "react";
import Loader from "./components/widgets/Loader/Loader";
const Home = lazy(() => import("./components/screens/Home/Home"));
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            ></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/movie/:id" element={<Details />}>
              <Route path="play/:key" element={<Video />}></Route>
            </Route>
            <Route path="all_people/:id" element={<AllActors />}></Route>
            <Route path="people/:id" element={<People />}></Route>
            <Route path="account/:name" element={<Account />}></Route>
            <Route path="search" element={<Catalog />}></Route>
            <Route path="most/:query" element={<MostPopularCatalog />}></Route>
          </Route>
          <Route path="/reg" element={<SigUp />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="*" element={<Undefined />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
