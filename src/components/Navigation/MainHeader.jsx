import React from 'react';

import './MainHeader.css';

const MainHeader = (props) => {
    return <header className={props.headerStyle}>
        <div className="left">
            {props.children}
        </div>
    </header>;
}

export default MainHeader;