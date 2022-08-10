import "./index.css"
import "./css/buttons.css"
import "./css/filter.css"
import "./css/routine.css"
import "./css/images.css"
import Button from "./components/Button.js"
import ImageShifter from "./components/ImageShifter.js"
import { useSpring,  animated } from 'react-spring'

function Footer(){

    return(
        <div className="footer">
            <span id="footerButton">
                        <a href="https://github.com/FStanczyk">GitHub </a>
            </span>
            <>&nbsp; </>
            <span id="footerButton">
                <a href="https://www.linkedin.com/in/filip-sta%C5%84czyk-8061a520b/">LinkedIn </a>
            </span>
        </div>
    )
}

export default function MainPage(){
    const props = useSpring(
        {
            to: { opacity: 1},
            from: {opacity: 0},
            config: {duration:1000}
        }
    )
    return(
        <>  
        <ImageShifter />
            <animated.div style={props} className="mainPageContainer">
                <div className="mainTitle">Find your 
                    <br></br>workout 
                    <br></br>routine
                </div>
                <Button buttonType="buttonClassic" text="get started" target="/searcher" />
            </animated.div>
            <Footer />
        </>
    )

}