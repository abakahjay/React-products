import { createElement } from "react";
export function UserFavoriteFoods(){
    //The create element takes three more arguments
    return createElement("section",null,
            <span>Favorite Foods:</span>,//We can use Comma's to separate different  elements when using the create Element function
            <br/>,
            <ul>
                <li>Rice</li>
                <li>Jollof</li>
                <li>Yam</li>
            </ul>
            
    )
}