import Image from 'next/image';

type ButtonProps = {
	type: 'button' | 'submit';
	title: string;
	icon?: string;
	variant: string;
	full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
	return (
		<button
			className={`flexCenter gap-3 lg:mt-[0px] mt-[15px] rounded-md border ${variant} ${
				full && 'w-full'
			}`}
			type={type}>
			{icon && (
				<Image
					src={icon}
					alt={title}
					width={22}
					height={22}
				/>
			)}
			<label className='text-bold whitespace-nowrap cursor-pointer'>
				{title}
			</label>
		</button>
	);
};

export default Button;
