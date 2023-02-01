import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MenuSideBar.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, ActiveIcon }) {
    return (
        <NavLink
            to={to}
            className={(nav) =>
                cx('item', {
                    active: nav.isActive,
                })
            }
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('iconActive')}>{ActiveIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    ActiveIcon: PropTypes.node.isRequired,
};
export default MenuItem;
