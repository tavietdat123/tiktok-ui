import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Report.module.scss';
const cx = classNames.bind(styles);
function Item({ data, onClick }) {
    return (
        <>
            <label className={cx('item')} onClick={onClick}>
                <span>{data.title}</span>
                <FontAwesomeIcon className={cx('i_icon')} icon={faChevronRight} />
            </label>
        </>
    );
}
Item.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default Item;
