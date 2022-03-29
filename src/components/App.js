import React, { useState } from "react";
import Nav from "./Nav";
import HogTable from "./HogTable";
import hogs from "../porkers_data";

function App() {

	const [hogData, setHogData] = useState(hogs);

	return (
		<div className="App">
			
			<Nav />
			<HogTable 
			hogData={hogData} 
			/>
		</div>
	);
}

export default App;
