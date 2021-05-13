import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cardsTC} from "../../state/reducers/cards";
import {appRootStateType} from "../../state/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes/Routes";
import styles from "./Cards.module.css";

export const Cards = () => {

    const dispatch = useDispatch();
    let cards = useSelector<appRootStateType>(state => state.cards);

    dispatch(cardsTC('question', 'answer', '5eb6a2f72f849402d46c6ac7', 1, 4, 1, 7));

    return (
        <div className={styles.container}>
                
        </div>
    )
}