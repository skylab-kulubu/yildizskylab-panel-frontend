'use client';
import PageTitle from '@/ui/PageTitle/PageTitle';
import { bebas_neue } from '@/utils/fonts';
import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Team } from '../types/types';
import TeamGridItem from '@/ui/TeamGridItem/TeamGridItem';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function Teams() {
  const [activeTab, setActiveTab] = useState<'arge' | 'sosyal'>('arge');
  const [isEnd, setIsEnd] = useState(false);
  const { data: session } = useSession();
  const [teams, setTeams] = useState<Team[]>([]);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (window.innerHeight + scrollPosition >= document.body.offsetHeight)
      setIsEnd(true);
    else setIsEnd(false);
  }, [scrollPosition]);

  useEffect(() => {
    const res = axios({
      method: 'GET',
      url: 'https://yildizskylab-test.onrender.com/api/v1/teams/',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${session?.user?.accessToken}`,
      },
    })
      .then(response => {
        console.log(response.data); // Log the complete response data
        setTeams(response.data.teams);  // Assuming the API returns teams under a "teams" property
      })
      .catch(error => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  const sosTeam: Team = {
    _id: '1',
    name: 'Sosyal Team',
    description: 'Team 1 Description',
    photoUrl: 'https://via.placeholder.com/150',
    members: [],
    projects: [],
    requests: false,
    hidden: false,
    numberOfMembers: 0,
  };

  return (
    <>
      <PageTitle title='Ekipler' />
      <div className='font-bebas'>
        <div className=' text-customLightPink text-xl tracking-w_idest md:text-2xl lg:text-3xl my-10 lg:my-16 flex justify-center pt-44 sm:pt-32 '>
          <div className='flex flex-row justify-between w-auto items-center gap-x-2 sm:gap-x-4'>
            <div
              onClick={() => setActiveTab('arge')}
              className={`px-3  cursor-pointer transition-all duration-150 ease-in-out hover:scale-105 ${
                activeTab === 'arge'
                  ? 'bg-customAccent scale-105 -z-50 text-customDarkPurple'
                  : 'bg-customDarkPurple'
              }  `}
            >
              ARGE EKIPLERI
            </div>
            <div
              onClick={() => setActiveTab('sosyal')}
              className={`px-3  cursor-pointer  transition-all duration-150 ease-in-out hover:scale-105  ${
                activeTab === 'sosyal'
                  ? 'bg-customAccent scale-105 -z-50 text-customDarkPurple'
                  : 'bg-customDarkPurple'
              }`}
            >
              SOSYAL EKIPLER
            </div>
          </div>
        </div>
      </div>

      {/* over;ay */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-gradient-to-t from-black/50  via-transparent to-transparent pointer-events-none z-0 transition-all duration-300 ease-in-out ${
          isEnd ? 'opacity-0' : 'opacity-100'
        } `}
      ></div>

      {activeTab === 'arge' ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 mb-10 gap-8 items-center justify-between w-[80%] sm:w-[60%] mx-auto sm:pt-8 '>
          {teams.length > 0 ? (
            teams.map((team, index) => <TeamGridItem key={index} team={team} />)
          ) : (
            <div className='text-customDarkPurple text-xl font-bebas text-center'>
              Henüz ekibiniz yok
              <div className='text-customLightPink text-xl font-bebas'>
                Ekibinizi oluşturmak için
                <a href='/add/team' className='text-customAccent font-bebas'>
                  {' '}
                  tıklayın
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 mb-10 gap-8 items-center justify-center w-[80%] sm:w-[60%] mx-auto sm:pt-8 '>
          {teams.length > 0 ? (
            teams.map((team, index) => <TeamGridItem key={index} team={team} />)
          ) : (
            <div className='text-customDarkPurple text-xl font-bebas text-center'>
              Henüz ekibiniz yok
              <div className='text-customLightPink text-xl font-bebas'>
                Ekibinizi oluşturmak için
                <a href='/add/team' className='text-customAccent font-bebas'>
                  {' '}
                  tıklayın
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
