import React, { useEffect, useState } from "react";
import "./Product.css";
// import ProductHeader from "../../assets/Images/product (1)/ProductHeader.jpg";

const baseURL = import.meta.env.VITE_URL;

// ================= IMAGE BUFFER → BASE64 =================
const bufferToBase64 = (buffer) => {
  if (!buffer) return null;

  const bytes = new Uint8Array(buffer);
  let binary = "";

  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
};

// ================= PRODUCT CARD (INLINE) =================
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.imageBase64 ? (
          <img src={product.imageBase64} alt={product.name} />
        ) : (
          <div className="no-image">No Image</div>
        )}
      </div>

      <div className="product-info">
        <h5>{product.name}</h5>
        <p className="product-category">
          {Array.isArray(product.categories)
            ? product.categories.join(", ")
            : ""}
        </p>

        {product.price && (
          <p className="product-price">₹ {product.price}</p>
        )}
      </div>
    </div>
  );
};

// ================= MAIN COMPONENT =================
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ===== FIXED DOMAIN =====
  const domain = "venuvastra.com";

  // ===== CATEGORIES =====
  const categories = [
    "all",
    "bedsheet",
    "bath towel",
    "hand towel",
    "duvet covers",
    "comforters",
    "bamboo towels",
  ];

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${baseURL}/api/products/domain/${domain}`
        );
        const data = await res.json();

        const productsWithImages = data.products.map((p) => {
          if (p.image?.data?.data) {
            const base64 = bufferToBase64(p.image.data.data);
            return {
              ...p,
              imageBase64: `data:${p.image.contentType};base64,${base64}`,
            };
          }
          return p;
        });

        setProducts(productsWithImages);
        setFilteredProducts(productsWithImages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ================= CATEGORY FILTER =================
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (p) =>
          Array.isArray(p.categories) &&
          p.categories.includes(selectedCategory)
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <>
      {/* ===== HEADER ===== */}
      <div className="products-hero">
        {/* <img src={ProductHeader} alt="Our Products" /> */}
        <div className="products-hero-overlay">
          <h1>Our Products</h1>
        </div>
      </div>

      {/* ===== CATEGORY BUTTONS ===== */}
      <div className="container mt-4">
        <div className="d-flex gap-2 flex-wrap justify-content-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm ${
                selectedCategory === cat
                  ? "btn-success"
                  : "btn-outline-success"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* ===== PRODUCTS GRID ===== */}
      <div className="container mt-5">
        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted">
              No products found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;

