import React, { useState } from "react";
import { CSSProperties } from "react";
import Footer from "../components/common/footer.tsx";
import Navbar from "../components/common/navbar.tsx";

type FormData = {
    businessName: string;
    website: string;
    phoneNumber: string;
    district: string;
    neighborhood: string;
};

const BusinessRegister: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        businessName: "",
        website: "",
        phoneNumber: "",
        district: "",
        neighborhood: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Mail gönderme mantığı için backend API'ye ihtiyaç var.
        // Şimdilik konsola yazalım.
        console.log("Gönderilen Bilgiler:", formData);

        // Mail backend çağrısı yapılması gerekecek
        alert("Bilgiler başarıyla gönderildi!");
    };

    return (
        <>
         <Navbar />
        <div style={styles.container}>
            <h1 style={styles.title}>İşletme Kayıt</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    İşletme Adı:
                    <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </label>

                <label style={styles.label}>
                    Web Sitesi:
                    <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Yoksa boş bırakabilirsiniz."
                    />
                </label>

                <label style={styles.label}>
                    Telefon Numarası:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </label>

                <label style={styles.label}>
                    İlçe:
                    <select
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        style={styles.select}
                        required
                    >
                        <option value="">Seçiniz</option>
                        <option value="Çankaya">Çankaya</option>
                        <option value="Keçiören">Keçiören</option>
                        <option value="Mamak">Mamak</option>
                        <option value="Etimesgut">Etimesgut</option>
                        <option value="Yenimahalle">Yenimahalle</option>
                    </select>
                </label>

                <label style={styles.label}>
                    Semt:
                    <input
                        type="text"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </label>

                <button type="submit" style={styles.button}>Bilgileri Gönder</button>
            </form>
        </div>
            <Footer></Footer>
        </>
    );
};

const styles: Record<string, CSSProperties> = {
    container: {
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        color: "#ea2d00",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    label: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontWeight: "bold",
        color: "#333",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
    },
    select: {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
    },
    button: {
        backgroundColor: "#ea2d00",
        color: "#fff",
        border: "none",
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
};

export default BusinessRegister;
