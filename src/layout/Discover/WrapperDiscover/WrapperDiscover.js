import classNames from 'classnames/bind';
import styles from './WrapperDiscover.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function WrapperDiscover({ children, className, title }) {
    return (
        <div className={cx('container', className)}>
            {title && <p className={cx('title')}>{title}</p>}
            <div>{children}</div>
        </div>
    );
}
WrapperDiscover.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
};
export default WrapperDiscover;
