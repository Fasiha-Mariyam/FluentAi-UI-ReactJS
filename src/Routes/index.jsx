import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CustomerTable from "../Pages/Customer/CustomerTable";
import CreatePartner from "../Pages/Partner/CreatePartner";
import AllCustomers from "../Pages/Customer/AllCustomers";
import GenerateCoupons from "../Pages/Coupons/GenerateCoupons";
import Layout from "../Layout/Layout";

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/campaign" element={<CustomerTable />} />
              <Route path="/createpartner" element={<CreatePartner />} />
              <Route path="/all-customer" element={<AllCustomers />} />
              <Route path="/createcoupons" element={<GenerateCoupons />} />
            </>
          }
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesIndex;
