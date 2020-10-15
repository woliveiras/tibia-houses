import React, { useEffect, useRef } from 'react'

import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

import { useComparator } from '../Context'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '420px',
    position: 'relative',
    margin: '0 auto'
  }
}))

const mountWorldList = worlds => {
  const tmp = []

  for (const world in worlds) {
    tmp.push(worlds[world].name)
  }

  return tmp
}

export const Filters = props => {
  const worldsNamesList = useRef([])
  const classes = useStyles()
  const { selectedWorld, setSelectedWorld, worlds, setWorlds } = useComparator()

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
    worldsNamesList.current = mountWorldList(worlds)
    // eslint-disable-next-line
    }, [worlds])

  return (
    <>
      <Select
        className={classes.root}
        value={selectedWorld}
        onChange={
          event =>
            setSelectedWorld(event.currentTarget.value)
        }
      >
        {worldsNamesList.current && worldsNamesList.current.map(world => (<option key={`item-${world}`} value={world}>{world}</option>))}
      </Select>
    </>
  )
}
