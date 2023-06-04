import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Auth0Provider } from "@auth0/auth0-react";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";
import { UserProvider } from "./context/user_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// dev-qbv0vkp45u51z2pg.us.auth0.com
// rEJd9V3iUkjx47ljKQeEhKRsoG7z8Rcn;

root.render(
	<Auth0Provider
		domain='dev-qbv0vkp45u51z2pg.us.auth0.com'
		clientId='rEJd9V3iUkjx47ljKQeEhKRsoG7z8Rcn'
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
		cacheLocation="localstorage">
		<UserProvider>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</FilterProvider>
			</ProductsProvider>
		</UserProvider>
	</Auth0Provider>
);
