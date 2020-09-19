import React, { useEffect, useState } from 'react'

import { useSearch } from './Context'

export const Filters = props => {
  const { searchParams, setSearchParams } = useSearch()
  const { selectedWorld } = searchParams
  const [worlds, setWorlds] = useState([])

  useEffect(() => {
    async function fetchData () {
      await fetch('https://api.tibiadata.com/v2/worlds.json')
        .then(response => response.json())
        .then(data => {
          setWorlds(data?.worlds?.allworlds)
        })
    }

    fetchData()
  }, [])

  useEffect(() => {
    setSearchParams({
      ...searchParams,
      worlds: worlds
    })
    // eslint-disable-next-line
    }, [worlds])

  const buildWorldList = worldsList => {
    const worldsNamesList = []

    for (const world in worldsList) {
      worldsNamesList.push(worldsList[world].name)
    }

    return (
      <select
        value={selectedWorld}
        onChange={
          event =>
            setSearchParams({
              ...searchParams,
              selectedWorld: event.currentTarget.value
            })
        }
      >
        <option>Selecione o mundo</option>
        {worldsNamesList.map(world => (<option key={world}>{world}</option>))}
      </select>
    )
  }

  return (
    <>{worlds && buildWorldList(worlds)}</>
  )
}
