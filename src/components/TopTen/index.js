import React from 'react'
import TopTenList from './generateTopTen'

import { Grid } from '@material-ui/core'

export const TopTen = ({ data }) => {
  const types = ['cases','todayCases','deaths','todayDeaths','active','recovered']
    return (
        <Grid container spacing={3}>
          {
            types.map((item) => {
              return (
                <TopTenList data={data} type={item}  key={item}/>
              )
            })
          }
        </Grid>
    )
}