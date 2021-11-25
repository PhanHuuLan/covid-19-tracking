import React, { useEffect, useState,useMemo } from 'react'
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';
import { Grid,Container, Typography } from '@material-ui/core';
import { getCountries, getReportByCountry,getReportByCountryForHighLights} from './apis';
import moment from 'moment';
import 'moment/locale/vi';
import { TopTen } from './components/TopTen';
import { Table } from './components/TableStats';

moment.locale('vi'); 

  const App = () => {
    const[ countries, setCountries] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState('')
    const [report, setReport] = useState([])
    const [reportForHighLights,setReportForHighLights] = React.useState([])
    useEffect(() => {
      getCountries()
        .then(res => {
          console.log({res});
          setCountries(res.data)
          setSelectedCountryId('VN')
        })
    },[])
    const handleOnChange = (e) => {
      setSelectedCountryId(e.target.value)
    }
  
    useEffect(() => {
      if (selectedCountryId) {
        const { countryInfo } = countries.find((country) => country.countryInfo.iso2 === selectedCountryId
        )
        
        getReportByCountryForHighLights(countryInfo.iso2)
        .then(res => {
          setReportForHighLights(res.data)
        })
      }
    },[countries,selectedCountryId])
  
    useEffect(() => {
      if (selectedCountryId) {
        const { countryInfo } = countries.find((country) => country.countryInfo.iso2 === selectedCountryId
        )
        
        getReportByCountry(countryInfo.iso2)
        .then(res => {
          setReport(res.data)
        })
      }
    },[countries,selectedCountryId])

    const [mapData,setMapData] = React.useState({})
    React.useEffect(() => {
        if(selectedCountryId){
            import(
                `@highcharts/map-collection/countries/${selectedCountryId.toLowerCase()}/${selectedCountryId.toLowerCase()}-all.geo.json`
                ).then(res => {
                    setMapData(res)
                }) 
        }
    }, [selectedCountryId])

    return (
        <Container style={{ marginTop: 50, maxWidth:1184}}>
          <Typography style={{display: 'flex'}}>
            <p>Cập nhật:</p>
            <Typography class="text-primary"> {moment().format('LLL') }</Typography>
          </Typography>
          <CountrySelector class='countrySelector' countries={countries} handleOnChange={handleOnChange}  value={selectedCountryId}/>
          <Highlight class="highlight" reportForHighLights={reportForHighLights}/>
          <Summary countryId={selectedCountryId} report={report} mapData={mapData}/>
          <Grid item xs={12}>
            <TopTen data={countries}/>
          </Grid>
          <Grid item xs={12}>
              <Table data={countries}/>
          </Grid>
        </Container>
    )
  }
  
export default App;
