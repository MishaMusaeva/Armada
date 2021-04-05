
import React from "react";
import map from "../images/map.png";
import width1 from "../images/width1.png";
import phone from "../images/Phone.png";
import map1 from "../images/map1.png";
import './contacts.css'

export default function Contacts() {
  return (
    <div className="container1">
      <div className="contactspage1">
        <h3>Контакты</h3>
        <div className="rejim">
          <img className="map1" src={width1} />
          <h5>Режим работы</h5>
        </div>
        <p>c 10:00 до 20:00</p>
        <p>Сб, Вс - выходной.</p>
        <div className="rejim">
          <img className="map1" src={phone} />
          <h5>Телефон</h5>
        </div>
        <p>+996 (0553) 577-575, +996 (0773) 577-575</p>
        <div className="rejim">
          <img className="map1" src={map1} />
          <h5>Адрес</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit ut aliquam
        </p>
      </div>
      <div className="contactspage2">
        <img className="map" src={map} />
      </div>
    </div>
  );
}
