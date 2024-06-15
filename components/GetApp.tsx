import Button from './Button';
import Image from 'next/image';

const GetApp = () => {
	return (
		<section className='flexCenter w-full flex-col'>
			<div className='relative flex w-full max-w-[1450px] flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px]'>
				<div className='x-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
					<h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>
						Get for free now!
					</h2>
					<p className='regular-16 text-gray-10'>
						Available on Android and iOS
					</p>
					<div className='flex flex-col w-full gap-3 whitespace-nowrap lg:flex-row'>
						<Button
							type='button'
							title='App Store'
							icon='/apple.svg'
							variant='btn_white'
							full
						/>
						<Button
							type='button'
							title='Play Store'
							icon='/android.svg'
							variant='btn_dark_green_outline'
							full
						/>
					</div>
				</div>

				<div className='flex flex-1 items-center justify-end'>
					<Image
						src='/phones.png'
						alt='phones'
						height={870}
						width={500}
					/>
				</div>
			</div>
		</section>
	);
};

export default GetApp;
