import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'

import { housesEndpoint } from '../configs'
import { useComparator } from '../Context'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    padding: 0
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%'
  },
  accordion: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold'
  }
}))

export const Search = () => {
  const classes = useStyles()
  const { selectedWorld, houses, setHouses, selectedTown, setSelectedTown } = useComparator()
  const [housesData, setHousesData] = useState([])

  useEffect(() => {
    async function fetchData () {
      await fetch(`${housesEndpoint}${selectedWorld}.json`)
        .then(response => response.json())
        .then(data => {
          setHousesData(data.houses)
        })
    }

    fetchData()
  }, [selectedWorld])

  useEffect(() => {
    setHouses(housesData)
    setSelectedTown(housesData?.town)
    // eslint-disable-next-line
  }, [housesData])

  return (
    <div>
      {housesData && (
        <>
          <h2>Mundo: {selectedWorld}</h2>
          <main>
            <header>
              <h2>Cidade: {selectedTown}</h2>
            </header>
            <List className={classes.root}>
              {houses?.houses?.map(house =>
                <ListItem className={classes.listItem} key={house.name}>
                  <Accordion className={classes.accordion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1a-content'
                      id='panel1a-header'
                    >
                      <Typography className={classes.heading}>{house.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography><strong>Nome: </strong>{house.name}</Typography>
                      <Typography><strong>Preço: </strong>{house.rent}</Typography>
                      <Typography><strong>Status: </strong>{house.status}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </ListItem>
              )}
            </List>
          </main>
        </>
      )}
    </div>
  )
}
