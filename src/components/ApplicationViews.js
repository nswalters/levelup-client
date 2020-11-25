import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventList } from "./event/EventList.js"
import { EventProvider } from "./event/EventProvider.js"
import { GameForm } from "./game/GameForm.js"
import { EventForm } from "./event/EventForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />
                <Route exact path="/">
                    <GameList />
                </Route>
            </GameProvider>

            <EventProvider>
                <Route exact path="/events">
                    <EventList />
                </Route>
                <GameProvider>
                    <Route exact path="/events/new" render={props => <EventForm {...props} />} />
                </GameProvider>
            </EventProvider>
        </main>
    </>
}