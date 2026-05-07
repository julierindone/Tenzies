export default function Die(props) {
	console.log(props)
	console.log(props.value)
	return (
		<button>{props.value}</button>
	)
}