import { useState } from "react";

export interface IPizza {
    thickness: number,
    diameter: number,
    quantity: number
}

const PizzaCard = (props: any) => {
    const [pizza, setPizza] = useState<IPizza>({
        thickness: 0,
        diameter: 26,
        quantity: 0
    });

    const changeThickness = (thickness: number) => {
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
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className="pizza-card__info">
                <h5>{props.title}</h5>
                <div className="pizza-card__options">
                    <ul className={props.types.length === 1 ? "pizza-card__thickness one" : "pizza-card__thickness"}>
                        {props.types.map((type: number) => {
                            return (
                                <li className={pizza.thickness === type ? "active" : ""}
                                key={type}
                                onClick={() => changeThickness(type)}>{type === 0 ? "thin" : "traditional"}</li>
                            )}
                        )}
                    </ul>  
                    <ul className="pizza-card__diameter">
                        {props.sizes.map((size: number) => {
                            return (
                                <li className={pizza.diameter === size ? "active" : ""}
                                key={size}
                                onClick={() => changeDiameter(size)}>{size} sm</li>
                            )}
                        )}
                    </ul>
                </div>
                <div className="pizza-card__footer">
                    <p className="price">{pizza.diameter === props.sizes[0] ? props.prices[0] : pizza.diameter === props.sizes[1] ? props.prices[1] : props.prices[2]} $</p>
                    <div className="counter">
                        <button type="button" className="add" onClick={addPizza}>
                            + ADD <span className="counter__number">{pizza.quantity < 10 && " "}{pizza.quantity}</span>
                        </button>
                    </div> 
                </div>
            </div>  
        </div>
    )     
}   

export default PizzaCard;