import React from "react";
import "./home.css";
import pic1 from "../images/pic1.jpg";
import WA from "../images/WA.png";
import insta from "../images/insta.png";
import fb from "../images/fb.png";
import group from "../images/Group.png";
import group2 from "../images/Group2.png";
import group3 from "../images/Group3.png";
import group4 from "../images/Group4.png";
import pic0 from "../images/pic0.png";
import fon1 from "../images/fon1.png";
import pic2 from "../images/pic2.png";
import fon2 from "../images/fon2.png";
import pic3 from "../images/pic3.png";
import fon3 from "../images/fon3.png";
import pic4 from "../images/pic4.png";
import fon4 from "../images/fon4.png";
import pic5 from "../images/pic5.png";
import fon5 from "../images/fon5.png";
import pic6 from "../images/pic6.png";
import fon6 from "../images/fon6.png";
import production1 from "../images/Rectangle 84.png";
import production2 from "../images/Rectangle 85.png";
import production3 from "../images/Rectangle 86.png";
import shoot1 from "../images/Rectangle 1.png";
import shoot2 from "../images/Rectangle 2.png";
import shoot3 from "../images/Rectangle 3.png";
import shoot4 from "../images/Rectangle 4.png";
import shoot5 from "../images/Rectangle 1.png";
import shoot6 from "../images/Rectangle 2.png";
import shoot7 from "../images/Rectangle 3.png";
import shoot8 from "../images/Rectangle 4.png";
import shoot9 from "../images/nike.png";
import shoot10 from "../images/uilia.png";
import shoot11 from "../images/anna.png";
import shoot12 from "../images/andrey.png";

