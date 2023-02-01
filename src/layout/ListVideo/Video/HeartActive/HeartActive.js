import { memo, useState } from 'react';
import { HeartIcon, HeartIconActive } from '../../../Icons';
import classNames from 'classnames/bind';
import styles from './HeartActive.module.scss';

const cx = classNames.bind(styles);

function HeartActive() {
    const [heartActive, setHeartActive] = useState(false);

    return (
        <div
            onClick={() => {
                setHeartActive(!heartActive);
            }}
        >
            <span className={cx('icon')}>
                {(heartActive && <HeartIconActive className={cx('heartActive')} />) || <HeartIcon />}
            </span>
            <strong className={cx('quantity')}>
                <p>280.8K</p>
            </strong>
        </div>
    );
}

export default memo(HeartActive);
