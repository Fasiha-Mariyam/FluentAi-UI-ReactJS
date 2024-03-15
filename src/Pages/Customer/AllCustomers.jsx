import React from "react";
import AllCustomerTable from "../../Components/Table/AllCustomerTable";
import { Box, Container, Typography, Select, MenuItem } from "@mui/material";
import arrow from "../../assets/images/Vector-9.png";

export default function AllCustomers() {
  return (
    <>
      <Container maxWidth="lg">
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
              Platforms
            </Typography>
            {/* Select */}
            <Box
              sx={{
                width: { md: "48%", sm: "100%", xs: "100%" },
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Fluent AI"}
                displayEmpty
                sx={{
                  mt: 1,
                  mb: 2,
                  fontFamily: "Outfit",
                  borderRadius: "10px",
                  width: { md: "40%", sm: "30%", xs: "30%" },
                  backgroundColor: "#F9FAFB",
                  border: "1px solid black",
                  "& .MuiSelect-icon": {
                    backgroundImage: `url(${arrow})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: 15,
                    height: "100%",
                    marginRight: 0,
                    marginTop: -2,
                  },
                }}
                inputProps={{
                  readOnly: true,
                }}
              >
                <MenuItem value="Fluent AI">Fluent AI</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box>
            <Box sx={{ mt: 5 ,  mb:2}}>
              <AllCustomerTable heading={"Fluent AI Customers Table "} />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
