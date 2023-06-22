import React from 'react'
import { Heading1 } from '~/components/typography/Typography'
import { Meta } from '~/meta/meta'
import DashboardMain from '~/templates/dashboardMain'
import { usePathname } from 'next/navigation'

const Dashboard = () => {
    const pathname = usePathname()
    console.log(pathname);

    return (
        <DashboardMain meta={<Meta title='Dashboard' description='All the things you would need' />}>
            <div className="min-h-screen grid place-items-center bg-leadistroBlack min-w-full">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white col-span-2 w-full h-full">
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                    </div>
                    <div className="bg-white row-span-3 w-full h-full">
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                    </div>
                    <div className="bg-white col-span-2 w-full h-full">
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <div className='w-full h-full bg-leadistroRed' >
                            <Heading1 textChildren='Welcome' className='font-poppins' />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardMain>
    )
}
export default Dashboard