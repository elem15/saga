import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function ServiceItem({id, jobId, title}) {
    return  <ListItem button id={jobId}>         
            <ListItemText primary={title} />
          </ListItem>            
}