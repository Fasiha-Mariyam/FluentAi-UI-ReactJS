import {
  Box,
  Button,
  CircularProgress,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import icon from "../../assets/images/Layer_2.png";
import arrow from "../../assets/images/Vector-15.png";
import { dispatch } from "../../Redux/store";
import { addPartner } from "../../Redux/slices/partner";
import { useNavigate } from "react-router-dom";

export default function PartnerForm() {
  const [campaignType, setCampaignType] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Validation checks

      if (name === "" && campaignType === "") {
        enqueueSnackbar(`Please fill all the required fields`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else if (name === "") {
        // Check if name is empty
        enqueueSnackbar(`Please enter a name`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else if (/^\d/.test(name)) {
        // Check if name starts with a number
        enqueueSnackbar(`Name should not start with a number`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else if (campaignType === "") {
        enqueueSnackbar(`Please select a campaign type`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else {
        setLoading(true);

        const objToSend = [
          {
            name,
            campaignType,
          },
        ];
        if (name !== "" && campaignType !== "") {
          console.log(objToSend);
          dispatch(addPartner(objToSend));
          enqueueSnackbar(`Request submitted successfully`, {
            autoHideDuration: 3000,
            variant: "success",
          });
          setName("");
          setCampaignType("");
          setLoading(false);
          navigate("/");
        } else {
          setLoading(false);
          enqueueSnackbar(`Request not submitted successfully`, {
            autoHideDuration: 3000,
            variant: "error",
          });
        }
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar(`Request not submitted successfully`, {
        autoHideDuration: 3000,
        variant: "error",
      });
      console.log(error);
    }
  };

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
                fontWeight: 450,
                fontSize: "24px",
                color: "#111111",
                fontFamily: "Outfit",
              }}
            >
              Create Partner
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "5px",
              backgroundColor: "#6377E81A",
              my: 2,
              boxShadow:
                " 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
            }}
          >
            {/* form */}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                padding: "30px",
                display: "flex",
                flexDirection: { sm: "column", xs: "column" },
              }}
            >
              {/* Name and Select */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  justifyContent: "space-between",
                }}
              >
                {/* name */}
                <Box
                  sx={{
                    width: { md: "48%", sm: "100%", xs: "100%" },
                  }}
                >
                  <InputLabel
                    sx={{
                      color: "#6B7280",
                      fontWeight: "bold",
                      fontFamily: "Outfit",
                    }}
                  >
                    Name
                  </InputLabel>

                  <TextField
                    required
                    sx={{
                      mt: 1,
                      mb: 2,
                      fontFamily: "Outfit",
                      width: { md: "100%", sm: "100%", xs: "100%" },
                      backgroundColor: "#F9FAFB",
                      "& label.Mui-focused": {
                        color: "#0055FF",
                      },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0055FF",
                        },
                      },
                    }}
                    placeholder="Name of Partner"
                    margin="normal"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e?.target.value)}
                    id="name"
                    size="large"
                  />
                </Box>
                {/* Select */}
                <Box
                  sx={{
                    width: { md: "48%", sm: "100%", xs: "100%" },
                  }}
                >
                  <InputLabel
                    htmlFor="demo-simple-select"
                    sx={{
                      color: "#6B7280",
                      fontWeight: "bold",
                      fontFamily: "Outfit",
                    }}
                  >
                    Campaign Type
                  </InputLabel>

                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={campaignType}
                    onChange={(e) => setCampaignType(e?.target.value)}
                    displayEmpty
                    sx={{
                      mt: 1,
                      mb: 2,
                      fontFamily: "Outfit",
                      width: { md: "100%", sm: "100%", xs: "100%" },
                      backgroundColor: "#F9FAFB",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#0055FF",
                        },
                      },
                      "& .MuiSelect-icon": {
                        backgroundImage: `url(${arrow})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        width: 15,
                        height: "100%",
                        marginRight: 0,
                        marginTop: -2,
                      },
                    }}
                  >
                    <MenuItem value="" selected disabled>
                      Select Any Campaign
                    </MenuItem>
                    <MenuItem value="Voucher">Voucher</MenuItem>
                    <MenuItem value="Coupon">Coupon</MenuItem>
                  </Select>
                </Box>
              </Box>
              {/* Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    mt: 2,
                    mb: 2,
                    background: "#3F51B5",
                    color: "#FFF",
                    fontFamily: "Outfit",
                    "&:hover": {
                      background: "#3F51B5", // Change background color on hover
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress
                      color="inherit"
                      size="1rem"
                      sx={{ mr: 2 }}
                    />
                  ) : (
                    ""
                  )}
                  Create{" "}
                  <img
                    src={icon}
                    alt=""
                    height={15}
                    style={{ marginLeft: 5 }}
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
