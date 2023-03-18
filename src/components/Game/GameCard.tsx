import React from 'react'
import IGames from '../../interfaces/IGames'
interface GameCardProps {
    game: IGames
}


export default function GameCard({ game: {id, slug, released, background_image, name } }: GameCardProps) {
    return (
        <article className="cards__gridItems">
            <div className="cards__gridItemsImg">
                <img src={background_image} alt={name} />
            </div>
            <p>{name}</p>
        </article>
    )
}
