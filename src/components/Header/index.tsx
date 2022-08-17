import MyButton from "../MyButton";

const Header = () => {
    
    return (            
        <header className="header"> 
            <div className="header__logo">
                <img src={require("../../images/pizza-logo.png")} alt="pizza logo" title="pizza logo"/>
            </div>
            <div className="header__title">
                <h3>React Pizza</h3>
                <p>The most delicious pizza in the Universe!</p>
            </div>
            <div className="header__basket">
                <MyButton />
            </div>
        </header>
        
    )     
}   

export default Header;