import React, { useState, useEffect, useRef } from 'react';
import '../css/App.css';
import SessionContext from "../objects/SessionContext";
import DeviceCard from './DeviceCard';

export default function HomePage() {
    
    const [, setData] = useState('');
    const deviceListRef = useRef([]);
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
            deviceListRef.current = [...result].map((e, i) => {
                setData(result[i]);
                return <DeviceCard key={i} device={{"name": e.name, "status": e.status}} />
            });
        };
        fetchData();
    }, []);

    return (
        <div className="Grid-container">
            {deviceListRef.current}
        </div>
    );
}
