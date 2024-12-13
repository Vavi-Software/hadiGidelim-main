import React from "react";
import "../css/AddProduct.css";
import Footer from "../components/common/footer.tsx";
import Navbar from "../components/common/navbar.tsx";

const AddProduct: React.FC = () => {
    return (
        <>
            <Navbar/>
        <div className="add-product-container">
            <h1>Add Product</h1>

            <form className="add-product-form">
                {/* Profile Photo */}
                <div className="form-group">
                    <label htmlFor="profilePhoto">Profile Photo</label>
                    <input type="file" id="profilePhoto" name="profilePhoto" accept="image/*" />
                </div>

                {/* Business Name */}
                <div className="form-group">
                    <label htmlFor="businessName">Business Name</label>
                    <input type="text" id="businessName" name="businessName" placeholder="Enter business name" />
                </div>

                {/* Category */}
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category">
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="food">Food</option>
                        <option value="health">Health</option>
                    </select>
                </div>

                {/* Website Address */}
                <div className="form-group">
                    <label htmlFor="website">Website Address</label>
                    <input type="url" id="website" name="website" placeholder="https://example.com" />
                </div>

                {/* Giveaway Address */}
                <div className="form-group">
                    <label htmlFor="giveawayAddress">Giveaway Address</label>
                    <input
                        type="text"
                        id="giveawayAddress"
                        name="giveawayAddress"
                        placeholder="Enter giveaway address"
                    />
                </div>

                {/* Product Image */}
                <div className="form-group">
                    <label htmlFor="productImage">Product Image</label>
                    <input type="file" id="productImage" name="productImage" accept="image/*" />
                </div>

                {/* Description */}
                <div className="form-group">
                    <label htmlFor="description">Description (max 400 characters)</label>
                    <textarea
                        id="description"
                        name="description"
                        maxLength={400}
                        placeholder="Enter a brief description"
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
            <Footer></Footer>
        </>
    );
};

export default AddProduct;
