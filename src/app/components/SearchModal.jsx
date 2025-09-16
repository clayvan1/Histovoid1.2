"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IMAGE_DATA } from "../../../data.js";
import { FiX, FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "./SearchModal.module.css";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const timeout = setTimeout(() => {
      const lower = query.toLowerCase();
      setResults(
        IMAGE_DATA.filter(
          (item) =>
            item.title.toLowerCase().includes(lower) ||
            item.category.toLowerCase().includes(lower)
        )
      );
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  if (!isOpen) return null;

  const handleNavigate = (path, imgId) => {
    onClose(); // close modal
    // Smooth navigation using router.push
    router.push(`${path}?img=${imgId}`);
  };

  return (
    <div className={styles.overlay}>
      <motion.div
        className={styles.modalBox}
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <FiX size={22} />
        </button>

        <div className={styles.inputWrapper}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search tissues or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
            autoFocus
          />
        </div>

        {loading && <div className={styles.spinner}></div>}

        {!loading && (
          <ul className={styles.resultsList}>
            {results.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavigate(`/${item.category}`, item.id)}
              >
                <span className={styles.resultTitle}>{item.title}</span>
                <small className={styles.resultCategory}>{item.category}</small>
              </li>
            ))}
            {results.length === 0 && query && (
              <li className={styles.noResults}>No results found</li>
            )}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
