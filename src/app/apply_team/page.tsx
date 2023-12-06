'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { applyTeamValidations } from '@/utils/validations';
import { applyQuestions } from '@/utils/validations';
import logo from './../../assets/images/pink_logo.png';
import Image from 'next/image';
import PageTitle from '@/ui/PageTitle/PageTitle';

const Page = () => {
	const argeTeams = [
		'airlab',
		'algolab',
		'chainlab',
		'gamelab',
		'mobilab',
		'skysec',
		'skysis',
		'weblab',
	];
	const socialTeams = [
		'socilab',
		'organizasyon',
		'skymedia',
		'sosyal sorumluluk',
		'gecekodu ekibi',
	];

	const [argeSelected, setArgeSelected] = useState(true);
	const [teamSelection, setTeamSelection] = useState<any>([]);
	const formik = useFormik({
		initialValues: {
			teams: [],
			0: '',
			1: '',
			2: '',
			3: '',
			4: '',
			5: '',
			6: '',
		},
		validationSchema: applyTeamValidations,
		onSubmit: values => {
			console.log(values);
		},
	});

	const handleTeamSelection = (e: any) => {
		const teamArray: any = teamSelection;
		if (teamArray.includes(e.target.id)) {
			const index = teamArray.indexOf(e.target.id);
			teamArray.splice(index, 1);
			setTeamSelection(teamArray);
			formik.setFieldValue('teams', teamArray);
		} else {
			if (teamArray.length < 2) {
				teamArray.push(e.target.id);
			}
			setTeamSelection(teamArray);
			formik.setFieldValue('teams', teamArray);
		}
	};

	return (
		<>
			<form
				onSubmit={formik.handleSubmit}
				className={`font-bebas mx-0 sm:mx-[16%] scale-75 -mt-48 -mb-16 md:scale-75 lg:scale-100 sm:my-4 md:my-8 lg:my-18 tracking-[0.1em] text-lg text-customLightPink`}
			>
				<h2>EKİP TÜRÜ</h2>
				<div className='flex mb-16 mt-4'>
					<div
						onClick={() => setArgeSelected(true)}
						className={`font-bebas ${
							argeSelected ? 'scale-[102%] p-1' : 'my-1'
						}  mr-4 cursor-pointer w-40 bg-customAccent text-customLightPink transition-all `}
					>
						<div className='bg-customLightPink py-3 text-customDarkPurple flex justify-center items-center'>
							ARGE
						</div>
					</div>
					<div
						onClick={() => setArgeSelected(false)}
						className={`font-bebas ${
							!argeSelected ? 'scale-[102%] p-1' : 'my-1'
						}  cursor-pointer w-40 bg-customAccent text-customLightPink transition-all `}
					>
						<div className='bg-customLightPink py-3 text-customDarkPurple flex justify-center items-center'>
							SOCIAL
						</div>
					</div>
				</div>
				<h2 className='mb-6'>
					EKİP{' '}
					<span className='text-customLightPurple'>
						(EN FAZLA 2 EKİBE BAŞVURABİLİRSİNİZ)
					</span>
				</h2>
				<div className='mb-16 grid grid-cols-2 sm:grid-cols-4 gap-2 w-[21rem] sm:w-[42rem] select-none'>
					{(argeSelected ? argeTeams : socialTeams).map((team, index) => {
						return (
							<div
								key={index}
								id={team}
								onClick={e => handleTeamSelection(e)}
								className={`${
									teamSelection.includes(team)
										? 'bg-customLightPink'
										: 'bg-customLightPink/50'
								} px-4 py-1 w-40 h-40 cursor-pointer whitespace-nowrap flex flex-col justify-center items-center text-customDarkPurple`}
							>
								<Image
									className='w-20 pointer-events-none'
									src={logo}
									alt={team}
								/>
								{team}
							</div>
						);
					})}
				</div>
				{applyQuestions.map((question, index) => {
					return (
						<div key={index}>
							<h2>{question.title.toLocaleUpperCase()}</h2>
							<h2 className='text-customLightPurple'>
								{question.substring
									? question.substring.toLocaleUpperCase()
									: null}
							</h2>
							<input
								name={index.toString()}
								value={formik.values[index as keyof typeof formik.values]}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								required={true}
								placeholder='Cevabınızı Giriniz'
								className={`font-inter 
          mb-16 bg-transparent border-b-2 text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2  placeholder:tracking-[0.1em] placeholder-customLightPurple  focus:border-customAccent sm:hover:border-customAccent border-customLightPink ${
						formik.errors[index as keyof typeof formik.errors] &&
						formik.touched[index as keyof typeof formik.touched]
							? 'border-red-500 focus:border-red-500'
							: 'focus:border-[#27A68E] hover:border-[#27A68E] border-[#7C77B3]'
					}`}
							/>
						</div>
					);
				})}

				<div className='flex justify-center sm:justify-start'>
					<button
						type='submit'
						disabled={!formik.isValid}
						className='text-center px-14 py-2 sm:hover:bg-customAccent bg-customLightPink text-customDarkPurple disabled:hover:bg-gray-400 disabled:bg-gray-400'
					>
						Başvur
					</button>
				</div>
			</form>
		</>
	);
};

export default Page;
