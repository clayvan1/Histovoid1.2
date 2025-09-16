"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import "../globals.css";
import styles from "./FeaturedMasonry.module.css";

import { IMAGE_DATA } from "../../../data.js";

const Navbar = dynamic(() => import("../components/Nav"), { ssr: false, loading: () => null });
const TrueFocus = dynamic(() => import("../components/TrueFocus"), { ssr: false, loading: () => null });
const Masonry = dynamic(() => import("../components/Masonry"), { ssr: false, loading: () => <p>Loading gallery...</p> });
const LoadingOverlay = dynamic(() => import("../components/LoadingOverlay"), { ssr: false });

export default function CategoryPage() {
  const { category } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const imgId = searchParams.get("img");

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);

  // Drag-to-pan state
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const imageWrapperRef = useRef(null);

  const items = IMAGE_DATA.filter((img) => img.category.toLowerCase() === category.toLowerCase());

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (imgId && items.length > 0) {
      const index = items.findIndex((img) => img.id.toString() === imgId);
      if (index !== -1) {
        setCurrentIndex(index);
        setModalOpen(true);
        router.replace(`/${category}`, { scroll: false });
      }
    }
  }, [imgId, items, category, router]);

  useEffect(() => {
    document.body.style.overflow = modalOpen || loading ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [modalOpen, loading]);

  // Open modal
  const openModal = (index) => {
    setCurrentIndex(index);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setModalOpen(false);
  };

  // Next/Prev image
  const nextImage = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevImage = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Zoom handlers
  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoom((prev) => {
    const newZoom = Math.max(prev - 0.25, 1);
    if (newZoom === 1) setOffset({ x: 0, y: 0 }); // reset pan when zooming back to original
    return newZoom;
  });

  // Clamp offset so image stays in bounds
  const clampOffset = (x, y) => {
    const wrapper = imageWrapperRef.current;
    if (!wrapper) return { x, y };

    const img = items[currentIndex];
    const wrapperWidth = wrapper.clientWidth;
    const wrapperHeight = wrapper.clientHeight;
    const imgWidth = img.width * zoom;
    const imgHeight = img.height * zoom;

    const maxX = Math.max((imgWidth - wrapperWidth) / 2, 0);
    const maxY = Math.max((imgHeight - wrapperHeight) / 2, 0);

    return {
      x: Math.min(Math.max(x, -maxX), maxX),
      y: Math.min(Math.max(y, -maxY), maxY),
    };
  };

  // Drag handlers
  const onMouseDown = (e) => {
    if (zoom <= 1) return;
    setDragging(true);
    setStartPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };
  const onMouseMove = (e) => {
    if (!dragging) return;
    setOffset(clampOffset(e.clientX - startPos.x, e.clientY - startPos.y));
  };
  const onMouseUp = () => setDragging(false);
  const onMouseLeave = () => setDragging(false);

  // Touch handlers
  const onTouchStart = (e) => {
    if (zoom <= 1) return;
    const touch = e.touches[0];
    setDragging(true);
    setStartPos({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
  };
  const onTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    setOffset(clampOffset(touch.clientX - startPos.x, touch.clientY - startPos.y));
  };
  const onTouchEnd = () => setDragging(false);

  return (
    <div className={styles.homeContainer}>
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

      {modalOpen && items.length > 0 && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalTitle}>{items[currentIndex].title}</div>
          <button className={styles.closeBtn} onClick={closeModal}>✕</button>
          <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div
              ref={imageWrapperRef}
              className={styles.imageWrapper}
              style={{
                overflow: "hidden",
                cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default",
              }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={items[currentIndex].img}
                alt={items[currentIndex].title}
                width={items[currentIndex].width}
                height={items[currentIndex].height}
                style={{
                  transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                  transformOrigin: "center",
                  display: "block",
                }}
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
