import React from 'react';

import Me from '../../images/me.png';
import Typewriter from 'typewriter-effect';
import './Intro.css'

const Intro = () => {
    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Anirban Banerjee')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pause()
                                .start();
                            }}
                        />
                    </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Java</div>
                            <div className="i-title-item">C++</div>
                            <div className="i-title-item">Oracle SQL</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop services for customers of all sizes, specializing in creating stylish and modern websites, web services and online platforms.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="i-bg"/>
                <img src={Me} alt="" className='i-img'/>
            </div>
        </div>
    )
}

export default Intro
