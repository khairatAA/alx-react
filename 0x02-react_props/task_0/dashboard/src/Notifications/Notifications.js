import React from 'react'
import './Notifications.css'
import closeIcon from '../assests/close-icon.png'
import { getLatestNotification } from '../utils/utils';

function Notifications() {
    return (
        <div className='Notifications'>
            <button
                style={{ position: 'absolute', top: 15, right: 20 }}
                aria-label='Close'
                onClick={() => { console.log('Close button has been clicked'); }}
            >
                <img src={closeIcon} alt='Close Icon' width={20} />
            </button>
            <p>
                Here is the list of notifications
            </p>
            <ul>
                <li data-priority="default">
                    New course available
                </li>
                <li data-priority="urgent">
                    New resume available
                </li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} style={{ color: 'red' }} />
            </ul>
        </div>
    )
}

export default Notifications