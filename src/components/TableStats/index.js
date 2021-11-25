import { Grid } from '@material-ui/core'
import React from 'react'
import { News } from './News/index'
import BasicTable from './Table/index'

export const Table = ({ data }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <News />
            </Grid>
            <Grid item xs={12} sm={9}>
                <BasicTable data={data}  />
            </Grid>
        </Grid>
    )
}