import { JOBS } from "modules/api/endpoints";
// import api from "modules/api/api";
import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { apiActions } from "modules/api/actions";
import useFetch from "hooks/useFetch";
import Navigation from "components/common/Navigation";

export default function Jobs() {
const { response, performFetch } = useFetch(JOBS)
const {loading, data} = response
    
useEffect(() => {
    performFetch()
}, [performFetch])

    return <Navigation loading={loading} services={data} title={'react + redux + redux-saga app'}/>
} 

// export default function Jobs() {

//     const state = useSelector(state => state.api[JOBS])
   
//     const dispatch = useDispatch()
//     useEffect(async () => {
//         try {
//         dispatch(apiActions.fetch(JOBS))
//         const data = await api.fetch(JOBS);
//         dispatch(apiActions.fetchSuccess(JOBS, data))      
//     } catch(e) {
//         dispatch(apiActions.fetchFailure(JOBS, e))
//     }
// },[])
//  console.log(state)
//     return <div>
//         Jobs Component     
              
//     </div>
// } 
// {state.data.map(item => { return <div>{item.title}</div>
//         })} 