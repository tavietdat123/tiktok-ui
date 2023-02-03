import classNames from 'classnames/bind';
import styles from './VideoControl.module.scss';
import { memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Volume({ muted, setMuted }) {
    const [crt, setCrt] = useState(0);
    const [r, setR] = useState(0);

    const currentVolume = useRef(null);
    const run = useRef();
    const input = useRef();
    useEffect(() => {
        const height = input.current.offsetHeight;
        const heightCurren = height * (muted / 100);
        setCrt(heightCurren);
        const margin = run.current.getBoundingClientRect().height;
        setR((height - margin) * (muted / 100));
    }, [muted]);
    return (
        <div className={cx('horizontal')}>
            <div ref={run} className={cx('run_horizontal')} style={{ marginBottom: r }}></div>
            <div ref={currentVolume} className={cx('current_time_horizontal')} style={{ height: crt }}></div>
            <input
                ref={input}
                type="range"
                className={cx('seekBar_horizontal')}
                step="0.01"
                value={muted}
                onChange={setMuted}
            />
        </div>
    );
}
Volume.propTypes = {
    muted: PropTypes.number,
    setMuted: PropTypes.func.isRequired,
};
export default memo(Volume);
