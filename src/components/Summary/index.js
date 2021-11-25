import React from 'react';
import Grid from '@material-ui/core/Grid';

// import { getMapDataByCountryId } from './src/a'
import LineChart from '../Charts/LineChart';
import HighMaps from '../Charts/HighMaps';

export default function Summary({report,countryId,mapData}) {
    
    console.log({mapData});
    
      return (
        <div style={{ height: '500px', marginTop: 10 }}>
          <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
              <LineChart data={report} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <HighMaps mapData={mapData} />
            </Grid>
          </Grid>
        </div>
      );
    }