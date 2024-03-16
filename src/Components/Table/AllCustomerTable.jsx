import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  IconButton,
  Collapse,
  Typography,
  Button,
  Container,
  Checkbox,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import arrowUp from "../../assets/images/Vector-10.png";
import arrowDown from "../../assets/images/Vector-15.png";
import CSV from "../../assets/images/csv.png";
import Tick from "../../assets/images/Vector-4.png";
import Desh from "../../assets/images/Vector-7.png";
import email from "../../assets/images/mail.png";
import country from "../../assets/images/Group 1171275756.png";
import Coupon from "../../assets/images/Group 1171275678.png";

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  price,
  TotalRedeemed,
  Street,
  zip,
  country
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    TotalRedeemed,
    Street,
    zip,
    country,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const Campaign = useSelector((state) => {
    return state.partner.coupon;
  });
  console.log(Campaign);
  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          backgroundColor: open ? "#FFFF9980" : "inherit",
        }}
      >
        <TableCell component="th" scope="row">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? (
                <img src={arrowUp} alt="arrow up" />
              ) : (
                <img src={arrowDown} alt="arrow down" />
              )}
            </IconButton>
            <span style={{ color: "#0055FF" }}>{row.name}</span>
          </Box>
        </TableCell>
        <TableCell align="center">
          <img src={email} alt="email" style={{ marginRight: 10 }} />
          <span style={{ color: "#0055FF" }}>{row.calories}</span>
        </TableCell>
        <TableCell align="center">
          <img src={country} alt="country" style={{ marginRight: 10 }} />
          {row.fat}
        </TableCell>
        <TableCell align="center">{row.carbs}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">
          <img src={Tick} alt="tick" style={{ marginRight: 10 }} />
          {row.TotalRedeemed}
        </TableCell>
        <TableCell align="center">{row.Street}</TableCell>
        <TableCell align="center">{row.zip}</TableCell>
        <TableCell align="center">
          <img src={Desh} alt="desh" style={{ marginRight: 10 }} />
          {row.country}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Coupon Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell align="center">partner</TableCell>
                    <TableCell align="center">%off</TableCell>
                    <TableCell align="center">Security Code</TableCell>
                    <TableCell align="center">Subscription start</TableCell>
                    <TableCell align="center">Subscription end</TableCell>
                    <TableCell align="center">Coupon code </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Campaign.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell>{historyRow.productName}</TableCell>
                      <TableCell align="center">
                        {historyRow.partnerName}
                      </TableCell>
                      <TableCell align="center">
                        {Math.round(historyRow.percentOff * row.price * 100) /
                          100}
                      </TableCell>
                      <TableCell align="center">
                        {Math.round(historyRow.retailPrice * row.price * 100) /
                          100}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.lastDate}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.lastDate}
                      </TableCell>
                      <TableCell align="center">
                        <img
                          src={Coupon}
                          alt="coupon"
                          style={{ marginRight: 10 }}
                        />
                        {Math.round(historyRow.commission * row.price * 100) /
                          100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "Frozen",
    "fas@gmail..",
    6.0,
    24,
    4.0,
    3.99,
    23,
    "Oct 25th 23",
    23,
    3
  ),
  createData(
    "Ice cream",
    "fas@gmail..",
    9.0,
    37,
    4.3,
    4.99,
    23,
    "Oct 25th 23",
    23,
    3
  ),
  createData(
    "Eclair",
    "fas@gmail..",
    16.0,
    24,
    6.0,
    3.79,
    23,
    "Oct 25th 23",
    23,
    3
  ),
  createData(
    "Cupcake",
    "fas@gmail..",
    3.7,
    67,
    4.3,
    2.5,
    23,
    "Oct 25th 23",
    23,
    3
  ),
  createData(
    "Gingerbread",
    "fas@gmail..",
    16.0,
    49,
    3.9,
    1.5,
    23,
    "Oct 25th 23",
    23,
    3
  ),
  createData(
    "Gingerbread",
    "fas@gmail..",
    16.0,
    49,
    3.9,
    1.5,
    23,
    "Oct 25th 23",
    23,
    3
  ),
  createData(
    "Gingerbread",
    "fas@gmail..",
    16.0,
    49,
    3.9,
    1.5,
    23,
    "Oct 25th 23",
    23,
    3
  ),
];

