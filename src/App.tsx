import { useState } from "react";
import "./App.css";

import { firestore } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";

const collectionRef = collection(firestore, "invitees");

function App() {
	const inviteeInitial = {
		fullname: "",
		type: "couple",
	};

	const [invitee, setInvitee] = useState(inviteeInitial);

	const saveInvitee = async () => {
		await addDoc(collectionRef, invitee);
		window.location.reload();
	};

	return (
		<>
			<p>{invitee.fullname}</p>
			<input
				type="text"
				placeholder="Full Name"
				onChange={(e) => setInvitee({ ...invitee, fullname: e.target.value })}
			/>
			<button onClick={saveInvitee}>Save</button>
		</>
	);
}

export default App;
