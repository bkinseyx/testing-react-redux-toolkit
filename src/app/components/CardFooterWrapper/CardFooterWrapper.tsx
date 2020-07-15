import React from 'react';
import styles from './CardFooterWrapper.module.css';

export const CardFooterWrapper: React.FC = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
