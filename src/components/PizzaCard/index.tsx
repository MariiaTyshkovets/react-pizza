import { useState } from "react";

export interface IPizza {
    thickness: string,
    diameter: number,
    quantity: number
}

const PizzaCard = () => {
    const [pizza, setPizza] = useState<IPizza>({
        thickness: "thin",
        diameter: 26,
        quantity: 0
    });

    const changeThickness = (thickness: string) => {
        setPizza({thickness: thickness, diameter: pizza.diameter, quantity: pizza.quantity})
    }
    
    const changeDiameter = (diameter: number) => {
        setPizza({thickness: pizza.thickness, diameter: diameter, quantity: pizza.quantity})
    }

    const addPizza = () => {
        setPizza({thickness: pizza.thickness, diameter: pizza.diameter, quantity: pizza.quantity + 1})
    }

    return (
        <div className="pizza-card">
            <div className="pizza-card__img">
                <img src={require("../../images/margaryta.png")} alt="" />
            </div>
            <h5>The name of pizza</h5>
            <div className="pizza-card__options">
                <div className="pizza-card__thickness">
                    <button 
                        type="button" 
                        className={pizza.thickness === "thin" ? "active" : ""}
                        onClick={() => changeThickness("thin")} 
                        id="thin"
                    >thin</button>
                    <button 
                        type="button"
                        className={pizza.thickness !== "thin" ? "active" : ""} 
                        onClick={() => changeThickness("traditional")} 
                        id="traditional"
                    >traditional</button>
                </div>  
                <div className="pizza-card__diameter">
                    <button type="button" 
                        className={pizza.diameter === 26 ? "active" : ""}
                        onClick={() => changeDiameter(26)}>26 sm</button>
                    <button type="button"
                        className={pizza.diameter === 30 ? "active" : ""}
                        onClick={() => changeDiameter(30)}>30 sm</button>
                    <button type="button"
                        className={pizza.diameter === 40 ? "active" : ""}
                        onClick={() => changeDiameter(40)}>40 sm</button>
                </div>
            </div>
            <div className="pizza-card__footer">
                <p className="price">10 $</p>
                <div className="counter">
                    <button type="button" className="add" onClick={addPizza}>
                        + ADD <span className="counter__number">{pizza.quantity < 10 && " "}{pizza.quantity}</span>
                    </button>
                </div> 
            </div>
        </div>
    )     
}   

export default PizzaCard;