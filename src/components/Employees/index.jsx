import React, { useEffect } from "react";
import { EMPLOYEES } from "modules/api/endpoints";
import Navigation from "components/common/Navigation";
import useFetch from "hooks/useFetch";
import ProfileGrid from "components/common/ProfileGrid";

export default function Employees() {
    const { response, performFetch } = useFetch(EMPLOYEES)
    const {loading, data} = response
    useEffect(() => {
        performFetch()
    }, [performFetch])       
    
    return <ProfileGrid profiles={data} loading={loading} />
    } 
    