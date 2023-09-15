import React, {useMemo} from 'react';

const Header = (props) => {
    const robo = useMemo(() => {
    return <h1>Robofriends</h1>
}, [])
    const roboMemo = useMemo(() => robo, [robo])
    
    return (
        <div>
            {roboMemo}
        </div>
    )
    
}

export default Header;