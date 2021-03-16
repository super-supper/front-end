import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/form.module.css";

const Form = () => {
	const router = useRouter();
	const [error, setError] = useState(false);

	const formik = useFormik({
		initialValues: {
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
		},
		onSubmit: (values, { setSubmitting }) => {
			console.log(values);
			axios
				.post("https://super-supper.ue.r.appspot.com/recipes", values)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => console.log(err));
		},
	});
	return (
		<div className={styles.container}>
			<Typography variant="h4" component="h3" gutterBottom>
				Create A Recipe
			</Typography>
			<form className={styles.form} onSubmit={formik.handleSubmit}>
				<TextField
					name="title"
					onChange={formik.handleChange}
					value={formik.values.title}
					id="filled-basic"
					label="Title"
					variant="filled"
				/>

				<TextField
					name="description"
					onChange={formik.handleChange}
					value={formik.values.description}
					id="filled-basic"
					label="Description"
					variant="filled"
				/>

				<TextField
					name="url"
					onChange={formik.handleChange}
					value={formik.values.url}
					id="filled-basic"
					label="URL"
					variant="filled"
				/>
				<div>Ingredients</div>
				<TextField
					name="ingredients[0].ingredient"
					onChange={formik.handleChange}
					value={formik.values.ingredients[0].ingredient}
					id="filled-basic"
					label="Ingredient"
					variant="filled"
				/>
				<TextField
					name="ingredients[0].qty"
					onChange={formik.handleChange}
					value={formik.values.ingredients[0].qty}
					id="filled-basic"
					label="Quantity"
					variant="filled"
				/>
				<div>Steps</div>
				<TextField
					name="steps[0].step_num"
					onChange={formik.handleChange}
					value={formik.values.steps[0].step_num}
					type="number"
					id="filled-basic"
					label="Step Number"
					variant="filled"
				/>
				<TextField
					name="steps[0].step"
					onChange={formik.handleChange}
					value={formik.values.steps[0].step}
					id="filled-basic"
					label="Step Description"
					variant="filled"
				/>
				<div>Tags</div>
				<TextField
					name="tags[0].tag_id"
					onChange={formik.handleChange}
					value={formik.values.tags[0].tag_id}
					type="number"
					id="filled-basic"
					label="Tag ID"
					variant="filled"
				/>

				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Form;
