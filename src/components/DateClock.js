import { useState, useEffect } from 'react';

export default function DateClock() {
    const ticker = NewTime(new Date());
    const Months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    const currDate = new Date();
    let month = Months[currDate.getUTCMonth()];
    let day = currDate.getUTCDate();
    let year = currDate.getUTCFullYear();

    let newDate = month + "," + day + "," + year;

    return (
        <div className="clock">
            <h2 id="clock-date">{newDate}</h2>
            <h2 id="clock-time">{ticker.toLocaleTimeString()}</h2>
        </div>
    )
}

function NewTime(currentDate) {
    const [date, setDate] = useState(currentDate);

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);

        return function clear() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return date;
}