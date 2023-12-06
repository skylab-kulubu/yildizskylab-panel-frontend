'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export type Appliant = {
  id: string;
	name: string;
  phone: string;
  team: string;
	date: string;
};

export default function ApplicationTable({ appliants }: { appliants: Appliant[] }) {
	const [appliantList, setAppliantList] = useState(appliants);
	const [sortName, setSortName] = useState(true);
  const [sortDate, setSortDate] = useState(true);
  const [sortTeam, setSortTeam] = useState(true);

	var sorted: Appliant[];

	const router = useRouter();

	function sortByName() {
		if (sortName) {
			sorted = [...appliantList].sort((a, b) => a.name.localeCompare(b.name));
		} else {
			sorted = [...appliantList].sort((a, b) => b.name.localeCompare(a.name));
		}
		setSortName(!sortName);
		setAppliantList(sorted);
	}

	function sortByDate() {
		if (sortDate) {
			sorted = [...appliantList].sort((a, b) => a.date.localeCompare(b.date));
		} else {
			sorted = [...appliantList].sort((a, b) => b.date.localeCompare(a.date));
		}
		setSortDate(!sortDate);
		setAppliantList(sorted);
	}

	function sortByTeam() {
		if (sortTeam) {
			sorted = [...appliantList].sort((a, b) => a.team.localeCompare(b.team));
		} else {
			sorted = [...appliantList].sort((a, b) => b.team.localeCompare(a.team));
		}
		setSortTeam(!sortTeam);
		setAppliantList(sorted);
	}

	return (
		<div className='relative overflow-x-scroll z-30 '>
			<table className='w-full text-sm text-left text-customLightPink'>
				<thead className='text-xl uppercase bg-customDarkPurple text-customAccent border-b-2 border-customAccent'>
					<tr className='font-bebas'>
						<th scope='col' className='px-6 py-3'>
							<div
								className='flex items-center cursor-pointer'
								onClick={sortByName}
							>
								AD SOYAD
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-3 h-3 ml-1'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 320 512'
								>
									<path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
								</svg>
							</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							<div
								className='flex items-center cursor-pointer'
								onClick={sortByTeam}
							>
								EKİP
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-3 h-3 ml-1'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 320 512'
								>
									<path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
								</svg>
							</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							<div
								className='flex items-center cursor-pointer'
							>
								TELEFON
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-3 h-3 ml-1'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 320 512'
								>
									<path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
								</svg>
							</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							<div
								className='flex items-center cursor-pointer'
								onClick={sortByDate}
							>
								TARİH
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-3 h-3 ml-1'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 320 512'
								>
									<path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
								</svg>
							</div>
						</th>
					</tr>
				</thead>

				<tbody className=''>
					{appliantList.map((appliant, index) => {
						return (
							<tr
								key={index}
								className='bg-customDarkPurple border-b border-customLightPurple cursor-pointer'
								onClick={() => router.push(`/applications/${appliant.id}`)}
							>
								<th
									scope='row'
									className='px-6 py-6 font-medium  whitespace-nowrap '
								>
									{appliant.name}
								</th>
								<td className='px-6 py-4'>{appliant.team}</td>
								<td className='px-6 py-4'>{appliant.phone}</td>
								<td className='px-6 py-4'>{appliant.date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
