
// import Image from 'next/image';
import * as React from 'react';


// import btmsheet from '../../public/assets/images/btmsheet.png';
// import distroGpt from '../../public/assets/images/distroGptMockup.png';
import {
    FBackground,
    FContent,
    TitleWrapper,
} from '~/components/features'
import { Heading1, Heading4, Paragraph } from './typography/Typography';
import { FeaturesBackground, Feature, FeaturesContainer, FeaturesLeft, FeaturesRight } from './FComponents';

// interface FeatureProps { }

export const Features: React.FC = () => {
    // const [scope, animate] = useAnimate<HTMLHeadingElement>();
    // const [isPresent, safeToRemove] = usePresence();
    // React.useEffect(() => {
    //   if (isPresent) {
    //     const enterAnimation = async () => {
    //       await animate(scope.current, { x: 100 });
    //     };
    //     enterAnimation();
    //   } else {
    //     const exitAnimation = async () => {
    //       await animate(scope.current, { x: 0 });
    //       safeToRemove();
    //     };
    //     exitAnimation();
    //   }
    // }, [isPresent, safeToRemove]);
    // console.log('Is the Element is in Present', isPresent);
    // const { innerWidth } = React.useContext(SizeContext);
    return (
        <TitleWrapper numOfPages={5}>
            <FBackground>
                <FeaturesBackground />
            </FBackground>
            {/* Feature Section - 1 */}
            <FContent>
                <Feature
                    page={0}
                    renderContent={({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='Efficient Audience Organization' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Streamline your marketing audience management with Leadistro' className='font-poppins text-leadistroWhite text-center md:text-left' />
                                <Paragraph className="text-leadistroWhite font-poppins" textChildren={`Easily save and organize your marketing audience within Leadistro. Whether it's adding contacts individually or importing them from spreadsheets like CSV and XLSX, Leadistro provides a seamless experience. Keep your audience data in one place, making it convenient for future campaigns and updates.`} />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    }
                ></Feature>
            </FContent>
            {/* Feature Section - 2 */}
            <FContent>
                <Feature
                    page={1}
                    renderContent={({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='Engaging Campaigns, Simplified' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Create impactful email and social media campaigns with ease' className='font-poppins text-leadistroWhite text-center md:text-left' />
                                <Paragraph className="text-leadistroWhite font-poppins" textChildren={`With Leadistro's intuitive interface, running campaigns has never been easier. Choose from a variety of email and social media templates provided by Leadistro, or unleash your creativity with the template editors. Customize templates to align with your brand and message, ensuring your campaigns leave a lasting impression.`} />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    }
                ></Feature>
            </FContent>
            {/* Feature Section - 3 */}
            <FContent>
                <Feature
                    page={2}
                    renderContent={({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='AI-powered Marketing Enhancements' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren={`Leverage the power of Leadistro's AI capabilities for enhanced marketing`} className='font-poppins text-leadistroWhite text-center md:text-left' />
                                <Paragraph className="text-leadistroWhite font-poppins" textChildren={`Take advantage of Leadistro's AI technology, powered by Vertex AI from Google Cloud. Boost your ecommerce efforts with AI-generated product descriptions that captivate your customers. Generate letters or emails effortlessly, saving you time and effort in your email marketing campaigns. Unlock the potential of AI with Leadistro's ad copy generation, providing you with suggestions to create different versions of ads for targeted audiences.`} />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    }
                ></Feature>
            </FContent>
            {/* Feature Section - 4 */}
            <FContent>
                <Feature
                    page={3}
                    renderContent={({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='Targeted Personalization and Segmentation' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Reach the right audience with tailored messages' className='font-poppins text-leadistroWhite text-center md:text-left' />
                                <Paragraph className="text-leadistroWhite font-poppins" textChildren='Leadistro empowers you to deliver personalized marketing campaigns. Segment your audience based on various criteria and create tailored messages to cater to specific groups. Unlock advanced personalization features to engage your audience on a deeper level. By delivering targeted messages, you increase the effectiveness of your campaigns and achieve better results.' />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    }
                ></Feature>
            </FContent>
            {/* Feature Section - 5 */}
            <FContent>
                <Feature
                    page={4}
                    renderContent={({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='Copywriting Made Effortless' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Simplify your copywriting process with Leadistro' className='font-poppins text-leadistroWhite text-center md:text-left' />
                                <Paragraph className="text-leadistroWhite font-poppins" textChildren={`With Leadistro, generating compelling copy is a breeze. Whether you need to create ad copies or write engaging descriptions, Leadistro's AI-powered capabilities provide valuable assistance. Utilize the description-based ad copy generation feature to effortlessly create ad copies based on product descriptions. Let Leadistro be your writing companion, helping you craft persuasive content that resonates with your audience.`} />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    }
                ></Feature>
            </FContent>
        </TitleWrapper>
    );
};
