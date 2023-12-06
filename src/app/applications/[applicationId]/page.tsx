'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { applyTeamValidations } from '@/utils/validations';
import { applyQuestions } from '@/utils/validations';
import logo from '@/assets/images/pink_logo.png';
import Image from 'next/image';

const page = () => {
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

  const response = {
    name: 'Gökdeniz Çakır',
    teams: ['weblab', 'socilab'],
    0: 'Skylabci',
    1: 'Skylabci olmak',
    2: 'Skylabde kullanılan teknolojiler',
    3: 'Nescafe',
    4: 'Odada bırakılan 3 yıllık kurabiyeler',
    5: 'Yol yapardım',
    6: 'Yok',
  };

  return (
    <>
      <div
        className={`font-bebas mx-0 sm:mx-[16%] scale-75 -mt-48 -mb-60 sm:-mb-16 md:scale-75 lg:scale-100 sm:my-4 md:my-8 lg:my-18 tracking-[0.1em] text-lg text-customLightPink`}
      >
        <h1 className='text-4xl text-customAccent mb-6 tracking-[0.2em]'>
          {response.name}
        </h1>
        <h2 className='mb-6'>
          EKİP{' '}
          <span className='text-customLightPurple'>
            (EN FAZLA 2 EKİBE BAŞVURABİLİRSİNİZ)
          </span>
        </h2>
        <div className='mb-16 grid grid-cols-2 sm:grid-cols-3 gap-2 w-[21rem] sm:w-[31rem] select-none'>
          {response.teams.map((team, index) => {
            return (
              <div
                key={index}
                id={team}
                className='bg-customAccent px-4 py-1 w-40 h-40 whitespace-nowrap flex flex-col justify-center items-center text-customDarkPurple'
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
        {applyQuestions.map((question, index: any) => {
          return (
            <div key={index}>
              <h2>{question.title.toLocaleUpperCase()}</h2>
              <h2 className='text-customLightPurple'>
                {question.substring
                  ? question.substring.toLocaleUpperCase()
                  : null}
              </h2>
              <h2
                className={`font-bebas text-customAccent
          mb-16 bg-transparent text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2 placeholder-customLightPurple`}
              >
                {response[index as keyof typeof response]}
              </h2>
            </div>
          );
        })}

        <div className='flex whitespace-nowrap justify-center gap-4 sm:justify-start'>
          <button
            type='submit'
            className='text-center px-8 sm:px-14 py-3 sm:py-4 pb-2 sm:pb-3 bg-customLightPurple text-customDarkPurple disabled:hover:bg-gray-400 disabled:bg-gray-400'
          >
            Başvuruyu Reddet
          </button>
          <button
            type='submit'
            className='text-center px-8 sm:px-14 py-3 sm:py-4 pb-2 sm:pb-3 bg-customLightPink text-customDarkPurple disabled:hover:bg-gray-400 disabled:bg-gray-400'
          >
            Başvuruyu Onayla
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
