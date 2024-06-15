import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='flexCenter pt-[100px] bg-gray-100'>
			<div className='padding-container max-container flex w-full flex-col gap-14'>
				<div className='flex flex-col items-start justify-center gap-[15%] md:flex-row'>
					<Link href='/'>
						<Image
							src='hilink-logo.svg'
							alt='logo'
							width={74}
							height={79}
							className='flex items-center justify-center mb-10'
						/>
					</Link>
					<div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 text-gray-700'>
						{FOOTER_LINKS.map((columns) => (
							<FooterColumn title={columns.title}>
								<ul className='regular-16 flex flex-col gap-4'>
									{columns.links.map((link) => (
										<Link
											href='/'
											key={link}>
											{link}
										</Link>
									))}
								</ul>
							</FooterColumn>
						))}

						<div className='flex flex-col gap-5'>
							<FooterColumn title={FOOTER_CONTACT_INFO.title}>
								{FOOTER_CONTACT_INFO.links.map((link) => (
									<Link
										href='/'
										key={link.label}
										className='flex gap-4 md:flex-col lg:flex-row'>
										<p className='whitespace-nowrap'>{link.label}:</p>
										<p className='regular-16 whitespace-nowrap'>{link.value}</p>
									</Link>
								))}
							</FooterColumn>
						</div>
					</div>
				</div>

				<div className='border bg-black' />
				<p className='regular-16 w-full text-center mb-10'>
					© Hiker. 2024 TheHemjay | All rights reserved
				</p>
			</div>
		</footer>
	);
};

type FooterColumnProps = {
	title: string;
	children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
	return (
		<div className='flex flex-col gap-5'>
			<h4 className='bold-18 whitespace-nowrap'>{title}</h4>
			{children}
		</div>
	);
};

export default Footer;
