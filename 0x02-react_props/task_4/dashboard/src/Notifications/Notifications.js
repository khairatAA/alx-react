import React from 'react'
import './Notifications.css'
import closeIcon from '../assests/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer = false }) {
    return (
        <>
            <div className='menuItem'>
                Your notifications
            </div>
            {displayDrawer && <div className='Notifications'>
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
                    <ul>
                        <NotificationItem type='default' value='New course available' />
                        <NotificationItem type='urgent' value='New resume available' />
                        <NotificationItem html={{ __html: getLatestNotification() }} style={{ color: 'red' }} />
                    </ul>
                </ul>
            </div>}
        </>
    )
}

export default Notifications