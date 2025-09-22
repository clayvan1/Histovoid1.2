import { desc } from "framer-motion/m";
import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";
export const DATA_VERSION = "1.0.1";
export const IMAGE_DATA = [
  // 🫀 Cardio
{
id: "1",
img: "/Cardio/auricle.jpg",
width: 450,
height: 600,
title: "Auricle",
category: "cardio",
description: "Histology slide of the auricle showing cardiac muscle fibers and structural details.",
alt: "Auricle tissue under microscope",
keywords: ["auricle histology", "cardiac tissue", "heart auricle microscope"]
},
{
id: "164",
img: "/Cardio/cardiac-ventricle.jpg",
width: 450,
height: 600,
title: "Cardiac Ventricle",
category: "cardio",
description: "Histology slide of the cardiac ventricle showing cardiac muscle fibers and structural details.",
alt: "Cardiac ventricle tissue under microscope",
keywords: ["cardiac ventricle histology", "cardiac tissue", "heart ventricle microscope"]
},
{
id: "2",
img: "/Cardio/Elastic-artery.jpg",
width: 460,
height: 640,
title: "Elastic Artery",
category: "cardio",
description: "Microscopic section of an elastic artery highlighting elastic fibers in the tunica media.",
alt: "Elastic artery cross section histology",
keywords: ["elastic artery histology", "blood vessel microscope", "artery slide"]
},
{
id: "3",
img: "/Cardio/mascular-artery.jpg",
width: 470,
height: 630,
title: "Muscular Artery",
category: "cardio",
description: "Histological image of a muscular artery displaying smooth muscle arrangement.",
alt: "Muscular artery tissue sample",
keywords: ["muscular artery histology", "artery wall microscopy", "vascular tissue"]
},
{
id: "162",
img: "/Cardio/mascular-artery2.jpg",
width: 470,
height: 730,
title: "Muscular Artery",
category: "cardio",
description: "Histological image of a muscular artery displaying smooth muscle arrangement.",
alt: "Muscular artery tissue sample",
keywords: ["muscular artery histology", "artery wall microscopy", "vascular tissue"]
},
{
id: "4",
img: "/Cardio/vein.jpg",
width: 480,
height: 600,
title: "Vein-artery",
category: "cardio",
description: "Histology of a vein showing thinner tunica media compared to arteries.",
alt: "Vein histology under microscope",
keywords: ["vein histology", "venous tissue", "blood vessel slide"]
},
{
id: "5",
img: "/Cardio/Elastic-artery2.jpg",
width: 500,
height: 250,
title: "Elastic artery",
category: "cardio",
description: "Microscopic view of the elastic artery highlighting connective tissue and vascular layers.",
alt: "Elastic artery histology",
keywords: ["elastic artery histology", "large artery microscope", "vascular anatomy"]
},
{ 
  id: "6", 
  img: "/bone/compactbone2.jpg", 
  width: 480, 
  height: 620, 
  title: "Compact Bone", 
  category: "bone",
  description: "Histology image of compact bone showing tightly packed osteons that provide strength and support.",
  alt: "Microscopic image of compact bone tissue with osteons",
  keywords: ["compactbone", "osteons", "bone histology", "tissue structure"]
},
{ 
  id: "7", 
  img: "/bone/spongy bone.jpg", 
  width: 500, 
  height: 650, 
  title: "Spongy Bone", 
  category: "bone",
  description: "Histology slide of spongy bone displaying trabeculae with spaces that support bone marrow.",
  alt: "Microscopic view of spongy bone with trabeculae",
  keywords: ["spongy bone", "trabeculae", "bone marrow", "histology"]
},
{ 
  id: "83", 
  img: "/bone/compact-bone3.jpg", 
  width: 480, 
  height: 620, 
  title: "Compact Bone", 
  category: "bone",
  description: "Detailed histology view of compact bone highlighting the dense arrangement of osteons.",
  alt: "Histology of compact bone showing dense osteons",
  keywords: ["compact bone", "bone tissue", "osteons", "dense bone"]
},
{ 
  id: "84", 
  img: "/bone/yellowbonemarrow.jpg", 
  width: 500, 
  height: 650, 
  title: "Yellow Bone Marrow", 
  category: "bone",
  description: "Microscopic image of yellow bone marrow showing adipocytes and hematopoietic tissue.",
  alt: "Histology of yellow bone marrow with adipocytes",
  keywords: ["yellow bone marrow", "adipocytes", "hematopoietic tissue", "bone histology"]
},
{ 
  id: "8", 
  img: "/cartilage/articular2.jpg", 
  width: 510, 
  height: 680, 
  title: "Articular Cartilage", 
  category: "cartilage",
  description: "Histology image of articular cartilage showing smooth hyaline cartilage that cushions joints.",
  alt: "Microscopic image of articular cartilage in a joint surface",
  keywords: ["articular cartilage", "hyaline cartilage", "joint surface", "histology"]
},
{ 
  id: "94", 
  img: "/cartilage/hyaline.jpg", 
  width: 510, 
  height: 680, 
  title: "Hyaline (trachea)", 
  category: "cartilage",
  description: "Histology image of articular cartilage showing smooth hyaline cartilage that cushions joints.",
  alt: "Microscopic image of articular cartilage in a joint surface",
  keywords: ["articular cartilage", "hyaline cartilage", "joint surface", "histology"]
},
{ 
  id: "93", 
  img: "/cartilage/articular1.jpg", 
  width: 510, 
  height: 680, 
  title: "Articular Cartilage(2)", 
  category: "cartilage",
  description: "Histology image of articular cartilage showing smooth hyaline cartilage that cushions joints.",
  alt: "Microscopic image of articular cartilage in a joint surface",
  keywords: ["articular cartilage", "hyaline cartilage", "joint surface", "histology"]
},
{ 
  id: "9", 
  img: "/cartilage/elastic.jpg", 
  width: 420, 
  height: 540, 
  title: "Elastic Cartilage", 
  category: "cartilage",
  description: "Histology slide of elastic cartilage displaying elastic fibers that provide flexibility and support.",
  alt: "Microscopic view of elastic cartilage with elastic fibers",
  keywords: ["elastic cartilage", "cartilage histology", "flexible tissue", "elastic fibers"]
},
{ 
  id: "10", 
  img: "/cartilage/fibrocrtilage.jpg", 
  width: 490, 
  height: 610, 
  title: "Fibrocartilage", 
  category: "cartilage",
  description: "Histology view of fibrocartilage showing dense collagen fibers for strength and shock absorption.",
  alt: "Microscopic fibrocartilage tissue with collagen fibers",
  keywords: ["fibrocartilage", "collagen fibers", "cartilage tissue", "shock absorption"]
},
{ 
  id: "11", 
  img: "/cartilage/epiphseal plate.jpg", 
  width: 480, 
  height: 600, 
  title: "Epiphyseal Plate", 
  category: "cartilage",
  description: "Microscopic image of the epiphyseal plate, showing cartilage zones responsible for bone growth.",
  alt: "Histology of epiphyseal plate cartilage in bone growth",
  keywords: ["epiphyseal plate", "growth plate", "cartilage histology", "bone development"]
},
{ 
  id: "219", 
  img: "/cartilage/epiphysealplate2.jpg", 
  width: 480, 
  height: 600, 
  title: "Epiphyseal Plate(2)", 
  category: "cartilage",
  description: "Microscopic image of the epiphyseal plate, showing cartilage zones responsible for bone growth.",
  alt: "Histology of epiphyseal plate cartilage in bone growth",
  keywords: ["epiphyseal plate", "growth plate", "cartilage histology", "bone development"]
},
{ 
  id: "92", 
  img: "/cartilage/costal.jpg", 
  width: 480, 
  height: 600, 
  title: "Costal Cartilage", 
  category: "cartilage",
  description: "Microscopic image of costal cartilage, showing the structure that connects ribs to the sternum.",
  alt: "Histology of costal cartilage in rib structure",
  keywords: ["costal cartilage", "rib cartilage", "cartilage histology", "sternum connection"]
},
{ 
  id: "86", 
  img: "/cartilage/epiphseal plate.jpg", 
  width: 480, 
  height: 600, 
  title: "Epiphyseal Plate", 
  category: "bone",
  description: "Histology slide of an epiphyseal plate viewed as part of bone tissue, highlighting endochondral ossification.",
  alt: "Bone histology image of epiphyseal plate for ossification",
  keywords: ["epiphyseal plate", "bone growth", "endochondral ossification", "histology"]
},

{ 
  id: "12", 
  img: "/connective/mocous 4.jpg", 
  width: 460, 
  height: 590, 
  title: "Mucous Connective Tissue", 
  category: "connective",
  description: "Histology slide of mucous connective tissue, also known as Wharton's jelly, rich in ground substance and found in the umbilical cord.",
  alt: "Microscopic image of mucous connective tissue (Wharton's jelly)",
  keywords: ["mucous connective tissue", "Wharton's jelly", "umbilical cord", "connective tissue histology"]
},
{ 
  id: "13", 
  img: "/connective/elastic fiber.jpg", 
  width: 500, 
  height: 640, 
  title: "Elastic Fibers", 
  category: "connective",
  description: "Histology image of elastic fibers in connective tissue, showing thin dark strands that provide flexibility and resilience.",
  alt: "Microscopic view of elastic fibers in connective tissue",
  keywords: ["elastic fibers", "connective tissue", "elastic tissue histology", "flexibility fibers"]
},
{ 
  id: "14", 
  img: "/connective/Reticular.jpg", 
  width: 520, 
  height: 650, 
  title: "Reticular Tissue", 
  category: "connective",
  description: "Histology slide of reticular tissue, displaying a network of reticular fibers that support soft organs like lymph nodes and spleen.",
  alt: "Microscopic image of reticular tissue with fiber network",
  keywords: ["reticular tissue", "reticular fibers", "lymphoid organs", "connective tissue histology"]
},
{ 
  id: "15", 
  img: "/connective/dense connective.jpg", 
  width: 530, 
  height: 670, 
  title: "Dense Connective Tissue", 
  category: "connective",
  description: "Histology image of dense connective tissue with tightly packed collagen fibers, providing strength and resistance to stretching.",
  alt: "Microscopic view of dense connective tissue with collagen fibers",
  keywords: ["dense connective tissue", "collagen fibers", "tendon histology", "connective tissue strength"]
}
,
{ 
  id: "88", 
  img: "/connective/denseirregular.jpg", 
  width: 530, 
  height: 670, 
  title: "Dense Irregular Connective Tissue", 
  category: "connective",
  description: "Histology image of dense irregular connective tissue with collagen fibers arranged in various directions, providing strength and support.",
  alt: "Microscopic view of dense irregular connective tissue with collagen fibers",
  keywords: ["dense irregular connective tissue", "collagen fibers", "supportive tissue", "connective tissue histology"]
}
,
{ 
  id: "89", 
  img: "/connective/looseconnectivetissue.jpg", 
  width: 530, 
  height: 670, 
  title: "Loose Connective Tissue", 
  category: "connective",
  description: "Histology image of loose connective tissue, characterized by a loose arrangement of fibers and abundant ground substance, providing support and flexibility.",
  alt: "Microscopic view of loose connective tissue with collagen fibers",
  keywords: ["loose connective tissue", "collagen fibers", "supportive tissue", "connective tissue histology"]
}
,
{ 
  id: "90", 
  img: "/connective/mesenchyme.jpg", 
  width: 530, 
  height: 670, 
  title: "Mesenchyme", 
  category: "connective",
  description: "Histology image of mesenchyme, a type of loose connective tissue, characterized by a loose arrangement of fibers and abundant ground substance, providing support and flexibility.",
  alt: "Microscopic view of mesenchyme with collagen fibers",
  keywords: ["mesenchyme", "collagen fibers", "supportive tissue", "connective tissue histology"]
},
{ 
  id: "91", 
  img: "/connective/adipose.jpg", 
  width: 530, 
  height: 670, 
  title: "Adipose Tissue", 
  category: "connective",
  description: "Histology image of adipose tissue, a type of loose connective tissue, characterized by a loose arrangement of fibers and abundant ground substance, providing support and flexibility.",
  alt: "Microscopic view of adipose tissue with collagen fibers",
  keywords: ["adipose", "collagen fibers", "supportive tissue", "connective tissue histology"]
}
,
{ 
  id: "16", 
  img: "/eye/CORNEA.jpg", 
  width: 450, 
  height: 500, 
  title: "Cornea", 
  category: "eye",
  description: "Histology slide of the cornea showing its transparent layers, responsible for refracting light in the eye.",
  alt: "Microscopic image of cornea tissue layers",
  keywords: ["cornea histology", "corneal tissue", "eye anatomy", "transparent eye layer"]
},
{ 
  id: "130", 
  img: "/eye/eye-lid.jpg", 
  width: 460, 
  height: 690, 
  title: "Eyelid", 
  category: "eye",
  description: "Histology image of the eyelid, showing skin, glands, and connective tissue that protect the eye.",
  alt: "Microscopic view of eyelid tissue with glands and skin layers",
  keywords: ["eyelid histology", "meibomian glands", "eye protection tissue", "eyelid anatomy"]
},
{ 
  id: "17", 
  img: "/eye/eye-lid2.jpg", 
  width: 460, 
  height: 590, 
  title: "Eyelid", 
  category: "eye",
  description: "Histology image of the eyelid, showing skin, glands, and connective tissue that protect the eye.",
  alt: "Microscopic view of eyelid tissue with glands and skin layers",
  keywords: ["eyelid histology", "meibomian glands", "eye protection tissue", "eyelid anatomy"]
},
{ 
  id: "18", 
  img: "/eye/SCLERA 2.jpg", 
  width: 480, 
  height: 310, 
  title: "Sclera", 
  category: "eye",
  description: "Histology slide of the sclera, the dense connective tissue that forms the white part of the eye and provides structural support.",
  alt: "Microscopic image of sclera connective tissue",
  keywords: ["sclera histology", "white of the eye", "eye connective tissue", "ocular anatomy"]
}
,
{ 
  id: "132", 
  img: "/eye/iris-histology2.jpg", 
  width: 480, 
  height: 510, 
  title: "Iris", 
  category: "eye",
  description: "Histology slide of the iris, the colored part of the eye that controls the size of the pupil and the amount of light entering the eye.",
  alt: "Microscopic image of iris tissue",
  keywords: ["iris histology", "colored part of the eye", "pupil control", "ocular anatomy"]
}
,
{ 
  id: "133", 
  img: "/eye/iris-histology.jpg", 
  width: 480, 
  height: 610, 
  title: "Iris", 
  category: "eye",
  description: "Histology slide of the iris, the colored part of the eye that controls the size of the pupil and the amount of light entering the eye.",
  alt: "Microscopic image of iris tissue",
  keywords: ["iris histology", "colored part of the eye", "pupil control", "ocular anatomy"]
}
,
{ 
  id: "134", 
  img: "/eye/ciliary-body-histology.jpg", 
  width: 480, 
  height: 510, 
  title: "Ciliary Body", 
  category: "eye",
  description: "Histology slide of the ciliary body, the structure in the eye that produces aqueous humor and helps in lens accommodation.",
  alt: "Microscopic image of ciliary body tissue",
  keywords: ["ciliary body histology", "aqueous humor", "lens accommodation", "ocular anatomy"]
}
,
{ 
  id: "135", 
  img: "/eye/eye-ball-histology.jpg", 
  width: 480, 
  height: 510, 
  title: "Eye Ball", 
  category: "eye",
  description: "Histology slide of the eye ball, showing the various layers and structures within the eye.",
  alt: "Microscopic image of eye ball tissue",
  keywords: ["eye ball histology", "ocular anatomy", "eye layers", "eye structures"]
}
,
{ 
  id: "136", 
  img: "/receptors/retina-histology.jpg", 
  width: 480, 
  height: 510, 
  title: "Retina", 
  category: "eye",
  description: "Histology slide of the retina, the light-sensitive layer at the back of the eye that converts light into neural signals.",
  alt: "Microscopic image of retina tissue",
  keywords: ["retina histology", "light-sensitive layer", "neural signals", "ocular anatomy"]
}
,
{ 
  id: "137", 
  img: "/eye/cornea-histology.jpg", 
  width: 480, 
  height: 510, 
  title: "Cornea", 
  category: "eye",
  description: "Histology slide of the cornea, the transparent front part of the eye that covers the iris and pupil.",
  alt: "Microscopic image of cornea tissue",
  keywords: ["cornea histology", "transparent layer", "ocular anatomy"]
}
,
{ 
  id: "138", 
  img: "/eye/lacrimal-gland.jpg", 
  width: 480, 
  height: 410, 
  title: "Lacrimal Gland", 
  category: "eye",
  description: "Histology slide of the lacrimal gland, responsible for producing tears to lubricate the eye.",
  alt: "Microscopic image of lacrimal gland tissue",
  keywords: ["lacrimal gland histology", "tear production", "ocular anatomy"]
}
,
  { 
    id: "19", 
    img: "/git/duodenum-histology.jpg", 
    width: 520, 
    height: 640, 
    title: "Duodenum", 

    category: "git", 
    description: "Histology slide of the duodenum showing Brunner's glands in the submucosa.",
    alt: "Microscopic image of duodenum with Brunner's glands",
    keywords: ["duodenum", "Brunner's glands", "small intestine", "histology"]
  },
  { 
    id: "212", 
    img: "/git/duodenum-histology-brunners.jpg", 
    width: 520, 
    height: 440, 
    title: "Duodenum", 

    category: "git", 
    description: "Histology slide of the duodenum showing Brunner's glands in the submucosa.",
    alt: "Microscopic image of duodenum with Brunner's glands",
    keywords: ["duodenum", "Brunner's glands", "small intestine", "histology"]
  },
  { 
    id: "20", 
    img: "/git/esophagus-histology.jpg", 
    width: 500, 
    height: 640, 
    title: "Esophagus  - Stratified Squamous Epithelium", 
    category: "git",
    description: "Histology slide of the esophagus showing stratified squamous epithelium and muscular layers.",
    alt: "Microscopic image of esophagus with stratified squamous epithelium",
    keywords: ["esophagus", "stratified squamous epithelium", "muscular layers", "histology"]
  },
  { 
    id: "145", 
    img: "/git/esophagus-histology2.jpg", 
    width: 500, 
    height: 440, 
    title: "Esophagus ", 
    category: "git",
    description: "Histology slide of the esophagus showing stratified squamous epithelium and muscular layers.",
    alt: "Microscopic image of esophagus with stratified squamous epithelium",
    keywords: ["esophagus", "stratified squamous epithelium", "muscular layers", "histology"]
  },
  { 
    id: "146", 
    img: "/git/esophagus-histology3.jpg", 
    width: 500, 
    height: 540, 
    title: "Esophagus ", 
    category: "git",
    description: "Histology slide of the esophagus showing stratified squamous epithelium and muscular layers.",
    alt: "Microscopic image of esophagus with stratified squamous epithelium",
    keywords: ["esophagus", "stratified squamous epithelium", "muscular layers", "histology"]
  },
  { 
    id: "147", 
    img: "/git/esophagus-histology3.jpg", 
    width: 500, 
    height: 640, 
    title: "Esophagus ", 
    category: "git",
    description: "Histology slide of the esophagus showing stratified squamous epithelium and muscular layers.",
    alt: "Microscopic image of esophagus with stratified squamous epithelium",
    keywords: ["esophagus", "stratified squamous epithelium", "muscular layers", "histology"]
  },
  { 
    id: "21", 
    img: "/git/gastro-esophageal-junction.jpg", 
    width: 480, 
    height: 530, 
    title: "Gastro-Esophageal Junction - Transition from Esophagus to Stomach", 
    category: "git",
    description: "Histology slide of the gastro-esophageal junction showing the transition from stratified squamous epithelium to simple columnar epithelium.",
    alt: "Microscopic image of gastro-esophageal junction with epithelial transition",
    keywords: ["gastro-esophageal junction", "epithelial transition", "esophagus to stomach", "histology"]
  },
  { 
    id: "149", 
    img: "/git/gastro-duodenal-junction.jpg", 
    width: 480, 
    height: 430, 
    title: "Gastro-Duodenal Junction - Transition from Stomach to Duodenum", 
    category: "git",
    description: "Histology slide of the gastro-esophageal junction showing the transition from stratified squamous epithelium to simple columnar epithelium.",
    alt: "Microscopic image of gastro-esophageal junction with epithelial transition",
    keywords: ["gastro-esophageal junction", "epithelial transition", "esophagus to stomach", "histology"]
  },
  { 
    id: "22", 
    img: "/git/jejunum-histology.jpg", 
    width: 510, 
    height: 650, 
    title: "Jejunum Histology", 
    category: "git" ,
    description: "Histology slide of the jejunum showing small intestine villi and crypts.",
    alt: "Microscopic image of jejunum with villi and crypts",
    keywords: ["jejunum", "small intestine", "villi", "crypts", "histology"]
  },
  { 
    id: "150", 
    img: "/git/jejunum-histology2.jpg", 
    width: 510, 
    height: 650, 
    title: "Jejunum Histology - Small Intestine Villi and Crypts", 
    category: "git",
    description: "Histology slide of the jejunum showing small intestine villi and crypts.",
    alt: "Microscopic image of jejunum with villi and crypts",
    keywords: ["jejunum", "small intestine", "villi", "crypts", "histology"]
  },
  { 
    id: "23", 
    img: "/git/large-intestine-histology2.jpg", 
    width: 530, 
    height: 680, 
    title: "Large Intestine Histology - Colon with Crypts", 
    category: "git" 
  },
  { 
    id: "151", 
    img: "/git/rectum.jpg", 
    width: 530, 
    height: 680, 
    title: "Rectum-anal junstion", 
    category: "git"
     
  },
  { 
    id: "200", 
    img: "/git/tongue.jpg", 
    width: 530, 
    height: 680, 
    title: "Tongue ", 
    category: "git"

  },
  { 
    id: "24", 
    img: "/git/lip-histology.jpg", 
    width: 420, 
    height: 540, 
    title: "Lip parascutaneous", 
    category: "git" ,
    description: "Histology slide of the lip showing the transition from oral mucosa to skin.",
    alt: "Microscopic image of lip tissue with oral mucosa and skin junction",
    keywords: ["lip histology", "oral mucosa", "skin junction", "histology"]
  },
  { 
    id: "148", 
    img: "/git/lip-histology2.jpg", 
    width: 420, 
    height: 540, 
    title: "Lip  parsinterna", 
    category: "git" ,
  description: "Histology slide of the lip showing the transition from oral mucosa to skin.",
    alt: "Microscopic image of lip tissue with oral mucosa and skin junction",
    keywords: ["lip histology", "oral mucosa", "skin junction", "histology"]
  },
  { 
    id: "25", 
    img: "/git/stomach-histology.jpg", 
    width: 460, 
    height: 500, 
    title: "Stomach Body ", 
    category: "git",
    description: "Histology slide of the stomach showing gastric pits and glands in the mucosa.",
    alt: "Microscopic image of stomach with gastric pits and glands",
    keywords: ["stomach histology", "gastric pits", "gastric glands", "histology"]
  },
  { 
    id: "190", 
    img: "/git/stomach-histology2.jpg", 
    width: 460, 
    height: 480, 
    title: "Stomach ", 
    category: "git",
    description: "Histology slide of the stomach showing gastric pits and glands in the mucosa.",
    alt: "Microscopic image of stomach with gastric pits and glands",
    keywords: ["stomach histology", "gastric pits", "gastric glands", "histology"]
  },

  // 🍇 GIT Glands
  { 
    id: "26", 
    img: "/git-glands/liver-histology.jpg", 
    width: 500, 
    height: 640, 
    title: "Liver Histology - Hepatocytes and Central Vein", 
    category: "gitglands" ,
    description: "Histology slide of the liver showing hepatocytes arranged in lobules around a central vein.",
    alt: "Microscopic image of the liver with hepatocytes and central vein",
    keywords: ["liver histology", "hepatocytes", "central vein", "liver lobules"]
  },
  { 
    id: "153", 
    img: "/git-glands/liver-histology3.jpg", 
    width: 500, 
    height: 640, 
    title: "portal canal", 
    category: "gitglands" ,
    description: "Histology slide of the liver showing portal canals.",
    alt: "Microscopic image of the liver with hepatocytes and central vein",
    keywords: ["liver histology", "hepatocytes", "central vein", "liver lobules"]
  },
  // 🍇 GIT Glands
  { 
    id: "152", 
    img: "/git-glands/liver-histology2.jpg", 
    width: 500, 
    height: 440, 
    title: "Liver Histology", 
    category: "gitglands" 
  },
  { 
    id: "155", 
    img: "/git-glands/gall-bladder-histology.jpg", 
    width: 480, 
    height: 520, 
    title: "Gall Bladder Histology - Simple Columnar Epithelium", 
    category: "gitglands",
    description: "Histology slide of the gall bladder showing simple columnar epithelium and muscular layers.",
    alt: "Microscopic image of gall bladder with simple columnar epithelium",
    keywords: ["gall bladder histology", "simple columnar epithelium", "muscular layers", "histology"] 
  },
  { 
    id: "27", 
    img: "/git-glands/gall-bladder-histology2.jpg", 
    width: 480, 
    height: 420, 
    title: "Gall Bladder Histology - Simple Columnar Epithelium", 
    category: "gitglands",
    description: "Histology slide of the gall bladder showing simple columnar epithelium and muscular layers.",
    alt: "Microscopic image of gall bladder with simple columnar epithelium",
    keywords: ["gall bladder histology", "simple columnar epithelium", "muscular layers", "histology"] 
  },
  { 
    id: "28", 
    img: "/git-glands/parotid-gland-histology.jpg", 
    width: 510, 
    height: 660, 
    title: "Parotid Salivary Gland Histology - Serous Acini", 
    category: "gitglands" 
  },
  { 
    id: "29", 
    img: "/git-glands/submandibular-gland-histology.jpg", 
    width: 520, 
    height: 670, 
    title: "Submandibular Salivary Gland Histology - Mixed Serous and Mucous Acini", 
    category: "gitglands" 
  },
  { 
    id: "30", 
    img: "/git-glands/pancreas-histology.jpg", 
    width: 530, 
    height: 680, 
    title: "Pancreas Histology - Islets of Langerhans and Acinar Cells", 
    category: "gitglands" 
  },
  { 
    id: "31", 
    img: "/git-glands/sublingual-gland-histology.jpg", 
    width: 450, 
    height: 600, 
    title: "Sublingual Salivary Gland Histology - Predominantly Mucous Acini", 
    category: "gitglands" 
  },{ 
    id: "32", 
    img: "/immune/lymphoid-tissue-histology.jpg", 
    width: 500, 
    height: 650, 
    title: "Lymphoid Tissue ", 
    category: "immune" ,
    description: "Histology slide of lymphoid tissue showing densely packed lymphocytes and germinal centers.",
    alt: "Microscopic image of lymphoid tissue with lymphocytes and germinal centers",
    keywords: ["lymphoid tissue", "lymphocytes", "germinal centers", "immune histology"]
  },
  { 
    id: "33", 
    img: "/immune/palatine-tonsils-histology.jpg", 
    width: 380, 
    height: 600, 
    title: "Palatine Tonsils", 
    category: "immune", 
    description: "Histology slide of palatine tonsils showing lymphoid follicles with germinal centers.",
    alt: "Microscopic image of palatine tonsils with lymphoid follicles",
    keywords: ["palatine tonsils", "lymphoid follicles", "germinal centers", "immune histology"]
  },
  { 
    id: "34", 
    img: "/immune/spleen-histology.jpg", 
    width: 520, 
    height: 670, 
    title: "Spleen Histology", 
    category: "immune" ,
    description: "Histology slide of the spleen showing white pulp and red pulp regions.",
    alt: "Microscopic image of spleen with white pulp and red pulp",
    keywords: ["spleen histology", "white pulp", "red pulp", "immune organ"]
  },
  { 
    id: "169", 
    img: "/immune/spleen-histology2.jpg", 
    width: 520, 
    height: 670, 
    title: "Spleen Histology", 
    category: "immune" ,
    description: "Histology slide of the spleen showing white pulp and red pulp regions.",
    alt: "Microscopic image of spleen with white pulp and red pulp",
    keywords: ["spleen histology", "white pulp", "red pulp", "immune organ"]
  },
  { 
    id: "35", 
    img: "/immune/appendix-histology.jpg", 
    width: 510, 
    height: 660, 
    title: "Appendix Histology", 
    category: "immune",
    description: "Histology slide of the appendix showing lymphoid nodules in the mucosa and submucosa.",
    alt: "Microscopic image of appendix with lymphoid nodules",
    keywords: ["appendix histology", "lymphoid nodules", "mucosa", "submucosa", "immune organ"]
  },
  { 
    id: "36", 
    img: "/immune/thymus-histology.jpg", 
    width: 490, 
    height: 640, 
    title: "Thymus Histology - Cortex, Medulla, and Hassall’s Corpuscles", 
    category: "immune" ,
    description: "Histology slide of the thymus showing the cortex, medulla, and Hassall's corpuscles.",
    alt: "Microscopic image of thymus with cortex, medulla, and Hassall's corpuscles",
    keywords: ["thymus histology", "cortex", "medulla", "Hassall's corpuscles", "immune organ"]
  },
  { 
    id: "170", 
    img: "/immune/bone-marrow.jpg", 
    width: 490, 
    height: 640, 
    title: "Thymus Histology - Cortex, Medulla, and Hassall’s Corpuscles", 
    category: "immune" ,
    description: "Histology slide of the thymus showing the cortex, medulla, and Hassall's corpuscles.",
    alt: "Microscopic image of thymus with cortex, medulla, and Hassall's corpuscles",
    keywords: ["thymus histology", "cortex", "medulla", "Hassall's corpuscles", "immune organ"]
  },
  // 💪 Muscles
  { 
    id: "37", 
    img: "/muscles/cardiac-muscle-histology.jpg", 
    width: 460, 
    height: 580, 
    title: "Cardiac Muscle ", 
    category: "propulsion" ,
    description: "Histology slide of cardiac muscle tissue showing striated fibers with intercalated discs.",
    alt: "Microscopic image of cardiac muscle with striations and intercalated discs",
    keywords: ["cardiac muscle", "heart muscle tissue", "striated fibers", "intercalated discs"]
  },
  { 
    id: "38", 
    img: "/muscles/skeletal-muscle-histology.jpg", 
    width: 500, 
    height: 660, 
    title: "Skeletal Muscle ", 
    category: "propulsion" ,
    description: "Histology slide of skeletal muscle tissue showing striated fibers and peripheral nuclei.",
    alt: "Microscopic image of skeletal muscle with striations and peripheral nuclei",
    keywords: ["skeletal muscle", "striated fibers", "peripheral nuclei", "muscle tissue"]
  },
  { 
    id: "99", 
    img: "/muscles/skeletal-muscle-histology5.jpg", 
    width: 400, 
    height: 460, 
    title: "Skeletal Muscle ", 
    category: "propulsion" ,
    description: "Histology slide of skeletal muscle tissue showing striated fibers and peripheral nuclei.",
    alt: "Microscopic image of skeletal muscle with striations and peripheral nuclei",
    keywords: ["skeletal muscle", "striated fibers", "peripheral nuclei", "muscle tissue"]
  },
  { 
    id: "101", 
    img: "/muscles/myoepithelial-cells.jpg", 
    width: 400, 
    height: 360, 
    title: "Myoepithelial Cells", 
    category: "propulsion" ,
    description: "Histology slide of myoepithelial cells located between the basal lamina and the epithelial cells of glandular tissue.",
    alt: "Microscopic image of myoepithelial cells between basal lamina and epithelial cells",
    keywords: ["myoepithelial cells", "glandular tissue", "basal lamina", "histology"]
  },
  { 
    id: "102", 
    img: "/muscles/cardiac-muscle-histology2.jpg", 
    width: 400, 
    height: 460, 
    title: "Cardiac Muscle", 
    category: "propulsion" ,
    description: "Histology slide of cardiac muscle tissue showing striated fibers with intercalated discs.",
    alt: "Microscopic image of cardiac muscle with striations and intercalated discs",
    keywords: ["cardiac muscle", "heart muscle tissue", "striated fibers", "intercalated discs"]
  },
  { 
    id: "104", 
    img: "/muscles/smooth-muscle-histology.jpg", 
    width: 500, 
    height: 460, 
    title: "Smooth Muscle", 
    category: "propulsion" ,
    description: "Histology slide of smooth muscle tissue showing non-striated fibers and central nuclei.",
    alt: "Microscopic image of smooth muscle with non-striated fibers and central nuclei",
    keywords: ["smooth muscle", "non-striated fibers", "central nuclei", "muscle tissue"]
  },
  { 
    id: "105", 
    img: "/muscles/smooth-muscle-histology3.jpg", 
    width: 500, 
    height: 460, 
    title: "Smooth Muscle", 
    category: "propulsion" ,
    description: "Histology slide of smooth muscle tissue showing non-striated fibers and central nuclei.",
    alt: "Microscopic image of smooth muscle with non-striated fibers and central nuclei",
    keywords: ["smooth muscle", "non-striated fibers", "central nuclei", "muscle tissue"]
  },
  { 
    id: "103", 
    img: "/muscles/skeletal-muscle-histology3.jpg", 
    width: 300, 
    height: 460, 
    title: "Skeletal Muscle ", 
    category: "propulsion" ,
    description: "Histology slide of skeletal muscle tissue showing striated fibers and peripheral nuclei.",
    alt: "Microscopic image of skeletal muscle with striations and peripheral nuclei",
    keywords: ["skeletal muscle", "striated fibers", "peripheral nuclei", "muscle tissue"]
  },
  { 
    id: "98", 
    img: "/muscles/skeletal-muscle-histology2.jpg", 
    width: 500, 
    height: 660, 
    title: "Skeletal Muscle ", 
    category: "propulsion" ,
    description: "Histology slide of skeletal muscle tissue showing striated fibers and peripheral nuclei.",
    alt: "Microscopic image of skeletal muscle with striations and peripheral nuclei",
    keywords: ["skeletal muscle", "striated fibers", "peripheral nuclei", "muscle tissue"]
  },

  { 
    id: "39", 
    img: "/nervous-tissue/dorsal-root-ganglion-histology.jpg", 
    width: 490, 
    height: 640, 
    title: "Dorsal Root Ganglion", 
    category: "nervous" ,
  description: "Histology slide of dorsal root ganglion showing clusters of sensory neuron cell bodies.",
  alt: "Microscopic image of dorsal root ganglion with neuron cell bodies",
  keywords: ["dorsal root ganglion", "sensory neurons", "nerve tissue", "histology"]
  },
  { 
    id: "95", 
    img: "/nervous-tissue/dorsal-root-ganglion-histology2.jpg", 
    width: 490, 
    height: 540, 
    title: "Dorsal Root Ganglion", 
    category: "nervous" ,
  description: "Histology slide of dorsal root ganglion showing clusters of sensory neuron cell bodies.",
  alt: "Microscopic image of dorsal root ganglion with neuron cell bodies",
  keywords: ["dorsal root ganglion", "sensory neurons", "nerve tissue", "histology"]
  },
  { 
    id: "40", 
    img: "/nervous-tissue/purkinje-neurons-histology.jpg", 
    width: 520, 
    height: 600, 
    title: "Purkinje Neurons ", 
    category: "nervous" ,
    description: "Histology slide of Purkinje neurons in the cerebellum, showing large branching dendrites and a single axon.",
    alt: "Microscopic image of Purkinje neurons with dendrites",
    keywords: ["Purkinje neurons", "cerebellum", "nerve cells", "histology"]
  },
  { 
    id: "41", 
    img: "/nervous-tissue/pyramidal-neurons-histology.jpg", 
    width: 530, 
    height: 680, 
    title: "Pyramidal Neurons ", 
    category: "nervous" ,
    description: "Histology slide of pyramidal neurons in the cerebral cortex, showing triangular cell bodies and long apical dendrites.",
    alt: "Microscopic image of pyramidal neurons with dendrites",
    keywords: ["pyramidal neurons", "cerebral cortex", "nerve cells", "histology"]
  },
  { 
    id: "42", 
    img: "/nervous-tissue/fibrous-astrocytes-histology.jpg", 
    width: 460, 
    height: 500, 
    title: "Fibrous Astrocytes", 
    category: "nervous" ,
    description: "Histology slide of fibrous astrocytes in white matter, showing star-shaped glial cells with long processes.",
    alt: "Microscopic image of fibrous astrocytes in white matter",
    keywords: ["fibrous astrocytes", "glial cells", "white matter", "histology"]
  },
  { 
    id: "96", 
    img: "/nervous-tissue/protoplasmic-astrocytes-histology.jpg", 
    width: 460, 
    height: 400, 
    title: "Protoplasmic Astrocytes", 
    category: "nervous" ,
    description: "Histology slide of protoplasmic astrocytes in gray matter, showing bushy glial cells with numerous processes.",
    alt: "Microscopic image of protoplasmic astrocytes in gray matter",
    keywords: ["protoplasmic astrocytes", "glial cells", "gray matter", "histology"]
  },
  { 
    id: "97", 
    img: "/nervous-tissue/spiny-stellate-histology.jpg", 
    width: 460, 
    height: 400, 
    title: "Spiny Astrocytes", 
    category: "nervous" ,
    description: "Histology slide of spiny stellate astrocytes in gray matter, showing star-shaped glial cells with numerous processes.",
    alt: "Microscopic image of spiny stellate astrocytes in gray matter",
    keywords: ["spiny stellate astrocytes", "glial cells", "gray matter", "histology"]
  },

  // 🧩 Nervous System
  { 
    id: "43", 
    img: "/nervous-system/cerebral-cortex2.jpg", 
    width: 500, 
    height: 740, 
    title: "Cerebral Cortex", 
    category: "nervoussystem" ,
    description: "Histology slide of the cerebral cortex showing its layered structure with distinct neuronal types.",
    alt: "Microscopic image of cerebral cortex layers",
    keywords: ["cerebral cortex", "brain layers", "neuronal types", "histology"]
  },
  { 
    id: "112", 
    img: "/nervous-system/cerebral-cortex3.jpg", 
    width: 500, 
    height: 340, 
    title: "Cerebral Cortex", 
    category: "nervoussystem" ,
    description: "Histology slide of the cerebral cortex showing its layered structure with distinct neuronal types.",
    alt: "Microscopic image of cerebral cortex layers",
    keywords: ["cerebral cortex", "brain layers", "neuronal types", "histology"]
  },
  { 
    id: "113", 
    img: "/nervous-system/cerebral-cortex.jpg", 
    width: 500, 
    height: 440, 
    title: "Cerebral Cortex", 
    category: "nervoussystem" ,
    description: "Histology slide of the cerebral cortex showing its layered structure with distinct neuronal types.",
    alt: "Microscopic image of cerebral cortex layers",
    keywords: ["cerebral cortex", "brain layers", "neuronal types", "histology"]
  },
  { 
    id: "44", 
    img: "/nervous-system/cervical-spinal-cord-histology.jpg", 
    width: 480, 
    height: 620, 
    title: "Cervical Spinal Cord ", 
    category: "nervoussystem" ,
    description: "Histology slide of the cervical spinal cord showing gray matter and white matter organization.",
    alt: "Microscopic image of cervical spinal cord cross-section",
    keywords: ["cervical spinal cord", "gray matter", "white matter", "histology"]
  },
  { 
    id: "45", 
    img: "/nervous-system/lumbar-spinal-cord-histology.jpg", 
    width: 510, 
    height: 660, 
    title: "Lumbar Spinal Cord", 
    category: "nervoussystem" ,
    description: "Histology slide of the lumbar spinal cord showing gray matter and white matter organization.",
    alt: "Microscopic image of lumbar spinal cord cross-section",
    keywords: ["lumbar spinal cord", "gray matter", "white matter", "histology"]
  },
  { 
    id: "106", 
    img: "/nervous-system/lumbar-spinal-cord-histology2.jpg", 
    width: 510, 
    height: 660, 
    title: "Lumbar Spinal Cord", 
    category: "nervoussystem" ,
    description: "Histology slide of the lumbar spinal cord showing gray matter and white matter organization.",
    alt: "Microscopic image of lumbar spinal cord cross-section",
    keywords: ["lumbar spinal cord", "gray matter", "white matter", "histology"]
  },
  { 
    id: "116", 
    img: "/nervous-system/thoracic-spinal-cord-histology3.jpg", 
    width: 510, 
    height: 660, 
    title: "Thoracic Spinal Cord", 
    category: "nervoussystem" ,
    description: "Histology slide of the thoracic spinal cord showing gray matter and white matter organization.",
    alt: "Microscopic image of thoracic spinal cord cross-section",
    keywords: ["thoracic spinal cord", "gray matter", "white matter", "histology"]
  },
  { 
    id: "46", 
    img: "/nervous-system/sciatic-nerve-histology.jpg", 
    width: 530, 
    height: 680, 
    title: "Sciatic Nerve", 
    category: "nervoussystem" ,
    description: "Histology slide of the sciatic nerve showing myelinated axons and connective tissue.",
    alt: "Microscopic image of sciatic nerve cross-section",
    keywords: ["sciatic nerve", "myelinated axons", "connective tissue", "histology"]
  },
  { 
    id: "47", 
    img: "/nervous-system/cerebellum-histology.jpg", 
    width: 520, 
    height: 660, 
    title: "Cerebellum ", 
    category: "nervoussystem" ,
    description: "Histology slide of the cerebellum showing its layered structure with Purkinje cells.",
    alt: "Microscopic image of cerebellum layers with Purkinje cells",
    keywords: ["cerebellum", "brain layers", "Purkinje cells", "histology"]
  },

  { id: "56", 
    id: "48", 
    img: "/reproductive/ovary-histology.jpg", 
    width: 460, 
    height: 580, 
    title: "Ovary vessels", 
    category: "reproductive", 
    gender: "female" ,
    description: "Histology slide of the ovary showing follicles at various stages of development.",
    alt: "Microscopic image of ovary with developing follicles",
    keywords: ["ovary histology", "follicles", "oocytes", "reproductive system"]
  },
  { id: "181", 
     
    img: "/reproductive/ovary-histology2.jpg", 
    width: 460, 
    height: 480, 
    title: "Ovum", 
    category: "reproductive", 
    gender: "female" ,
    description: "Histology slide of the ovary showing follicles at various stages of development.",
    alt: "Microscopic image of ovary with developing follicles",
    keywords: ["ovary histology", "follicles", "oocytes", "reproductive system"]
  },
  { id: "180", 
     
    img: "/reproductive/ovary-histology3.jpg", 
    width: 360, 
    height: 580, 
    title: "secondary follicle", 
    category: "reproductive", 
    gender: "female" ,
    description: "Histology slide of the ovary showing follicles at various stages of development.",
    alt: "Microscopic image of ovary with developing follicles",
    keywords: ["ovary histology", "follicles", "oocytes", "reproductive system"]
  },
  { id: "182", 
     
    img: "/reproductive/ovary-histology5.jpg", 
    width: 360, 
    height: 680, 
    title: "Ovary", 
    category: "reproductive", 
    gender: "female" ,
    description: "Histology slide of the ovary showing follicles at various stages of development.",
    alt: "Microscopic image of ovary with developing follicles",
    keywords: ["ovary histology", "follicles", "oocytes", "reproductive system"]
  },
  { id: "189", 

    img: "/reproductive/ovary-histology6.jpg", 
    width: 360, 
    height: 680, 
    title: "Ovary", 
    category: "reproductive", 
    gender: "female" ,
    description: "Histology slide of the ovary showing follicles at various stages of development.",
    alt: "Microscopic image of ovary with developing follicles",
    keywords: ["ovary histology", "follicles", "oocytes", "reproductive system"]
  },
  { 
    id: "49", 
    img: "/reproductive/uterus-histology.jpg", 
    width: 500, 
    height: 650, 
    title: "Uterus", 
    category: "reproductive", 
    gender: "female", 
    description: "Histology slide of the uterus showing the endometrium and myometrium layers.",
    alt: "Microscopic image of uterus with endometrium and myometrium layers",
    keywords: ["uterus histology", "endometrium", "myometrium", "reproductive system"]
  },
  { 
    id: "185", 
    img: "/reproductive/uterus.jpg", 
    width: 500, 
    height: 650, 
    title: "Uterus", 
    category: "reproductive", 
    gender: "female", 
    description: "Histology slide of the uterus showing the endometrium and myometrium layers.",
    alt: "Microscopic image of uterus with endometrium and myometrium layers",
    keywords: ["uterus histology", "endometrium", "myometrium", "reproductive system"]
  },
  { 
    id: "184", 
    img: "/reproductive/Cervix-histology.jpg", 
    width: 500, 
    height: 650, 
    title: "Cervix", 
    category: "reproductive", 
    gender: "female", 
    description: "Histology slide of the cervix showing the transformation zone and cervical glands.",
    alt: "Microscopic image of cervix with transformation zone and cervical glands",
    keywords: ["cervix histology", "transformation zone", "cervical glands", "reproductive system"]
  },
  { 
    id: "187", 
    img: "/reproductive/placenta-histology.jpg", 
    width: 500, 
    height: 650, 
    title: "placenta", 
    category: "reproductive", 
    gender: "female", 
    description: "Histology slide of the placenta showing the maternal and fetal sides.",
    alt: "Microscopic image of placenta with maternal and fetal sides",
    keywords: ["placenta histology", "maternal side", "fetal side", "reproductive system"]
  },
  { 
    id: "50", 
    img: "/reproductive/seminiferous-tubules-histology.jpg", 
    width: 380, 
    height: 600, 
    title: "Seminiferous Tubules ", 
    category: "reproductive", 
    gender: "male" 
  },
  { 
    id: "210", 
    img: "/reproductive/seminiferous-tubules-histology2.jpg", 
    width: 480, 
    height: 600, 
    title: "Seminiferous Tubules", 
    category: "reproductive", 
    gender: "male" 
  },
  { 
    id: "51", 
    img: "/reproductive/fallopian-tube-histology.jpg", 
    width: 530, 
    height: 670, 
    title: "Fallopian Tube ", 
    category: "reproductive", 
    gender: "female" 
  },
  { 
    id: "52", 
    img: "/reproductive/epididymis-histology.jpg", 
    width: 470, 
    height: 620, 
    title: "Epididymis Histology", 
    category: "reproductive", 
    gender: "male" 
  },
  { 
    id: "191", 
    img: "/reproductive/epididymis-histology2.jpg", 
    width: 370, 
    height: 620, 
    title: "Epididymis Histology", 
    category: "reproductive", 
    gender: "male" 
  },
  { 
    id: "193", 
    img: "/reproductive/epididymis-histology3.jpg", 
    width: 370, 
    height: 620, 
    title: "Epididymis Histology", 
    category: "reproductive", 
    gender: "male" 
  },
  { 
    id: "53", 
    img: "/reproductive/ductus-deferens-histology.jpg", 
    width: 510, 
    height: 660, 
    title: "Ductus Deferens Histology ", 
    category: "reproductive", 
    gender: "male" 
  },
  { 
    id: "192", 
    img: "/reproductive/spermatic-histology.jpg", 
    width: 510, 
    height: 660, 
    title: "Spermatic Cord ", 
    category: "reproductive", 
    gender: "male" 
  },
  { 
    id: "54", 
    img: "/reproductive/vagina-histology.jpg", 
    width: 490, 
    height: 640, 
    title: "Vagina Histology", 
    category: "reproductive", 
    gender: "female" 
  },
  { 
    id: "55", 
    img: "/reproductive/corpus-spongiosum-histology.jpg", 
    width: 480, 
    height: 620, 
    title: "Corpus Spongiosum ", 
    category: "reproductive", 
    gender: "male" 
  },
  { 
    id: "194", 
    img: "/reproductive/corpus-cavernosum-histology.jpg", 
    width: 480, 
    height: 620, 
    title: "Corpus Cavernosum ", 
    category: "reproductive", 
    gender: "male" 
  },
{ 
  id: 56, 
  img: "/respiratory/trachea-histology.jpg", 
  width: 500, 
  height: 450, 
  title: "Trachea ", 
  category: "respiratory" ,
  description: "Histology slide of the trachea showing respiratory epithelium with cilia and goblet cells.",
  alt: "Microscopic image of trachea with ciliated epithelium",
  keywords: ["trachea histology", "respiratory epithelium", "cilia", "goblet cells"]
},
{ 
  id: 156, 
  img: "/respiratory/trachea-histology2.jpg", 
  width: 400, 
  height: 550, 
  title: "Trachea Histology", 
  category: "respiratory" ,
  description: "Histology slide of the trachea showing respiratory epithelium with cilia and goblet cells.",
  alt: "Microscopic image of trachea with ciliated epithelium",
  keywords: ["trachea histology", "respiratory epithelium", "cilia", "goblet cells"]
},
{ 
  id: 57, 
  img: "/respiratory/lung-histology.jpg", 
  width: 320, 
  height: 670, 
  title: "Lung Histology", 
  category: "respiratory" ,
  description: "Histology slide of lung tissue showing alveoli and bronchioles.",
  alt: "Microscopic image of lung tissue with alveoli and bronchioles",
  keywords: ["lung histology", "alveoli", "bronchioles", "respiratory tissue"]
},
{ 
  id: 58, 
  img: "/respiratory/larynx-histology.jpg", 
  width: 460, 
  height: 600, 
  title: "Larynx Histology", 
  category: "respiratory", 
  description: "Histology slide of the larynx showing respiratory epithelium and cartilage.",
  alt: "Microscopic image of larynx with respiratory epithelium and cartilage",
  keywords: ["larynx histology", "respiratory epithelium", "cartilage", "histology"]
},
{ 
  id: 59, 
  img: "/respiratory/bronchioles-histology.jpg", 
  width: 480, 
  height: 420, 
  title: "Bronchioles Histology", 
  category: "respiratory" ,
  description: "Histology slide of bronchioles showing smooth muscle layers and lining epithelium.",
  alt: "Microscopic image of bronchioles with smooth muscle and epithelium",
  keywords: ["bronchioles histology", "smooth muscle", "lining epithelium", "respiratory tissue"]
},
{ 
  id: 60, 
  img: "/respiratory/nasal-cavity-histology.jpg", 
  width: 470, 
  height: 610, 
  title: "Nasal Cavity Histology - Respiratory Epithelium and Goblet Cells", 
  category: "respiratory" ,
  description: "Histology slide of the nasal cavity showing respiratory epithelium and goblet cells.",
  alt: "Microscopic image of nasal cavity with respiratory epithelium and goblet cells",
  keywords: ["nasal cavity histology", "respiratory epithelium", "goblet cells", "histology"]
},
{ 
  id: 160, 
  img: "/respiratory/nasal-cavity-histology5.jpg", 
  width: 470, 
  height: 610, 
  title: "Nasal Cavity Histology - Respiratory Epithelium and Goblet Cells", 
  category: "respiratory" ,
  description: "Histology slide of the nasal cavity showing respiratory epithelium and goblet cells.",
  alt: "Microscopic image of nasal cavity with respiratory epithelium and goblet cells",
  keywords: ["nasal cavity histology", "respiratory epithelium", "goblet cells", "histology"]
},
{ 
  id: 157, 
  img: "/respiratory/nasal-cavity-histology2.jpg", 
  width: 470, 
  height: 610, 
  title: "olfactory region", 
  category: "respiratory" ,
  description: "Histology slide of the nasal cavity showing respiratory epithelium and goblet cells.",
  alt: "Microscopic image of nasal cavity with respiratory epithelium and goblet cells",
  keywords: ["nasal cavity histology", "respiratory epithelium", "goblet cells", "histology"]
},
{ 
  id: 159, 
  img: "/respiratory/nasal-cavity-histology3.jpg", 
  width: 470, 
  height: 610, 
  title: "Respiratory", 
  category: "respiratory" ,
  description: "Histology slide of the nasal cavity showing respiratory epithelium and goblet cells.",
  alt: "Microscopic image of nasal cavity with respiratory epithelium and goblet cells",
  keywords: ["nasal cavity histology", "respiratory epithelium", "goblet cells", "histology"]
},

  // 🧍 Skin
{ 
  id: 61, 
  img: "/skin/mammary-gland.jpg", 
  width: 500, 
  height: 640, 
  title: "Mammary gland", 
  category: "skin" ,
  description: "Histology slide of mammary gland tissue showing lobules and ducts involved in milk production.",
  alt: "Microscopic image of mammary gland with lobules and ducts",
  keywords: ["mammary gland", "breast tissue", "milk production", "histology"]
},
{ 
  id:110, 
  img: "/skin/mammary-gland3.jpg", 
  width: 500, 
  height: 440, 
  title: "Mammary gland", 
  category: "skin" ,
  description: "Histology slide of mammary gland tissue showing lobules and ducts involved in milk production.",
  alt: "Microscopic image of mammary gland with lobules and ducts",
  keywords: ["mammary gland", "breast tissue", "milk production", "histology"]
},
{ 
  id: 62, 
  img: "/skin/pilosabaceous-unit.jpg", 
  width: 460, 
  height: 580, 
  title: "Pilosabaceous Unit ", 
  category: "skin",
  description: "Histology slide of pilosabaceous unit showing hair follicle, sebaceous gland, and associated structures.",
  alt: "Microscopic image of pilosabaceous unit with hair follicle and sebaceous gland",
  keywords: ["pilosabaceous unit", "hair follicle", "sebaceous gland", "skin histology"],
},
{ 
  id: 111, 
  img: "/skin/scalp.jpg", 
  width: 460, 
  height: 580, 
  title: "Scalp", 
  category: "skin",
  description: "Histology slide of scalp tissue showing hair follicles, sebaceous glands, and associated structures.",
  alt: "Microscopic image of scalp with hair follicles and sebaceous glands",
  keywords: ["scalp", "hair follicle", "sebaceous gland", "skin histology"],
},
{ 
  id: 211, 
  img: "/skin/hair-follicle.jpg", 
  width: 460, 
  height: 580, 
  title: "Hair Follicles", 
  category: "skin",
  description: "Histology slide of hair follicles showing their structure and associated glands.",
  alt: "Microscopic image of hair follicles with sebaceous glands",
  keywords: ["hair follicle", "sebaceous gland", "skin histology"],
},
{ 
  id: 63, 
  img: "/skin/nail-histology.jpg", 
  width: 420, 
  height: 540, 
  title: "Nail Histology - Nail Plate, Bed, and Matrix", 

  category: "skin" ,
  description: "Histology slide of nail tissue showing nail plate, nail bed, and matrix involved in nail growth.",
  alt: "Microscopic image of nail tissue with nail plate and matrix",
  keywords: ["nail histology", "nail plate", "nail bed", "nail matrix"]
},
{ 
  id: 118, 
  img: "/skin/skin.jpg", 
  width: 420, 
  height: 540, 
  title: "Skin", 

  category: "skin" ,
  description: "Histology slide of skin tissue showing epidermis, dermis, and subcutaneous layers.",
  alt: "Microscopic image of skin tissue with epidermis and dermis",
  keywords: ["skin histology", "epidermis", "dermis", "subcutaneous layer"]
  
},
{ 
  id: 119, 
  img: "/skin/skin-histology.jpg", 
  width: 420, 
  height: 540, 
  title: "Skin", 

  category: "skin" ,
  description: "Histology slide of skin tissue showing epidermis, dermis, and subcutaneous layers.",
  alt: "Microscopic image of skin tissue with epidermis and dermis",
  keywords: ["skin histology", "epidermis", "dermis", "subcutaneous layer"]

},

  // 🚰 Urinary
// 🚰 Urinary
{ 
  id: 65, 
  img: "/urinary/kidney-histology.jpg", 
  width: 400, 
  height: 600, 
  title: "Kidney ", 
  category: "urinary" ,
  description: "Histology slide of kidney tissue showing cortex, medulla, and nephrons involved in urine formation.",
  alt: "Microscopic image of kidney with cortex, medulla, and nephrons",
  keywords: ["kidney histology", "cortex", "medulla", "nephrons", "urinary system"]
},
{ 
  id: 172, 
  img: "/urinary/kidney-histology3.jpg", 
  width: 400, 
  height: 600, 
  title: "medullary rays", 
  category: "urinary" ,
  description: "Histology slide of kidney tissue showing medullary rays.",
  alt: "Microscopic image of kidney medullary rays",
  keywords: ["kidney histology", "medullary rays", "urinary system"]
},
{ 
  id: 173, 
  img: "/urinary/kidney-histology4.jpg", 
  width: 500, 
  height: 600, 
  title: "Kidney", 
  category: "urinary" ,
  description: "Histology slide of kidney tissue showing medullary rays.",
  alt: "Microscopic image of kidney medullary rays",
  keywords: ["kidney histology", "medullary rays", "urinary system"]
},
{ 
  id: 66, 
  img: "/urinary/glomerulus-histology.jpg", 
  width: 500, 
  height: 350, 
  title: "Glomerulus ", 
  category: "urinary",
  description: "Histology slide of the glomerulus showing the renal corpuscle and capillary tufts involved in blood filtration.",
  alt: "Microscopic image of glomerulus with renal corpuscle and capillary tufts",
  keywords: ["glomerulus histology", "renal corpuscle", "capillary tufts", "urinary system"] 
},
{ 
  id: 67, 
  img: "/urinary/ureter-histology.jpg", 
  width: 520, 
  height: 500, 
  title: "Ureter Histology", 
  category: "urinary",
  description: "Histology slide of the ureter showing transitional epithelium and muscular layers.",
  alt: "Microscopic image of ureter with transitional epithelium",
  keywords: ["ureter histology", "transitional epithelium", "muscular layers", "urinary system"]
}
,
{ 
  id: 176, 
  img: "/urinary/urethra-histology.jpg", 
  width: 520, 
  height: 500, 
  title: "Urethra ", 
  category: "urinary",
  description: "Histology slide of the urethra showing transitional epithelium and muscular layers.",
  alt: "Microscopic image of urethra with transitional epithelium",
  keywords: ["urethra histology", "transitional epithelium", "muscular layers", "urinary system"]
}
,
{ 
  id: 175, 
  img: "/urinary/bladder-histology.jpg", 
  width: 520, 
  height: 500, 
  title: "bladder ", 
  category: "urinary",
  description: "Histology slide of the bladder showing transitional epithelium and muscular layers.",
  alt: "Microscopic image of bladder with transitional epithelium",
  keywords: ["bladder histology", "transitional epithelium", "muscular layers", "urinary system"]
}
,

{ 
  id: 68, 
  img: "/receptors/circumvallate-papilla-histology.jpg", 
  width: 510, 
  height: 760, 
  title: "Circumvallate Papilla ", 
  category: "receptors" ,
  description: "Histology slide of circumvallate papilla showing taste buds and surrounding lingual epithelium.",
  alt: "Microscopic image of circumvallate papilla with taste buds",
  keywords: ["circumvallate papilla", "taste buds", "lingual epithelium", "histology"]
},
{ 
  id: 69, 
  img: "/receptors/filiform-papilla-histology.jpg", 
  width: 400, 
  height: 300, 
  title: "Filiform Papilla ", 
  category: "receptors",
  description: "Histology slide of filiform papilla showing keratinized epithelium.",
  alt: "Microscopic image of filiform papilla with keratinized epithelium",
  keywords: ["filiform papilla", "keratinized epithelium", "mechanical function", "histology"] 
},
{ 
  id: 70, 
  img: "/receptors/golgi-tendon-organ-histology.jpg", 
  width: 460, 
  height: 480, 
  title: "Golgi Tendon Organ ", 
  category: "receptors" ,
  description: "Histology slide of Golgi tendon organ showing sensory nerve endings in muscle tendons.",
  alt: "Microscopic image of Golgi tendon organ with sensory nerve endings",
  keywords: ["Golgi tendon organ", "proprioceptive receptor", "muscle tendons", "histology"]
},
{ 
  id: 71, 
  img: "/receptors/organ-of-corti-histology.jpg", 
  width: 530, 
  height: 620, 
  title: "Organ of Corti ", 
  category: "receptors" ,
  description: "Histology slide of the Organ of Corti showing cochlear hair cells and supporting structures.",
  alt: "Microscopic image of Organ of Corti with hair cells",
  keywords: ["Organ of Corti", "cochlear hair cells", "sensory epithelium", "histology"]
},
{ 
  id: 72, 
  img: "/receptors/retina-histology.jpg", 
  width: 500, 
  height: 660, 
  title: "Retina Histology", 
  category: "receptors", 
  description: "Histology slide of retina showing layers of photoreceptor cells including rods and cones.",
  alt: "Microscopic image of retina with photoreceptor cells",
  keywords: ["retina", "photoreceptor cells", "rods and cones", "histology"]
},
{ 
  id: 124, 
  img: "/receptors/retina-histology2.jpg", 
  width: 400, 
  height: 360, 
  title: "Retina Histology", 
  category: "receptors", 
  description: "Histology slide of retina showing layers of photoreceptor cells including rods and cones.",
  alt: "Microscopic image of retina with photoreceptor cells",
  keywords: ["retina", "photoreceptor cells", "rods and cones", "histology"]
},
{ 
  id: 73, 
  img: "/receptors/foliate-papilla-histology.jpg", 
  width: 400, 
  height: 490 ,
  title: "Foliate Papilla Histology", 
  category: "receptors",
  description: "Histology slide of foliate papilla showing taste buds on the lateral aspects of the tongue.",
  alt: "Microscopic image of foliate papilla with taste buds",
  keywords: ["foliate papilla", "taste buds", "lateral tongue", "histology"]
}
,
{ 
  id: 123, 
  img: "/receptors/pacinian-corpuscle-histology.jpg", 
  width: 470, 
  height: 500, 
  title: "Pacinian Corpuscle ", 
  category: "receptors",
  description: "Histology slide of Pacinian corpuscle showing layers of connective tissue and sensory nerve endings.",
  alt: "Microscopic image of Pacinian corpuscle with sensory nerve endings",
  keywords: ["Pacinian corpuscle", "deep pressure sensation", "connective tissue", "histology"]
}
,
{ 
  id: 125, 
  img: "/receptors/meissners-corpuscle-histology.jpg", 
  width: 470, 
  height: 400, 
  title: "Meissner's Corpuscle ", 
  category: "receptors",
  description: "Histology slide of Meissner's corpuscle showing layers of connective tissue and sensory nerve endings.",
  alt: "Microscopic image of Meissner's corpuscle with sensory nerve endings",
  keywords: ["Meissner's corpuscle", "light touch sensation", "connective tissue", "histology"]
},
{ 
  id: 127, 
  img: "/receptors/meissners-histology.jpg", 
  width: 470, 
  height: 300, 
  title: "Meissner's Corpuscle ", 
  category: "receptors",
  description: "Histology slide of Meissner's corpuscle showing layers of connective tissue and sensory nerve endings.",
  alt: "Microscopic image of Pacinian corpuscle with sensory nerve endings",
  keywords: ["Pacinian corpuscle", "deep pressure sensation", "connective tissue", "histology"]
}
,

{ 
  id: 128, 
  img: "/receptors/fungiform-histology.jpg", 
  width: 470, 
  height: 500, 
  title: "Fungiform Papilla ", 
  category: "receptors",
  description: "Histology slide of fungiform papilla showing taste buds on the upper surface of the tongue.",
  alt: "Microscopic image of fungiform papilla with taste buds",
  keywords: ["fungiform papilla", "taste buds", "upper tongue", "histology"]
}
,
  // 🔮 Endocrine
// 🔮 Endocrine
{ 
  id: 74, 
  img: "/endocrine/pituitary-gland-histology.jpg", 
  width: 420, 
  height: 540, 
  title: "Pituitary Gland ", 
  category: "endocrine" ,
  description: "Histology slide of pituitary gland showing anterior and posterior lobes with hormone-secreting cells.",
  alt: "Microscopic image of pituitary gland with anterior and posterior lobes",
  keywords: ["pituitary gland", "anterior lobe", "posterior lobe", "hormone-secreting cells"]
},
{ 
  id: 75, 
  img: "/endocrine/thyroid-gland-histology.jpg", 
  width: 490, 
  height: 610, 
  title: "Thyroid Gland ", 
  category: "endocrine" ,
  description: "Histology slide of thyroid gland showing follicles filled with colloid and follicular cells.",
  alt: "Microscopic image of thyroid gland with follicles and colloid",
  keywords: ["thyroid gland", "follicles", "colloid", "follicular cells", "histology"]
},
{ 
  id: 140, 
  img: "/endocrine/thyroid-gland-histology2.jpg", 
  width: 490, 
  height: 510, 
  title: "Thyroid Gland ", 
  category: "endocrine" ,
  description: "Histology slide of thyroid gland showing follicles filled with colloid and follicular cells.",
  alt: "Microscopic image of thyroid gland with follicles and colloid",
  keywords: ["thyroid gland", "follicles", "colloid", "follicular cells", "histology"]
},
{ 
  id: 76, 
  img: "/endocrine/adrenal-gland-histology.jpg", 
  width: 510, 
  height: 470, 
  title: "Adrenal (Suprarenal) Gland", 
  category: "endocrine" ,
  description: "Histology slide of adrenal gland showing cortex and medulla regions with hormone-producing cells.",
  alt: "Microscopic image of adrenal gland with cortex and medulla",
  keywords: ["adrenal gland", "cortex", "medulla", "hormone-producing cells", "histology"]
},
{ 
  id: 141, 
  img: "/endocrine/Pineal.jpg", 
  width: 510, 
  height: 570, 
  title: "Pineal Gland", 
  category: "endocrine" ,
  description: "Histology slide of pineal gland showing pinealocytes and neuroglia.",
  alt: "Microscopic image of pineal gland with pinealocytes",
  keywords: ["pineal gland", "pinealocytes", "neuroglia", "histology"]
},
{ 
  id: 142, 
  img: "/endocrine/islets.jpg", 
  width: 510, 
  height: 470, 
  title: "Islets of Langerhans", 
  category: "endocrine" ,
  description: "Histology slide of islets of Langerhans showing insulin-producing beta cells.",
  alt: "Microscopic image of islets of Langerhans with beta cells",
  keywords: ["islets of Langerhans", "insulin", "beta cells", "histology"]
},
{ 
  id: 143, 
  img: "/endocrine/parathyroid2.jpg", 
  width: 510, 
  height: 470, 
  title: "Parathyroid Gland", 
  category: "endocrine" ,
  description: "Histology slide of parathyroid gland showing chief cells and oxyphil cells.",
  alt: "Microscopic image of parathyroid gland with chief cells and oxyphil cells",
  keywords: ["parathyroid gland", "chief cells", "oxyphil cells", "histology"]
},
{ 
  id: 144, 
  img: "/endocrine/parathyroid.jpg", 
  width: 510, 
  height: 470, 
  title: "Parathyroid Gland", 
  category: "endocrine" ,
  description: "Histology slide of parathyroid gland showing chief cells and oxyphil cells.",
  alt: "Microscopic image of parathyroid gland with chief cells and oxyphil cells",
  keywords: ["parathyroid gland", "chief cells", "oxyphil cells", "histology"]
},

// 🧩 Epithelium
{ 
  id: 77, 
  img: "/epithelium/pseudostratified-columnar-epithelium-histology.jpg", 
  width: 420, 
  height: 540, 
  title: "Pseudostratified Columnar Epithelium ", 
  category: "epithelium",
  description: "Histology slide of pseudostratified columnar epithelium, found in the respiratory tract.",
  keywords: ["pseudostratified columnar epithelium", "respiratory epithelium", "trachea", "histology"]
},
{ 
  id: 78, 
  img: "/epithelium/simple-columnar-epithelium-histology.jpg", 
  width: 490, 
  height: 610, 
  title: "Simple Columnar Epithelium Histology - Intestinal Lining", 
  category: "epithelium" 
},
{ 
  id: 79, 
  img: "/epithelium/simple-cuboidal-epithelium-histology.jpg", 
  width: 510, 
  height: 670, 
  title: "Simple Cuboidal", 
  category: "epithelium",
  description: "Histology slide of simple cuboidal epithelium, found in kidney tubules and glandular ducts.",
  keywords: ["simple cuboidal epithelium", "kidney tubules", "glandular ducts", "histology"]
},
{ 
  id: 80, 
  img: "/epithelium/stratified-squamous-keratinized-epithelium-histology.jpg", 
  width: 510, 
  height: 670, 
  title: "Stratified Squamous Keratinized Epithelium ", 
  category: "epithelium",
  description: "Histology slide of stratified squamous keratinized epithelium, found in the skin.",
  keywords: ["stratified squamous keratinized epithelium", "skin", "epidermis", "histology"]
},
{ 
  id: 81, 
  img: "/epithelium/stratified-squamous-nonkeratinized-epithelium-histology.jpg", 
  width: 500, 
  height: 650, 
  title: "Stratified Squamous Non-Keratinized  ", 
  category: "epithelium",
  description: "Histology slide of stratified squamous non-keratinized epithelium, found in moist areas like the esophagus and oral cavity.",
  keywords: ["stratified squamous non-keratinized epithelium", "esophageal lining", "oral mucosa", "histology"]
},
{ 
  id: 82, 
  img: "/epithelium/transitional-epithelium-histology.jpg", 
  width: 440, 
  height: 630, 
  title: "Transitional Epithelium ", 
  category: "epithelium",
  description: "Histology slide of transitional epithelium, specialized for stretching and found in the urinary bladder.",
  keywords: ["transitional epithelium", "urothelium", "bladder lining", "histology"]
},


{
id: "87",
img: "/epithelium/simple-squamous-epithelium-histology.jpg",
width: 450,
height: 600,
title: "Simple Squamous Epithelium",
category: "epithelium",
description: "Histology slide of simple squamous epithelium showing flattened cells.",
alt: "Simple squamous epithelium under microscope",
keywords: ["simple squamous epithelium histology", "epithelial tissue", "lung alveoli microscope"]
},

{
id: "120",
img: "/ear/cochlea.jpg",
width: 450,
height: 600,
title: "Cochlea",
category: "ear",
description: "Histology slide of cochlea showing organ of Corti and hair cells.",
alt: "Cochlea under microscope",
keywords: ["cochlea histology", "ear anatomy", "organ of Corti", "hair cells"]
},
{
id: "121",
img: "/ear/organofcorti.jpg",
width: 450,
height: 600,
title: "Organ of Corti",
category: "ear",
description: "Histology slide of organ of Corti showing hair cells and supporting cells.",
alt: "Organ of Corti under microscope",
keywords: ["cochlea histology", "ear anatomy", "organ of Corti", "hair cells"]
},
{
id: "122",
img: "/ear/organofcorti2.jpg",
width: 450,
height: 600,
title: "Organ of Corti",
category: "ear",
description: "Histology slide of organ of Corti showing hair cells and supporting cells.",
alt: "Organ of Corti under microscope",
keywords: ["cochlea histology", "ear anatomy", "organ of Corti", "hair cells"]
},





];
