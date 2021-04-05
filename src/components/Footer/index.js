import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div>
            <div className="end">
        <div className="theend">
        <div className="company">
            <p>О компании</p>
            <ul className="company1">
                <li>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit ut aliquam,<br/> purus sit amet luctus<br/> venenatis, lectus magna fringilla urna, porttitor rhoncus <br/> dolor purus non enim</li>
            </ul>
        </div>
        <div className="information">
            <p>Информация</p>
            <ul className="information1">
                <li>Услуги</li>
                <li>О нас </li>
                <li>Контакты</li>
                <li>Портфолио</li>
                <li>Производство</li>
            </ul>
        </div>
        <div className="contacts">
            <p>Контактная информация</p>
            <ul className="contacts1">
                <li>Бишкек, ул. Калык Акиева 66,<br/> ТЦ Весна, 3 этаж, офис №37</li>
                <li>+996 (0553) 577-575</li>
                <li>Email@gmail.com</li>
            </ul>
        </div>
        <div className="social">
            <p>Мы в социальных сетях </p>
            <ul className="social1">
                <li>Instagram </li>
                <li>Facebook</li>
            </ul>
        </div>
    </div>
    </div>
        </div>
    )
}
