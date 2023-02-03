import classNames from 'classnames/bind';
import { memo, useRef } from 'react';
import styles from './VideoControl.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function SeekBar({ percentage, handleChangeVideo, currentTime, duration }) {
    const timer = useRef();
    function countTime(seconds) {
        if (!seconds) return '00:00';
        const minute = Number.parseFloat(seconds / 60).toFixed(0);
        const duration = seconds / 60;
        const second = seconds % 60;
        let second_ = second;
        if (second < 10) {
            second_ = `0${second}`;
        }
        if (duration < 1) {
            return `00:${second_}`;
        } else {
            if (duration < 10) {
                return `0${minute}:${second_}`;
            } else if (duration > 9) {
                return `${minute}:${second_}`;
            }
        }
    }

    return (
        <div className={cx('wrapperSeek')}>
            <div className={cx('divSeekBar')}>
                <div className={cx('run')} style={{ marginLeft: `${percentage}%` }}></div>
                <div className={cx('current_time')} ref={timer} style={{ width: `${percentage}%` }}></div>
                <input
                    type="range"
                    value={percentage}
                    className={cx('seekBar')}
                    step="0.01"
                    onChange={handleChangeVideo}
                />
            </div>
            <div className={cx('timer')}>{countTime(currentTime.toFixed(0)) + '/' + countTime(duration)}</div>
        </div>
    );
}

SeekBar.propTypes = {
    percentage: PropTypes.number,
    handleChangeVideo: PropTypes.func.isRequired,
    currentTime: PropTypes.number,
    duration: PropTypes.number,
};
export default memo(SeekBar);
