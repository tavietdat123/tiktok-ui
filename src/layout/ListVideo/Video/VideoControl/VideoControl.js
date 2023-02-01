import { useRef, useState } from 'react';
import { MuteVolumeIcon, VolumeIcon, PauseIcon, PlayIcon } from '../../../Icons';
import Report from '../Report';
import Tippy from '@tippyjs/react/headless';
import Videos from '../../../../assets/video';
import classNames from 'classnames/bind';
import styles from './VideoControl.module.scss';

const cx = classNames.bind(styles);

function VideoControl({ dataReport }) {
    const videoRef = useRef();
    const [play, setPlay] = useState(false);
    const [muted, setMuted] = useState(false);
    const handlePlay = () => {
        setPlay(!play);
        if (play) {
            videoRef.current.pause();
        } else {
            videoRef.current.pause();
        }
    };
    return (
        <div className={cx('wrapper')}>
            <video
                className={cx('video')}
                ref={videoRef}
                onEnded={() => videoRef.current.play()}
                src={Videos.video}
                muted={true}
            />
            <Report base={dataReport} />
            <div className={cx('play')} onClick={handlePlay}>
                {play ? <PauseIcon /> : <PlayIcon />}
            </div>
            <div>
                <Tippy
                    visible
                    interactive
                    placement="top-start"
                    render={(attrs) => (
                        <div className={cx('')} tabIndex="-1" {...attrs}>
                            <div className={cx('horizontal')}>
                                <div className={cx('seekBar_horizontal')}></div>
                                <div className={cx('run_horizontal')}></div>
                                <div className={cx('current_time_horizontal')}></div>
                            </div>
                        </div>
                    )}
                >
                    <div
                        className={cx('sound')}
                        onClick={() => {
                            setMuted(!muted);
                        }}
                    >
                        {(muted && <MuteVolumeIcon />) || <VolumeIcon />}
                    </div>
                </Tippy>
            </div>
            <div className={cx('wrapperSeek')}>
                <div className={cx('divSeekBar')}>
                    <div className={cx('run')}></div>
                    <div className={cx('current_time')}></div>
                    <input type="range" className={cx('seekBar')} step="0.01" />
                </div>
                <div className={cx('timer')}></div>
            </div>
        </div>
    );
}

export default VideoControl;
