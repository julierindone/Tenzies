export default function Die({ value, isHeld, id, clickToHold }) {
	const heldStyle = { backgroundColor: "#59E391" }
	return (
		<button
			id={id}
			style={isHeld ? heldStyle : undefined}
			onClick={() => clickToHold(id)}>
			{value}
		</button>)
}