import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './MenuSideBar.module.scss';
const cx = classNames.bind(styles);
function Menu({ children }) {
    return <div className={cx('wapper')}>{children}</div>;
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Menu;
