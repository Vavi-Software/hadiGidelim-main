import React from "react";
import { Box } from "@mui/material";

const MapComponent: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        border: "1px solid #FF0000",
        borderRadius: "10px",
        backgroundColor: "#EEE",
      }}
    >
      {/* Harita entegrasyonu yapılabilir */}
      <p
        style={{
          textAlign: "center",
          color: "#FF0000",
          padding: "20px",
        }}
      >
        Burada harita görünecek.
      </p>
    </Box>
  );
};

export default MapComponent;
