import { useEffect, useState } from "react";
import "./App.css";

import { firestore } from "./firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const collectionRef = collection(firestore, "invitees");

function App() {
	const inviteeInitial = {
		fullname: "",
		type: "couple",
	};

	type Invitee = {
		id?: string;
		fullname: string;
		type: "couple" | "family";
	};

	const [invitee, setInvitee] = useState(inviteeInitial);
	const [invitees, setInvitees] = useState<Invitee[]>([]);

	const saveInvitee = async () => {
		await addDoc(collectionRef, invitee);
		window.location.reload();
	};

	const getInvitees = async () => {
		const data = await getDocs(collectionRef);
		setInvitees(data.docs.map((el) => ({ ...el.data(), id: el.id })) as never);
	};

	useEffect(() => {
		getInvitees();
	}, []);

	return (
		<>
			<p>{invitee.fullname}</p>
			<input
				type="text"
				placeholder="Full Name"
				onChange={(e) => setInvitee({ ...invitee, fullname: e.target.value })}
			/>
			<button onClick={saveInvitee}>Save</button>
			<hr />
			{invitees.map((i) => (
				<p>
					{i.id} | {i.fullname} | {i.type}
				</p>
			))}
		</>
	);
}

export default App;
