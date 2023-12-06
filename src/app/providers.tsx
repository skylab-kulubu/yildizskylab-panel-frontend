'use client';

import { SessionProvider } from 'next-auth/react';
import { GlobalNav, NavBarItem } from '@/ui/GlobalNav/GlobalNav';

interface IProps {
  children?: React.ReactNode;
  session?: any;
}

export default function Providers({ children, session }: IProps) {
  const navItems: NavBarItem[] = [
    {
      label: 'Üyeler',
      href: '/members',
    },
    {
      label: 'Ekİpler',
      href: '/teams',
    },
    {
      label: 'Projeler',
      href: '/projects',
    },
    {
      label: 'Etkİnlİkler',
      href: '/events',
    },
    {
      label: 'Ekle',
      href: '/add',
    },
    {
      label: 'Başvur',
      href: '/apply_team',
      // children: [
      //   {
      //     label: 'Apply 1',
      //     href: '/apply/1',
      //   },
      //   {
      //     label: 'Apply 2',
      //     href: '/apply/2',
      //   },
      // ],
    },
    {
      label: 'Başvurular',
      href: '/applications',
    }
  ];
  return (
    <SessionProvider session={session}>
      <GlobalNav navItems={navItems} />
      {children}
    </SessionProvider>
  );
}
