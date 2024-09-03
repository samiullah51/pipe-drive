import { Typography } from "@mui/material";
import React, { useState } from "react";
import {
  FaHome,
  FaChartLine,
  FaCogs,
  FaEnvelope,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";
import LeadCard from "../Components/Home/LeadCard";

function Location() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "15%",
          backgroundColor: "rgba(202, 202, 202, 0.26)",
          color: "#000",
          padding: "15px",
        }}
      >
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li
              style={{
                ...linkStyle,
                ...(activeIndex === 0 ? activeStyle : {}),
                ...(hoverIndex === 0 ? hoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(0)}
            >
              <FaHome style={iconStyle} /> Leads Inbox
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: "10px", fontSize: "14px", color: "gray" }}>
            LEADBOASTER
          </h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {["Live Chat", "Chatbot", "Web Forms", "Prospector"].map(
              (text, index) => (
                <li
                  key={index + 1}
                  style={{
                    ...linkStyle,
                    ...(activeIndex === index + 1 ? activeStyle : {}),
                    ...(hoverIndex === index + 1 ? hoverStyle : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(index + 1)}
                >
                  {index === 0 && <FaHome style={iconStyle} />}
                  {index === 1 && <FaChartLine style={iconStyle} />}
                  {index === 2 && <FaCogs style={iconStyle} />}
                  {index === 3 && <FaEnvelope style={iconStyle} />}
                  {text}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "10px",
              marginTop: "20px",
              fontSize: "14px",
              color: "gray",
            }}
          >
            ADD_ONS
          </h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {["Web Visitors"].map((text, index) => (
              <li
                key={index + 5}
                style={{
                  ...linkStyle,
                  ...(activeIndex === index + 5 ? activeStyle : {}),
                  ...(hoverIndex === index + 5 ? hoverStyle : {}),
                }}
                onMouseEnter={() => handleMouseEnter(index + 5)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index + 5)}
              >
                {index === 0 && <FaEnvelope style={iconStyle} />}
                {index === 1 && <FaUsers style={iconStyle} />}
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "10px",
              marginTop: "20px",
              fontSize: "14px",
              color: "gray",
            }}
          >
            INTEGRATIONS
          </h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li
              style={{
                ...linkStyle,
                ...(activeIndex === 7 ? activeStyle : {}),
                ...(hoverIndex === 7 ? hoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(7)}
            >
              <FaFileAlt style={iconStyle} /> Messaging
            </li>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <div
        style={{
          width: "85%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "80vh",
        }}
      >
        {/* Upper Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            height: "50%",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h5" my="20px">
            Take your leads to the next level
          </Typography>
          <p
            style={{
              color: "gray",
              fontSize: "18px",
              width: "40%",
              textAlign: "center",
            }}
          >
            Start by adding your first lead or let LeadBooster find new business
            opportunities for you
          </p>
        </div>

        {/* Lower Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            width: "60%",
            height: "50%",
            padding: "10px",
            boxSizing: "border-box",
            marginTop: "-180px",
          }}
        >
          <LeadCard
            imageSrc="https://cdni.iconscout.com/illustration/premium/thumb/team-of-marketers-work-with-marketing-funnel-illustration-download-in-svg-png-gif-file-formats--sales-stages-advertisement-attention-business-activities-pack-people-illustrations-4378871.png"
            altText="Column 1 Image"
            title="Add your existing leads"
            description="Create new leads manually or import your existing leads from a spreadsheet"
            buttonText="Add new lead"
            learnMoreLink="link1_url"
          />
          <LeadCard
            imageSrc="https://cdni.iconscout.com/illustration/premium/thumb/sales-funnel-management-illustration-download-in-svg-png-gif-file-formats--word-logo-marketing-data-analysis-business-pack-people-illustrations-4352896.png?f=webp"
            altText="Column 2 Image"
            title="Find new leads"
            description="Try LeadBooster to capture high-quality inbound and outbound leads"
            buttonText="Try LeadBooster for free"
            learnMoreLink="link2_url"
            buttonLink="addon_link_url"
            isAddon={true}
          />
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  display: "flex",
  alignItems: "center",
  padding: "15px 10px",
  fontSize: "16px",
  color: "#000",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 0.3s, color 0.3s",
  margin: "5px 0",
  borderRadius: "5px",
};

const iconStyle = {
  marginRight: "10px",
};

const hoverStyle = {
  backgroundColor: "rgba(4, 63, 191, 0.08)",
  color: "#000",
};

const activeStyle = {
  backgroundColor: "rgba(4, 63, 191, 0.1)",
  color: "rgba(4, 63, 191, 1)",
};

export default Location;
