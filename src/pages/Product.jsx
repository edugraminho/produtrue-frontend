import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Error from '../components/Error';

function ProductPage({ onSelectProduct }) {
  const [isFetching, setIsFetching] = useState(false);
  const [prodData, setProduct] = useState([]);
  const [error, setError] = useState();
  const [viewCount, setViewCount] = useState(0);
  const [prodId, setProdId] = useState();

  const { company, product, token } = useParams();

  useEffect(() => {
    setIsFetching(true);

    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:8000/${company}/${product}/${token}`,
        );
        const data = await response.json();

        setProdId(data[0].id);

        if (!response.ok) {
          throw new Error('Could not fetch product.');
        }
        setProduct(data[0]);
        setViewCount(data[0].views_count);
      } catch (errorMes) {
        setError({
          message: errorMes.message || 'Could not fetch places.',
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function updateViewCount() {
      try {
        await fetch(
          `http://localhost:8000/product/${prodId}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              views_count: viewCount + 1,
            }),
          }
        );
      } catch (errorView) {
        setError({
          message: errorView.message || 'Could not fetch places.',
        });
      }
    }

    if (viewCount !== 0) {
      updateViewCount();
    }
  }, [viewCount]);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Product
      title="Fetch Products"
      product={{ ...prodData, views_count: viewCount }}
      isLoading={isFetching}
      loadingText="Loading available places..."
      fallbackText="No places available."
      onSelectProduct={onSelectProduct}
    />
  );
}

export default ProductPage;
