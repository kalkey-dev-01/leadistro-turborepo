import React from 'react'

import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./FComponents";
import { Tile, TileBackground, TileContent, TitleWrapper } from "./features";
import { Heading1, Heading4 } from './typography/Typography';

const Works = () => (
    <TitleWrapper numOfPages={5}>
        <TileBackground>
            <WorkBackground />
        </TileBackground>
        <TileContent>
            <Tile page={0} renderContent={({ progress }) =>
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <Heading1
                            textChildren='Import Contacts'
                            className='font-poppins text-center md:text-left text-leadistroRed'
                        />
                        <Heading4
                            textChildren={`Easily import your marketing contacts into Leadistro. Whether it's a single contact or a list stored in a CSV or XLSX file, Leadistro allows you to seamlessly import and manage your audience data. Streamline the process of building your marketing database and ensure all your contacts are readily available for your campaigns.`}
                            className={`font-poppins  text-leadistroRed`}
                        />
                    </WorkLeft>
                    <WorkRight progress={progress}>
                    </WorkRight>
                </WorkContainer>
            }></Tile>
        </TileContent>
        <TileContent>
            <Tile page={1} renderContent={({ progress }) =>
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <Heading1
                            textChildren='Assign Contacts to Campaigns'
                            className='font-poppins text-center md:text-left text-leadistroRed'
                        />
                        <Heading4
                            textChildren={`Efficiently organize your contacts by assigning them to specific campaigns in Leadistro. Categorize your audience based on different criteria such as demographics, interests, or behavior. By associating contacts with relevant campaigns, you can ensure that your messaging aligns with their specific needs and interests.`}
                            className={`font-poppins  text-leadistroRed`}
                        />
                    </WorkLeft>
                    <WorkRight progress={progress}>
                    </WorkRight>
                </WorkContainer>
            }></Tile>
        </TileContent>
        <TileContent>
            <Tile page={2} renderContent={({ progress }) =>
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <Heading1
                            textChildren='Choose Email or Social Media Templates'
                            className='font-poppins text-center md:text-left text-leadistroRed'
                        />
                        <Heading4
                            textChildren={`Select from a wide range of professionally designed email and social media templates in Leadistro. Customize these templates to match your branding and campaign objectives. Whether you prefer to create your own templates or leverage the pre-designed options, Leadistro provides you with the flexibility to choose the perfect template for your campaign.`}
                            className={`font-poppins   text-leadistroRed`}
                        />
                    </WorkLeft>
                    <WorkRight progress={progress}>
                    </WorkRight>
                </WorkContainer>}></Tile>
        </TileContent>
        <TileContent>
            <Tile page={3} renderContent={({ progress }) =>
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <Heading1
                            textChildren='Edit Templates or Leverage AI Assistance'
                            className='font-poppins text-center md:text-left text-leadistroRed'
                        />
                        <Heading4
                            textChildren={`Tailor your templates to align with your unique messaging by editing them within Leadistro's intuitive template editors. Make modifications to the layout, content, and visuals to create a personalized touch. Alternatively, utilize the AI-powered assistance in Leadistro to let the system suggest edits and improvements based on best practices and industry standards.`}
                            className={'font-poppins text-center md:text-left text-leadistroRed'}
                        />
                    </WorkLeft>
                    <WorkRight progress={progress}>
                    </WorkRight>
                </WorkContainer>}></Tile>
        </TileContent>
        <TileContent>
            <Tile page={4} renderContent={({ progress }) =>
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <Heading1
                            textChildren='Confirm Sending and Success'
                            className='font-poppins text-center md:text-left text-leadistroRed'
                        />
                        <Heading4
                            textChildren={`Once you are satisfied with your campaign setup, review and confirm the details before sending it out to your audience. Leadistro provides you with a comprehensive overview of the campaign, including the target audience, selected template, and scheduled send time. After the campaign is sent, track its performance and analyze the results to measure success and optimize future campaigns.`}
                            className={`font-poppins  text-center md:text-left text-leadistroRed`}
                        />
                    </WorkLeft>
                    <WorkRight progress={progress}>
                    </WorkRight>
                </WorkContainer>}></Tile>
        </TileContent>
    </TitleWrapper>
)


const FeatureScreen: React.FC = ({ }) => {
    return (
        <div className='min-h-screen min-w-full'>
            <Works />
        </div>
    )
}

export default FeatureScreen