import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../index"
import moment from 'moment-timezone'
import { getTime } from '../http/instructorApi'
import { observer } from "mobx-react-lite"

const TimeZone = observer(() => {
    const {user} = useContext(Context)

    const [userTimeZone, setUserTimeZone] = useState(null)
    const [currentDate, setCurrentDate] = useState(null)
    const [utcDate, setUtcDate] = useState(null)
    const [lastCurrentDate, setLastCurrentDate] = useState(null)
    const [lastUtcDate, setLastUtcDate] = useState(null)

    useEffect(() => {
        const userTimeZone = moment.tz.guess()
        setUserTimeZone(userTimeZone)
        const formatString = 'D.M.YYYY HH:mm:ss'

        const now = moment()
        const currentDate = now.clone().tz(userTimeZone).format(formatString)
        const utcDate = now.clone().utc().format(formatString)
        var lastCurrentDate = now.clone().tz(userTimeZone).format(formatString)
        var lastUtcDate = now.clone().utc().format(formatString)

        if (user.isAuth) {
            getTime().then(data => {
                setLastCurrentDate(data[0])

                const originalDate = moment(data[0], formatString);
                const modifiedDate = originalDate.subtract(3, 'hours');
                const resultString = modifiedDate.format(formatString);

                setLastUtcDate(resultString)
            })
        }

        setCurrentDate(currentDate)
        setUtcDate(utcDate)
        setLastCurrentDate(lastCurrentDate)
        setLastUtcDate(lastUtcDate)
    }, [])

    return (
        <div style={{color: '#555555'}}>
            <p>User Time Zone: {userTimeZone}</p>
            <p>Current Date (User Time Zone): {currentDate}</p>
            <p>Current Date (UTC): {utcDate}</p>
            {user.isAuth ?
                <>
                    <p>Last Current Date (User Time Zone): {lastCurrentDate}</p>
                    <p>Last Current Date (UTC): {lastUtcDate}</p>
                </>
                :
                <p></p>
            }
        </div>
    )
})

export default TimeZone