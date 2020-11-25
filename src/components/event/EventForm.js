import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { GameContext } from "../game/GameProvider"


export const EventForm = props => {
    const [currentEvent, setCurrentEvent] = useState({
        gameId: 0,
        description: "",
        date: "",
        time: ""
    })
    const { createEvent } = useContext(EventContext)
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    const handleControlledInputChange = (event) => {
        const newEventState = Object.assign({}, currentEvent)
        newEventState[event.target.name] = event.target.value
        setCurrentEvent(newEventState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={currentEvent.gameId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id} key={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required className="form-control" onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" required className="form-control" onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" required className="form-control" onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const event = {
                        gameId: currentEvent.gameId,
                        description: currentEvent.description,
                        date: currentEvent.date,
                        time: currentEvent.time
                    }

                    // Create the event
                    createEvent(event)
                    props.history.push('/events')
                }}
                className="btn-5 btn-primary">Create Event</button>
        </form>
    )
}