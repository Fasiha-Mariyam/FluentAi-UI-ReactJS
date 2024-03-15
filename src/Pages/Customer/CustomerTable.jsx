import React from "react";
import AllCustomerTable from "../../Components/Table/AllCustomerTable";
import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Customers from "../../assets/images/customers.png";
import Back from "../../assets/images/back.png";
import CampaignDiv from "../../Components/Customer/CampaignDiv";
import { useNavigate } from "react-router-dom";

export default function CustomerTable() {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/");
  };
  return (
    <>
      <Container maxWidth="100%">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#111111",
                fontFamily: "Outfit",
              }}
            >
              <Button onClick={handleDashboardClick}>
                <img src={Back} />
              </Button>
            </Typography>
            {/* Select */}
            <Box
              sx={{
                fontWeight: "bold",
              }}
            >
              Daniyal -Summer Campaign{" "}
              <span style={{ color: "grey", marginLeft: 20 }}>Oct 26th 23</span>
            </Box>
          </Box>
          <CampaignDiv />
          <Box>
            <Box sx={{ mt: 5, mb: 3 }}>
              <AllCustomerTable heading={"Customers Table"} partner={"yes"} />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
