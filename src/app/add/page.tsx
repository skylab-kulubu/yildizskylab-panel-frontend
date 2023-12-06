import PageTitle from '@/ui/PageTitle/PageTitle';
import { bebas_neue } from '@/utils/fonts';
import Link from 'next/link';
import React from 'react';

const Page = () => {
	return (
		<>
			<PageTitle title='Ekle' />

			<div
				className={`font-bebas text-3xl md:text-xl lg:text-3xl tracking-[0.16em] h-[calc(100vh-128px)] items-center gap-6 justify-center flex-col md:flex-row flex`}
			>
				<Link
					href='/add/team'
					className='md:hover:scale-105 transition-all duration-75 w-60 md:w-40 lg:w-60 py-2 md:py-0 scale-90 lg:scale-100 md:h-40 lg:h-60 cursor-pointer group bg-customLightPink flex flex-col justify-center px-4 md:px-9 lg:px-14'
				>
					<h2 className=' w-14 group-hover:w-full transition-all  whitespace-nowrap md:border-b-4 border-customLightPurple'>
						Ekip Ekle
					</h2>
				</Link>
				<Link
					href='/add/project'
					className='md:hover:scale-105 transition-all duration-75 w-60 md:w-40 lg:w-60 py-2 md:py-0 scale-90  lg:scale-100 md:h-40 lg:h-60 cursor-pointer group bg-customLightPink flex flex-col justify-center px-4 md:px-8 lg:px-12'
				>
					<h2 className=' w-14 group-hover:w-full transition-all  whitespace-nowrap md:border-b-4 border-customLightPurple'>
						Proje Ekle
					</h2>
				</Link>
				<Link
					href='/add/event'
					className='md:hover:scale-105 transition-all duration-75 w-60 md:w-40 lg:w-60 py-2 md:py-0 scale-90  lg:scale-100 md:h-40 lg:h-60 cursor-pointer group bg-customLightPink flex flex-col justify-center px-4 md:px-4 lg:px-6'
				>
					<h2 className=' w-14 group-hover:w-full transition-all  whitespace-nowrap md:border-b-4 border-customLightPurple'>
						Etkinlik Ekle
					</h2>
				</Link>
			</div>
		</>
	);
};

export default Page;
