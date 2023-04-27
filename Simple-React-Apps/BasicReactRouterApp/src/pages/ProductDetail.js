// 20. To know which id we have used, we need to import useParans hook. Which gives us parans object which contains every dynamic path segment we defined in our route definition.

// 21. In Products.js
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const params = useParams();

	return (
		<>
			<h1>Product's details</h1>
			<p>{params.productId}</p>
		</>
	);
};

export default ProductDetailPage;
