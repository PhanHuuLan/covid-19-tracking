import axios from 'axios'

export const getCountries = () => axios.get('https://disease.sh/v3/covid-19/countries')

export const getReportByCountryForHighLights = (country) => axios.get(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)


export const getReportByCountry = (country) => axios.get(`https://api.covid19api.com/dayone/country/${country}`)

// export const getMapDataByCountryId = (countryId) =>
//   import(
//     `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
//   );