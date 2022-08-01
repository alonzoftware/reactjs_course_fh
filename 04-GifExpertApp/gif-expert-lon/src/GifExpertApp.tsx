import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";

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

            <h1>GifExpertApp</h1>
            {/* input*/}
            <AddCategory
                // setCategory={setCategory} 
                onNewCategory={(newCategory) => onAddCategory(newCategory)}
            />

            {category.map(category =>
                <GifGrid key={category} category={category} />
            )}

            {/* Gif Item*/}
        </>
    )
}