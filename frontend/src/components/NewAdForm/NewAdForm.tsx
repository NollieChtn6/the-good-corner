import type { FormEvent } from "react";

function NewAdForm() {
	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form as HTMLFormElement);
		console.log(formData);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<label>
				Titre de l&rsquo;annonce&nbsp;:
				<br />
				<input className="text-field" name="title" />
			</label>
			<br />
			<label>
				Prix de vente&nbsp;:
				<br />
				<input className="text-field" name="price" />
			</label>
			<button className="button" type="submit">
				Créer
			</button>
		</form>
	);
}

export default NewAdForm;
