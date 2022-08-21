const Category = (props: any) => {
    
    return (
        <ul className="categories">
            {props.categories.map((item: string, index: number) => {
                return (
                    <li 
                        className={props.activeIndex === index ? "category active" : "category"} 
                        key={item}
                        onClick={() => props.setActiveIndex(index)}
                    >{item}</li>
                )  
            })}
        </ul>
    )     
}   

export default Category;