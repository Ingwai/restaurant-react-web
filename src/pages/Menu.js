import React from 'react';
import './Menu.css';
import { Data } from '../data/Data';
import MenuItem from '../components/MenuItem';

const Menu = () => {
	return (
		<div className='menu'>
			<div className='menuTitle'>
				<div className='menuList'>
					{Data.map(menuItem => {
						return (
							<MenuItem
								key={Math.random().toString()}
								image={menuItem.image}
								name={menuItem.name}
								price={menuItem.price}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Menu;
