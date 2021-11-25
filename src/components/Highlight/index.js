import React from 'react'
import { Grid, Typography, CardContent, Card } from '@material-ui/core';
import { FaUsers, FaProcedures,FaBed,FaChild,FaBell,FaMedkit } from "react-icons/fa";

import HighlightCard from './HighlightCard';

export default function Highlight({ reportForHighLights }) {
    const data = reportForHighLights
        // && report.length ? report[report.length-1] : [];

    const summary = [{
            title: 'Total Cases',
            count: data.cases,
            type: 'confirmed',
            icon: <div style={{fontSize: 30,color: '#ffff', padding:15,borderRadius: '50%', width: '30px',
            height: '30px', backgroundColor:'#6666ff'}}>
                <FaUsers/>
            </div>,
        },
        {
            title: 'Total Recovered',
            count: data.recovered,
            type: 'recovered',
            icon: <div style={{fontSize: 30,color: '#ffff', padding:15,borderRadius: '50%', width: '30px',
            height: '30px', backgroundColor:'#00CC66'}}>
                <FaChild />
            </div>,
        },
        {
            title: 'Total Death',
            count: data.deaths,
            type: 'death',
            icon: <div style={{fontSize: 30,color: '#ffff', padding:15,borderRadius: '50%', width: '30px',
            height: '30px', backgroundColor:'#F54D47'}}>
                <FaProcedures />
            </div>,
        },
        {
            title: 'New Cases',
            count: data.todayCases,
            type: 'todayRecovered',
            icon: <div style={{fontSize: 30,color: '#ffff', padding:15,borderRadius: '50%', width: '30px',
            height: '30px', backgroundColor:'#FF9918'}}>
                <FaBell/>
            </div>,
            
        },
        {
            title: 'Helpline',
            count: data.todayRecovered,
            type: 'todayCases',
            icon: <div style={{fontSize: 30,color: '#ffff', padding:15,borderRadius: '50%', width: '30px',
            height: '30px', backgroundColor:'#B05DF3'}}>
                <FaMedkit/>,
            </div>,
        },
        {
            title: 'New Death',
            count: data.todayDeaths,
            type: 'todayDeaths',
            icon: <div style={{fontSize: 30,color: '#ffff', padding:15,borderRadius: '50%', width: '30px',
            height: '30px', backgroundColor:'#D5120D'}}>
                <FaBed />
            </div>,
        },
    ]

    return ( <Grid container spacing = { 5 } style={{marginTop:20, marginBottom: 30}}> {
            summary.map((item) => ( <Grid item sm = { 4 }
                xs = { 12 } >
                <HighlightCard  
                icon = {item.icon}
                title = { item.title }
                count = { item.count }
                type = { item.type }/>
                </Grid >
            ))
        } 
        </Grid>
    )
}