import { useState } from "react";
import Cards from "../Cards";
import Category from "../Category";
import Sort from "../Sort";

const MainContent = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    let nameOfCategories: Array<string> = ["All", "Meat", "Vegetarian", "Grill", "Spicy"];
    
    return (
        <main>
            <hr />
            <nav className="navigation">
                <Category categories={nameOfCategories} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                <Sort />
            </nav>
            <section className="cards">
                <h4>{nameOfCategories[activeIndex]} pizzas</h4>
                <Cards />
            </section>
        </main>
    )     
}   

export default MainContent;