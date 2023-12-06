import logo from '../../assets/images/pink_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import './TeamGridItem.modules.css';
import { Team } from '@/app/types/types';

export default function TeamGridItem({ team }: { team: Team }) {
  return (
    <Link
      href={`/teams/${team._id}`}
      id='team-grid-item'
      className='flex flex-col items-center justify-center text-center max-w-fit px-12 pt-6 pb-4 md:pt-8 md:pb-4 bg-customAccent gap-y-2 md:gap-y-4 transition-all duration-150 ease-in-out sm:hover:scale-105 sm:hover:bg-customLightPink cursor-pointer'
    >
      <div className='w-24 h-24 sm:w-24 sm:h-28 md:w-36 md:h-36'>
        <Image src={logo} alt={team.name} />
      </div>
      <div className=''>
        <span className=' text-md md:text-xl  font-bold text-customDarkPurple uppercase sm:tracking-tight md:tracking-wide whitespace-nowrap '>
          {team.name}
        </span>
      </div>
    </Link>
  );
}
