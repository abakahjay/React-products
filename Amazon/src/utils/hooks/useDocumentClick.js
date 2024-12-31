import { useEffect } from "react"
export function useDocumentClick(){
    useEffect(()=>{
            console.log('Rendering... CustomHook useDocumentClick')
            const clickEvent =()=>{
                console.log('You Clicked the Document with the custom Hook useDocumentClick')
            }
            document.addEventListener("click",clickEvent)
    
            //We always have to add a cleanup Function in our useEffect Callback
            return ()=>{//This Function is called whenever the component unmounts
                console.log('Unmounting... CustomHook useDocumentClick')
                document.removeEventListener("click",clickEvent)
    
            }
    },[])
}