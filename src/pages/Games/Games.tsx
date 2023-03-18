import React from 'react'
import Game from '../../components/Game/Game';
import './Games.scss';

export default function Games() {
  return (
    <section className="games">
      <div className="games__title">
        <h1>ALL GAMES</h1>
      </div>
      <Game />
    </section>
  )
}
