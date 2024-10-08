import { BookCategoryEnum } from "@/services/api-types/book.types"
import { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "sonner";


export const CategoryItem = ({ category, handleClick }: { category: string, handleClick: () => void }) => {
    return (
        <div className="text-[0.6rem] px-1 border rounded-full py-1 flex items-center justify-between">
            <p>{category}</p>

            <button onClick={handleClick}><IoCloseCircleOutline /></button>
        </div>
    )
}

export const AddCategories = ({setCategoriesArr}:{setCategoriesArr:(arr:string[])=>void}) => {
    const [currentCategory, setCurrentCategory] = useState<string>(Object.values(BookCategoryEnum)[0])
    const [categoriesSet, setCategoriesSet] = useState<Set<string>>(new Set())

    const handleAddCategory = () => {
        setCategoriesSet((prev) => {
            let tempSet = new Set(prev)
            tempSet.add(currentCategory as string)
            return tempSet
        })
    }

    const handleDeleteCategory = (item: string) => {
        setCategoriesSet((prev) => {
            let tempSet = new Set(prev)
            tempSet.delete(item)
            return tempSet
        })
    }

    const handleDone = () => {
        setCategoriesArr(Array.from(categoriesSet))
        toast.success("Categories added")
    }



    return (
        <div>
            <div className="mb-2">
                <label className="text-[0.6rem]">Categories:</label>
                <div className="flex gap-2">
                    <select className="w-full bg-stone-800 border-stone-700 text-xs border outline-none rounded px-1 py-1.5 text-gray-200" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCurrentCategory(e.target.value)}>
                        {
                            Object.values(BookCategoryEnum).map((item, index) => <option key={index} value={item}>{item}</option>)
                        }
                    </select>
                    <div className="flex gap-1">
                        <button onClick={handleAddCategory} className="border hover:bg-stone-600 border-stone-400 text-gray-200 rounded text-xs px-2"><IoIosAdd /></button>
                        <button onClick={handleDone} className="bg-stone-800 hover:bg-stone-600 rounded text-xs px-2 text-white"><IoMdDoneAll /></button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-1">
                {
                    Array.from(categoriesSet).map((item, index) => <CategoryItem key={index} category={item} handleClick={() => handleDeleteCategory(item)} />)
                }

            </div>
        </div>
    )
}



export const DisplayCategories = ({categories}:{categories:string[]}) => {
    return (
        <div className="grid grid-cols-4 gap-1">
            {
                categories.map((item, index) => <p className="text-[0.6rem] text-stone-500 border border-stone-700 rounded-full px-2 flex items-center justify-center" key={index}>{item}</p>)
            }

        </div>
    )
}
