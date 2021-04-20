import React, {ButtonHTMLAttributes, DetailedHTMLProps, Suspense} from 'react';
import "./styles.css";
import s from "./SuperButton.module.css";
import vector from './asses/image/Vector.svg'




type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,color,
        ...restProps
    }

) => {
    const finalClassName = `${red ? s.default: s.red } ${className}`;


    return (
        /* <Button variant={"outlined"} {...restProps}/>*/

        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
}

export default SuperButton;
