import React from "react";
import { Typography } from "@mui/material";

const buttonStyle = {
  backgroundColor: "#2d8647",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const linkStyle = {
  color: "#007BFF",
  textDecoration: "none",
  margin: "20px 0",
};

const addonLinkStyle = {
  border: "1px solid #007BFF",
  borderRadius: "5px",
  padding: "1px 5px",
  color: "#007BFF",
  textDecoration: "none",
  marginLeft: "10px",
};

const LeadCard = ({
  imageSrc,
  altText,
  title,
  description,
  buttonText,
  buttonLink,
  learnMoreLink,
  isAddon,
}) => (
  <div
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "10px",
      boxSizing: "border-box",
      textAlign: "center",
    }}
  >
    <img
      src={imageSrc}
      alt={altText}
      style={{ width: "200px", height: "180px", marginBottom: "10px" }}
    />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {isAddon && (
        <a href={buttonLink} style={{ ...addonLinkStyle, fontSize: "12px" }}>
          ADD-ON
        </a>
      )}
    </div>
    <Typography variant="body2" style={{ margin: "20px 0" }}>
      {description}
    </Typography>
    <button style={buttonStyle}>{buttonText}</button>

    {!isAddon && (
      <a href={learnMoreLink} style={linkStyle}>
        Import from spreadsheet
      </a>
    )}
  </div>
);

export default LeadCard;
