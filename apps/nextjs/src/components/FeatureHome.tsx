
// import Image from 'next/image';
import * as React from 'react';

import { SizeContext } from '~/utils/size-observer';

// import btmsheet from '../../public/assets/images/btmsheet.png';
// import distroGpt from '../../public/assets/images/distroGptMockup.png';
import {
    FBackground,
    FContent,
    Feature,
    FeaturesBackground,
    FeaturesContainer,
    FeaturesLeft,
    FeaturesRight,
    TitleWrapper,
} from '~/components/features'
import { Heading1, Heading4 } from './typography/Typography';

interface FeatureProps { }

export const Features: React.FC<FeatureProps> = () => {
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
    const { innerWidth } = React.useContext(SizeContext);
    return (
        <TitleWrapper numOfPages={5}>
            <FBackground>
                <FeaturesBackground />
            </FBackground>
            {/* Feature Section - 1 */}
            <FContent>
                <Feature
                    page={0}
                    renderContent={({ progress }) => (
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    )}
                ></Feature>
            </FContent>
            {/* Feature Section - 2 */}
            <FContent>
                <Feature
                    page={1}
                    renderContent={({ progress }) => (
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    )}
                ></Feature>
            </FContent>
            {/* Feature Section - 3 */}
            <FContent>
                <Feature
                    page={2}
                    renderContent={({ progress }) => (
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    )}
                ></Feature>
            </FContent>
            {/* Feature Section - 4 */}
            <FContent>
                <Feature
                    page={3}
                    renderContent={({ progress }) => (
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    )}
                ></Feature>
            </FContent>
            {/* Feature Section - 5 */}
            <FContent>
                <Feature
                    page={4}
                    renderContent={({ progress }) => (
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed ' />
                                <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite text-center md:text-left' />
                            </FeaturesRight>
                        </FeaturesContainer>
                    )}
                ></Feature>
            </FContent>
        </TitleWrapper>
    );
};
