import React from "react";
import { Box, Container } from "@mui/material";
import DashboardDiv from "../../Components/Customer/DashboardDiv";
import PartnerTable from "../../Components/Table/PartnerTable";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const partnerData = useSelector((state) => {
    return state.partner.partner;
  });
  console.log(partnerData);
  return (
    <>
      <>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <DashboardDiv />
            <Box>
              <Box sx={{ mt: 3, mb: 3 }}>
                <PartnerTable partner={partnerData} />
              </Box>
            </Box>
          </Box>
        </Container>
      </>
    </>
  );
}
