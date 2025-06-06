import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './css/State.css';
import State1 from './a.jpeg'; // Use your image path

const dataPoints = [
    { id: 1, name: 'South Sudan', rate: '34.4%', top: '20%', left: '55%' },
    { id: 2, name: 'Senegal', rate: '8.6%', top: '32%', left: '18%' },
    { id: 3, name: 'Uganda', rate: '7.2%', top: '52%', left: '53%' },
    { id: 4, name: 'Rwanda', rate: '7.1%', top: '58%', left: '54%' },
    { id: 5, name: 'Niger', rate: '6.9%', top: '30%', left: '40%' },
    { id: 6, name: 'Djibouti', rate: '6.9%', top: '35%', left: '70%' },
    { id: 7, name: 'Togo', rate: '6.9%', top: '40%', left: '30%' },
    { id: 8, name: 'Ethiopia', rate: '6.6%', top: '45%', left: '63%' },
    { id: 9, name: 'Benin', rate: '6.6%', top: '43%', left: '28%' },
    { id: 10, name: 'Cote d Ivoire', rate: '6.3%', top: '52%', left: '25%' }
];



function State() {
    return (
        <div className="africa-map-container">
            <img src={State1} alt="Africa Map" className="africa-map-image" />

            {dataPoints.map(point => (
                <div
                    key={point.id}
                    className="map-point"
                    style={{ top: point.top, left: point.left }}>
                        <span className='a'> {point.name}</span>
                       
                </div>
            ))}

            <ReactTooltip effect="solid" />
        </div>
    )
}

export default State