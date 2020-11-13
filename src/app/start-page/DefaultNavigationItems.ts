import { NbIconConfig, NbMenuItem } from '@nebular/theme';

export const DEFAULT_NAV_ITEMS: {title: string, icon?: string | NbIconConfig, items: NbMenuItem[]}[] = [
    {
        title: 'Development',
        icon: 'code',
        items: [
            {
                title: 'Jira',
                icon: {
                    icon: 'jira',
                    pack: 'fab'
                },
                url: 'https://nmedia.atlassian.net/'
            },
            {
                title: 'BitBucket',
                icon: {
                    icon: 'bitbucket',
                    pack: 'fab'
                },
                url: 'https://bitbucket.org/dashboard/overview'
            },
            {
                title: 'GitHub',
                icon: {
                    icon: 'github',
                    pack: 'fab'
                },
                url: 'https://github.com/'
            },
            {
                title: 'GitBucket',
                icon: {
                    icon: 'git-alt',
                    pack: 'fab'
                },
                url: 'https://snyssen.be/gitbucket'
            }
        ]
    }
]