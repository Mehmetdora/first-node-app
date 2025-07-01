import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      navigate("/");
    } catch (err) {
      console.error("Çıkış yapılamadı:", err);
    }
  };

  return (
    <nav style={{ display: "flex", gap: "20px", margin: "20px" }}>
      <button
        onClick={handleLogout}
        style={{
          background: "none",
          border: "none",
          color: "blue",
          cursor: "pointer",
        }}
      >
        Çıkış Yap
      </button>
    </nav>
  );
}

export default Navbar;
