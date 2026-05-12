/*When all dice are being held & have the same value,
	drop confetti and change button text. */

import { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
	const [currentDice, setCurrentDice] = useState(generateAllNewDice)
	const gameWon = currentDice.every(die => die.isHeld && currentDice.every(die => die.value === currentDice[0].value))

	const diceElements = currentDice.map(currentDie =>
		<Die
			key={currentDie.id}
			value={currentDie.value}
			isHeld={currentDie.isHeld}
			id={currentDie.id}
			clickToHold={hold}
		/>)

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

	return (
		<main>
			{gameWon && <Confetti />}
			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
			</p>
			<div className='dice-container'>
				{diceElements}
			</div>
			<button id='roll-button' onClick={rollDice}>{gameWon ? "New game" : "Roll dice"}</button>
		</main>
	)
}