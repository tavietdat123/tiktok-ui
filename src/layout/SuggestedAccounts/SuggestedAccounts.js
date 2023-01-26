import classNames from 'classnames/bind';
import AccoutItem from './AccontItem';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);
function SuggestedAccounts({ title }) {
    return (
        <div className={cx('wapper')}>
            <p className={cx('title')}>{title}</p>
            <AccoutItem />
            <AccoutItem />
            <AccoutItem />
            <AccoutItem />
            <AccoutItem />

            <div className={cx('see_all')}>See all</div>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
