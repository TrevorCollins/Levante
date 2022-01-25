import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import MenuItem from './MenuItem';
import { IMenu } from './Types/Menu.Types';
import './SCSS/menu.scss';

interface MenuProps {
    menus: IMenu[];
    active: number;
}

const Menu: React.FC<MenuProps> = ({menus, active}) => {
	let {path, url} = useRouteMatch();
    
    return (
        <div className='menu flex-row m2-vert m-inline'>
            {menus[active].items.map((i) => (
                <>
                    <div>
                        {/* <pre>{JSON.stringify(i, null, 2)}</pre> */}
                        <MenuItem item={i} />
                    </div>
                </>
            ))}
            {/* <div>************************************</div>
            <span>path: {path}</span>
            <br />
            <span>url: {url}</span>
            <br />
            <span>active: {active}</span>
            <div>************************************</div>
            <br />
            <pre>{JSON.stringify(menus[active].items, null, 2)}</pre> */}
        </div>
    )
}

export default Menu;