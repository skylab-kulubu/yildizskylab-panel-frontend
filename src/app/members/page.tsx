'use client';
import PageTitle from '@/ui/PageTitle/PageTitle';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// swr
import useSWR from 'swr';
import { Member } from '../types/types';
import MemberTable from '@/ui/MemberTable/MemberTable';

export default function Members() {
  // get members from localhost:4000/users/all
  const { data: session } = useSession();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const res = axios({
      method: 'GET',
      url: 'https://yildizskylab-test.onrender.com/api/v1/users/',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${session?.user?.accessToken}`,
      },
    })
      .then((res) => res.data.data)
      .then((data) => {
        setMembers(data);
      });
  }, []);

  return (
    <>
      <PageTitle title='Üyeler' />
      <div className='w-[90%] sm:w-[80%] lg:w-[65%] mt-40 mx-auto sm:pl-8 md:pl-5 lg:pl-8'>
        {members.length > 0 ? (
          <MemberTable members={members} />
        ) : (
          <div>Üye bulunamadı.</div>
        )}
      </div>
      {/* {members.forEach((member) => {
                return <div>{member.firstName}</div>;
            })} */}
    </>
  );
}