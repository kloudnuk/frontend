import React, { useState } from 'react';
import rpi from '../img/rpi.png';
import '../css/App.css';
import { GrStatusGood  } from "react-icons/gr";
// import { GrStatusWarning } from "react-icons/gr";

export default function DeviceCard(props) {

    const [data] = useState(JSON.parse(localStorage.getItem("Devices")));

    return (
        <div className="Device-card">
            <div className="card-logo-container">
                <img className="card-logo" src={ rpi } alt="Device-avatar" />
            </div>
            <div className="Device-info">
                <div className="device-card-item">
                    <strong>{data[props.item].name}</strong>
                </div>
                <div className="device-card-item">
                    <i><GrStatusGood color="green" /></i>
                </div>
                <table >
                    <tbody>
                        <tr>
                            <td>Oldest Time Sync</td>
                            <td>2024-10-28T13:45:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}