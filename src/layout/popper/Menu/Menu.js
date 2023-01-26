import classNames from 'classnames/bind';
import style from './menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '../wrapper';
import Item from './Item';
import PropTypes from 'prop-types';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(style);
function Menu({ children, data, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: data }]);
    const currentData = history[history.length - 1];
    return (
        <Tippy
            // visible
            offset={[15, 12]}
            delay={[0, 1000]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu_list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('popper_')}>
                        {history.length > 1 && (
                            <Header
                                title={currentData.title}
                                onBack={() => {
                                    setHistory(history.slice(0, history.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu_body')}>
                            {currentData.data.map((item, index) => {
                                const isParent = !!item.children;

                                return (
                                    <Item
                                        key={index}
                                        data={item}
                                        onClick={() => {
                                            if (isParent) {
                                                setHistory((prev) => [...prev, item.children]);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.array,
    hideOnClick: PropTypes.bool,
};
export default Menu;
