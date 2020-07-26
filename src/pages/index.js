import React, { Component } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { getStandings, getPlayerProfile } from "../api/sportradar"

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
      console.log(playerProfile)
      const crushHits = playerProfile.player.seasons.filter(
        season => season.year === 2020
      )[0].totals.statistics.hitting.overall.onbase.h
      this.setState({ crushHits })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div>Which number is higher?</div>
        <div>Crush Davis Hits?</div>
        <div>Hits: {this.state.crushHits}</div>

        <div>Orioles Wins?</div>
        <div>Wins: {this.state.oriolesWins}</div>
        <Footer />
      </div>
    )
  }
}
