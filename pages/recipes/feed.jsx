import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../../component/RecipeCard";
import styles from "../../styles/feed.module.css";

const Feed = () => {
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(false);
	const [fetchedRecipes, setFetchedRecipes] = useState(false);

	useEffect(() => {
		axios
			.get("https://super-supper.ue.r.appspot.com/recipes")
			.then((res) => {
				console.log(res.data);
				setRecipes(res.data);
			})
			.catch((err) => console.log(err))
			.finally(setFetchedRecipes(true));
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Typography variant="h2" component="h2">
					Recipe Feed
				</Typography>
			</div>
			<div className={styles.feed}>
				{!fetchedRecipes ? (
					<LinearProgress />
				) : (
					recipes.map((item) => (
						<RecipeCard key={item.recipe_id} recipe={item} />
					))
				)}
			</div>
		</div>
	);
};

export default Feed;
