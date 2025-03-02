import React, { useState } from "react";
import "../css/AddProduct.css";
import Footer from "../components/common/footer.tsx";
import RecipeReviewCard from "../components/common/card.tsx";

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    profilePhoto: "",
    businessName: "",
    category: "",
    website: "",
    district: "",
    neighborhood: "",
    productImage: "",
    description: "",
  });

  const [showCard, setShowCard] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [e.target.name]: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCard(true);
  };

  return (
    <>
      <div className="add-product-container">
        <h1>Ürün Ekle</h1>

        <form className="add-product-form" onSubmit={handleSubmit}>
          {/* Profil Fotoğrafı */}
          <div className="form-group">
            <label htmlFor="profilePhoto">Profil Fotoğrafı</label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* İşletme Adı */}
          <div className="form-group">
            <label htmlFor="businessName">İşletme Adı</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="İşletme adını girin"
              onChange={handleChange}
            />
          </div>

          {/* Kategori */}
          <div className="form-group">
            <label htmlFor="category">Kategori</label>
            <select id="category" name="category" onChange={handleChange}>
              <option value="">Bir kategori seçin</option>
              <option value="electronics">Elektronik</option>
              <option value="fashion">Moda</option>
              <option value="food">Yiyecek</option>
              <option value="health">Sağlık</option>
            </select>
          </div>

          {/* Website Adresi */}
          <div className="form-group">
            <label htmlFor="website">Website Adresi</label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="https://ornek.com"
              onChange={handleChange}
            />
          </div>

          {/* İlçe */}
          <div className="form-group">
            <label htmlFor="district">İlçe</label>
            <input
              type="text"
              id="district"
              name="district"
              placeholder="İlçe girin"
              onChange={handleChange}
            />
          </div>

          {/* Semt */}
          <div className="form-group">
            <label htmlFor="neighborhood">Semt</label>
            <input
              type="text"
              id="neighborhood"
              name="neighborhood"
              placeholder="Semt girin"
              onChange={handleChange}
            />
          </div>

          {/* Ürün Fotoğrafı */}
          <div className="form-group">
            <label htmlFor="productImage">Ürün Fotoğrafı</label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Açıklama */}
          <div className="form-group">
            <label htmlFor="description">
              Açıklama (maksimum 400 karakter)
            </label>
            <textarea
              id="description"
              name="description"
              maxLength={400}
              placeholder="Kısa bir açıklama girin"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Gönder
          </button>
        </form>

        {showCard && (
          <RecipeReviewCard
            businessName={formData.businessName}
            category={formData.category}
            description={formData.description}
            profilePhoto={formData.profilePhoto}
            productImage={formData.productImage}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
