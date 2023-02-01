import classNames from 'classnames/bind';
import Button from '../../../Button/Button';
import styles from './MenuShare.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function ShareSelect({ data }) {
    return (
        <Button className={cx('btn')} classNameIcon={cx('icon')} leftIcon={data.icon}>
            <span className={cx('m-12')}>{data.title}</span>
        </Button>
    );
}
ShareSelect.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ShareSelect;
