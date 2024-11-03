import React, { Component } from 'react';
import '../css/App.css';
import SessionContext from "../objects/SessionContext";
import Device from '../objects/Device';
import DeviceCard from './DeviceCard';

class HomePage extends Component {

    getDevices() {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", 
            "Basic " + btoa(SessionContext.userDetails.name + 
                        ":" + SessionContext.userDetails.password));
        const options = {
            method: "GET",
            headers: headers
        }
        fetch("http://localhost:8000/api/v1/devices/?org=Playground", options)
            .then((response) => response.text())
            .then((result) => {
                const devices = JSON.parse(result).map( o =>
                    new Device(o.controllerid,
                        o.name,
                        o.description,
                        o.ipaddress,
                        o.macaddress,
                        o.status,
                        o.gateway,
                        o.wgaddress
                    ));
                localStorage.setItem("Devices", JSON.stringify(devices));
            })
            .catch((error) => console.error(error));
    }; 

    render() {
        this.getDevices();
        return (
            <div className="Grid-container">
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
                <DeviceCard item={0}/>
            </div>
        );
    }
}
export default HomePage;