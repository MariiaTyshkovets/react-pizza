const Category = () => {
    let nameOfCategories: Array<string> = ["All", "Meat", "Vegetarian", "Grill", "Spicy"]
    
    return (
        <div className="categories">
            {nameOfCategories.map((item: string, index: number) => <button className="btn-category" key={item}>{item}</button>)}
        </div>
    )     
}   

export default Category;