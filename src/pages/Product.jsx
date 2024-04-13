import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Error from '../components/Error';

function ProductPage({ onSelectProduct }) {
  const [isFetching, setIsFetching] = useState(false);
  const [prodData, setProduct] = useState([]);
  const [error, setError] = useState();

  const { company, product, token } = useParams();

  useEffect(() => {
    setIsFetching(true);

    async function fetchData() {
      try {
        const response = await fetch(
          `http://192.168.15.5:8000/${company}/${product}/${token}`,
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Could not fetch product.');
        }
        setProduct(data[0]);
      } catch (errorMes) {
        setError({
          message: errorMes.message || 'Could not fetch places.',
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Product
      title="Fetch Products"
      product={prodData}
      isLoading={isFetching}
      loadingText="Loading available places..."
      fallbackText="No places available."
      onSelectProduct={onSelectProduct}
    />
  );
}

export default ProductPage;
