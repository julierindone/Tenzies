/*
	Add conditional styling to the Die component so that if it's held (isHeld === true), its background color changes to green (#59E391)
------------
	Create a function `hold` that takes `id` as a parameter.
	Pass that function down to each instance of the Die component so when each one is clicked, it logs its id.
------------
	Update the `hold` function to flip the `isHeld` property on the object in the array
	that was clicked, based on the `id` prop passed into the function.
------------
	Update the `rollDice` function to look through the existing dice to NOT roll any that are being `held`.
 */

import { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

export default function App() {
	const [currentDice, setCurrentDice] = useState(generateAllNewDice)
	const [count, setCount] = useState(0)

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
		setCurrentDice(
			currentDice.map(die =>
				die.isHeld ? { ...die } : ({ ...die, value: Math.ceil(Math.random() * 6) })
			)
		)
	}

	function hold(id) {
		setCurrentDice(
			currentDice.map(die =>
				die.id === id
					? { ...die, isHeld: !die.isHeld }
					: { ...die }
			)
		)
	}

	const diceElements = currentDice.map(currentDie =>
		<Die
			key={currentDie.id}
			value={currentDie.value}
			isHeld={currentDie.isHeld}
			id={currentDie.id}
			clickToHold={hold}
		/>)

	return (
		<main>
			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
			</p>
			<div className='dice-container'>
				{diceElements}
			</div>
			<button id='roll-button' onClick={rollDice}>Roll dice</button>
		</main>
	)
}