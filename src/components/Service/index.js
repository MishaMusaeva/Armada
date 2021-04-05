import React from "react";
import mont from "../images/mont.png";
import samo from "../images/samo.png";
import img1 from "../images/buklety.png";
import img2 from "../images/visitki.png";
import img3 from "../images/bannery.png";
import img4 from "../images/vyvesky.png";
import img5 from "../images/listovky.png";
import img6 from "../images/operat.png";
import img7 from "../images/spesialists.png";
import img8 from "../images/facilities.png";
import img9 from "../images/width.png";
import img10 from "../images/width1.png";
import "./service.css";


export default function Service() {
  return (
    <div>
      <div className="services">
        <h1>Наши услуги </h1>
        <div className="blocks">
          <div className="blocks-upp">
            <div className="blocks-left">
              <div className="blocks-pic">
                <img src={mont} />
                <div className="blocks-text">Монтажная установка</div>
              </div>
              <div className="blocks-pic">
                <img src={samo} />
                <div className="blocks-text">Самоклейка</div>
              </div>
              <div className="blocks-pic">
                <img src={img1} />
                <div className="blocks-text">Буклеты</div>
              </div>
              <div className="blocks-pic">
                <img src={img2} />
                <div className="blocks-text">Визитки</div>
              </div>
            </div>
            <div className="blocks-right">
              <div className="blocks-pic blocks-pic__big">
                <img src={img3} />
                <div className="blocks-text">Банеры</div>
              </div>
            </div>
          </div>
          <div className="blocks-down">
            <div className="blocks-left-down">
              <div className="blocks-pic blocks-pic-down__big">
                <img src={img4} />
                <div className="blocks-text">Вывески</div>
              </div>
            </div>
            <div className="blocks-right-down">
              <div className="blocks-pic blocks-pic-down">
                <img src={img5} />
                <div className="blocks-text">Листовки</div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-benefit">
          <h1>Наши преимущества </h1>
          <div className="benefits">
            <div className="benefitall">
              <img className="benefit" src={img6} />
              <p>Оперативность</p>
            </div>
            <div className="benefitall">
              <img className="benefit" src={img7} />
              <p>Высококвалифицированные специалисты</p>
            </div>
            <div className="benefitall">
              <img className="benefit" src={img8} />
              <p>Современное оборудование</p>
            </div>
            <div className="benefitall">
              <div className="benefit-special">
                <img className="benefit" src={img9} />
                <img className="benefit-speciall" src={img10} />
              </div>
              <p>Широкий спектр услуг</p>
            </div>
          </div>
        </div>

        <div>
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
