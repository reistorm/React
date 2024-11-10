import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';


const TemperatureConverter = () => {
    const [ temperatureCelsius, setTemperatureCelsius ] = useState('');
    const [ temperatureFahrenheit, setTemperatureFahrenheit] = useState('');

    const convert = (e) => {
        if(temperatureCelsius) {
            setTemperatureFahrenheit(fromCelsiusToFahrenheit(temperatureCelsius))
        } else if (temperatureFahrenheit) {
            setTemperatureCelsius(fromFahrenheitToCelsius(temperatureFahrenheit))
        }
    }

    const fromCelsiusToFahrenheit = (temperatureCelsius) => {
        return (temperatureCelsius * 9 / 5) + 32;
    }
    const fromFahrenheitToCelsius = (temperatureFahrenheit) => {
        return (temperatureFahrenheit - 32) * 5 / 9;
    }

    const takeTempCelsius = (e) => {
        setTemperatureCelsius(e.target.value);
    }
    const takeTempFahrenheit = (e) => {
        setTemperatureFahrenheit(e.target.value);
    }

    const reset = (e) => {
        setTemperatureCelsius('');
        setTemperatureFahrenheit('');
    }
    return (
        <Box sx={{ width: 200, display: 'flex' }}>
            <div className='container'>
            <div className='converter'>
                <h2>Температурный конвертер с Material UI</h2>
                <TextField id="outlined-basic" label="Цельсия" variant="outlined" onChange={takeTempCelsius} value={temperatureCelsius}/>  
                <Button variant="outlined" onClick={convert}>Конвертировать</Button> 
                <TextField id="outlined-basic" label="Фаренгейт" variant="outlined" onChange={takeTempFahrenheit} value={temperatureFahrenheit}/> 
                <Button variant="outlined" onClick={reset}>Очистить</Button> 
            </div>
        </div>
        </Box>
        
    )
}

export default TemperatureConverter;