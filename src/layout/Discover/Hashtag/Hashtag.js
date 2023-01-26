import { HashtagIcon, MusicIcon } from '../../Icons';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Hashtag.module.scss';
const cx = classNames.bind(styles);
function Hashtag({ title, hashtag = true, music = false }) {
    return (
        <div className={cx('item')}>
            <span className={cx('icon')}>{(music && <MusicIcon />) || (hashtag && <HashtagIcon />)}</span>
            <span className={cx('title')}>{title}</span>
        </div>
    );
}
Hashtag.propTypes = {
    title: PropTypes.string.isRequired,
    hashtag: PropTypes.bool,
    music: PropTypes.bool,
};
export default Hashtag;
