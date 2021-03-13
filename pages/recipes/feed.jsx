import axios from 'axios'
import { useEffect, useState } from 'react'
import RecipeCard from '../../component/RecipeCard'
import styles from '../../styles/feed.module.css'


const Feed = () => {
    
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get('https://super-supper.ue.r.appspot.com/recipes', 
        ).then(res => setRecipes(res.data))
        .catch(err => console.log(err))
      }, [])


    return (
    <div className={styles.container}>
        <h1>Recipe Feed</h1>
        {recipes.map(item => {
            return <RecipeCard key={item.id} recipe={item} />
        })
        }
    </div>
    )

}

export default Feed