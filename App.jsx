/** Challenges:
 * Write a function (generateAllNewDice) that returns an arrayof 10 random numbers between 1-6 inclusive.
 * * * * * * * * * * * * * * * * * * * * * * * *
 * Create state to hold our array of numbers.
 * Initialize the state by calling our `generateAllNewDice` function so it loads all new dice as soon as the app loads
 * Map over the state numbers array to generate our array of Die elements and render those in place of our manually-written 10 Die elements.
 */

import React from 'react'
import Die from './components/Die'

export default function App() {
	const [currentDice, setCurrentDice] = React.useState(generateAllNewDice)

	function generateAllNewDice() {
		// create array with 10 items => fill with zeroes => map to replace with random #s 1-6
		return new Array(10).fill(0).map(num => Math.ceil(Math.random() * 6))
	}

	function rollDice() {
		setCurrentDice(generateAllNewDice)
	}

	const diceElements = currentDice.map(currentDie => <Die value={currentDie} />)

	return (
		<main>
			<div className='dice-container'>
				{diceElements}
			</div>
			<button id='roll-button' onClick={rollDice}>Roll dice</button>
		</main>
	)
}