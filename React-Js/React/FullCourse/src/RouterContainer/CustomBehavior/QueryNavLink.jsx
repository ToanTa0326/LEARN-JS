import { useLocation, NavLink } from "react-router-dom";

//To keep list filtered and keep the param in the URL after change direction
function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  console.log(location);
  return <NavLink to={to + location.search} {...props} />;
}

export default QueryNavLink