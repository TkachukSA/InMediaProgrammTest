import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import style from './Container.module.css'
import Fox from "./Fox";
import Modela from "./Fox2";
import Card from "./Card";
import Vr from "./Vector67.png";
import birds from './asses/image/birds.svg'
import birdsEnd from './asses/image/birdseEnd.svg'
import Form from "./Form";


function Conytainer() {

    const Image = {
        color: 'blue',
        backgroundImage: `url(${birdsEnd})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundSize: '120px',
    };
    const br = {
        color: 'blue',
        backgroundImage: `url(${birds})`,
        backgroundRepeat: 'no-repeat',
        size: '30px',

    };


    return (
        <div className={style.flexContainer}>
            <div className={style.container}>
                <div className={style.flexitem}>
                    <div className={style.preject}><Modela/></div>
                    <div className={style.preject}><Card/></div>
                    <div className={style.preject}><Form/></div>
                    <div className={style.preject}>ajlr</div>
                </div>
            </div>

        </div>
    );
}

export default Conytainer;