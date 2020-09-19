import React, { useEffect, useState } from 'react'

import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

import { useSearch } from './Context'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '420px',
    position: 'relative',
    margin: '0 auto'
  }
}))

export const Filters = props => {
  const classes = useStyles()
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
      <Select
        className={classes.root}
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
      </Select>
    )
  }

  return (
    <>{worlds && buildWorldList(worlds)}</>
  )
}
