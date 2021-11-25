import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import {FormControl,makeStyles,FormHelperText} from '@material-ui/core/';
import "@fontsource/roboto";

const CountrySelector = ({value,handleOnChange,countries}) => {
    return (
        <FormControl>
            <InputLabel htmlFor = "country-selector" shrink>Country</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}>
                    {
                        countries.map((country)=>{
                            return  <option key={country.country}
                                        value={country.countryInfo.iso2}>
                                        {country.country}
                                    </option>
                        })
                    }
            </NativeSelect>
            <FormHelperText >Select country</FormHelperText>
        </FormControl>
    )
}
export default CountrySelector
