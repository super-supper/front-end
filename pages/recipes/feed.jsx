import { useState } from 'react'
import RecipeCard from '../../component/Card'
import styles from '../styles/feed.module.css'

const Feed = () => {
    
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(false)

    // useEffect(() => {
    //     axios.get('https://super-supper.ue.r.appspot.com/recipes', 
    //     ).then(res => console.log(res))
    //     .catch(err => console.log(err)) //CORS issue needs review
    //   }, [])


    return (
    <div className={styles.container}>
        <h1>Recipe Feed</h1>
        <RecipeCard />
    </div>
    )

}

export default Feed