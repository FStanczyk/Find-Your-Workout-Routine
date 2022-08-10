import {exercices} from './workouts'
import Button from "../components/Button";
import { useParams } from 'react-router-dom'
let workout
function Exercices(){
    let list= []
    let exNum = workout.exercices.length
    let widthInPercentage = (100/((exNum<6)?exNum : 6))*0.95 + "%";
    for(let j=0; j<workout.exercices.length; j++){
        list.push(
            <div className="exerciseContainer" style={{width: `${widthInPercentage}`}}>
                <div className="exName">{j+1}. {workout.exercices[j].name}</div>
                <div className="exDuration">{workout.exercices[j].duration}</div>
            </div>
        )
    }

    return(
        <>
        {list}
        </>
    )
}
export default function Workout(){

    //Get the name from the url
    const params = useParams()
    const {name} = params 

    //Find the workout with given name in array
    for(let j = 0; j<exercices.length; j++) { 
        if(exercices[j].name === name) {
            workout = exercices[j]
            break
        }
    }

    return(
        <>
        <Button buttonType="buttonBack" text="back" target="/searcher" />
            <div className="routineContainer">
                <div id="routineTitle">{workout.name}</div>   
                <div id="routineCreator">by {workout.creator}</div>
                {(workout.info)?<div>{workout.info} </div>:''}
                {(workout.restBetweenExercices)?<div>Rest between exercises: {workout.restBetweenExercices} </div>:''}
                {(workout.restBetweenCycles)?<div>Rest between cycles: {workout.restBetweenCycles} </div>:''}
                <br></br>
                <div className='routineInsideContainer'>
                    <Exercices />
                </div>   
                
            </div>
        </>
    )
}