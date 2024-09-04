import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav style={{ display: "flex", flexDirection: "column" }}>
      <Link to="generate">Генерировать QR код</Link>
      <Link to="scan">Сканировать QR код</Link>
      <Link to="/">История сканирования</Link>
      <Link to="/">История генерирования</Link>
    </nav>
  );
};

export default Navigation;
