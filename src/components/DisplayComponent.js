import { useState } from "react";
import FormComponent from "./FormComponent";

const DisplayComponent = (props) => {
	const [dataList, setDataList] = useState([]);

	const addDataToList = (text) => {
		setDataList([...dataList, { id: `${text}-${Date.now()}`, text }]);
	};
	 console.log("datalist", dataList);

	const handleDelete = (id) => {
		const deleteTodo = dataList.filter((to) => to.id !== id);

		setDataList([...deleteTodo]);
	};

	return (
		<div>
			<FormComponent addDataToList={addDataToList} />
			{
				<ol>
					{dataList.map((i) => (
						<li key={i.id} onClick={() => handleDelete(i.id)}>
							{i.text}
						</li>
					))}
				</ol>
			}
		</div>
	);
};

export default DisplayComponent;
