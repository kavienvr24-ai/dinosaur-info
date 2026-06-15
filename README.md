# JWE2 - Ultimate Dinosaur Database 🦕

Welcome to the **Jurassic World Evolution 2 (JWE2) Ultimate Dinosaur Database**, a professional, dark-themed registry of prehistoric species.

## Overview

This project is a single-page web application that serves as a visual encyclopedia for the dinosaurs, marine reptiles, and pterosaurs found in InGen and Biosyn archives within JWE2. It features a modern "glassmorphic" design with interactive neon hover effects and dynamic search/filtering capabilities.

## Key Features

- **Massive Species Database:** Includes details for a wide variety of land carnivores (e.g., T-Rex, Indominus Rex, Therizinosaurus), herbivores (e.g., Triceratops, Brachiosaurus), flying reptiles (e.g., Quetzalcoatlus), and marine reptiles (e.g., Mosasaurus).
- **Interactive UI:** Dynamic hover effects on species cards that include image zooming, glowing shadows, and elevation changes.
- **Live Search:** Instantiate a search by name or sub-description via the prominent top search input bar.
- **Category Filters:** Easily view specific types using buttons for **CARNIVORES**, **HERBIVORES**, **FLYING REPTILES**, and **MARINE REPTILES**.
- **Robust Image Handling:** A seamless fallback system is in place. If a local image file is missing, a dynamic cyber-styled placeholder is automatically generated.
- **Responsive Design:** The layout is optimized for desktops, tablets (765px), and mobile devices (425px) to prevent layout overflows.

## Built With

- **HTML5:** Semantic structure for optimal accessibility.
- **CSS3:** Custom styles, including Flexbox/Grid layouts, `@media` queries for responsiveness, and transitions/animations for interactive effects.
- **Vanilla JavaScript:** Powers the search functionality, category filtering, and data rendering without external frameworks.

## Setup and Usage

1.  **File Placement:** Keep your main HTML file in your desired folder.
2.  **Images Directory:** Create a new folder named `images` in the same directory as your HTML file.
3.  **Local Images:** Download JWE2 images and save them inside the `images/` folder using the exact filenames specified in the `dinosaursData` array in the JavaScript section (e.g., `tyrannosaurus_rex.jpg`).
4.  **Running the Page:** Double-click the HTML file to open it instantly in your web browser. A live internet connection is recommended for font loading and initial image fallback generation if your `images/` folder is empty.

---

### Pro-Tip ⚡

If you haven't downloaded images for all species yet, don't worry! The page will still look great and function perfectly, dynamically creating sci-fi placeholder images for any missing files.