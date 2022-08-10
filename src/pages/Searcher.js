import Button from "../components/Button";
import { exercices } from "./workouts"
import React, { useState } from 'react';
import { useTrail, animated, useSpring } from 'react-spring'
import { Link } from "react-router-dom";

function WorkoutPanel(props) {

    return (
        <Link to={'/workout/' + props.name}>
            <div className="workoutContainer">
                <span id="name">{props.name}</span>
                <span id="creator">{props.creator}</span>
            </div>
        </Link>
    )
}

export default function Searcher() {
    const [expLevel, setLevel] = useState(0);
    const list = [];

    for (let j = 0; j < exercices.length; j++) {

        if (exercices[j].level === expLevel) {
            list.push(<WorkoutPanel name={exercices[j].name} creator={exercices[j].creator} />);
        }
    }

    const filterButtons = [
        <Button buttonType="buttonFilter" text="just started" target="/searcher" onClick={() => setLevel(0)} />,
        <Button buttonType="buttonFilter" text="beginner" target="/searcher" onClick={() => setLevel(1)} />,
        <Button buttonType="buttonFilter" text="intermediate" target="/searcher" onClick={() => setLevel(2)} />,
        <Button buttonType="buttonFilter" text="advanced" target="/searcher" onClick={() => setLevel(3)} />,
        <Button buttonType="buttonFilter" text="beast" target="/searcher" onClick={() => setLevel(4)} />
    ]

    const trail = useTrail(filterButtons.length,
        {
            from: {opacity: 0, width: '10%'},
            to: {opacity: 1,   width: '100%'},
            config: {mass: 1, tension: 120, friction: 14 }
        }
    )
    const starsTrail = useTrail(expLevel+1, {
        from: {opacity: 0, y: -10},
        to: {opacity: 1, y: 0},
        leave:{opacity: 0,y: +10},
        config: { mass: 1, tension: 120, friction: 14 }
    })
    const props = useSpring(
        {
            to: { opacity: 1, x: 0},
            from: {opacity: 0, x: 300},
            config: { mass: 1, tension: 120, friction: 14}
        }
    )
    
    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gridTemplateRows: '7vh' }}>
                <Button buttonType="buttonBack" text="back" target="/" />
                <div style={{ display: 'flex',  marginTop:'2vh', justifyContent: 'center'}}>
                    {
                        starsTrail.map((spring, index) => {
                            return(<animated.img src="./img/star.png" alt="n0"  key={index} style={{width: '30px', height: '30px', ...spring}}/>)
                        })
                    }
                </div>
            </div>

            <br></br>
            <div className="fullContainer">
                <div className="filterContainer">
                    choose your level
                    <br></br><br></br>
                    {
                        trail.map((spring, index) => {
                            return (
                                <animated.div key={index} style={{ ...spring }}>{filterButtons[index]}</animated.div>
                            )
                        })
                    }
                </div>
                <animated.div className="pickerContainer" style={props} >
                    {list}
                </animated.div>
            </div>

        </>
    )
}