import React from 'react'
import './production.css'
import m1 from '../images/m1.png'
import m2 from '../images/m2.png'
import m3 from '../images/m3.png'
import m4 from '../images/m4.png'

export default function Production() {
    return (
        <div className='product'>
        <div className='proiz'>
           <h2>Производство</h2>
        </div>  
        <div className='m1'>
            <img className='m2' src={m1}/>
            <img className='m2' src={m2}/>
            <img className='m2' src={m3}/>
        </div> 
        <h2 className='proiz2'>Оборудование</h2>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor<br/> rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim <br/>lobortis scelerisque  fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor<br/> condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu,<br/> consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
        </div> 
        <div className='m4'>
            <img src={m4}/>
           
        </div>



        </div>
    )
}
