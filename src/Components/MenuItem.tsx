import React from 'react';
import { IItem } from './Types/Menu.Types';
import './SCSS/menu-item.scss';

interface MenuItemProps {
	item: IItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
	return (
		<div className='item flex-col text-center p1 bg-white text-grey'>
			<img className='item__img m-inline' src='https://via.placeholder.com/100' alt={item.title} />
			<p className='item__header m05 fs-300 flex-row'>
				{item.title}
				{item.veg && (
					<div className='item__veg bg-grey m05-inline flex-col'>
						<p className='item__veg-label text-white fs-100'>V</p>
					</div>
				)}
			</p>
			<hr className='item__rule' />
			{item.description.length ? <p className='item__descript m1 fs-100'>{item.description}</p> : ''}
			<p className='item__price letter-spacing-1'>${item.price}</p>
		</div>
	);
};

export default MenuItem;
