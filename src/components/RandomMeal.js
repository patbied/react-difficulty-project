import { useEffect, useState } from "react"
import Button from "../ui/Button"

const RandomMeal = () => {
    const [meal, setMeal] = useState({})
    const [loading, setLoading] = useState()

    const fetchMeal = async() => {
        setLoading(true)
        const response = await fetch("http://www.themealdb.com/api/json/v1/1/random.php")
        const mealObj = await response.json()
        const mealAccess = mealObj.meals[0]
        console.log(mealAccess)
        //Add all ingredients and measuring instructions
        const MealIngredients = []
        const MealMeasurements = []
        let ingredientNum = 1
        let measureNum = 1
            for (const key in mealAccess){
                if (key === `strIngredient${ingredientNum}`){
                    if (mealAccess[key] != null && mealAccess[key].length >0){
                        MealIngredients.push(mealAccess[key]) 
                        ingredientNum ++
                    }
               
                }
                else if (key === `strMeasure${measureNum}`){
                    if (mealAccess[key] != null & mealAccess[key].length >0){
                        MealMeasurements.push(mealAccess[key])
                        measureNum++
                    }
                }
                
            }
        
            
            //  console.log(MealIngredients)
            //  console.log(MealMeasurements)

            //Set meal state equal to meal data
            setMeal({
                name: mealAccess.strMeal,
                category: mealAccess.strCategory,
                ingredients: MealIngredients,
                measurements: MealMeasurements,
                instructions: mealAccess.strInstructions
            })
        
            setLoading(false)
        }
    useEffect(()=> {
    try {
        fetchMeal()
    }catch(err){
        console.log(err)
    }
        
 
    },[])
    return (
        <>
        { loading ? 'Loading..' : 
        <>
        <p>Name: {meal.name}</p>
        <p>Category: {meal.category}</p>
        <p>Ingredients & Measurements</p>
        <div className="two-sides">
        <div className="one-side">
            {meal.ingredients &&  <ul>{meal.ingredients.map((ingredient, index) => <li className="custom-list"  key={`ingredient${index}`}>{ingredient}</li>)}</ul>}
        </div>
        <div className="one-side">
            {meal.measurements && <ul>{meal.measurements.map((measurement, index) => <li className="custom-list" key={`measurement${index}`}>{measurement}</li>)}</ul>} 
        </div>
        </div>
        <p>Instructions</p>
        <p className="max-size-75 ">{meal.instructions}</p>
        
       
        </>
        }
        <Button onClick={fetchMeal}>New Meal</Button>
        </>
    )
}

export default RandomMeal