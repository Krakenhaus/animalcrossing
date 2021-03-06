import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import CheckIcon from '@material-ui/icons/Check';
import MoneyIcon from '@material-ui/icons/MonetizationOnTwoTone';
import RoomIcon from '@material-ui/icons/RoomTwoTone';
import SizeIcon from '@material-ui/icons/HeightTwoTone';
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
} from '@material-ui/core';
import { getSaveData, setSaveData } from '../utils/storage';
import { isActive } from '../utils/date';
import Calendar from './Calendar';
import Avatar from './Avatar';

const useStyles = makeStyles({
  root: {
    width: 375,
    padding: 0,
    overflow: 'visible',
  },
  title: {
    marginTop: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    paddingRight: 10,
    paddingTop: 10,
  },
  incomplete: {
    backgroundColor: '#f0f0f0',
    transition: 'background-color .2s ease',
  },
  complete: {
    backgroundColor: '#d8f2a0',
    transition: 'background-color .5s ease',
  },
  partial: {
    backgroundColor: '#f7f1df',
    transition: 'background-color .5s ease',
  }
});

const defaultSaveData = {
  isDonated: false,
  isHoarded: false,
  isFigurine: false,
}

const formatPrice = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default function Creature(props) {

  const classes = useStyles();
  const {
    activeMonths,
    index,
    location,
    name,
    price,
    size,
    time,
    type,
  } = props;
  const priceString = formatPrice(price);
  const [state, setState] = useState({
    ...defaultSaveData,
    isLoading: true,
  });
  const { isDonated, isHoarded, isFigurine, isLoading } = state;

  useEffect(() => {
    const saveData = getSaveData({ type });
    setState({ ...defaultSaveData, ...saveData[index], isLoading: false });
  }, [index, type]);

  const active = isActive(activeMonths);
  const complete = isDonated && isHoarded && isFigurine;
  const seen = isDonated || isHoarded || isFigurine;

  const toggleAccumulation = (e) => {
    const prop = e.target.name;
    const saveData = getSaveData({ type });
    if (saveData[index]) {
      saveData[index][prop] = !saveData[index][prop];
    } else {
      saveData[index] = {}
      saveData[index][prop] = true;
    }
    setSaveData({ type }, saveData);
    setState({...defaultSaveData, ...saveData[index], isLoading: false});
  }

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <div style={{display: 'flex'}}>
            <Avatar active={active} name={name} seen={seen} type={type} />
            <h3 className={classes.title}>{name}</h3>
            <div style={{'marginLeft': 'auto', 'paddingTop': 5}}>
              {active && <Chip color="secondary" icon={<AlarmOnIcon />} label={"Active!"}/>}
            </div>
          </div>
          <Divider variant="inset" />
          <div style={{display: 'flex', justifyContent: 'flex-end', padding:5, marginTop: 5}}>
            <Chip style={{marginLeft: 5}} icon={<MoneyIcon />} label={priceString}/>
            <Chip style={{marginLeft: 5}} icon={<RoomIcon />} label={location}/>
            {size && <Chip style={{marginLeft: 5}} icon={<SizeIcon />} label={size}/>}
          </div>

          <Grid container cols={2} spacing={2} justify="center" style={{'marginTop': '10px'}}>
            <Grid item container justify="center">
              <span>{time}</span>
            </Grid>
            <Grid item container justify="center">
              <Calendar activeMonths={activeMonths} />
            </Grid>
          </Grid>

        </CardContent>
        <CardActions className={complete ? classes.complete : (seen ? classes.partial : classes.incomplete)}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox
                data-id={index}
                checked={isDonated}
                color="primary"
                onChange={toggleAccumulation}
                name="isDonated"
              />}
              label="Donated"
            />
            <FormControlLabel
              control={<Checkbox
                data-id={index}
                checked={isHoarded}
                color="primary"
                onChange={toggleAccumulation}
                name="isHoarded"
              />}
              label="Hoarded"
            />
            <FormControlLabel
              control={<Checkbox
                data-id={index}
                checked={isFigurine}
                color="primary"
                onChange={toggleAccumulation}
                name="isFigurine"
              />}
              label="Figurine"
            />
          </FormGroup>
          {complete && <CheckIcon style={{'marginLeft': 'auto'}} fontSize="large"/>}
        </CardActions>
      </Card>
    </>
  );
}