export default function AllCustomerTable({ heading }) {
  let value = "";
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className="AllCustomerTable">
      {/* Heading and Button Div */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Typography fontWeight={"bold"} fontSize={"22px"}>
          {heading}
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            borderRadius: "11px",
            px: 4,
          }}
        >
          Export CVS
          <span style={{ marginTop: 4, marginLeft: "20px" }}>
            <img src={CSV} height={25} />
          </span>
        </Button>
      </div>
      {/* filter row and select all */}
      <div>
        <Box
          sx={{
            background: "#6377E8",
            borderRadius: "10px",
            display: "flex",
            maxWidth: "100%",
            p: 2,
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: 2,
          }}
        >
          {/* select checkbox */}
          <Box
            style={{
              fontWeight: "bold",
              color: "white",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>
              Select All
            </Typography>
            <Checkbox sx={{ color: "white" }} />
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              displayEmpty
              sx={{
                height: 50,
                fontFamily: "Outfit",
                borderRadius: "10px",
                width: { md: "60%", sm: "30%", xs: "100%" },
                backgroundColor: "#F9FAFB",
                color: value === "" ? "grey" : "black",
                border: "1px solid black",
                "& .MuiSelect-icon": {
                  //backgroundImage: `url(${arrowDown})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: 15,
                  height: "100%",
                  marginRight: 0,
                  marginTop: -1.5,
                },
              }}
            >
              <MenuItem value="" selected disabled>
                Select partner name
              </MenuItem>
              <MenuItem>Bro</MenuItem>
            </Select>
          </Box>
          {/* Date code */}
          <Box
            style={{
              fontWeight: "bold",
              color: "white",
              borderBottom: "none",
              display: "flex",
              background: "#6377E8",
              justifyContent: "center",
              gap: 10,
              flexDirection: { xs: "column", sm: "row", md: "row" },
              // flexDirection: "row",
              alignItems: "center",
              flexWrap: isSmallScreen && "wrap",
              // flexWrap: { md: "nowrap" },
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>
              Date:
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              From
            </Typography>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              displayEmpty
              sx={{
                height: 50,
                fontFamily: "Outfit",
                borderRadius: "10px",
                width: { md: "40%", sm: "30%", xs: "100%" },
                backgroundColor: "#F9FAFB",
                color: value === "" ? "grey" : undefined,
                border: "1px solid black",
                "& .MuiSelect-icon": {
                  //backgroundImage: `url(${arrowDown})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: 15,
                  height: "100%",
                  marginRight: 0,
                  marginTop: -1.5,
                },
              }}
              inputProps={{
                readOnly: true,
              }}
            >
              <MenuItem value="">MM/DD/YYYY</MenuItem>
            </Select>
            <Typography variant="body1" sx={{ color: "white" }}>
              To
            </Typography>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              displayEmpty
              sx={{
                fontFamily: "Outfit",
                borderRadius: "10px",
                width: { md: "40%", sm: "30%", xs: "100%" },
                height: 50,
                backgroundColor: "#F9FAFB",
                color: value === "" ? "grey" : undefined,
                border: "1px solid black",
                "& .MuiSelect-icon": {
                  //backgroundImage: `url(${arrowDown})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: 15,
                  height: "100%",
                  marginRight: 0,
                  marginTop: -1.5,
                },
              }}
              inputProps={{
                readOnly: true,
              }}
            >
              <MenuItem value="">MM/DD/YYYY</MenuItem>
            </Select>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              displayEmpty
              sx={{
                height: 50,
                fontFamily: "Outfit",
                borderRadius: "10px",
                width: { md: "40%", sm: "30%", xs: "100%" },
                backgroundColor: "#F9FAFB",
                color: value === "" ? "grey" : "black",
                border: "1px solid black",
                "& .MuiSelect-icon": {
                  //backgroundImage: `url(${arrowDown})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: 15,
                  height: "100%",
                  marginRight: 0,
                  marginTop: -1.5,
                },
              }}
            >
              <MenuItem value="" disabled>
                Select filter
              </MenuItem>
              <MenuItem value="Old to New">Old to New</MenuItem>
              <MenuItem value="New to Old">New to Old</MenuItem>
            </Select>
          </Box>
        </Box>
      </div>
      <Box sx={{ maxHeight: 400, overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: 10, fontWeight: "bold" }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: 10, fontWeight: "bold" }}
                >
                  Country
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: 10, fontWeight: "bold" }}
                >
                  Zip
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: 10, fontWeight: "bold" }}
                >
                  Street
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: 10, fontWeight: "bold" }}
                >
                  TotalRedeemed
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: 10, fontWeight: "bold" }}
                >
                  Total Coupon
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: 10, fontWeight: "bold" }}
                >
                  Total Subscriptions
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: 10, fontWeight: "bold" }}
                >
                  Subscription Canceled
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </div>
  );
}
