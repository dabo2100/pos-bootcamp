import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const params = useParams();
  console.log(params.hamda);
  return (
    <div>
      <h1>Product ID {params.productName}</h1>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
    </div>
  );
}
