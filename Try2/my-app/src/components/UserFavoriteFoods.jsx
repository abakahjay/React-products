import { Fragment } from "react";
import style from './Styles/UserFoods.module.css';//We can use css as a module like this
export function UserFavoriteFoods(){
    //The create element takes three more arguments
    return (
        <Fragment >
            <span>Favorite Foods:</span>
            {/* We can use Comma's to separate different  elements when using the create Element function */}
            <br/>
            <ul style={{color:"red",}}>{/*This is for the inline styling*/}
                <li className={style.try}>Rice</li>
                <li className={style.try2}>Jollof</li>
                <li>Yam</li>
            </ul>
        </Fragment>
    )
}