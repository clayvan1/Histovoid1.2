"use client";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Masonry.css";

const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 1.03,
  blurToFocus = true,
}) => {
  // ✅ Updated breakpoints: always at least 2 columns
  const columns = useMedia(
    [
      "(min-width: 1500px)",
      "(min-width: 1000px)",
      "(min-width: 600px)",
      "(min-width: 400px)",
    ],
    [5, 4, 3, 2],
    2 // default always 2 columns
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  const cardGap = 20;
  const titleHeight = 40;

  // Preload images
  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  // Calculate grid positions
  const { gridItems, containerHeight } = useMemo(() => {
    if (!width || !items.length) return { gridItems: [], containerHeight: 0 };

    const totalHorizontalGap = cardGap * (columns - 1);
    const columnWidth = (width - totalHorizontalGap) / columns;
    const colHeights = Array(columns).fill(0);

    const resultGrid = items.map((child) => {
      const shortestColumnIndex = colHeights.indexOf(Math.min(...colHeights));
      const x = shortestColumnIndex * (columnWidth + cardGap);
      const y = colHeights[shortestColumnIndex];
      const aspectRatio = child.height / child.width;
      const imgHeight = columnWidth * aspectRatio;
      const cardHeight = imgHeight + titleHeight;

      colHeights[shortestColumnIndex] += cardHeight + cardGap;

      return { ...child, x, y, w: columnWidth, h: cardHeight };
    });

    return { gridItems: resultGrid, containerHeight: Math.max(...colHeights) - cardGap };
  }, [columns, items, width, cardGap, titleHeight]);

  const hasMounted = useRef(false);

  // Animate grid items
  useLayoutEffect(() => {
    if (!imagesReady) return;

    gridItems.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const initialState = {
        opacity: 0,
        x: item.x,
        y: item.y + 100,
        width: item.w,
        height: item.h,
        ...(blurToFocus && { filter: "blur(10px)" }),
      };

      if (!hasMounted.current) {
        gsap.fromTo(
          selector,
          initialState,
          {
            opacity: 1,
            x: item.x,
            y: item.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(selector, { x: item.x, y: item.y, width: item.w, height: item.h, duration, ease, overwrite: "auto" });
      }
    });

    if (containerRef.current) containerRef.current.style.height = `${containerHeight}px`;
    hasMounted.current = true;
  }, [gridItems, imagesReady, stagger, duration, ease, blurToFocus, containerHeight]);

  const handleMouseEnter = (item) => {
    if (scaleOnHover) gsap.to(`[data-key="${item.id}"]`, { scale: hoverScale, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (item) => {
    if (scaleOnHover) gsap.to(`[data-key="${item.id}"]`, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div ref={containerRef} className="list">
      {/* ✅ Spinner overlay */}
      {!imagesReady && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}

      {gridItems.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="item-wrapper"
          onClick={item.onClick}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          <img src={item.img} alt={item.title || item.id} className="item-img" />
          <div className="item-title">{item.title || `Image ${item.id}`}</div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
