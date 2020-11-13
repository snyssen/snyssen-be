import { NbIconConfig, NbMenuItem } from '@nebular/theme';

export const DEFAULT_NAV_ITEMS: {title: string, icon?: string | NbIconConfig, items: NbMenuItem[]}[] = [
    {
        title: 'Development',
        icon: 'code',
        items: [
            {
                title: 'Work',
                children: [
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
                        title: 'TeamCity',
                        icon: {
                            icon: 'shapes',
                            pack: 'fas'
                        },
                        url: 'http://ns300234.ip-91-121-30.eu:8500'
                    },
                    {
                        title: 'Octopus',
                        icon: {
                            icon: 'octopus-deploy',
                            pack: 'fab'
                        },
                        url: 'http://ns300234.ip-91-121-30.eu:7070/'
                    }
                ],
                expanded: true
            },
            {
                title: 'Personnal',
                children: [
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
            },
            {
                title: 'Other',
                children: [
                    {
                        title: 'Slashscore',
                        icon: {
                            icon: 'medal',
                            pack: 'fas'
                        },
                        url: 'https://app.slashscore.ai/'
                    },
                    {
                        title: 'Wakatime',
                        icon: 'clock-outline',
                        url: 'https://wakatime.com/dashboard'
                    }
                ]
            }
        ]
    },
    {
        title: 'Social',
        icon: 'people-outline',
        items: [
            {
                title: 'Reddit',
                icon: {
                    icon: 'reddit',
                    pack: 'fab'
                },
                url: 'https://www.reddit.com/'
            },
            {
                title: 'Youtube',
                icon: {
                    icon: 'youtube',
                    pack: 'fab'
                },
                url: 'https://www.youtube.com/'
            },
            {
                title: 'LinkedIn',
                icon: {
                    icon: 'linkedin',
                    pack: 'fab'
                },
                url: 'https://www.linkedin.com/feed'
            },
            {
                title: 'Facebook',
                icon: {
                    icon: 'facebook',
                    pack: 'fab'
                },
                children: [
                    {
                        title: 'Facebook',
                        icon: {
                            icon: 'facebook-f',
                            pack: 'fab'
                        },
                        url: 'https://www.facebook.com/'
                    },
                    {
                        title: 'Messenger',
                        icon: {
                            icon: 'facebook-messenger',
                            pack: 'fab'
                        },
                        url: 'https://www.messenger.com/'
                    }
                ],
                expanded: true
            },
            {
                title: 'Patreon',
                icon: {
                    icon: 'patreon',
                    pack: 'fab'
                },
                url: 'https://www.patreon.com/home'
            }
        ]
    }
];