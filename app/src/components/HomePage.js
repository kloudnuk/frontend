import React, { useState, useEffect } from 'react';
import '../css/App.css';
import SessionContext from "../objects/SessionContext";
import DeviceCard from './DeviceCard';

export default function HomePage() {
    
    const [data, setData] = useState('');
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", 
        "Basic " + btoa(SessionContext.userDetails.name + 
                    ":" + SessionContext.userDetails.password));

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8000/api/v1/devices/?org=Playground", 
                {
                    method: "GET",
                    headers: headers
                })
            const result = await response.json();
            setData(result[0]);
            console.log(result);
        };
        fetchData();
    }, []);

    return (
        <div className="Grid-container">
            <DeviceCard device={data}/>
        </div>
    );
}
