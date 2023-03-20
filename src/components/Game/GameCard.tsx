import React from 'react'
import { GameCardProps } from '../../interfaces/IGameCardProps'
import IGames from '../../interfaces/IGames'

export default function GameCard({ game: { background_image, name } }: GameCardProps<IGames>) {
    return (
        <article className="cards__gridItems">
            <div className="cards__gridItemsImg">
                <img src={background_image} alt={name} />
            </div>
            <p>{name}</p>
        </article>
    )
}
