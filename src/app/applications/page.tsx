import ApplicationTable from '@/ui/ApplicationTable/ApplicationTable'
import PageTitle from '@/ui/PageTitle/PageTitle'
import { appliants } from '@/utils/appliants'
import React from 'react'

const page = () => {
  return (
    <>
      <PageTitle title='Başvurular' />
			<div className='w-[90%] sm:w-[80%] lg:w-[65%] mt-40 mx-auto sm:pl-8 md:pl-5 lg:pl-8'>
				<ApplicationTable appliants={appliants} />
			</div>
    </>
  )
}

export default page