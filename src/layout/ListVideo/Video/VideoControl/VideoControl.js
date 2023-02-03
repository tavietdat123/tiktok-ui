import { useCallback, useEffect, useRef, useState } from 'react';
import { MuteVolumeIcon, PauseIcon, PlayIcon, VolumeIcon } from '../../../Icons';
import Report from '../Report';
import Videos from '../../../../assets/video';
import classNames from 'classnames/bind';
import styles from './VideoControl.module.scss';
import SeekBar from './SeekBar';
import Volume from './Volume';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function VideoControl({ dataReport }) {
    const videoRef = useRef();
    const [play, setPlay] = useState(false);
    const [muted, setMuted] = useState(() => parseFloat(JSON.parse(localStorage.getItem('volume'))) || 0);
    const [percentage, setPercentage] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const handlePlay = () => {
        setPlay(!play);
        if (play) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };
    const handleChangeVideo = useCallback((e) => {
        const video = videoRef.current;
        video.currentTime = (video.duration / 100) * e.target.value;
        setPercentage(parseFloat(e.target.value));
    }, []);
    const handleTimeUpdate = (e) => {
        const percent_UD = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
        setPercentage(parseFloat(percent_UD));
        setCurrentTime(e.target.currentTime);
    };
    useEffect(() => {
        localStorage.setItem('volume', JSON.stringify(muted));
        videoRef.current.volume = muted / 100;
    }, [muted]);
    const handleVolume = useCallback((e) => {
        const volume = e.target.value;
        if (volume < 0.01) {
            return setMuted(0);
        }
        setMuted(volume);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <video
                className={cx('video')}
                ref={videoRef}
                onEnded={() => videoRef.current.play()}
                src={Videos.video}
                muted={muted < 0}
                onLoadedData={(e) => {
                    setDuration(parseFloat(e.target.duration.toFixed(0)));
                }}
                onTimeUpdate={handleTimeUpdate}
                autoPlay
            />
            <div className={cx('opa')}>
                <Report base={dataReport} />
            </div>
            <div className={cx('play', 'opa')} onClick={handlePlay}>
                {play ? <PauseIcon /> : <PlayIcon />}
            </div>
            <div className={cx('opa')}>
                <Tippy
                    interactive
                    placement="top-start"
                    offset={[0, 0]}
                    hideOnClick={false}
                    onShow={() => {
                        setMuted(JSON.parse(localStorage.getItem('volume')));
                    }}
                    render={(attrs) => (
                        <div className={cx('')} tabIndex="-1" {...attrs}>
                            <Volume muted={muted} setMuted={handleVolume} />
                        </div>
                    )}
                >
                    <div
                        className={cx('sound')}
                        onClick={() => {
                            if (muted === 0) {
                                setMuted(50);
                            } else {
                                setMuted(0);
                            }
                        }}
                    >
                        {(muted === 0 && <MuteVolumeIcon />) || <VolumeIcon />}
                    </div>
                </Tippy>
            </div>
            <div className={cx('opa')}>
                <SeekBar
                    percentage={percentage}
                    handleChangeVideo={handleChangeVideo}
                    currentTime={currentTime}
                    duration={duration}
                />
            </div>
        </div>
    );
}

VideoControl.propTypes = {
    dataReport: PropTypes.array.isRequired,
};
export default VideoControl;
