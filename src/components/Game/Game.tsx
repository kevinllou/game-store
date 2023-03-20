import React, { useState } from 'react'
import { ENDPOINTS } from '../../constants/endpoints';
import { getGamesArray } from '../../helpers/getGamesArray';
import { useFetch } from '../../hooks/useFetch'
import IApiResponse from '../../interfaces/IApiResponse';
import IGames from '../../interfaces/IGames';
import { GamesProp } from '../../interfaces/IGamesProp';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';
import GameCard from './GameCard';

export default function Game({ title, isFiltered, isPaginated }: GamesProp) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [maxPageLimit, setMaxPageLimit] = useState(10);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const { state, data, error } = useFetch<IApiResponse<IGames>>(`${ENDPOINTS.GET_GAMES}&page=${currentPage}&page_size=10`);

    const games = getGamesArray(data?.results, isFiltered);
    const updateCurrentPage = (currentPage: number) => setCurrentPage(currentPage);
    const updateMaxPageLimit = (currentMax: number) => setMaxPageLimit(currentMax);
    const updateMinPageLimit = (currentMin: number) => setMinPageLimit(currentMin);

    if (state === 'loading') return <Spinner />
    if (error) return <p style={{ color: "white" }}>There was an error</p>
    return (
        <section className="games">
            <div className="games__title">
                <h1>{title}</h1>
            </div>
            <section className="cards">
                <div className="cards__grid">
                    {
                        games?.map((game, id) => <GameCard {...game} key={id} />)
                    }
                </div>
                {isPaginated &&
                    <Pagination totalPages={100}
                        currentPage={currentPage}
                        maxPageLimit={maxPageLimit}
                        minPageLimit={minPageLimit}
                        updateCurrentPage={updateCurrentPage}
                        updateMaxPageLimit={updateMaxPageLimit}
                        updateMinPageLimit={updateMinPageLimit} />}

            </section>
        </section>
    )
}
