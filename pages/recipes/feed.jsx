import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RecipeCard from '../../component/RecipeCard';
import styles from '../../styles/feed.module.css';


const Feed = () => {
    
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(false)
    const [fetchedRecipes, setFetchedRecipes] = useState(false)

    useEffect(() => {
        axios.get('https://super-supper.ue.r.appspot.com/recipes', 
        ).then(res => setRecipes(res.data))
        .catch(err => console.log(err))
        .finally(setFetchedRecipes(true))
      }, [])


    return (
    <div className={styles.container}>
         <h1>Recipe Feed</h1>
        <div className={styles.feed}>
            {!fetchedRecipes ? 
            <LinearProgress /> :
            recipes.map(item => <RecipeCard key={item.id} recipe={item} />)
            }
        </div>
    </div>
    )

}

export default Feed