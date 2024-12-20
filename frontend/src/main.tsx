import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const { VITE_GATEWAY_PORT } = import.meta.env;

const client = new ApolloClient({
	uri: `http://localhost:${VITE_GATEWAY_PORT}/api`,
	cache: new InMemoryCache(),
});

// https://www.codingdeft.com/posts/react-18-typescript-error/
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
	<ApolloProvider client={client}>
		<RouterProvider router={router} />
	</ApolloProvider>,
);
