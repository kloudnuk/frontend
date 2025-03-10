import React, { useState, useEffect, useRef } from 'react';
import '../css/App.css';
import SessionContext from "../objects/SessionContext";
import DeviceCard from './DeviceCard';

export default function HomePage() {
    
    const [, setData] = useState('');
    const deviceListRef = useRef([]);
    const headers = new Headers();
    const ep = SessionContext.webserverEndpoint;
    const user = SessionContext.userDetails;
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", 
        "Basic " + btoa(`${user.name}:${user.password}`));
    useEffect (() => {
        const fetchData = async () => {
            const response = 
                await fetch(`${ep.proto}://${ep.baseUrl}/${ep.apiUrl}/devices/?org=Playground`, 
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
