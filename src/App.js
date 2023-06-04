import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";

import {
	About,
	Cart,
	Checkout,
	Error,
	Home,
	PrivateRoute,
	Products,
	SingleProduct,
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
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route exact path="/products">
						<Products />
					</Route>
					<Route path="/products/:id" children={<SingleProduct />} />
					<PrivateRoute path="/checkout">
						<Checkout />
					</PrivateRoute>

					<Route path="*">
						<Error />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthWrapper>
	);
}

export default App;
