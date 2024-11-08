import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function FilterDemo() {
    const [saat, setSaat] = useState<{ name: string; code: string } | null>(null);
    const [ilce, setIlce] = useState<{ name: string; code: string } | null>(null);
    const [kategori, setKategori] = useState<{ name: string; code: string } | null>(null);
    const [odemeYontemi, setOdemeYontemi] = useState<{ name: string; code: string } | null>(null);

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

    return (
        <Box
            sx={{
                padding: "2rem",
                border: "1px solid #e0e0e0",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f5f5f5",
                "&:hover": { boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)" },
            }}
        >
            <Typography
                variant="h6"
                sx={{ marginBottom: "1rem", fontWeight: "bold", textAlign: "center" }}
            >
                Filtreler
            </Typography>

            <DropdownInput
                label="Saat"
                value={saat}
                onChange={(e) => setSaat(e.value)}
                options={saatSecenekleri}
            />

            <DropdownInput
                label="İlçe"
                value={ilce}
                onChange={(e) => setIlce(e.value)}
                options={ankaraIlceleri}
            />

            <DropdownInput
                label="Kategori"
                value={kategori}
                onChange={(e) => setKategori(e.value)}
                options={kategoriSecenekleri}
            />

            <DropdownInput
                label="Ödeme Yöntemi"
                value={odemeYontemi}
                onChange={(e) => setOdemeYontemi(e.value)}
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
            sx={{ marginBottom: "0.5rem", color: "#3f51b5", fontWeight: 600 }}
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
        />
    </Box>
);
