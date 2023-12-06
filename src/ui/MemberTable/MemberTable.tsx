'use client';
import { Member } from '@/app/types/types';
import { bebas_neue } from '@/utils/fonts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MemberTable({ members }: { members: Member[] }) {
  const [memberList, setMemberList] = useState(members);
  const [sortName, setSortName] = useState(true);
  const [sortRole, setSortRole] = useState(true);
  const [sortTeam, setSortTeam] = useState(true);
  const [sortMail, setSortMail] = useState(true);
  var sorted: Member[];

  const router = useRouter();

  function sortByName() {
    if (sortName) {
      sorted = [...memberList].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted = [...memberList].sort((a, b) => b.name.localeCompare(a.name));
    }
    setSortName(!sortName);
    setMemberList(sorted);
  }

  function sortByRole() {
    if (sortRole) {
      sorted = [...memberList].sort((a, b) => a.role.localeCompare(b.role));
    } else {
      sorted = [...memberList].sort((a, b) => b.role.localeCompare(a.role));
    }
    setSortRole(!sortRole);
    setMemberList(sorted);
  }

  function sortByTeam() {
    if (sortTeam) {
      sorted = [...memberList].sort((a, b) =>
        a.teams![0].name.localeCompare(b.teams![0].name)
      );
    } else {
      sorted = [...memberList].sort((a, b) =>
        b.teams![0].name.localeCompare(a.teams![0].name)
      );
    }
    setSortTeam(!sortTeam);
    setMemberList(sorted);
  }

  function sortByMail() {
    if (sortMail) {
      sorted = [...memberList].sort((a, b) => a.email.localeCompare(b.email));
    } else {
      sorted = [...memberList].sort((a, b) => b.email.localeCompare(a.email));
    }
    setSortMail(!sortMail);
    setMemberList(sorted);
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
                Ad Soyad
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
                Ekip
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
                onClick={sortByRole}
              >
                Rol
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
                onClick={sortByMail}
              >
                E-mail
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
              <span className='sr-only'>Edit</span>
            </th>
          </tr>
        </thead>

        <tbody className=''>
          {memberList.map((member, index) => {
            return (
              <tr
                key={index}
                className='bg-customDarkPurple border-b border-customLightPurple cursor-pointer'
                onClick={() => router.push(`/members/${member._id}`)}
              >
                <th
                  scope='row'
                  className='px-6 py-6 font-medium  whitespace-nowrap '
                >
                  {member.name}
                </th>
                <td className='px-6 py-4 uppercase'>
                  {member.teams?.map((team) => team.name)}
                </td>
                <td className='px-6 py-4 uppercase'>{member.role}</td>
                <td className='px-6 py-4'>{member.email}</td>
                <td className='px-6 py-4 text-right'></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
