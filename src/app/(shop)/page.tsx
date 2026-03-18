'use client';

import { useEffect, useState } from 'react';
import { getProducts } from '@/api/products';
import { Product } from '@/types';
import ProductCard from '@/components/ProductCard/ProductCard';
import Loader from '@/components/Loader/Loader';
import styles from './page.module.scss';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(12);
        setProducts(data.products);
      } catch {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <section>
      <h2 className={styles.heading}>Latest Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
