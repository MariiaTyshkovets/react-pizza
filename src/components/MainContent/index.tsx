import Cards from "../Cards";
import Category from "../Category";
import Sort from "../Sort";

const MainContent = () => {
    
    return (
        <main>
            <hr />
            <nav className="navigation">
                <Category />
                <Sort />
            </nav>
            <section className="cards">
                <h4>All the pizzas</h4>
                <Cards />
            </section>
        </main>
    )     
}   

export default MainContent;