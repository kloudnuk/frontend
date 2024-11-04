import React from 'react';
import rpi from '../img/rpi.png';
import '../css/App.css';
import { GrStatusGood  } from "react-icons/gr";
import { GrStatusWarning } from "react-icons/gr";

function DeviceStatus(props) {
    if (props.status === "RUNNING") {
        return <i><GrStatusGood color="green" /></i>;
    } else {
        return <i><GrStatusWarning color="orange" /></i>
    }
}

export default function DeviceCard(props) {

    return (
        <div className="Device-card">
            <div className="card-logo-container">
                <img className="card-logo" src={ rpi } alt="Device-avatar" />
            </div>
            <div className="Device-info">
                <div className="device-card-item">
                    <strong>{props.device.name}</strong>
                </div>
                <div className="device-card-item">
                    <DeviceStatus status={props.device.status} />
                </div>
                <table >
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}