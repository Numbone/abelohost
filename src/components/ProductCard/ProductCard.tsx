'use client';

import Image from 'next/image';
import { useAuthStore } from '@/store/authStore';
import { Product } from '@/types';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={250}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <span className={styles.category}>{product.category.toUpperCase()}</span>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
        {isAuthenticated() && (
          <button className={styles.addToCart}>Add to cart</button>
        )}
      </div>
    </div>
  );
}
