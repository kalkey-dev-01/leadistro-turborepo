import type { ImageProps, ImageSourcePropType } from 'react-native'

export interface OnboardingPagesDataInterface extends Pick<ImageProps, 'source'> {
    title: string;
    description: string;
}

export const OnboardingPagesData: OnboardingPagesDataInterface[] = [
    {
        title: 'Plan your next move with leadistro',
        description: 'Extract only essential information from comapany or domains',
        source: void require('../assets/images/plan.png') as unknown as ImageSourcePropType
    },
    {
        title: 'Simplify the search process',
        description: 'Gather information about an Individuals working in that company.',
        source: void require('../assets/images/marketing.png') as unknown as ImageSourcePropType
    },
    {
        title: 'Do specific search for emails',
        description: 'Create a Mailing list to promote your product to potential customers',
        source: void require('../assets/images/email.png') as unknown as ImageSourcePropType
    }
]