import React from 'react';
import style from './Card.module.css'
import union from './asses/image/Group164.svg'
import SuperButton from "./SuperButton";
import vector from "./asses/image/Vector.svg";


export default function Card() {


    /*const todolistImage = {
        color: 'blue',
        backgroundImage: `url(${vector})`,
        backgroundRepeat: 'no-repeat'
    };*/
    return (
        <div className={style.cardContainer}>
            <div className={style.image}>
                <img src={union}/>
            </div>
            <div className={style.titleCard}>
                <span>Интерактивная карточка</span>
            </div>
            <div>
                <SuperButton>
                    {'Кнопка'}
                </SuperButton>
            </div>


        </div>
    );
}
