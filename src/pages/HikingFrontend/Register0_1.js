import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';

import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    FormControl:{
        margin: theme.spacing(1),
        width: '-webkit-fill-available',
    },
    container: {
        width: '-webkit-fill-available',
        height: 768,
        padding: '40px 16px 213px',
        backgroundColor: '#ffffff'
      
      //backgroundColor:'#66CBBA'
    },
    Title: {
        width: '-webkit-fill-available',
        height: '36px',
        margin: '0 0px 31px 0',
        fontFamily: "NotoSansCJKtc",
        fontSize: '24px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        color: '#232323'
    },
    Text:{
        // width: '33px',
        // height:'24px',
        margin: '0 0 1px 0',
        fontSize: '16px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        color: '#232323',
    },
    InputBackground:{
        width: '-webkit-fill-available',
        // height: '40px',
        margin: '8px 0 31px 0',
        borderColor:'#232323',
    },
    PhoneRegionBackground:{
        width: '123px',
        // height: '40px',
        margin: '8px 0 31px 0',//not correct position
        padding: '8px 0 0',
    },
    PhoneNumberBackground:{
        width: 'auto',
        //fullWidth:true,
        height: '40px',
        margin: '-12px 0 0px 40px',//first value need to fix
        padding: '8px 0 0',
    },
    submit: {
        width: '-webkit-fill-available',
        // height: '48px',
        margin: '40px 0px 0px 0px',
        backgroundColor: '#00d04c',
        color: '#ffffff',
    },
    ModifyTextFieldColor: {
        // Theme Color, or use css color in quote
        fontSize: '14px',
        color: '#979797',  
        borderColor:'#979797'
    },
    errorInfo: {
      width: '100%',
      height: '0px',
      margin: '-20px 0px 30px 0px',
      fontFamily: 'NotoSansCJKtc',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.5',
      letterSpacing: '0.5px',
      color: '#ff3b30',
    },
  }));
  const usePlaceholderStyles = makeStyles(theme => ({
    placeholder: {
      color: "#aaa"
    }
  }));
  ;

export default function SignIn() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [phoneRegion, setPhoneRegion] = React.useState('');
  const [phoneNumeber, setPhoneNumeber] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [inputValue, setInputValue] = useState([]);
  const [county, setCounty] = React.useState('');
  const { register, handleSubmit, errors, watch } = useForm()
  const history = useHistory();
  const [genderError, setGenderError] = React.useState(false);
  const [countryError, setCountryError] = React.useState(false);
  const [birthError, setBirthError] = React.useState(false);
  const [countyError, setCountyError] = React.useState(false);

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handlePhoneRegion = (event) => {
    setPhoneRegion(event.target.value);
  };
  const handleCountyChange = (event) => {
    setCounty(event.target.value);
  };
  const handleDateChange = (date, value) => {
    setSelectedDate(date);
    setInputValue(value);
  };
  
  const Placeholder = ({ children }) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
  };

  let testOuputObj = {
    name: name,
    gender: gender,
    phone_number: phoneNumeber,
    country_code_id: phoneRegion,
    birth: inputValue,
    county_id: county
  }
  const headers = {
    'Authorization': 'Bearer '+localStorage.getItem('token')
  }
  const axios = require('axios');
  let responsedJson; // 將回傳的JSON先定義為變數，後面再賦值
  const onSubmit = async(data) => {
    data = testOuputObj;
    console.log(data);
    console.log(headers);
    await axios.post('https://staging-server.gohiking.app/api/profile', data, { headers })
    .then(function (response) {
      console.log('correct');
      responsedJson = response.data;
      history.push('/signin');
    })
    .catch(function (error) {
      console.log('error');
      responsedJson = error.response.data;
    })
    .finally(function () {
      console.log(responsedJson);
    }); 
  }
  

  return (
    <div className={classes.container}>
      <Typography className={classes.Title}>
        建立個人資料
      </Typography>
      <form className={classes.form}>
        <Typography className={classes.Text}>
          姓名 
        </Typography>
        <Input 
          name="name"
          className={classes.InputBackground} 
          placeholder="請輸入您的名稱" 
          fullWidth 
          inputRef={register({ required: true })}
          onChange={event => setName(event.target.value)}//Get value in Email
        />
        <Typography className={classes.errorInfo}>{errors.name && "請輸入姓名"}</Typography>
        <Typography className={classes.Text} >
          性別
        </Typography>
        <FormControl error={genderError}>
        <Select
          className={classes.InputBackground}
          value={gender}
          displayEmpty
          renderValue={
            gender !== "" ? undefined : () => <Placeholder>請輸入您的性別</Placeholder>
          }
          naitve
          inputProps={register({ required: true })}
          onChange={handleChange}
        >   
          <MenuItem value={1}>男</MenuItem>
          <MenuItem value={0}>女</MenuItem>
        </Select>
        {genderError && <Typography className={classes.errorInfo}>This is required!</Typography>}
        </FormControl>
        <Typography className={classes.Text} >
          手機
        </Typography>
        <div>
        <FormControl error={countryError}>
          <Select
          className={classes.PhoneRegionBackground}
          value={phoneRegion}
          displayEmpty
          renderValue={
            phoneRegion !== "" ? undefined : () => <Placeholder>台灣+886</Placeholder>
          }
          onChange={handlePhoneRegion}
          >   
            <MenuItem value={4}>台灣+886</MenuItem>
            <MenuItem value={424}>香港+852</MenuItem>
          </Select>
          {countryError && <Typography className={classes.errorInfo}>This is required!</Typography>}
          </FormControl>
          <Input 
            name="phoneNumber"
            className={classes.PhoneNumberBackground} 
            placeholder="請輸您的手機號碼"  
            onChange={event => setPhoneNumeber(event.target.value)}//Get value in Email
            fullWidth
            inputRef={register({ required: true })}
          />
          <Typography className={classes.errorInfo}>{errors.phoneNumber && "請輸入手機號碼"}</Typography>
        </div>
        <Typography className={classes.Text} >
          生日
        </Typography>
        <FormControl error={birthError}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          placeholder="請選擇"
          className={classes.InputBackground}
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          invalidDateMessage=''
          id="date-picker-inline"
          value={selectedDate}
          inputValue={inputValue}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        {birthError && <Typography className={classes.errorInfo}>This is required!</Typography>}
        </FormControl>
        <Typography className={classes.Text} >
          居住地
        </Typography>
        <FormControl error={countyError}>
        <Select
          className={classes.InputBackground}
          value={county}
          displayEmpty
          renderValue={
            county !== "" ? undefined : () => <Placeholder>請選擇</Placeholder>
          }
          onChange={handleCountyChange}
        >   
          <MenuItem value={"4"}>台北市</MenuItem>
          <MenuItem value={"14"}>台中市</MenuItem>
        </Select>
        {countyError && <Typography className={classes.errorInfo}>This is required!</Typography>}
        </FormControl>
        <Button
          type="button"
          fullWidth
          variant="contained"
          className={classes.submit}
          onClick={handleSubmit(onSubmit)}
        >
          同意並註冊
        </Button>
     </form>
    </div>
  );
}