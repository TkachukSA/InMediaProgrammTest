import React from 'react';
import style from './Container.module.css'
import Fox from "./Fox";
import Modela from "./Fox2";
import Card from "./Card";


function Conytainer() {

    return (
        <div className={style.flexContainer}>
            <div className={style.container}>
                <div className={style.flexitem}>
                    <div className={style.preject}><Modela/></div>
                    <div className={style.preject}><Card/></div>
                    <div className={style.preject}>ajlr</div>
                    <div className={style.preject}>ajlr</div>
                </div>

            </div>

        </div>
    );
}

export default Conytainer;