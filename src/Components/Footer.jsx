import { House, AlarmClockCheck, ChartNoAxesColumn, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const isActive = (buttonName) => activeButton === buttonName;

  return (
    <div className="Footer--Container">
      <Link
        to="/"
        className={`Footer--Container__button ${isActive("Главная") ? "active" : ""}`}
        onClick={() => handleButtonClick("Главная")}
      >
        <House />
        <p>Главная</p>
      </Link>

      <Link
        to="/AlarmClock"
        className={`Footer--Container__button ${isActive("Будильник") ? "active" : ""}`}
        onClick={() => handleButtonClick("Будильник")}
      >
        <AlarmClockCheck />
        <p>Будильник</p>
      </Link>

      <Link
        to="/Rate"
        className={`Footer--Container__button ${isActive("Рейтинг") ? "active" : ""}`}
        onClick={() => handleButtonClick("Рейтинг")}
      >
        <ChartNoAxesColumn />
        <p>Рейтинг</p>
      </Link>

      <Link
        to="/Settings"
        className={`Footer--Container__button ${isActive("Настройки") ? "active" : ""}`}
        onClick={() => handleButtonClick("Настройки")}
      >
        <Settings2 />
        <p>Настройки</p>
      </Link>
    </div>
  );
};

export default Footer;