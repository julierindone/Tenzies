/** Challenges:
 * Update the array of numbers in state to be an array of objects with isHeld, value, and id properties.
 * Add keys to button components.
 */

import React from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

export default function App() {
	const [currentDice, setCurrentDice] = React.useState(generateAllNewDice)

	function generateAllNewDice() {
		return new Array(10)
			.fill({ value: 0, isHeld: false, id: 0 })
			.map(die => ({
				...die,
				value: Math.ceil(Math.random() * 6),
				id: nanoid()
			}))
	}

	function rollDice() {
		setCurrentDice(generateAllNewDice)
	}

	const diceElements = currentDice.map(currentDie =>
		<Die
			key={currentDie.id}
			currentDie={currentDie}
			value={currentDie.value}
			isHeld={currentDie.isHeld}
			id={currentDie.id}
			/>)

	return (
		<main>
			<div className='dice-container'>
				{diceElements}
			</div>
			<button id='roll-button' onClick={rollDice}>Roll dice</button>
		</main>
	)
}