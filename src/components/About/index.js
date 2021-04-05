import React from "react";
import "./about.css";
import aboutshoot1 from "../images/aboutshoot1.png";
import aboutshoot2 from "../images/Group.png";
import aboutshoot3 from "../images/Group2.png";
import aboutshoot4 from "../images/Group3.png";
import aboutshoot5 from "../images/Group4.png";
import aboutshoot6 from "../images/aboutshoot2.png";
import aboutshoot7 from "../images/aboutshoot3.png";
import aboutshoot8 from "../images/aboutshoot4.png";
import aboutshoot9 from "../images/operat.png";
import aboutshoot10 from "../images/spesialists.png";
import aboutshoot11 from "../images/facilities.png";
import aboutshoot12 from "../images/width.png";
import aboutshoot13 from "../images/width1.png";
import aboutshoot14 from "../images/nike.png";

export default function About() {
  return (
    <div className="container">
      <div className="about">
        <img className="aboutshoot1" src={aboutshoot1} />
        <h4>О компании </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
          <br />
          rhoncus dolor purus non enim praesent elementum facilisis leo, vel
          fringilla est ullamcorper eget nulla facilisi etiam dignissim diam
          quis
          <br />
          enim lobortis scelerisque fermentum dui faucibus in ornare quam
          viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa
        </p>
      </div>
      <div className="about1">
        <h4>Чем мы занимаемся ?</h4>
        <div className="aboutcard">
          <img src={aboutshoot2} />
          <p>
            Конструкция <br />
            под ключ
          </p>
        </div>
        <div className="aboutcard">
          <img src={aboutshoot3} />
          <p>
            Вывески, <br />
            объемные буквы
          </p>
        </div>
        <div className="aboutcard">
          <img src={aboutshoot4} />
          <p>
            Визитки, буклеты,
            <br />
            полиграфия
          </p>
        </div>
        <div className="aboutcard">
          <img src={aboutshoot5} />
          <p>
            Банеры, самоклейка,
            <br />
            монтажная установка{" "}
          </p>
        </div>
      </div>
      <div className="about2">
        <img className="aboutshoot6" src={aboutshoot6} />
        <img className="aboutshoot7" src={aboutshoot7} />
        <img className="aboutshoot8" src={aboutshoot8} />
      </div>
      <div className="about3">
        <div className="our-benefit">
          <h3>Наши преимущества </h3>
          <div className="benefits">
            <div className="benefitall">
              <img className="benefit" src={aboutshoot9} />
              <p>Оперативность</p>
            </div>
            <div className="benefitall">
              <img className="benefit" src={aboutshoot10} />
              <p>Высококвалифицированные специалисты</p>
            </div>
            <div className="benefitall">
              <img className="benefit" src={aboutshoot11} />
              <p>Современное оборудование</p>
            </div>
            <div className="benefitall">
              <div className="benefit-special">
                <img className="benefit" src={aboutshoot12} />
                <img className="benefit-speciall" src={aboutshoot13} />
              </div>
              <p>Широкий спектр услуг</p>
            </div>
          </div>
        </div>
      </div>
      <div className="customers">
        <h4>Наши клиенты </h4>
        <img className="nike" src={aboutshoot14} />
        <img className="nike" src={aboutshoot14} />
        <img className="nike" src={aboutshoot14} />
        <img className="nike" src={aboutshoot14} />
        <img className="nike" src={aboutshoot14} />
        <img className="nike" src={aboutshoot14} />
        <img className="nike1" src={aboutshoot14} />
        <img className="nike1" src={aboutshoot14} />
        <img className="nike1" src={aboutshoot14} />
<img className="nike1" src={aboutshoot14} />
        <img className="nike1" src={aboutshoot14} />
        <img className="nike1" src={aboutshoot14} />
      </div>
      <div>
        <div className="about4">
          <div className="words">
            <p className="mainw">Оставьте бесплатную заявку</p>
            <p>
              и менеджер по работе с клиентами свяжется с вами и
              проконсультирует
            </p>
          </div>
          <div className="application">
            <input className="appl" type="text" placeholder="Ваше имя" />
            <input className="appl" type="number" placeholder="Ваше номер" />
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
