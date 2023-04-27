//3.  RouterProvider help us inform React which page/route should be loaded

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// 1. We making routes for out pages:
const router = createBrowserRouter([
	// 2. Route to our main page:
	// path is url, element is component which should be loaded
	// 8. If we want to share cerain element in many subpages, we need a wrapper. So we made a "Root.js" component. Then we need move out subpages to 'children' proporty of out root
	// 9. Now we need describe where we want our subpages to render. We moves to Root.js file...
	// 13. After making a custom error subpage, we need add propert 'errorElement'
	// 19. We can add object for every product detail page, but it's not a realistic approach. It could be too huge. We need use 'dynamic path segments' with ":" (colon) on the start. (20. in ProductDetail.js)

	// 23. We can define absolute paths and relative paths. Absolute ones start from the '/'. With relative paths we can use (just like inside console) the link to=".." which will back user to parent page
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/products", element: <ProductsPage /> },
			{ path: "/products/:productId", element: <ProductDetailPage /> },
		],
	},
]);

// // 5. Other way to making routes:
// const routeDefinitions = createRoutesFromElements(
// 	<Route>
// 		<Route
// 			path="/"
// 			element={<HomePage />}
// 		/>
// 		<Route
// 			path="/products"
// 			element={<ProductsPage />}
// 		/>
// 	</Route>
// );

// const router = createBrowserRouter(routeDefinitions);

// 4. Provider will look inside our router to decide which 'element' should be loaded, based on active 'path'
function App() {
	return <RouterProvider router={router} />;
}

export default App;
