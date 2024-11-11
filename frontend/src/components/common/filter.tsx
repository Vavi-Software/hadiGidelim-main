import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function FilterDemo() {
    // State'ler
    const [filters, setFilters] = useState({
        saat: null,
        ilce: null,
        kategori: null,
        odemeYontemi: null,
    });

    // Seçenekler
    const ankaraIlceleri = [
        { name: "Çankaya", code: "CK" },
        { name: "Keçiören", code: "KC" },
        { name: "Yenimahalle", code: "YN" },
        { name: "Sincan", code: "SN" },
    ];

    const saatSecenekleri = [
        { name: "Sabah (06:00 - 12:00)", code: "SB" },
        { name: "Öğlen (12:00 - 18:00)", code: "OG" },
        { name: "Akşam (18:00 - 24:00)", code: "AK" },
        { name: "Gece (24:00 - 06:00)", code: "GC" },
    ];

    const kategoriSecenekleri = [
        { name: "Restoran", code: "RS" },
        { name: "Kafe", code: "KF" },
        { name: "Mağaza", code: "MZ" },
        { name: "Eğlence", code: "EG" },
    ];

    const odemeSecenekleri = [
        { name: "Nakit", code: "NK" },
        { name: "Kredi Kartı", code: "KK" },
        { name: "Banka Transferi", code: "BT" },
        { name: "Çek", code: "CK" },
    ];

    // Filtreleri güncelleyen fonksiyon
    const handleFilterChange = (key: string, value: { name: string; code: string } | null) => {
        setFilters((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <Box
            sx={{
                padding: "2rem",
                border: "1px solid #e0e0e0",
                borderRadius: "8px", // Reduced border-radius
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f5f5f5",
                "&:hover": { boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)" },
            }}
        >
            <Typography
                variant="h6"
                sx={{ marginBottom: "2rem", fontWeight: "bold", textAlign: "center", fontSize: "1.2rem" }}
            >
                Filtreler
            </Typography>

            <DropdownInput
                label="Saat"
                value={filters.saat}
                onChange={(e) => handleFilterChange("saat", e.value)}
                options={saatSecenekleri}
            />

            <DropdownInput
                label="İlçe"
                value={filters.ilce}
                onChange={(e) => handleFilterChange("ilce", e.value)}
                options={ankaraIlceleri}
            />

            <DropdownInput
                label="Kategori"
                value={filters.kategori}
                onChange={(e) => handleFilterChange("kategori", e.value)}
                options={kategoriSecenekleri}
            />

            <DropdownInput
                label="Ödeme Yöntemi"
                value={filters.odemeYontemi}
                onChange={(e) => handleFilterChange("odemeYontemi", e.value)}
                options={odemeSecenekleri}
            />
        </Box>
    );
}

interface DropdownInputProps {
    label: string;
    value: { name: string; code: string } | null;
    onChange: (e: DropdownChangeEvent) => void;
    options: { name: string; code: string }[];
}

const DropdownInput: React.FC<DropdownInputProps> = ({ label, value, onChange, options }) => (
    <Box sx={{ marginBottom: "1.5rem" }}>
        <Typography
            variant="body1"
            sx={{
                marginBottom: "0.5rem",
                color: "black", // Set label text color to black
                fontWeight: 600,
                fontSize: "1.5rem", // Increased font size for labels
            }}
        >
            {label}
        </Typography>
        <Dropdown
            value={value}
            onChange={onChange}
            options={options}
            optionLabel="name"
            placeholder={`Select ${label}`}
            filter
            itemTemplate={(option) => (
                <div className="flex align-items-center">
                    <i className="pi pi-calendar mr-2"></i>
                    <span>{option.name}</span>
                </div>
            )}
            className="w-full"
            style={{
                fontSize: "1rem", // Increased font size of dropdown items
                borderRadius: "4px", // Reduced border-radius
                borderColor: "white", // Red border color
                padding: "1rem",
                backgroundColor: "#fff", // White background color
            }}

        />
    </Box>
);
