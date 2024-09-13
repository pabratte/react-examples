import "../App.css";

export function Notification({title="Notification", msg, type="info"}){
    const classes = `notification ${type}`
    
    return (
        <div className={classes}>
            <h2>{title}</h2>
            <p>{msg}</p>
            <div className="closebutton">x</div>
        </div>
    )
}
