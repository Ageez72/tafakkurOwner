'use client'
import { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

export default function CounterUp({ count, time }) {
    const [counterOn, setCounterOn] = useState(false);
    // onExit={() => setCounterOn(false)}
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} component="span">
                <CountUp end={count} duration={time} redraw={true}>
                    {({ countUpRef }) => (
                        <span ref={countUpRef} className='count'></span>
                    )}
                </CountUp>
            </ScrollTrigger>
        </>
    );
}