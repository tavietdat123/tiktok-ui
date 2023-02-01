import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function Button({
    children,
    to,
    href,
    primary = false,
    outline = false,
    large = false,
    small = false,
    text = false,
    round = false,
    disabled = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    classNameIcon,
    ...pass
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...pass,
    };
    if (disabled) {
        Object.keys(props).forEach((on) => {
            if (on.startsWith('on') && typeof props[on] === 'function') {
                delete props[on];
            }
        });
    }
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        round,
        disabled,
    });

    return (
        <Comp {...props} className={classes}>
            {leftIcon && <span className={cx('icon', classNameIcon)}>{leftIcon}</span>}
            {<span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('icon', classNameIcon)}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    text: PropTypes.bool,
    round: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
