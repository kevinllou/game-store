import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import IApiResponse from '../../interfaces/IApiResponse';
import IGames from '../../interfaces/IGames';
import GameCard from './GameCard';

export default function Game() {
    const { state, data, error } = useFetch<IApiResponse<IGames>>('https://api.rawg.io/api/games?key=7edd2f707e03410492606c88e8cc5965');

    if (state === 'loading') return <p style={{ color: "white" }}>LOADING...</p>
    if (error) return <p style={{ color: "white" }}>There was an error</p>

    return (
        <section className="games">
            <div className="games__title">
                <h1>ALL GAMES</h1>
            </div>
            <section className="cards">
                <div className="cards__grid">
                    {
                        data?.results.map((game, id) => <GameCard game={game} key={id} />)
                    }
                </div>
            </section>
        </section>
    )
}
