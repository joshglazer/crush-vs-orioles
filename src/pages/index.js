import React, { Component } from "react"
import { getStandings, getPlayerProfile } from "../api/sportradar"
import Layout from "../components/layout"

import chrisDavisImg from "../images/chris-davis.jpg"
import oriolesLogoImg from "../images/orioles-logo.png"

export default class Home extends Component {
  constructor() {
    super()
    this.state = { date: new Date() }
    this.state = {
      oriolesWins: null,
    }
  }

  componentDidMount() {
    getStandings().then(standings => {
      const oriolesWins = standings.league.season.leagues
        .filter(league => league.name === "American League")[0]
        .divisions.filter(division => division.name === "East")[0]
        .teams.filter(team => team.name === "Orioles")[0].win
      this.setState({ oriolesWins })
    })

    getPlayerProfile().then(playerProfile => {
      const crushHits = playerProfile.player.seasons.filter(
        season => season.year === 2020
      )[0].totals.statistics.hitting.overall.onbase.h
      this.setState({ crushHits })
    })
  }

  render() {
    return (
      <Layout>
        <div className="text-center">
          <div className="pt-4 pb-4">
            It's 2020 and the baseball season has finally begun. And everyone's
            wondering, which number will be higher? The amount of wins by The
            Orioles, or the amount of hits by Crush Davis. Follow along below.
          </div>
          <div
            className={
              "inline-block p-4 mb-4 mx-8 " +
              (this.state.crushHits > this.state.oriolesWins ||
              this.state.crushHits === this.state.oriolesWins
                ? "winner"
                : "")
            }
          >
            <div className="text-lg">Crush Davis Hits</div>
            <img
              src={chrisDavisImg}
              alt="Chris Davis"
              className="h-40 m-auto"
            />
            <div>
              Hits: <span className="font-bold">{this.state.crushHits}</span>
            </div>
          </div>
          <div
            className={
              "inline-block p-4 mb-4 mx-8 " +
              (this.state.oriolesWins > this.state.crushHits ||
              this.state.oriolesWins === this.state.crushHits
                ? "winner"
                : "")
            }
          >
            <div className="text-lg">Orioles Wins</div>
            <img src={oriolesLogoImg} alt="Orioles" className="h-40 m-auto" />
            <div>
              Wins:
              <span className="font-bold">{this.state.oriolesWins}</span>
            </div>
          </div>
          <div className="text-lg pb-8 md:pb-4">
            {this.state.crushHits > this.state.oriolesWins ? (
              <div>Crush Davis has more hits than The Orioles have wins.</div>
            ) : this.state.crushHits < this.state.oriolesWins ? (
              <div>The Orioles have more wins than Crush Davis has hits.</div>
            ) : (
              <div>
                The Orioles have the same amount of wins as Crush Davis has hits
              </div>
            )}
          </div>
          <div className="text-xs pb-4">Last Updated 8/12/2020 6:07PM EST</div>
        </div>
      </Layout>
    )
  }
}
