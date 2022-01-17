import {
    Outlet,
    Route,
    Routes,
    useSearchParams
} from "react-router-dom";
import { getInvoices } from "../FakeData";
import QueryNavLink from "./CustomBehavior/QueryNavLink"
import Home from "./SearchParamsComponent/Home"
import SantaMonica from "./SearchParamsComponent/SantaMonica"
import Stankonia from "./SearchParamsComponent/Stankonia"
import Tubthumper from "./SearchParamsComponent/Tubthumper"
import OceanAvenue from "./SearchParamsComponent/OceanAvenue"
import WideOpenSpaces from "./SearchParamsComponent/WideOpenSpaces"
  
export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
  
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={event => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter(invoice => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .map(invoice => (
                <QueryNavLink
                    style={({ isActive }) => ({
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : ""
                    })}
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                >
                    {invoice.name}
                </QueryNavLink>
            ))}
        </nav>
        <Outlet />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoices/1995" element={<SantaMonica />} />
            <Route path="/invoices/2000" element={<Stankonia />} />
            <Route path="/invoices/1997" element={<Tubthumper />} />
            <Route path="/invoices/2003" element={<OceanAvenue />} />
            <Route path="/invoices/1998" element={<WideOpenSpaces />} />
        </Routes>
      </div>
    );
}