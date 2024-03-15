import React from "react";
import { Box, useMediaQuery, TextField } from "@mui/material";
import Customers from "../../assets/images/customers.png"; //revenue
import Revenue from "../../assets/images/revenue.png";
import Campaigns from "../../assets/images/campaigns.png";

export default function CampaignDiv() {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          backgroundColor: "#ECECEC",
          color: "#0055FF",
          my: 5,
          py: 3,
          // gap: 5,
          boxShadow:
            " 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        }}
      >
        {/* 1st Div */}
        <Box
          sx={{
            width: isSmallScreen ? "80%" : "auto",
            bgcolor: "white",
            p: 1,
            my: 1,
            mx: 2,
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              margin: "10px",
              padding: "0px 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 15,
                bottom: 10,
                left: 20,
                width: "1px",
                height: "80%",
                backgroundColor: "#8E8B8B ", // Adjust color as needed
              }}
            ></span>
            <span>Total Customers</span>
            <img src={Customers} alt="Customers" />
          </div>
          <Box sx={{ color: "black", ml: 3, display: "flex", gap: 5 }}>
            Total <span>2348</span>
          </Box>
          <Box sx={{ color: "#212121B2", ml: 3, display: "flex", gap: 2 }}>
            Last Month <span>248</span>
          </Box>
        </Box>
        {/* 2nd Div */}
        <Box
          sx={{
            width: isSmallScreen ? "80%" : "auto",
            bgcolor: "white",
            p: 1,
            my: 1,
            mx: 2,
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              margin: "10px",
              padding: "0px 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 15,
                bottom: 10,
                left: 20,
                width: "1px",
                height: "80%",
                backgroundColor: "#8E8B8B ", // Adjust color as needed
              }}
            ></span>
            <span>Total Revenue</span>
            <img src={Revenue} alt="Customers" />
          </div>
          <Box sx={{ color: "black", ml: 3, display: "flex", gap: 5 }}>
            Total <span>2348</span>
          </Box>
          <Box sx={{ color: "#212121B2", ml: 3, display: "flex", gap: 2 }}>
            Last Month <span>248</span>
          </Box>
        </Box>
        {/* 3rd Div */}
        <Box
          sx={{
            width: isSmallScreen ? "80%" : "auto",
            bgcolor: "white",
            p: 1,
            my: 1,
            mx: 2,
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              margin: "10px",
              padding: "0px 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 10,
                bottom: 10,
                left: 20,
                width: "1px",
                height: "80%",
                backgroundColor: "#8E8B8B ", // Adjust color as needed
              }}
            ></span>
            <span>Total Coupons</span>
            <img src={Campaigns} alt="Customers" />
          </div>
          <Box sx={{ color: "black", ml: 3, display: "flex", gap: 5 }}>
            Total <span>2348</span>
          </Box>
        </Box>
        {/* 4th Div */}
        <Box
          sx={{
            width: isSmallScreen ? "80%" : "auto",
            bgcolor: "white",
            p: 1,
            my: 1,
            mx: 2,
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              gap: 5,
              margin: "10px",
              padding: "0px 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 10,
                bottom: 10,
                left: 20,
                width: "1px",
                height: "80%",
                backgroundColor: "#8E8B8B", // Adjust color as needed
              }}
            ></span>
            <span>Search by date</span>
          </div>
          <Box sx={{ ml: 3 }}>
            <TextField
              type="date"
              InputProps={{
                style: {
                  padding: "16px 2px",
                  color: "#929292",
                  background: "none",
                  height: "1.4375em",
                  width: "100%",
                  boxSizing: "", // Remove box-sizing property
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
