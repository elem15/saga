import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { filterEmployees } from "modules/app/actions";
import { selectAppState } from 'modules/app/selectors'

export default function ServiceItem({id, jobId, title}) {
    const dispatch = useDispatch()
    const appState = useSelector(selectAppState)
    const action = useCallback(
        () => {
            dispatch(filterEmployees(jobId))
        },
        [jobId, dispatch],
    ) 

    return  (
    <ListItem button id={id} onClick={action} selected={jobId === appState.selectedJob}>         
            <ListItemText primary={title} />
          </ListItem>            
    )
}