import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<Fragment>
			{' '}
			{/*  used fragmenet as a wraper beacuse we need one
			root element */}
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton
					onClick={props.onShowCart}
				/>
			</header>
			<div className={classes['main-image']}>
				{' '}
				{/*  we use classname like that beacuse
				the classname has dash inside its name */}
				<img
					src={mealsImage}
					alt="A table full of delicious food!"
				/>
			</div>
		</Fragment>
	);
};

export default Header;
