import Button from '../../Button/Button';
import classNames from 'classnames/bind';
import style from './menu.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(style);

function Item({ data, onClick }) {
    const classes = cx('item', {
        line: data.line,
    });
    return (
        <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}
Item.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default Item;
