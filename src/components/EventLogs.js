import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {EventLogContext} from '../contexts/EventLogContext';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
      padding: 10
    },
    listItem: {
        background: "lightgrey",
        margin: 1
    },
    leftJustify: {
        textAlign: "left"
    }
}));

function ConvertTimestamp(timestamp) {
    var converted = "";
    converted += timestamp.substring(4, 6) + "-" + timestamp.substring(6, 8) + "-" + timestamp.substring(0, 4);
    converted += " at " + timestamp.substring(9, 17);

    return converted;
}

function DisplayEventProps(key, props) {
    var output = "";

    switch (key) {
        case "ZoneChange":
            output += "User moved from zone " + props.PreviousZone 
            + " to zone " + props.NextZone + ".";
            break;
        case "DMMTestEvent":
            output += "User took a DMM reading with " + props.ProbeType 
            + " to test " + props.TestMode 
            + " from " + props.TestLocation0 
            + " to " + props.TestLocation1 
            + " and received a reading of " + props.Output + ".";
            break;
        case "ClampTestEvent":
            output += "User took a clamp meter reading to test " + props.TestMode
            + " at " + props.TestLocation
            + " and received a reading of " + props.Output + ".";
            break;
        case "TemperatureTestEvent":
            output += "User took a temperature gun reading at " + props.TestLocation 
            + " and received a reading of " + props.Output + ".";
            break;
        default:
            break;
    }

    return output;
}

function EventLogs() {
    const classes = useStyles();
    const {events} = useContext(EventLogContext);

    return (
        <div className={classes.root}>
            <List>
                {events.map((event, i) => (
                    <ListItem className={classes.listItem}>
                        <ListItemText primary={event.UserId} secondary={ConvertTimestamp(event.Timestamp)}/>
                        <ListItemText className={classes.leftJustify} primary={DisplayEventProps(event.EventKey, event.EventProps)}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default EventLogs;