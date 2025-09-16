"use client";
import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import "../globals.css";
import styles from "./FeaturedMasonry.module.css";

import { IMAGE_DATA } from "../../../data.js";

const Navbar = dynamic(() => import("../components/Nav"), { ssr: false, loading: () => null });
const TrueFocus = dynamic(() => import("../components/TrueFocus"), { ssr: false, loading: () => null });
const Masonry = dynamic(() => import("../components/Masonry"), { ssr: false, loading: () => <p>Loading gallery...</p> });
const LoadingOverlay = dynamic(() => import("../components/LoadingOverlay"), { ssr: false }); // ✅ loading overlay

export default function CategoryPage() {
  const { category } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const imgId = searchParams.get("img");

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);

  // Filter images for this category
  const items = IMAGE_DATA.filter((img) => img.category.toLowerCase() === category.toLowerCase());

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600); // adjust duration if needed
    return () => clearTimeout(timer);
  }, []);

  // Open modal if query param exists
  useEffect(() => {
    if (imgId && items.length > 0) {
      const index = items.findIndex((img) => img.id.toString() === imgId);
      if (index !== -1) {
        setCurrentIndex(index);
        setModalOpen(true);

        // Remove ?img from URL while staying on the same page
        const cleanPath = `/${category}`;
        router.replace(cleanPath, { scroll: false });
      }
    }
  }, [imgId, items, category, router]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen || loading ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [modalOpen, loading]);

  const openModal = (index) => { setCurrentIndex(index); setZoom(1); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 1));

  return (
    <div className={styles.homeContainer}>
      {/* Full-page loading overlay */}
      <LoadingOverlay isLoading={loading} />

      <Navbar />

      <div className="top">
        <TrueFocus
          sentence={`${category} Tissue`}
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      <div className={styles.masonryWrapper}>
        <Masonry
          items={items.map((item, index) => ({
            ...item,
            onClick: () => openModal(index),
          }))}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
          colorShiftOnHover
        />
      </div>

      {/* Image Modal */}
      {modalOpen && items.length > 0 && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalTitle}>{items[currentIndex].title}</div>
          <button className={styles.closeBtn} onClick={closeModal}>✕</button>
          <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={`${styles.imageWrapper} ${zoom > 1 ? styles.zoomed : ""}`}>
              <Image
                src={items[currentIndex].img}
                alt={items[currentIndex].title}
                width={items[currentIndex].width}
                height={items[currentIndex].height}
                style={{ transform: `scale(${zoom})` }}
                className={styles.modalImage}
              />
            </div>
            <div className={styles.zoomControls}>
              <button onClick={zoomIn}>＋</button>
              <button onClick={zoomOut}>－</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
