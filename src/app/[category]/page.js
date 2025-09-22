import { IMAGE_DATA } from "../../../data";
import CategoryClientPage from "./CategoryClientPage";

// ✅ Server-side SEO & Pinterest tags
export async function generateMetadata({ params }) {
  const { category } = await params; // ✅ FIX: await params

  if (!category || category === "favicon.ico") {
    return {
      title: "Histovoid | Microscopic Images Gallery",
      description: "An atlas of microscopic images for education and research.",
    };
  }

  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const description = `Explore a high-quality gallery of ${capitalizedCategory} tissue histology slides. View detailed microscopic images for education and research.`;

  const representativeImage = IMAGE_DATA.find(
    (img) => img.category?.toLowerCase() === category.toLowerCase()
  )?.img;

  return {
    title: `${capitalizedCategory} Histology Atlas | Microscopic Images`,
    description,
    openGraph: {
      title: `${capitalizedCategory} Histology Atlas`,
      description,
      images: [
        {
          url: representativeImage || "/default-og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      url: `/${category}`,
    },
  };
}

// ✅ Page component
export default async function CategoryPage({ params }) {
  const { category } = await params; // ✅ FIX: await params

  const items = IMAGE_DATA.filter(
    (img) => img.category?.toLowerCase() === category.toLowerCase()
  );

  return <CategoryClientPage items={items} category={category} />;
}
