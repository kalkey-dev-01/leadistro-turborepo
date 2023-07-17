import { Comfortaa, Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
import React from 'react'
import DashboardNavTest from '~/components/dashboardComponents/dashboardNav';
import { Skeleton } from '~/components/ui/skeleton';
import { api } from '~/utils/api';

type Props = {
    meta: React.ReactNode;
    children: React.ReactNode;
};
const comfortaa = Comfortaa({
    subsets: ['latin'],
    variable: '--font-comfortaa',
});
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

const DashboardMain: React.FC<Props> = ({ meta, children }) => {
    // const { data: session, isLoading: isSessionLoading, error, isError } = api.auth.getSession.useQuery()
    // // If Session Does not return null or undefined navigate user to dashboard or reload the sign in page
    // const router = useRouter()
    // if (!session) {
    //     void router.push('/')
    // }
    // // if session has error logging error and is error 
    // if (isError) {
    //     console.log(error.message)
    // }
    // // If Session is loading return Skeleton
    // if (isSessionLoading) {
    //     return (
    //         <div className='min-h-screen w-full flex items-center justify-center'>
    //             <Skeleton className='w-full h-full' />
    //         </div>
    //     )
    // }

    return (
        <div className={`${comfortaa.variable} ${poppins.variable} min-h-screen flex flex-col items-center justify-center  w-full`}>
            {meta}
            {children}
        </div>
    )
}

export default DashboardMain