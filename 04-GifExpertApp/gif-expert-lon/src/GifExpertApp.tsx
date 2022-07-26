import { useState } from "react"
import { AddCategory } from "./components/AddCategory";



export const GifExpertApp = () => {
    const iniValue: string[] = [];
    const [category, setCategory] = useState(iniValue);

    const onAddCategory = (newCategory: string) => {
        if (newCategory != "" && !category.includes(newCategory)) {
            setCategory([newCategory, ...category]);
        }

    }
    return (
        <>
            {/* title*/}
            <h1>GifExpertApp</h1>
            {/* input*/}
            <AddCategory
                // setCategory={setCategory} 
                onNewCategory={(newCategory) => onAddCategory(newCategory)}
            />
            {/* <button onClick={onAddCategory}>Add Category</button> */}
            {/* Gif List*/}
            <ol>
                {category.map(category => {
                    return (
                        <li key={category}>{category}</li>)
                })}

            </ol>
            {/* Gif Item*/}
        </>
    )
}