import { bebas_neue } from '@/utils/fonts';
import './PageTitle.css';

export default function PageTitle({ title }: { title: string }) {
  return (
    <div className='font-bebas'>
      {/* Dektop */}
      <h1
        id='indicator-text'
        className='fixed -z-50 sm:left-20 top-1/2 translate-y-full text-[#EADAFF] tracking-widest sm:text-4xl lg:text-5xl origin-left -rotate-90 hidden sm:inline   '
      >
        {title}
      </h1>
      {/* Mobile */}
      <h1
        id='indicator-text-mobile'
        className='absolute -z-50 left-1/2 top-44 text-[#EADAFF] tracking-widest inline sm:hidden  -translate-x-1/2 '
      >
        {title}
      </h1>
    </div>
  );
}