export default function Home() {
  return (
    <div>
      <div>
        <div className="all">
          <img className="back" src={pic1} alt="WA" />
          <div className="background"></div>
          <div className="maincontent">
            <div className="leftside">
              <h1>
                Наружная реклама <br /> в Бишкеке{" "}
              </h1>
              <p>
                {" "}
                Произдводство наружной рекламы <br />и создание проектов под
                ключ
              </p>
              <button className="btn"> Оставить заявку</button>
            </div>
            <div className="icons">
              <img className="icon" src={WA} alt="WA" />
              <img className="icon" src={insta} alt="WA" />
              <img className="icon" src={fb} alt="WA" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="cards">
          <h2> Наши услуги</h2>
          <div className="card1">
            <img className="group" src={group} />
            <p className="type1">
              Конструкция
              <br />
              под ключ
            </p>
            <p className="type2">
              {" "}
              Хотите узнать подробность,
              <br />
              телефон для связи:
            </p>
            <p className="number"> +996 (0553) 577-575</p>
          </div>
          <div className="card2">
            <img className="group" src={group2} />
            <p className="type1">
              Вывески, <br />
              объемные буквы
            </p>
            <p className="type2">
              {" "}
              Хотите узнать подробность,
              <br />
              телефон для связи:
            </p>
            <p className="number">+996 (0553) 577-575</p>
          </div>
          <div className="card3">
            <img className="group" src={group3} />
            <p className="type1">
              {" "}
              Визитки, буклеты,
              <br />
              полиграфия
            </p>
            <p className="type2">
              {" "}
              Хотите узнать подробность,
              <br />
              телефон для связи:
            </p>
            <p className="number">+996 (0553) 577-575</p>
          </div>
          <div className="card4">
            <img className="group" src={group4} />
            <p className="type1">
              {" "}
              Банеры, самоклейка,
              <br /> монтажная установка{" "}
</p>
            <p className="type2">
              {" "}
              Хотите узнать подробность,
              <br />
              телефон для связи:
            </p>
            <p className="number">+996 (0553) 577-575</p>
          </div>
        </div>
      </div>
      <div className="workss">
        <h3>Наши работы</h3>
        <div className="works">
          <div className="line1">
            <div className="work1">
              <img className="pic0" src={pic0} />
              <img className="fon1" src={fon1} />
            </div>
            <div className="work2">
              <img className="pic2" src={pic2} />
              <img className="fon2" src={fon2} />
            </div>
            <div className="work3">
              <img className="pic3" src={pic3} />
              <img className="fon3" src={fon3} />
            </div>
          </div>
          <div className="line2">
            <div className="work4">
              <img className="pic4" src={pic4} />
              <img className="fon4" src={fon4} />
            </div>
            <div className="work5">
              <img className="pic5" src={pic5} />
              <img className="fon5" src={fon5} />
            </div>
            <div className="work6">
              <img className="pic6" src={pic6} />
              <img className="fon6" src={fon6} />
            </div>
          </div>
          <button className="btnw"> Все работы</button>
        </div>
      </div>
      <div className="productions">
        <h4>Производство</h4>
        <div className="production1">
          <img className="production" src={production1} />
          <img className="production" src={production2} />
          <img className="production" src={production3} />
        </div>
      </div>
      <div className="prices">
        <h4>Наш прайс </h4>
        <div className="price">
          <img className="shoot" src={shoot1} />
          <p className="about">
            Фасадная вывеска (подсветка внутреняя, железный короб, флекс)
          </p>
          <p className="price1">1990 сом</p>
        </div>
        <div className="price">
          <img className="shoot" src={shoot2} />
          <p className="about">
            Фасадная вывеска (подсветка внутреняя, железный короб, флекс)
          </p>
          <p className="price1">1990 сом</p>
        </div>
        <div className="price">
          <img className="shoot" src={shoot3} />
          <p className="about">
            Фасадная вывеска (подсветка внутреняя, железный короб, флекс)
          </p>
          <p className="price1">1990 сом</p>
        </div>
        <div className="price">
          <img className="shoot" src={shoot4} />
          <p className="about">
            Фасадная вывеска (подсветка внутреняя, железный короб, флекс)
          </p>
          <p className="price1">1990 сом</p>
        </div>
        <div className="price">
          <img className="shoot" src={shoot5} />
          <p className="about">
            Фасадная вывеска (подсветка внутреняя, железный короб, флекс)
          </p>
          <p className="price1">1990 сом</p>
        </div>
        <div className="price">
          <img className="shoot" src={shoot6} />
          <p className="about">
            Фасадная вывеска (подсветка внутреняя, железный короб, флекс)
          </p>
          <p className="price1">1990 сом</p>
        </div>
        <div className="price">
          <img className="shoot" src={shoot7} />
          <p className="about">
            Фасадная вывеска (подсветка внутреняя, железный короб, флекс)
          </p>
          <p className="price1">1990 сом</p>
        </div>
        <div className="price">
          <img className="shoot" src={shoot8} />
          <p className="about">
            Фасадная вывеска (подсветка внутреняя, железный короб, флекс)
          </p>
          <p className="price1">1990 сом</p>
        </div>
        <button className="download">Скачать прайс</button>
      </div>
      <div className="customers">
        <h4>Наши клиенты </h4>
<img className="nike" src={shoot9} />
        <img className="nike" src={shoot9} />
        <img className="nike" src={shoot9} />
        <img className="nike" src={shoot9} />
        <img className="nike" src={shoot9} />
        <img className="nike" src={shoot9} />
      </div>
      <div className="team">
        <h4 className="team-title">Наша команда </h4>
        <div className="leaders-wrap">
          <div className="leaders">
            <img className="photo" src={shoot10} />
            <p className="name"> Юля</p>
            <p className="who">Соучредитель</p>
          </div>
          <div className="leaders">
            <img className="photo" src={shoot11} />
            <p className="name"> Анна</p>
            <p className="who">Дизайнер</p>
          </div>
          <div className="leaders">
            <img className="photo" src={shoot12} />
            <p className="name">Андрей </p>
            <p className="who">Соучредитель</p>
          </div>
        </div>

        <div className="words">
          <p className="mainw">Оставьте бесплатную заявку</p>
          <p>
            и менеджер по работе с клиентами свяжется с вами и проконсультирует
          </p>
        </div>
        <div className="application">
          <input className="appl" type="text" placeholder="Ваше имя" />
          <input className="appl" type="number" placeholder="Ваше номер" />
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
}
