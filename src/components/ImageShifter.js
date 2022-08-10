import React, { useState } from 'react';
import {useTransition, animated, config} from 'react-spring'


const imageURL = [
    {url:'./img/photo1.jpg'},
    {url:'./img/photo2.jpg'},
    {url:'./img/photo3.jpg'},
    {url:'./img/photo4.jpg'},
    {url:'./img/photo5.jpg'},
    {url:'./img/photo6.jpg'},
    {url:'./img/photo7.jpg'}
]

export default function ImageShifter(props){

    let [imageNumber, setImage] = useState(Math.floor(Math.random() * 8))
    setInterval(() => {
        setImage(imageNumber = (imageNumber + 1)% imageURL.length) }
        , 5000);

    const transition = useTransition(imageURL[imageNumber], {
        from: {
            opacity: 0,
            x: 100
        },
        enter: {
            opacity: 1,
            x: 0
        },
        leave: {
            opacity: 0,
            x: -50
        },
        config: config.molasses
    })
    return(
        <div className="imageContainer">
            {
                transition((style, item)=>
                <animated.img 
                    key = {item}
                    className = 'image'
                    src = {item.url}
                    style = {style}
                    alt = "not loaded"
                />
                )
            }
        </div>
    )
}