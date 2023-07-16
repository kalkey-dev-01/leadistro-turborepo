import type { ImageProps } from 'react-native'

export interface OnboardingPagesDataInterface extends Pick<ImageProps, 'source'> {
    title: string;
    description: string;
}

export const OnboardingPagesData: OnboardingPagesDataInterface[] = [
    {
        title: 'Plan your next move with leadistro',
        description: 'Extract only essential information from comapany or domains',
        source: require('../../assets/plan.png')
    },
    {
        title: 'Simplify the search process',
        description: 'Gather information about an Individuals working in that company.',
        source: require('../../assets/stats.png')
    },
    {
        title: 'Do specific search for emails',
        description: 'Create a Mailing list to promote your product to potential customers',
        source: require('../../assets/newsletter.png')
    }
]