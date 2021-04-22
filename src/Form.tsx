import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './Form.module.css'
import SuperSelect from "./SuperSelect";
import SuperButton from "./SuperButton";


export default function Form() {


    const options = ['Выбор 1', 'Выбор 2', 'Выбор 3', 'Выбор 4']
    const [option, onChangeOption] = useState<string>('hhh');
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    debugger

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setValue(value)

        if (value.length !== 12) {
            setError(true)
        } else {
            setError(false)
        }


    }

    return (
        <div>
            <div className={style.formContainer}>
                <div className={style.item}>
                    <form>
                        <div className={style.form}>
                            <div>
                                <h2>{'Форма'}</h2>
                                <span>Дополнительный текст</span>
                            </div>
                            <div>
                                <SuperSelect options={options}
                                             value={option}
                                             className={style.selected}
                                             onChangeOption={onChangeOption}
                                /></div>
                            <div>
                                <input type='phone'
                                       className={error ? style.error : style.input}
                                       value={value}
                                       placeholder={'Номер телефона *'}
                                       onChange={onChangeValue}/>
                            </div>
                            <div>
                                <textarea/>
                            </div>
                            <div>
                                <input name="myFile" type="file"/>
                            </div>
                            <div>
                                <SuperButton onClick={event => event.preventDefault()}>{'Кнопка'}</SuperButton>
                            </div>
                        </div>
                    </form>


                </div>

            </div>

        </div>
    );
}


