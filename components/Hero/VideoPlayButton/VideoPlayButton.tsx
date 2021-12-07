import React, { useState } from 'react';
import scss from './VideoPlayButton.module.scss';
import { ReactVideoPlayer, VideoPlayButtonWrapper } from './VideoPlayButton.styled';
import ReactPlayer from 'react-player';
import { ClickAwayListener } from '@mui/material';


const VideoPlayButton = () => {
    const [play, pressedPlay] = useState(false);

    return (
        <>
            <VideoPlayButtonWrapper>
                <a className="videoPlayButton" onClick={() => pressedPlay(true)}>
                    <span />
                </a>
            </VideoPlayButtonWrapper>
            {
                play && (
                    <ClickAwayListener onClickAway={() => pressedPlay(false)}>
                         <ReactVideoPlayer 
                            playing 
                            url='https://www.youtube.com/watch?v=-fJO6X857J4' 
                         />  
                    </ClickAwayListener>
                )
            }
        </>

    )
}

export default VideoPlayButton;