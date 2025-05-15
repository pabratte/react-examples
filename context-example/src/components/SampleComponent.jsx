import "../App.css";
import { useContext } from "react";

export function SampleComponent(props){
    const cartContext = useContext(CartContext);
        
    
    return (
        <div className={classes}>
            <h2>{title}</h2>
            <p>{msg}</p>
            <div className="closebutton">x</div>
        </div>
    )
}
