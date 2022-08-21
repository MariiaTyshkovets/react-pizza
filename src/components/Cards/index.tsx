import PizzaCard from "../PizzaCard";
import pizzas from "../../assets/pizzas.json";

const Cards = () => {
    
    return (
        <div className="pizza-cards">
            {pizzas.map((pizza) => <PizzaCard 
                title={pizza.title} 
                imageUrl={pizza.imageUrl} 
                key={pizza.title} 
                prices={pizza.prices} 
                sizes={pizza.sizes}
                types={pizza.types}/> )}
        </div>
    )     
}   

export default Cards;