"use client";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import "../../globals.css";
import styles from "./FeaturedMasonry.module.css";

// Dynamically import components to prevent server-side errors
const Navbar = dynamic(() => import('../../components/Nav'), {
  ssr: false, 
  loading: () => null
});

const TrueFocus = dynamic(() => import('../../components/TrueFocus'), {
  ssr: false,
  loading: () => null
});

const Masonry = dynamic(() => import('../../components/Masonry'), {
  ssr: false,
  loading: () => <p>Loading gallery...</p>
});


const items = [
  { id: "1", img: "/skin/mamary.jpg", width: 400, height: 600, title: "Mammary Gland" },
  { id: "2", img: "/urinary/kidney.jpg", width: 450, height: 600, title: "Kidney" },
  { id: "3", img: "/urinary/GLOMERULUS.jpg", width: 500, height: 650, title: "Glomerulus" },
  { id: "4", img: "/urinary/ureter.jpg", width: 520, height: 780, title: "Ureter" },
  { id: "5", img: "/reproductive/CS.jpg", width: 480, height: 620, title: "Corpus Spongiosum" },
  { id: "6", img: "/receptors/circumllate 5.jpg", width: 510, height: 660, title: "Circumvallate Papilla" },
  { id: "7", img: "/receptors/filiform.jpg", width: 400, height: 500, title: "Filiform Papilla" },
  { id: "8", img: "/receptors/Golgi tendon.jpg", width: 460, height: 580, title: "Golgi Tendon Organ" },
  { id: "9", img: "/receptors/ORgan of corti.jpg", width: 530, height: 620, title: "Organ of Corti" },
  { id: "10", img: "/receptors/Retina 3.jpg", width: 500, height: 660, title: "Retina" },
  { id: "11", img: "/receptors/foliate papilla.jpg", width: 470, height: 600, title: "Foliate Papilla" },
  { id: "12", img: "/endocrine/pituitary.jpg", width: 420, height: 540, title: "Pituitary Gland" },
  { id: "13", img: "/endocrine/THYROID.jpg", width: 490, height: 610, title: "Thyroid Gland" },
  { id: "14", img: "/endocrine/suparrenal.jpg", width: 510, height: 670, title: "Suprarenal (Adrenal) Gland" },
];

export default function EpithelialWebPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setZoom(1);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 1));

  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <div className="top">
        <TrueFocus
          sentence="Epithelial Tissue"
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

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalTitle}>{items[currentIndex].title}</div>
          <button className={styles.closeBtn} onClick={closeModal}>✕</button>
          <button
            className={`${styles.arrowBtn} ${styles.arrowLeft}`}
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            ‹
          </button>
          <button
            className={`${styles.arrowBtn} ${styles.arrowRight}`}
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            ›
          </button>
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
