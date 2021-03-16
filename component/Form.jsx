import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Formik } from "formik";
import styles from "../styles/form.module.css";

const Form = () => {
	return (
		<div className={styles.container}>
			<Typography variant="h4" component="h3" gutterBottom>
				Create A Recipe
			</Typography>
			<Formik
				initialValues={{
					title: "", //must not be null
					description: "", //must not be null
					url: "",
					ingredients: [
						{
							ingredient: "",
							qty: "",
						},
					],
					steps: [
						{
							step_num: 0,
							step: "",
						},
					],
					tags: [
						{
							tag_id: 0,
						},
					],
				}}
				onSubmit={(values, { setSubmitting }) => {
					axios
						.post("https://super-supper.ue.r.appspot.com/recipes", values)
						.then(() => setSubmitting(false));
				}}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<form className={styles.form} onSubmit={handleSubmit}>
						<TextField
							name="title"
							onChange={handleChange}
							value={values.title}
							id="filled-basic"
							label="Title"
							variant="filled"
						/>

						<TextField
							name="description"
							onChange={handleChange}
							value={values.description}
							id="filled-basic"
							label="Description"
							variant="filled"
						/>

						<TextField
							name="url"
							onChange={handleChange}
							value={values.url}
							id="filled-basic"
							label="URL"
							variant="filled"
						/>
						<div>Ingredients</div>
						<TextField
							name="ingredients[0].ingredient"
							onChange={handleChange}
							value={values.ingredients[0].ingredient}
							id="filled-basic"
							label="Ingredient"
							variant="filled"
						/>
						<TextField
							name="ingredients[0].qty"
							onChange={handleChange}
							value={values.ingredients[0].qty}
							id="filled-basic"
							label="Quantity"
							variant="filled"
						/>
						<div>Steps</div>
						<TextField
							name="steps[0].step_num"
							onChange={handleChange}
							value={values.steps[0].step_num}
							id="filled-basic"
							label="Step Number"
							variant="filled"
						/>
						<TextField
							name="steps[0].step"
							onChange={handleChange}
							value={values.steps[0].step}
							id="filled-basic"
							label="Step Description"
							variant="filled"
						/>
						<div>Tags</div>
						<TextField
							name="tags[0].tag_id"
							onChange={handleChange}
							value={values.tags[0].tag_id}
							id="filled-basic"
							label="Tag ID"
							variant="filled"
						/>

						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Form;
