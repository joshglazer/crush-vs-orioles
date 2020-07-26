import { standings } from "../data/standings.json"
import { playerProfile } from "../data/player-profile.json"

const key = process.env.GATSBY_SPORTRADAR_API_KEY
const debug = process.env.GATSBY_API_DEBUG

export async function getStandings() {
  const url = `https://api.sportradar.us/mlb/trial/v6.6/en/seasons/2020/REG/standings.json?api_key=${key}`
  const data = await makeApiCall(url)
  return data
}

export async function getPlayerProfile() {
  const url = `http://api.sportradar.us/mlb/trial/v6.6/en/players/ddfbc667-95d8-49fc-8e77-a8e4e452d820/profile.json?api_key=${key}`
  const data = await makeApiCall(url)
  return data
}

async function makeApiCall(url) {
  if (debug) {
    if (url.includes("standings.json")) {
      return standings
    } else if (url.includes("players") && url.includes("profile")) {
      return playerProfile
    } else {
      console.warn(`${url} is not set up for debugging`)
    }
  }

  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  return fetch(proxyUrl + url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then(response => response.json())
    .then(responseData => {
      return responseData
    })
}
