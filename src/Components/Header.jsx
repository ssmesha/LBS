import { CircleUser, Bell } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const [pageName, setPageName] = useState("Ошибка");
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/" || path === "/Home") {
      setPageName("Главная");
    } else if (path === "/Profile") {
      setPageName("Профиль");
    } else if (path === "/Notifications") {
      setPageName("Напоминания");
    } else if (path === "/AlarmClock") {
      setPageName("Будильник");
    } else if (path === "/Settings") {
      setPageName("Настройки");
    } else if (path === "/Rate") {
      setPageName("Рейтинг");
    }
  }, [location.pathname]);

  return (
    <div className='Header--Container'>
      <button className='header-button' onClick={() => navigate("/Profile")}>
        <CircleUser color="#fff" />
      </button>

      <div className='header-title'>
        <p>{pageName}</p>
      </div>

      <button className='header-button' onClick={() => navigate("/Notifications")}>
        <Bell color="#fff" />
      </button>
    </div>
  );
}

export default Header;