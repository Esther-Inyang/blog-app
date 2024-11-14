import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface LoaderProp {
  color?: string
}


const CircularLoader: React.FC<LoaderProp> = ({ color }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: color || "#fff", width: "20px !important", height: "20px !important", strokeWidth: 9 }} />
        <div className="ml-3 text-[15px]">Please wait...</div>
      </div>
    </Box>
  );
}

export default  CircularLoader
