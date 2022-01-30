import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/cart">
            <Cart></Cart>
          </Route>

          <Route exact path="/products">
            <Products></Products>
          </Route>

          <Route exact path="/products/:id" children={<Products></Products>}>
            <SingleProduct></SingleProduct>
          </Route>

          <Route exact path="/checkout">
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
