import React from 'react';
import style from './Card.module.css'
import union from './asses/image/Group164.svg'
import SuperButton from "./SuperButton";
import Tilt from 'react-tilt'
import birds from './asses/image/birds.svg'
import birdseEnd from './asses/image/birdseEnd.svg'


export default function Card() {

    return (<div className={style.test}>
            <div className={style.coc}>
                <img src={birds}/>
                <img src={birdseEnd}/>
            </div>

            <div className={style.bos}>
                <Tilt className="Tilt" options={{max: 45, reverse: true, speed: 1000}}>

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
                </Tilt>
            </div>

        </div>
    );
}
