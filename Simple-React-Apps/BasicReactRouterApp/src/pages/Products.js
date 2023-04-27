// 18. Sometimes we could want to add some separate details page for the different products. To do that, we are adding component ProductDetail.js and add another route in out App.js (19.)

// 21. Now we want to add links to our products.

// 22. We can here have products info grabbed from the backend, and then use map() in our ul to map every product (REMEMBER ABOUT KEY PARAMETER!)
// {PRODUCTS.map((prod) => {
//     <li key={prop.id}>
//          <Link to={`/products/${prod.id}`}>{prod.title}<Link./>
//      </li>
// })}

// 23. In App.js

import { Link } from "react-router-dom";

const ProductsPage = () => {
	return (
		<>
			<h1>Products Page</h1>
			<ul>
				<li
					Link
					to="/products/product-1"
				>
					Product 1
				</li>
				<li
					Link
					to="/products/product-2"
				>
					Product 2
				</li>
				<li
					Link
					to="/products/product-3"
				>
					Product 3
				</li>
			</ul>
		</>
	);
};

export default ProductsPage;
