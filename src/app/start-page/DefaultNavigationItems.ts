import { NbIconConfig, NbMenuItem } from '@nebular/theme';

export const DEFAULT_NAV_ITEMS: {title: string, icon?: string | NbIconConfig, items: NbMenuItem[]}[] = [
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
    },
    {
        title: 'Work',
        icon: 'briefcase-outline',
        items: [
            {
                title: 'Websites',
                icon: {
                    icon: 'globe',
                    pack: 'fas'
                },
                children: [
                    {
                        title: 'CasterStats production',
                        icon: {
                            icon: 'chart-pie',
                            pack: 'fas'
                        },
                        url: 'https://app.casterstats.net/'
                    },
                    {
                        title: 'CasterStats staging',
                        icon: {
                            icon: 'chart-pie',
                            pack: 'fas'
                        },
                        url: 'https://staging.casterstats.net/'
                    },
                    {
                        title: 'CIM dashboard internal',
                        icon: {
                            icon: 'chart-bar',
                            pack: 'fas'
                        },
                        url: 'https://ciminternal.casterstats.net/'
                    },
                    {
                        title: 'CIM dashboard production',
                        icon: {
                            icon: 'chart-bar',
                            pack: 'fas'
                        },
                        url: 'https://cim.casterstats.net/'
                    },
                    {
                        title: 'CIM dashboard staging',
                        icon: {
                            icon: 'chart-bar',
                            pack: 'fas'
                        },
                        url: 'https://cimstaging.casterstats.net/'
                    }
                ]
            },
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
            },
            {
                title: 'OVH Manager',
                icon: {
                    icon: 'server',
                    pack: 'fas'
                },
                url: 'https://www.ovh.com/manager/#/'
            }
        ]
    },
    {
        title: 'Development',
        icon: 'code',
        items: [
            {
                title: 'Angular localhost',
                icon: {
                    icon: 'angular',
                    pack: 'fab'
                },
                url: 'http://localhost:4200'
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
            },
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
    },
    {
        title: 'System',
        icon: 'hard-drive-outline',
        items: [
            {
                title: 'Cockpit',
                icon: {
                    icon: 'server',
                    pack: 'fas'
                },
                url: 'https://snyssen.be:9090'
            },
            {
                title: 'Nextcloud',
                icon: {
                    icon: 'cloud',
                    pack: 'fas'
                },
                url: 'https://snyssen.be/nextcloud'
            },
            {
                title: 'Jellyfin',
                icon: {
                    icon: 'photo-video',
                    pack: 'fas'
                },
                url: 'https://snyssen.be/jellyfin/'
            },
            {
                title: 'Kodi',
                icon: {
                    icon: 'tv',
                    pack: 'fas'
                },
                url: 'http://192.168.1.14'
            },
            {
                title: 'Network',
                icon: {
                    icon: 'network-wired',
                    pack: 'fas'
                },
                children: [
                    {
                        title: 'Pi-Hole',
                        icon: {
                            icon: 'raspberry-pi',
                            pack: 'fab'
                        },
                        url: 'http://192.168.1.3/admin'
                    },
                    {
                        title: 'Router',
                        icon: {
                            icon: 'ethernet',
                            pack: 'fas'
                        },
                        url: 'http://192.168.1.1'
                    },
                    {
                        title: 'Access point',
                        icon: {
                            icon: 'wifi',
                            pack: 'fas'
                        },
                        url: 'http://192.168.1.2'
                    }
                ]
            }
        ]
    },
    {
        title: 'Games',
        icon: 'heart-outline',
        items: [
            {
                title: 'Roll20',
                icon: {
                    icon: 'dice-d20',
                    pack: 'fas'
                },
                url: 'https://roll20.net/'
            },
            {
                title: 'HeroForge',
                icon: {
                    icon: 'user-astronaut',
                    pack: 'fas'
                },
                url: 'https://www.heroforge.com/'
            },
            {
                title: 'Token stamp',
                icon: {
                    icon: 'user-circle',
                    pack: 'fas'
                },
                url: 'https://rolladvantage.com/tokenstamp/'
            },
            {
                title: 'McMyAdmin',
                icon: {
                    icon: 'cubes',
                    pack: 'fas'
                },
                url: 'https://snyssen.be/McMyAdmin/'
            },
            {
                title: 'McLiveMap',
                icon: {
                    icon: 'map-marked-alt',
                    pack: 'fas'
                },
                url: 'https://snyssen.be/McLiveMap/'
            }
        ]
    },
    {
        title: 'Downloads',
        icon: 'cloud-download-outline',
        items: [
            {
                title: 'YTS',
                url: 'https://yts.mx/',
                icon: {
                    icon: 'download',
                    pack: 'fas'
                }
            },
            {
                title: '1337X',
                url: 'https://www.1337x.to/home/',
                icon: {
                    icon: 'download',
                    pack: 'fas'
                }
            },
            {
                title: 'YGG Torrent',
                url: 'https://ww.yggtorrent.site/',
                icon: {
                    icon: 'download',
                    pack: 'fas'
                }
            },
            {
                title: 'The Pirate Bay',
                url: 'https://thepiratebay.org/index.html',
                icon: {
                    icon: 'download',
                    pack: 'fas'
                }
            },
            {
                title: 'Baby Torrent',
                url: 'https://babytorrent.ms/',
                icon: {
                    icon: 'download',
                    pack: 'fas'
                }
            }
        ]
    }
];
