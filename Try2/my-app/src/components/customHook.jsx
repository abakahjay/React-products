import { useEffect } from "react"
import { useDocumentClick } from "../utils/hooks/useDocumentClick"
export function  CustomHook(){
    
    //For Side effects
    useEffect(()=>{
        console.log('Rendering... CustomHook')
        const resizeEvent = ()=>{
            console.log('window/viewport resized')
        }

        window.addEventListener("resize",resizeEvent)

        //We always have to add a cleanup Function in our useEffect Callback
        return ()=>{//This Function is called whenever the component unmounts
            console.log('Unmounting... CustomHook')
            window.removeEventListener("resize",resizeEvent)
        }
    },[])//The empty array will make sure the function executes one time only


    //My CustomHook is called
    useDocumentClick();
    return(<>
        <h1>Custom Hooks</h1>
    </>
    )
}