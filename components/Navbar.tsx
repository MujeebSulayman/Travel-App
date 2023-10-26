'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='flexBetween max-container padding-container bg-gray-600 relative z-30 py-5'>
			<Link href={'/'}>
				<Image
					src='/hilink-logo.svg'
					alt='logo'
					height={89}
					width={79}
				/>
			</Link>

			<ul className='hidden h-full gap-12 lg:flex'>
				{NAV_LINKS.map((link, index) => (
					<Link
						href={link.href}
						key={link.key}
						className={`regular-16 text-gray-100 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold`}>
						{link.label}
					</Link>
				))}
			</ul>

			<div className='lg:flexCenter hidden'>
				<Button
					type='button'
					title='Login'
					icon='/user.svg'
					variant='btn_dark_green'
				/>
			</div>

			{/*-------------------- Mobile Devices------------- */}
			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<Image
					src={toggle ? 'close.svg' : 'menu.svg'}
					alt='menu'
					height={32}
					width={32}
					className='inline-block cursor-pointer lg:hidden'
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className='list-none flex-col justify-end items-center flex-1'>
						{NAV_LINKS.map((link) => (
							<Link
								href={link.href}
								key={link.key}
								className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
								{link.label}
							</Link>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
