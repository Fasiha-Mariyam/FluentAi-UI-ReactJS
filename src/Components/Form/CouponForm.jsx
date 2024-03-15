import {
  Box,
  Button,
  CircularProgress,
  Container,
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import icon from "../../assets/images/Layer_2.png";
import arrow from "../../assets/images/Vector-15.png";
import { dispatch } from "../../Redux/store";
// import { createRequest} from "../../redux/slices/requests";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addCoupon } from "../../Redux/slices/partner";

export default function CouponForm() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const partnerData = useSelector((state) => {
    return state.partner.partner;
  });

  const [salePerson, setsSalePerson] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [partnerName, setPartnerName] = useState("");
  const [productName, setProductName] = useState("");
  const [currencyType, setCurrencyType] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [commission, setCommission] = useState("");
  const [percentOff, setPercentOff] = useState("");
  const [numberOfCoupons, setNumberOfCoupons] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Validation checks

      if (
        partnerName === "" ||
        productName === "" ||
        salePerson === "" ||
        currencyType === "" ||
        lastDate === "" ||
        name === "" ||
        retailPrice === "" ||
        commission === "" ||
        percentOff === "" ||
        numberOfCoupons === ""
      ) {
        enqueueSnackbar(`Please fill all the required fields`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
      } else if (/^\d/.test(name)) {
        enqueueSnackbar(`Campaign Name should not start with a number`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else {
        setLoading(true);

        const objToSend = [
          {
            partnerName,
            productName,
            salePerson,
            currencyType,
            lastDate,
            name,
            retailPrice,
            commission,
            percentOff,
            numberOfCoupons,
          },
        ];
        if (objToSend !== null) {
          console.log(objToSend);
          dispatch(addCoupon(objToSend));
          enqueueSnackbar(`Request submitted successfully`, {
            autoHideDuration: 3000,
            variant: "success",
          });
          setName("");
          setPartnerName("");
          setProductName("");
          setsSalePerson("");
          setCurrencyType("");
          setLastDate("");
          setRetailPrice("");
          setCommission("");
          setPercentOff("");
          setNumberOfCoupons("");
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
              Generate Coupon
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
              component={"form"}
              noValidate
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                padding: "30px",
                display: "flex",
                flexDirection: { sm: "column", xs: "column" },
              }}
            >
              {/* Partner Name , product Name and last date*/}
              <Box
                sx={{
                  display: "flex",
                  gap: matches ? 10 : 2,
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  justifyContent: "space-between",
                }}
              >
                {/* partner name */}
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
                    Partner Name
                  </InputLabel>

                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={partnerName}
                    onChange={(e) => setPartnerName(e?.target.value)}
                    displayEmpty
                    sx={{
                      mt: 1,
                      mb: 2,
                      fontFamily: "Outfit",
                      width: { md: "100%", sm: "100%", xs: "100%" },
                      color: partnerName === "" ? "#929292" : "black",
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
                      Select partner name
                    </MenuItem>
                    <MenuItem>Bro</MenuItem>
                    {partnerData.map((partner, index) => (
                      <MenuItem key={index} value={partner.name}>
                        {partner.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                {/* product Name  */}
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
                    Product Name
                  </InputLabel>

                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={productName}
                    onChange={(e) => setProductName(e?.target.value)}
                    displayEmpty
                    sx={{
                      mt: 1,
                      mb: 2,
                      fontFamily: "Outfit",
                      color: productName === "" ? "#929292" : "black",
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
                      Select product name
                    </MenuItem>
                    <MenuItem value="Fast Monthly">
                      Fluent Fast Monthly
                    </MenuItem>
                    <MenuItem value="Mastery Monthly">
                      Fluent Mastery Monthly
                    </MenuItem>
                    <MenuItem value="Fast Yearly">Fluent Fast Yearly</MenuItem>
                    <MenuItem value="Mastery Yearly">
                      Fluent Mastery Yearly
                    </MenuItem>
                  </Select>
                </Box>
                {/* last date */}
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
                    Last Date
                  </InputLabel>

                  <TextField
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
                      "& .MuiInputBase-input[type='date']": {
                        color: "#929292",
                      },
                    }}
                    type="date"
                    value={lastDate}
                    onChange={(e) => setLastDate(e.target.value)}
                    id="description"
                    size="large"
                  />
                </Box>
              </Box>
              {/* Campaign Name , salePerson NAme , Retail Price */}
              <Box
                sx={{
                  display: "flex",
                  gap: matches ? 10 : 2,
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  justifyContent: "space-between",
                }}
              >
                {/* Campaign Name  */}
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
                    Campaign Name
                  </InputLabel>

                  <TextField
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
                    placeholder="Enter coupon name"
                    margin="normal"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e?.target.value)}
                    id="location"
                    size="large"
                  />
                </Box>
                {/* salePerson NAme  */}
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
                    Sale’s Person Name
                  </InputLabel>

                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={salePerson}
                    onChange={(e) => setsSalePerson(e?.target.value)}
                    displayEmpty
                    sx={{
                      mt: 1,
                      mb: 2,
                      fontFamily: "Outfit",
                      color: salePerson === "" ? "#929292" : "black",
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
                    <MenuItem value="" disabled>
                      Select sales person name
                    </MenuItem>
                    <MenuItem value="Bro">Bro</MenuItem>
                    <MenuItem value="Adeela">Adeela</MenuItem>
                    <MenuItem value="Asim">Asim</MenuItem>
                  </Select>
                </Box>
                {/* Retail Price */}
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
                    Retail Price
                  </InputLabel>

                  <TextField
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
                    type="number"
                    placeholder="0"
                    margin="normal"
                    autoComplete="off"
                    inputProps={{ min: 0 }}
                    value={retailPrice}
                    onChange={(e) => setRetailPrice(e.target.value)}
                    id="fee"
                    size="large"
                  />
                </Box>
              </Box>
              {/* Commission in (Selected Currency) , Percent off (%) , Number of coupons ,Currency */}
              <Box
                sx={{
                  display: "flex",
                  gap: matches ? 10 : 2,
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  justifyContent: "space-between",
                }}
              >
                {/* Commission in (Selected Currency)  */}
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
                    Commission in (Selected Currency)
                  </InputLabel>

                  <TextField
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
                    type="number"
                    placeholder="0"
                    margin="normal"
                    autoComplete="off"
                    inputProps={{ min: 0 }}
                    value={commission}
                    onChange={(e) => setCommission(e.target.value)}
                    id="fee"
                    size="large"
                  />
                </Box>
                {/* Percent off (%) */}
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
                    Percent off (%)
                  </InputLabel>

                  <TextField
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
                    type="number"
                    placeholder="0"
                    margin="normal"
                    autoComplete="off"
                    inputProps={{ min: 0 }}
                    value={percentOff}
                    onChange={(e) => setPercentOff(e.target.value)}
                    id="fee"
                    size="large"
                  />
                </Box>
                {/*Number of coupons*/}
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
                    Number of coupons
                  </InputLabel>

                  <TextField
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
                    type="number"
                    placeholder="0"
                    margin="normal"
                    autoComplete="off"
                    inputProps={{ min: 0 }}
                    value={numberOfCoupons}
                    onChange={(e) => setNumberOfCoupons(e.target.value)}
                    id="fee"
                    size="large"
                  />
                </Box>
                {/* Currency*/}
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
                    Currency
                  </InputLabel>

                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currencyType}
                    onChange={(e) => setCurrencyType(e?.target.value)}
                    displayEmpty
                    sx={{
                      mt: 1,
                      mb: 2,
                      fontFamily: "Outfit",
                      color: currencyType === "" ? "#929292" : "black",
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
                      Select Currency
                    </MenuItem>
                    <MenuItem value="$">$</MenuItem>
                    <MenuItem value="€">€</MenuItem>
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
                  Generate
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
