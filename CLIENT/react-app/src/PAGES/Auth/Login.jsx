import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/auth/logined`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setMessage(data.message);
    setUsername(data.user.username);

    // İsteğin başarılı olup olmadığını kontrol et
    if (res.ok) {
      navigate("/dashboard", { state: { message, username } });
    }
  };

  return (
    <div style={{ margin: "100px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Kullanıcı adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Giriş Yap</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
