import React, { useEffect } from 'react'

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
  const { selectedWorld, setSelectedWorld, worlds, setWorlds } = useSearch()

  useEffect(() => {
    async function fetchData () {
      await fetch('https://api.tibiadata.com/v2/worlds.json')
        .then(response => response.json())
        .then(data => {
          setWorlds(data?.worlds?.allworlds)
        })
    }

    fetchData()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setWorlds(worlds)
    // eslint-disable-next-line
    }, [worlds])

  return (
    <>
      {worlds && (worlds => {
        const worldsNamesList = []

        for (const world in worlds) {
          worldsNamesList.push(worlds[world].name)
        }

        return (
          <Select
            className={classes.root}
            value={selectedWorld}
            onChange={
              event =>
                setSelectedWorld(event.currentTarget.value)
            }
          >
            {worldsNamesList.map(world => (<option key={world}>{world}</option>))}
          </Select>
        )
      })}
    </>
  )
}
