'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className='flexBetween max-container bg-gray-500 padding-container relative z-30 py-5'>
			<Link href='/'>
				<Image
					src='/hilink-logo.svg'
					alt='logo'
					width={74}
					height={29}
				/>
			</Link>

			<ul className='hidden h-full gap-12 lg:flex'>
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
						{link.label}
					</Link>
				))}
			</ul>

			<div className='lg:flexCenter hidden'>
				<Button
					type='button'
					title='Login'
					icon='/user.svg'
					variant='btn_dark_green1'
				/>
			</div>

			{/* Mobile Navigation */}
			<div className='cursor-pointer sm:hidden flex flex-1 justify-end items-center'>
				<Image
					src={toggle ? 'close.svg' : 'menu.svg'}
					alt='menu'
					width={25}
					height={25}
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-gray-500 absolute top-[55px] right-0 mx-5 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className='list-none justify-end items-center'>
						{NAV_LINKS.map((link, index) => (
							<Link
								href={link.href}
								key={link.key}
								className={`font-normal text-white cursor-pointer flex flex-col text-[16px] ${
									index === NAV_LINKS.length - 1 ? 'mr-3' : 'mb-4'
								}`}>
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
