"use client";
import styles from "./LoadingOverlay.module.css";

export default function LoadingOverlay({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
}
