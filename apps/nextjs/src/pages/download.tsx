import React from 'react'
import { Heading1, Heading3, Paragraph } from '~/components/typography/Typography'
import { Meta } from '~/meta/meta'
import Main from '~/templates/Main'

const DownloadPage = () => {
    return (
        <Main meta={<Meta description='Download the App' title='Download Leadistro App' />}>
            <div className='flex flex-col items-center bg-leadistroBlack space-y-5 justify-center min-w-full min-h-screen'>
                <Heading1 className='text-leadistroWhite font-poppins' textChildren='The Application is Still Under Development' />
                <Heading3 className='text-leadistroWhite font-poppins' textChildren='Thank You For Your Interest In Leadistro' />
                <Paragraph className='text-leadistroWhite font-poppins max-w-screen-md text-center' textChildren='You Can Pre Register For The Web Distribution of this App, Don&apos;t Worry we won&apos;t send you any junk emails or newsletters.' />
            </div>
        </Main>
    )
}

export default DownloadPage