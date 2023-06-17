import { useState } from "react";

const FormComponent = (props) => {
	const [enteredvalue, setenteredvaluevalue] = useState("");

	const formSubmitHandler = (e) => {
		e.preventDefault();
		//   props.inputData(enteredvalue);
        
		props.addDataToList(enteredvalue);
		setenteredvaluevalue("");
	};

	const InputChangehandeler = (e) => {
		setenteredvaluevalue(e.target.value);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<label>Course Goal</label>
			<input type="text" value={enteredvalue} onChange={InputChangehandeler} />

			<button type="submit">Add</button>
		</form>
	);
};

export default FormComponent;
