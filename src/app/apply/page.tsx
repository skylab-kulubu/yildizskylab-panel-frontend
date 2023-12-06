import Modal from '@/ui/Modals';
import PageTitle from "@/ui/PageTitle/PageTitle";
import { bebas_neue } from '@/utils/fonts';
import Link from 'next/link';

export default function Apply() {
    return (
        <>
          <PageTitle title='Başvur' />
    
          <div
            className={`font-bebas text-2xl sm:text-xl lg:text-3xl tracking-[0.16em] h-[calc(100vh-128px)] items-center gap-8 justify-center flex-col sm:flex-row flex`}
          >
            <Link href='/apply/team' className='w-60 sm:w-44 lg:w-80 py-2 md:py-0 scale-90 lg:scale-100 sm:h-44 lg:h-80 cursor-pointer group bg-customLightPink flex flex-col justify-center px-4 sm:px-4 lg:px-14'>
              <h2 className='w-14 group-hover:w-full transition-all  whitespace-nowrap md:border-b-4 border-customLightPurple'>
                Ekip Basvurusu
              </h2>
            </Link>
            <Link href='/apply/project' className='w-60 sm:w-44 lg:w-80 py-2 md:py-0 scale-90  lg:scale-100 sm:h-44 lg:h-80 cursor-pointer group bg-customLightPink flex flex-col justify-center px-4 sm:px-3 lg:px-12'>
              <h2 className='w-14 group-hover:w-full transition-all  whitespace-nowrap md:border-b-4 border-customLightPurple'>
                Proje Basvurusu
              </h2>
            </Link>

          </div>
        </>
      );
}
