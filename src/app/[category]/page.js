"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import "../globals.css";
import styles from "./FeaturedMasonry.module.css";
import GradientText from "../components/GradientText";
import { IMAGE_DATA } from "../../../data.js";
import Footers from "../components/Footers";

const Navbar = dynamic(() => import("../components/Nav"), { ssr: false, loading: () => null });
const Masonry = dynamic(() => import("../components/Masonry"), { ssr: false, loading: () => <p>Loading gallery...</p> });
const LoadingOverlay = dynamic(() => import("../components/LoadingOverlay"), { ssr: false });

const STORAGE_KEY = "galleryImages";

export default function CategoryPage() {
  const { category } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const imgId = searchParams.get("img");

  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [genderFilter, setGenderFilter] = useState("all");

  const imageWrapperRef = useRef(null);

  // =============================
  // === LOCAL STORAGE SYNCING ===
  // =============================
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setImages(parsed);
      } catch {
        setImages(IMAGE_DATA);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(IMAGE_DATA));
      }
    } else {
      setImages(IMAGE_DATA);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(IMAGE_DATA));
    }
  }, []);

  useEffect(() => {
    if (!images.length) return;
    const saved = localStorage.getItem(STORAGE_KEY);
    const savedArray = saved ? JSON.parse(saved) : null;

    if (JSON.stringify(savedArray) !== JSON.stringify(IMAGE_DATA)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(IMAGE_DATA));
      setImages(IMAGE_DATA);
    }
  }, [IMAGE_DATA]);

  // Items for this category
  const items = images.filter(
    (img) => img.category?.toLowerCase() === category.toLowerCase()
  );

  // Check if this category has male/female distinction
  const hasGender = items.some((img) => img.gender);

  // Apply gender filter
  const filteredItems =
    genderFilter === "all"
      ? items
      : items.filter((img) => img.gender === genderFilter);

  // =====================================================
  // === SEO OPTIMIZATION (Dynamic Title + Meta + JSONLD)
  // =====================================================
  useEffect(() => {
    if (!category || items.length === 0) return;

    const capitalizedCategory =
      category.charAt(0).toUpperCase() + category.slice(1);

    // Title
    document.title = `${capitalizedCategory} Histology Atlas | Microscopic Images`;

    // Meta description
    const description = `Explore a high-quality gallery of ${capitalizedCategory} tissue histology slides. View detailed microscopic images of ${category} structures for education and research.`;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // JSON-LD schema
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: `${capitalizedCategory} Histology Gallery`,
      description: `A collection of microscopic images for ${category} tissue.`,
      image: items.map((item) => ({
        "@type": "ImageObject",
        name: item.title,
        contentUrl: item.img,
        description: `A histology slide showing ${item.title}. Category: ${capitalizedCategory}.`,
      })),
    };

    const oldScript = document.getElementById("json-ld-schema");
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.id = "json-ld-schema";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("json-ld-schema");
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [category, items]);

  // ==================================
  // === Loading + Modal Management ===
  // ==================================
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (imgId && filteredItems.length > 0) {
      const index = filteredItems.findIndex((img) => img.id?.toString() === imgId);
      if (index !== -1) {
        setCurrentIndex(index);
        setModalOpen(true);
        setImageLoading(true);
        router.replace(`/${category}`, { scroll: false });
      }
    }
  }, [imgId, filteredItems, category, router]);

  useEffect(() => {
    if (!modalOpen || filteredItems.length === 0) return;
    const src = filteredItems[currentIndex]?.img;
    if (!src) {
      setImageLoading(false);
      return;
    }
    let cancelled = false;
    const pre = new window.Image();
    pre.src = src;
    if (pre.complete) {
      if (!cancelled) setImageLoading(false);
    } else {
      pre.onload = () => !cancelled && setImageLoading(false);
      pre.onerror = () => !cancelled && setImageLoading(false);
    }
    return () => {
      cancelled = true;
      pre.onload = null;
      pre.onerror = null;
    };
  }, [modalOpen, currentIndex, filteredItems]);

  useEffect(() => {
    document.body.style.overflow = modalOpen || loading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen, loading]);

  // =================================
  // === Modal Control + Navigation ===
  // =================================
  const openModal = (index) => {
    setCurrentIndex(index);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setImageLoading(true);
    setModalOpen(true);
  };

  const closeModal = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setModalOpen(false);
    setImageLoading(false);
  };

  const nextImage = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setImageLoading(true);
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setImageLoading(true);
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () =>
    setZoom((prev) => {
      const newZoom = Math.max(prev - 0.25, 1);
      if (newZoom === 1) setOffset({ x: 0, y: 0 });
      return newZoom;
    });

  const clampOffset = (x, y) => {
    const wrapper = imageWrapperRef.current;
    if (!wrapper) return { x, y };
    const img = filteredItems[currentIndex];
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
    if (zoom > 1) {
      setDragging(true);
      setStartPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };
  const onMouseMove = (e) => {
    if (dragging) setOffset(clampOffset(e.clientX - startPos.x, e.clientY - startPos.y));
  };
  const onMouseUp = () => setDragging(false);
  const onMouseLeave = () => setDragging(false);
  const onTouchStart = (e) => {
    if (zoom > 1) {
      const touch = e.touches[0];
      setDragging(true);
      setStartPos({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
    }
  };
  const onTouchMove = (e) => {
    if (dragging) {
      const touch = e.touches[0];
      setOffset(clampOffset(touch.clientX - startPos.x, touch.clientY - startPos.y));
    }
  };
  const onTouchEnd = () => setDragging(false);

  // =================================
  // === RENDER ======================
  // =================================
  return (
    <div className={styles.homeContainer}>
      <LoadingOverlay isLoading={loading} />
      <Navbar />

      <h1 className="Tope">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="Tope"
        >
          {`${category.charAt(0).toUpperCase() + category.slice(1)} Tissue`}
        </GradientText>
      </h1>

      {hasGender && (
        <div className={styles.filterButtons}>
          <button
            className={genderFilter === "male" ? styles.activeBtn : ""}
            onClick={() => setGenderFilter("male")}
          >
            Male
          </button>
          <button
            className={genderFilter === "female" ? styles.activeBtn : ""}
            onClick={() => setGenderFilter("female")}
          >
            Female
          </button>
          <button
            className={genderFilter === "all" ? styles.activeBtn : ""}
            onClick={() => setGenderFilter("all")}
          >
            All
          </button>
        </div>
      )}

      <div className={styles.masonryWrapper}>
        <Masonry
          items={filteredItems.map((item, index) => ({
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

      {modalOpen && filteredItems.length > 0 && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalTitle}>
            {filteredItems[currentIndex].title}
          </div>
          <button className={styles.closeBtn} onClick={closeModal}>✕</button>
          <button
            className={`${styles.arrowBtn} ${styles.arrowLeft}`}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>
          <button
            className={`${styles.arrowBtn} ${styles.arrowRight}`}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {imageLoading && (
              <div className={styles.spinnerOverlay}>
                <div className={styles.spinner}></div>
              </div>
            )}
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
                src={filteredItems[currentIndex].img}
                alt={filteredItems[currentIndex].title}
                width={filteredItems[currentIndex].width}
                height={filteredItems[currentIndex].height}
                onLoad={() => setImageLoading(false)}
                style={{
                  transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${
                    offset.y / zoom
                  }px)`,
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

      <Footers />
    </div>
  );
}
