import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authentication";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, []);

  return null;
}

export default Logout;
