export const normalRouters = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../../views/dashboard/index.vue'),
        meta: {
            title: '仪表盘',
            layout: 'simple',
            hidden: 2,
            icon: '<svg t="1720284603245" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15907" width="200" height="200"><path d="M511.501619 114.176c-284.672 2.56-513.536 235.52-511.488 520.704 1.024 101.376 31.232 199.68 87.552 283.648h847.36c158.72-236.544 96.256-557.568-140.288-716.288-82.944-56.832-181.76-87.04-283.136-88.064z m0 79.36c40.448-0.512 73.728 32.768 74.24 73.216 0.512 40.448-32.768 73.728-73.216 74.24-40.448 0.512-73.728-32.768-74.24-73.216v-0.512c0.512-40.448 32.768-73.728 73.216-73.728z m-370.688 509.44c-40.448 0.512-73.728-32.768-74.24-73.216-0.512-40.448 32.768-73.728 73.216-74.24 40.448-0.512 73.728 32.768 74.24 73.216v0.512c0 40.448-32.768 73.728-73.216 73.728z m112.64-260.608c-40.448 0.512-73.728-32.256-74.24-73.216-0.512-40.448 32.256-73.728 73.216-74.24 40.448 0 73.728 32.768 74.24 73.216v0.512c0 40.448-32.768 73.728-73.216 73.728z m378.88-9.728l-59.392 221.696c48.128 33.792 60.416 100.352 26.624 148.48-33.792 48.128-100.352 60.416-148.48 26.624-48.128-33.792-60.416-100.352-26.624-148.48 16.384-24.576 43.008-40.448 72.192-44.544l60.416-224.256c5.632-21.504 27.648-33.792 48.128-28.672 20.48 6.144 32.768 27.648 27.136 49.152z m65.024-64c0.512-40.448 33.28-73.216 73.728-72.704 40.448 0.512 73.216 33.28 72.704 73.728-0.512 39.936-32.768 72.704-73.216 72.704s-73.728-33.28-73.216-73.728z m185.344 334.336c-40.448 0.512-73.728-32.256-74.24-73.216-0.512-40.448 32.256-73.728 73.216-74.24 40.448-0.512 73.728 32.256 74.24 73.216v0.512c0 40.448-32.768 73.728-73.216 73.728z" fill="#888888" p-id="15908"></path></svg>',
        }
    },
    {
        path: '/normal/gost/client',
        name: 'NormalGostClient',
        component: () => import('../../views/normal/gost_client/index.vue'),
        meta: {
            title: '客户端',
            layout: 'simple',
            hidden: 2,
            icon: '<svg t="1720931168390" class="icon" viewBox="0 0 1260 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5432" width="200" height="200"><path d="M157.538462 472.615385h945.230769V157.538462a52.539077 52.539077 0 0 0-52.460308-52.539077H210.077538A52.539077 52.539077 0 0 0 157.538462 157.538462v315.076923z m0 105.078153V630.153846c0 28.987077 23.473231 52.460308 52.539076 52.460308h840.231385A52.460308 52.460308 0 0 0 1102.769231 630.153846v-52.460308H157.538462z m420.076307 315.076924V787.692308H210.077538a157.538462 157.538462 0 0 1-157.538461-157.538462V157.538462a157.538462 157.538462 0 0 1 157.538461-157.538462h840.231385a157.538462 157.538462 0 0 1 157.538462 157.538462v472.615384a157.538462 157.538462 0 0 1-157.538462 157.538462H682.614154v105.078154h157.538461a52.539077 52.539077 0 1 1 0 104.920615H420.076308a52.539077 52.539077 0 1 1 0-104.920615h157.538461z" p-id="5433" fill="#888888"></path></svg>',
        }
    },
    {
        path: '/normal/gost/client/logger',
        name: 'NormalGostClientLogger',
        component: () => import('../../views/normal/gost_client_logger/index.vue'),
        meta: {
            title: '客户端日志',
            layout: 'simple',
            hidden: 1,
        }
    },
    {
        path: '/normal/gost/tunnel/obs',
        name: 'NormalGostTunnelObs',
        component: () => import('../../views/normal/gost_obs/tunnel_index.vue'),
        meta: {
            title: '隧道流量情况',
            layout: 'simple',
            hidden: 1,
        }
    },
    {
        path: '/normal/gost/client/obs',
        name: 'NormalGostClientObs',
        component: () => import('../../views/normal/gost_obs/client_index.vue'),
        meta: {
            title: '客户端流量情况',
            layout: 'simple',
            hidden: 1,
        }
    },
    {
        path: '/normal/gost/client/host',
        name: 'NormalGostClientHost',
        component: () => import('../../views/normal/gost_client_host/index.vue'),
        meta: {
            title: '域名解析',
            layout: 'simple',
            hidden: 2,
            icon: '<svg t="1720284953119" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19075" width="200" height="200"><path d="M512 42.496C251.904 42.496 42.496 251.904 42.496 512s208.896 469.504 469.504 469.504 469.504-208.896 469.504-469.504S772.096 42.496 512 42.496zM439.296 153.6c23.552-4.096 47.104-6.144 72.704-6.144 27.648 0 53.248 4.096 78.848 8.704l-6.656 2.048c25.6 74.752 42.496 144.896 51.2 213.504-91.648 12.8-175.104 10.752-243.2 0 8.704-68.096 25.6-140.8 51.2-215.552 0.512-0.512-4.096-2.56-4.096-2.56zM153.6 580.096c-4.096-21.504-6.144-45.056-6.144-68.096 0-40.448 8.704-78.848 21.504-117.248 42.496 21.504 82.944 36.352 121.856 49.152-4.096 55.296-4.096 115.2 4.096 179.2-88.064-19.456-141.312-43.008-141.312-43.008z m40.448 109.056c40.448 14.848 78.848 25.6 115.2 34.304 8.704 36.352 16.896 72.704 29.696 108.544-59.392-32.256-110.592-80.896-144.896-142.848z m106.496-334.848c-53.248-14.848-89.6-29.696-98.304-34.304C236.544 264.704 285.184 219.648 343.04 189.952c-14.336 40.448-31.744 95.744-42.496 164.352zM584.704 870.4c-23.552 4.096-47.104 6.656-72.704 6.656-23.552 0-45.056-2.048-66.048-6.656-2.048-4.096-21.504-51.2-38.4-130.048 78.848 8.704 149.504 6.144 213.504 0-12.8 70.144-32.256 117.248-36.352 130.048z m53.248-230.4c-91.648 10.752-175.104 8.704-245.248 0-6.144-51.2-8.704-108.544-6.144-173.056 98.304 16.896 185.344 12.8 258.048 0 2.048 61.952-0.512 121.856-6.656 173.056z m185.344-317.952c-31.744 12.8-64 21.504-93.696 29.696-10.752-66.048-27.648-119.296-42.496-159.744 55.296 32.256 102.4 76.8 136.192 130.048zM691.2 827.904c12.8-36.352 21.504-72.704 29.696-106.496 45.056-10.752 80.896-23.552 111.104-34.304-34.304 59.392-83.456 108.544-140.8 140.8z m177.152-245.248c-45.056 16.896-89.6 29.696-132.096 40.448 6.144-64 6.144-123.904 2.048-179.2 66.048-21.504 108.544-44.544 117.248-49.152 12.8 36.352 21.504 76.8 21.504 117.248-0.512 25.6-2.56 49.152-8.704 70.656z" fill="#888888" p-id="19076"></path></svg>',
        }
    },
    {
        path: '/normal/gost/client/host/create',
        name: 'NormalGostClientHostCreate',
        component: () => import('../../views/normal/gost_client_host/create.vue'),
        meta: {
            title: '新增域名解析',
            layout: 'simple',
            hidden: 1,
        }
    },
    {
        path: '/normal/gost/client/forward',
        name: 'NormalGostClientForward',
        component: () => import('../../views/normal/gost_client_forward/index.vue'),
        meta: {
            title: '端口转发',
            layout: 'simple',
            hidden: 2,
            icon: '<svg t="1722660932986" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13304" width="200" height="200"><path d="M684.8 512L896 723.2l-211.2 211.2-60.330667-60.373333 108.202667-108.202667H170.666667v-85.333333h562.005333l-108.202667-108.16L684.8 512zM339.2 85.333333l60.330667 60.330667L291.328 253.866667H853.333333v85.333333H291.328l108.202667 108.202667L339.2 507.733333 128 296.533333 339.2 85.333333z" p-id="13305" fill="#888888"></path></svg>',
        }
    },
    {
        path: '/normal/gost/client/forward/create',
        name: 'NormalGostClientForwardCreate',
        component: () => import('../../views/normal/gost_client_forward/create.vue'),
        meta: {
            title: '新增端口转发',
            layout: 'simple',
            hidden: 1,
        }
    },
    {
        path: '/normal/gost/client/tunnel',
        name: 'NormalGostClientTunnel',
        component: () => import('../../views/normal/gost_client_tunnel/index.vue'),
        meta: {
            title: '私有隧道',
            layout: 'simple',
            hidden: 2,
            icon: '<svg t="1720285062970" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31946" width="200" height="200"><path d="M881 837.5H613.8c-14.8 0-26.7-12-26.7-26.7V623.5c0-14.8 12-26.7 26.7-26.7v-53.5c0-73.9 59.8-133.7 133.6-133.7S881 469.5 881 543.3v53.5c14.8 0 26.7 12 26.7 26.7v187.2c0 14.8-12 26.8-26.7 26.8z m-34.7-294.2c0-44.3-54.7-99-98.9-99-44.3 0-98.9 54.7-98.9 99v53.5h197.8v-53.5z m26.7 88.2H621.7v171.2H873V631.5zM736.8 341.9c-25.2 0-49.1 5.6-70.5 15.5-1.4-7.5-3-14.9-4.6-22.3-47.2-10.8-96.7-17.1-147.8-18.3V483H571c-1.4 8.8-2.2 17.8-2.2 27v10.5h-54.9v168.2c7.1-0.2 14.2-0.4 21.3-0.8v37.7c-7.1 0.3-14.1 0.6-21.3 0.8v131.8c7.7-0.4 15.2-1.1 22.8-1.9 4.2 13.8 17 23.8 32.1 23.8h34.9c-34.5 9.9-70.9 15.2-108.5 15.2C278 895.3 102 719.1 102 501.8s176-393.6 393.1-393.6c190.1 0 348.7 135 385.3 314.4-29.5-48.4-82.8-80.7-143.6-80.7zM308.3 520.5c1.2 52 7.4 102.3 17.9 150.3 47.9 10.5 98.2 16.7 150.2 17.9V520.5H308.3zM476.4 483V316.8c-52.2 1.3-102.7 7.8-150.8 19-10.1 47.1-16.1 96.4-17.2 147.2h168zM387 842c28.4 9.1 58.4 14.6 89.4 16.2V726.4c-48.2-1.1-95-6.2-140.1-15.1 13 46.4 30 90.2 50.7 130.7z m-51.3-20.9c-16.5-37.6-30.2-77.4-40.7-119-41.6-10.5-81.4-24.2-118.9-40.7 34.5 69 90.6 125.2 159.6 159.7zM155.2 610c40.4 20.7 84.2 37.7 130.5 50.7-8.8-45.1-14-92-15.1-140.2H139c1.6 31.1 7.1 61.1 16.2 89.5zM139 483h131.7c1-46.9 6-92.6 14.4-136.6-46.9 13.8-91.2 32.1-132 54.3-7.9 26.3-12.7 53.9-14.1 82.3z m34.9-136.5c38.1-17.7 78.5-32.5 120.7-43.7 10.6-42.1 24.3-82.4 41-120.4-70.3 35.3-127.4 93.2-161.7 164.1zM387 161.6c-20.8 40.7-37.9 84.8-50.9 131.5 45.1-9.3 92-14.8 140.3-15.9V145.7v-0.4c-31 1.7-61 7.2-89.4 16.3z m126.9-16.2v131.8c47 1.1 92.7 6.3 136.7 15.2-13.8-47.2-32.2-91.8-54.5-132.9-26.3-7.9-53.8-12.7-82.2-14.1z m136.4 34.9c17.9 38.5 32.7 79.4 44 122.1 42.8 11.3 83.6 26.1 122.1 44.1-35.1-72.4-93.8-131.2-166.1-166.2z" fill="#888888" p-id="31947"></path></svg>',
        }
    },
    {
        path: '/normal/gost/client/tunnel/create',
        name: 'NormalGostClientTunnelCreate',
        component: () => import('../../views/normal/gost_client_tunnel/create.vue'),
        meta: {
            title: '新增私有隧道',
            layout: 'simple',
            hidden: 1,
            icon: '<svg t="1728658950160" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3298" width="200" height="200"><path d="M560.437687 126.70475 560.437687 567.712883 119.430578 567.712883c14.220886 215.9524 193.801914 386.761648 413.387052 386.761648 228.867548 0 414.393985-185.526437 414.393985-414.408311C947.211615 320.506664 776.413624 140.938939 560.437687 126.70475L560.437687 126.70475zM514.390955 65.801658C270.259772 65.801658 72.371796 263.702937 72.371796 507.821841l442.019159 0L514.390955 65.801658 514.390955 65.801658zM514.390955 65.801658" fill="#888888" p-id="3299"></path></svg>',
        }
    },
    {
        path: '/normal/gost/node/config',
        name: 'NormalGostNodeConfig',
        component: () => import('../../views/normal/gost_node_config/index.vue'),
        meta: {
            title: '节点套餐',
            layout: 'simple',
            hidden: 2,
            icon: '<svg t="1720285097002" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="34872" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m0 42.656C252.8 42.656 42.656 252.8 42.656 512S252.8 981.344 512 981.344 981.344 771.2 981.344 512 771.2 42.656 512 42.656z" fill="#888888" p-id="34873"></path><path d="M512 512m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" fill="#888888" p-id="34874"></path></svg>',
        }
    },
    {
        path: '/normal/gost/node',
        name: 'NormalGostNode',
        component: () => import('../../views/normal/gost_node/index.vue'),
        meta: {
            title: '我的节点',
            layout: 'simple',
            hidden: 2,
            icon: '<svg t="1720285097002" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="34872" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m0 42.656C252.8 42.656 42.656 252.8 42.656 512S252.8 981.344 512 981.344 981.344 771.2 981.344 512 771.2 42.656 512 42.656z" fill="#888888" p-id="34873"></path><path d="M512 512m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" fill="#888888" p-id="34874"></path></svg>',
        }
    },
    {
        path: '/normal/gost/node/obs',
        name: 'NormalGostNodeObs',
        component: () => import('../../views/normal/gost_obs/node_index.vue'),
        meta: {
            title: '节点流量情况',
            layout: 'simple',
            hidden: 1,
        }
    },
    {
        path: '/download',
        name: 'Download',
        // component: () => import('../../views/download/index.vue'),
        meta: {
            title: '资源下载',
            layout: 'simple',
            hidden: 2,
            icon: '<svg t="1721839381847" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9896" width="200" height="200"><path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64z m245.44 526.08a674.56 674.56 0 0 1-208 208 73.28 73.28 0 0 1-75.2 0 674.56 674.56 0 0 1-208-208 73.28 73.28 0 1 1 125.44-75.2 399.36 399.36 0 0 0 34.88 48.96l16.96-211.84a68.8 68.8 0 0 1 137.28 0l16.64 211.52a498.56 498.56 0 0 0 35.2-48 73.28 73.28 0 1 1 125.44 75.2z" fill="#888888" p-id="9897"></path></svg>',
            link: 'https://alist.sian.one/direct/gostc',
        }
    },
    //             name: 'NodeMy',
    //             component: () => import('../../views/gost/node/index.vue'),
    //             meta: {
    //                 title: '我的节点',
    //                 layout: 'simple',
    //                 hidden: 2,
    //                 icon: '<svg t="1720285097002" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="34872" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m0 42.656C252.8 42.656 42.656 252.8 42.656 512S252.8 981.344 512 981.344 981.344 771.2 981.344 512 771.2 42.656 512 42.656z" fill="#888888" p-id="34873"></path><path d="M512 512m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" fill="#888888" p-id="34874"></path></svg>',
    //             }
    //         },
    //         {
    //             path: 'node/create',
    //             name: 'NodeCreate',
    //             component: () => import('../../views/gost/node/create.vue'),
    //             meta: {
    //                 title: '节点管理-新增',
    //                 layout: 'simple',
    //                 hidden: 1,
    //             }
    //         },
    //         {
    //             path: 'node/update',
    //             name: 'NodeUpdate',
    //             component: () => import('../../views/gost/node/update.vue'),
    //             meta: {
    //                 title: '节点管理-编辑',
    //                 layout: 'simple',
    //                 hidden: 1,
    //             }
    //         },
    //         {
    //             path: 'node/audit',
    //             name: 'NodeAudit',
    //             component: () => import('../../views/gost/node/audit.vue'),
    //             meta: {
    //                 title: '节点审查',
    //                 layout: 'simple',
    //                 hidden: 2,
    //                 icon: '<svg t="1728457924450" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4321" width="200" height="200"><path d="M867.2 800H960l-160 160v-92.8a67.2 67.2 0 0 1 67.2-67.2zM892.8 64H259.2A67.2 67.2 0 0 0 192 131.2v129.408a293.824 293.824 0 0 1 64-55.008V128h640v640h64V131.2A67.2 67.2 0 0 0 892.8 64zM256 752.256l-64 64V892.8A67.2 67.2 0 0 0 259.2 960H768v-64H256z" fill="#888888" p-id="4322"></path><path d="M800 352V288h-146.592a291.2 291.2 0 0 1 32.576 64zM702.592 480H800v-64h-98.464A292.352 292.352 0 0 1 704 452c0 9.44-0.544 18.784-1.408 28zM800 608v-64h-111.072a290.528 290.528 0 0 1-30.496 64zM800 736v-64h-196.608a291.2 291.2 0 0 1-124.8 64z" fill="#888888" p-id="4323"></path><path d="M226.304 583.968L66.88 743.392l53.728 53.728 159.424-159.424a228.448 228.448 0 1 0-53.728-53.728z m26.496-131.968a159.232 159.232 0 1 1 159.2 159.2A159.424 159.424 0 0 1 252.8 452z" fill="#888888" p-id="4324"></path></svg>',
    //             }
    //         },
    //         {
    //             path: 'node/share',
    //             name: 'NodeShare',
    //             component: () => import('../../views/gost/node_share/index.vue'),
    //             meta: {
    //                 title: '分享管理',
    //                 layout: 'simple',
    //                 hidden: 2,
    //                 icon: '<svg t="1720285131210" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38607" width="200" height="200"><path d="M812.333229 702.996063c-46.845072 0-89.466408 18.430848-119.288544 51.132804L319.564027 536.79845a103.801512 103.801512 0 0 0 0-51.132804l373.480658-215.858509c29.822136 32.63796 72.443472 52.540716 119.288544 52.540716 90.87432-1.407912 159.094057-69.563652 160.501969-160.437972C971.491282 71.03556 903.271546 1.407912 812.333229 0c-90.87432 1.407912-160.437973 71.03556-161.90988 161.909881 0 9.91938 1.471908 19.83876 2.87982 29.822136L282.638335 404.774702A160.629961 160.629961 0 0 0 161.941879 350.698081C71.067558 352.169989 1.43991 420.453722 0.031998 511.328042c1.407912 90.87432 71.03556 159.030061 161.909881 160.501969 46.845072 0 90.87432-21.310668 120.696456-54.012625l370.664834 214.450597c-1.407912 9.983376-2.815824 19.83876-2.815824 31.230048 1.407912 90.87432 71.03556 159.094057 161.90988 160.501969 90.87432-1.407912 159.030061-69.563652 160.437973-160.501969-1.407912-90.87432-69.563652-159.030061-160.501969-160.437972z" fill="#888888" p-id="38608"></path></svg>',
    //             }
    //         },
    //         {
    //             path: 'giftPack',
    //             name: 'GiftPack',
    //             component: () => import('../../views/gost/gift_pack/index.vue'),
    //             meta: {
    //                 title: '分享码',
    //                 layout: 'simple',
    //                 hidden: 2,
    //                 icon: '<svg t="1730981555232" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8792" width="200" height="200"><path d="M794.624 452.992A128 128 0 0 1 981.333333 566.741333V768a128 128 0 0 1-128 128H170.666667a128 128 0 0 1-128-128v-201.258667a128 128 0 0 1 186.709333-113.749333L375.04 528.213333a298.666667 298.666667 0 0 0 274.005333 0l145.621334-75.178666z m96.64 94.165333a42.666667 42.666667 0 0 0-57.514667-18.346666l-145.621333 75.178666a384 384 0 0 1-352.256 0l-145.621333-75.136A42.666667 42.666667 0 0 0 128 566.741333V768a42.666667 42.666667 0 0 0 42.666667 42.666667h682.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-201.258667a42.666667 42.666667 0 0 0-4.736-19.584z" fill="#888888" p-id="8793"></path><path d="M637.141333 85.333333a213.333333 213.333333 0 0 1 213.333334 213.333334v213.333333h-85.333334V298.666667a128 128 0 0 0-128-128H386.858667a128 128 0 0 0-128 128v213.333333h-85.333334V298.666667a213.333333 213.333333 0 0 1 213.333334-213.333334h250.282666z" fill="#888888" p-id="8794"></path><path d="M612.352 277.546667a42.666667 42.666667 0 0 1 0 85.333333H414.336a42.666667 42.666667 0 1 1 0-85.333333h198.016z" fill="#888888" p-id="8795"></path></svg>',
    //             }
    //         },
    //         {
    //             path: 'giftPack/create',
    //             name: 'GiftPackCreate',
    //             component: () => import('../../views/gost/gift_pack/create.vue'),
    //             meta: {
    //                 title: '分享码新增',
    //                 layout: 'simple',
    //                 hidden: 1,
    //             }
    //         },
    //     ]
    // },
    // {
    //     path: '/openApi',
    //     name: 'OpenApi',
    //     component: () => import('../../views/open_api/index.vue'),
    //     meta: {
    //         title: '开放API',
    //         layout: 'simple',
    //         hidden: 2,
    //         icon: '<svg t="1728634980512" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5438" width="200" height="200"><path d="M1020.5696 56.0128L964.4544 3.072a9.5744 9.5744 0 0 0-14.0288 0l-95.0272 95.0272a251.2896 251.2896 0 0 0-318.8224 30.6176l-127.5904 127.488a10.24 10.24 0 0 0 0 14.08l339.968 339.9168a13.4144 13.4144 0 0 0 6.9632 0c2.56 0.7168 5.1712 0.7168 7.68 0l127.5392-127.5392a251.2896 251.2896 0 0 0 29.952-318.8736l99.4816-93.7472a8.9088 8.9088 0 0 0 0-14.0288z m-426.5984 497.408a10.24 10.24 0 0 0-14.0288 0l-83.5584 84.1728-113.5104-114.176 83.5072-82.8928a10.8544 10.8544 0 0 0 0-14.6432l-44.5952-43.3664a10.8544 10.8544 0 0 0-14.6944 0l-82.944 81.6128L270.6432 410.624a10.8544 10.8544 0 0 0-15.2576 0L127.744 538.112a249.344 249.344 0 0 0-29.952 318.8736L3.4304 950.1184a8.9088 8.9088 0 0 0 0 14.0288L56.32 1020.2624a10.24 10.24 0 0 0 7.68 0 10.24 10.24 0 0 0 6.3488 0L165.376 925.184a255.0784 255.0784 0 0 0 318.8736-30.0032l127.5392-127.488a10.8544 10.8544 0 0 0 0-14.6944l-54.1696-53.5552 80.3328-86.7328a10.24 10.24 0 0 0 0-14.0288l-44.032-45.312z" p-id="5439" fill="#888888"></path></svg>',
    //     }
    // },
    // {
    //     path: '/security',
    //     name: 'Security',
    //     component: () => import('../../views/security/index.vue'),
    //     meta: {
    //         title: '安全设置',
    //         layout: 'simple',
    //         hidden: 2,
    //         icon: '<svg t="1729748561704" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4291" width="200" height="200"><path d="M512 512 810.666667 512C788.053333 687.36 670.72 843.946667 512 892.586667L512 512 213.333333 512 213.333333 268.8 512 136.106667M512 42.666667 128 213.333333 128 469.333333C128 706.133333 291.84 927.146667 512 981.333333 732.16 927.146667 896 706.133333 896 469.333333L896 213.333333 512 42.666667Z" p-id="4292" fill="#888888"></path></svg>',
    //     }
    // },
    // {
    //     path: '/logger/auth',
    //     name: 'LoggerAuth',
    //     component: () => import('../../views/logger/auth/index.vue'),
    //     meta: {
    //         title: '登录日志',
    //         layout: 'simple',
    //         hidden: 2,
    //         icon: '<svg t="1724902146225" class="icon" viewBox="0 0 1102 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5139" width="200" height="200"><path d="M416.925538 550.360615v147.613539a15.753846 15.753846 0 0 0 25.67877 12.288l273.723077-222.286769a15.753846 15.753846 0 0 0 0.393846-24.182154L442.998154 227.170462a15.753846 15.753846 0 0 0-25.993846 11.894153v153.757539H93.735385a15.753846 15.753846 0 0 0-15.753847 15.753846v126.030769c0 8.664615 7.089231 15.753846 15.753847 15.753846h323.190153z m465.368616 397.469539H646.695385a57.028923 57.028923 0 0 1-57.344-57.265231c0-31.822769 25.442462-57.344 57.26523-57.344h235.52c57.974154 0 105.078154-47.104 105.078154-104.999385V219.608615c0-57.895385-47.104-104.999385-104.999384-104.999384H646.695385a57.028923 57.028923 0 0 1-57.344-57.344c0-31.822769 25.442462-57.265231 57.26523-57.265231h235.52a220.081231 220.081231 0 0 1 219.687385 219.608615v508.612923a220.081231 220.081231 0 0 1-219.608615 219.608616z m-33.083077-505.462154a42.535385 42.535385 0 0 1 0 63.724308l-454.498462 403.534769a42.535385 42.535385 0 0 1-70.734769-31.822769v-218.978462H36.312615A36.233846 36.233846 0 0 1 0 622.592V325.868308c0-20.401231 16.541538-36.312615 36.233846-36.312616h287.744V70.656c0-36.942769 43.323077-56.004923 70.656-31.822769l454.498462 403.534769z" fill="#888888" p-id="5140"></path></svg>',
    //     }
    // },
    // // {
    // //     path: '/utils',
    // //     name: 'Utils',
    // //     meta: {
    // //         title: '系统工具',
    // //         layout: 'simple',
    // //         hidden: 2,
    // //         icon: '<svg t="1725888297915" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2536" width="200" height="200"><path d="M418.927 580.818L286.206 713.589l-23.585-23.634 132.771-132.722-37.14-37.14L187.794 690.55h-0.049v0.051l-68.868 211.916 211.917-68.818h0.05l0.049-0.05v-0.049L501.3 663.191l-82.373-82.373z m137.09-184.259l61.47-61.471 23.586 23.586-61.52 61.42 82.422 82.373 98.164-98.212-143.049-143-98.163 98.213 37.09 37.091zM759.84 118.504l-94.141 94.191 143.049 143.048 94.24-94.141L759.84 118.504z m-32.274 443.744c-16.98 0-35.105 5.562-53.029 14.747L446.782 349.289c9.136-17.925 14.598-35.898 14.598-52.434 0-90.565-86.098-178.252-176.614-178.252h-1.688c-0.348 0-10.625 10.428-16.236 16.038 73.039 73.039 67.031 61.172 67.031 105.958 0 36.346-58.243 93.744-93.744 93.744-7.796 0-13.853 0.198-18.868 0.198-24.727 0-25.075-5.214-87.041-67.229-5.858 5.81-16.137 15.988-16.137 16.286 1.092 91.112 87.189 178.253 178.302 178.253 16.485 0 34.161-5.214 51.54-14.003l228.55 228.501c-8.738 17.379-13.853 34.856-13.853 50.845 0 90.566 86.098 178.302 176.613 178.302h1.639c0.396 0 10.676-10.477 16.188-16.088-72.939-73.038-66.932-61.122-66.932-105.958 0-36.296 58.191-93.744 93.693-93.744 7.746 0 13.854-0.198 18.918-0.198 24.727 0 25.125 5.214 87.09 67.229 5.809-5.76 15.988-15.89 16.088-16.236-1.192-91.063-87.19-178.253-178.353-178.253z" fill="#888888" p-id="2537"></path></svg>',
    // //     },
    // //     children: [
    // //         {
    // //             path: 'caddy',
    // //             name: 'UtilsCaddy',
    // //             component: () => import('../../views/utils/caddy.vue'),
    // //             meta: {
    // //                 title: 'Caddy',
    // //                 layout: 'simple',
    // //                 hidden: 2,
    // //                 icon: '<svg t="1725888275494" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1495" width="200" height="200"><path d="M506.798973 187.325591c246.529079-8.529125 221.91315 176.09534 217.991391 360.206098H317.017456c-14.491716-266.223821 10.486006-341.892567 189.781517-360.204099zM185.862427 547.533688c-11.499427-300.088463 12.33295-507.995618 350.779487-503.452215-318.222097 23.906335-313.143001 287.959396-307.474241 503.452215zM515.913763 0.292503C290.372687 3.006952 190.893552 93.639144 153.241075 227.466646c-24.915758 88.565374-19.576809 201.68871-17.174183 320.065043C18.61403 578.513979 12.557492 636.604773 5.289647 711.865752c21.811532 38.262129 45.783829 72.542533 71.431168 103.213001-0.80554-188.408302 33.996567-189.921437 159.210992-193.165582l488.858557-0.01799v56.981429l-481.40082-0.019989c-124.450861 6.676184-116.333501 37.326663-116.123621 189.9854 285.264936 268.986241 726.752572 158.663305 889.553511-109.8632 8.699027-118.444295-25.117642-201.63674-119.759543-211.445133 8.65905-226.11075-2.598515-314.834034-37.800392-380.644415C798.366307 53.048347 673.827496 1.098043 515.915762 0.292503z" p-id="1496" fill="#888888"></path></svg>',
    // //             }
    // //         },
    // //     ]
    // // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // component: () => import('../../views/about/index.vue'),
    //     meta: {
    //         title: '帮助文档',
    //         layout: 'simple',
    //         hidden: 2,
    //         icon: '<svg t="1722660743074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6999" width="200" height="200"><path d="M511.488 1022.976A511.488 511.488 0 1 0 511.488 0a511.488 511.488 0 1 0 0 1022.976z m65.856-308.608v126.976h-128v-126.976h128z m8.256-358.976c-1.984-63.04-58.24-75.008-58.24-75.008-76.992-7.04-102.016 28.992-110.976 110.976h-131.84c0-160.896 102.72-235.264 236.736-231.232 102.336 2.112 195.328 83.264 191.04 210.24-13.76 65.024-20.224 65.344-76.352 123.392-57.216 60.928-58.624 82.24-58.624 123.136v34.368h-128v-49.792c8.384-45.76 7.424-66.816 77.376-151.808 0 0 60.416-47.296 58.88-94.272z" p-id="7000" fill="#888888"></path></svg>',
    //         link: 'https://docs.sian.one',
    //     }
    // },
    // {
    //     path: '/download',
    //     name: 'Download',
    //     // component: () => import('../../views/download/index.vue'),
    //     meta: {
    //         title: '资源下载',
    //         layout: 'simple',
    //         hidden: 2,
    //         icon: '<svg t="1721839381847" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9896" width="200" height="200"><path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64z m245.44 526.08a674.56 674.56 0 0 1-208 208 73.28 73.28 0 0 1-75.2 0 674.56 674.56 0 0 1-208-208 73.28 73.28 0 1 1 125.44-75.2 399.36 399.36 0 0 0 34.88 48.96l16.96-211.84a68.8 68.8 0 0 1 137.28 0l16.64 211.52a498.56 498.56 0 0 0 35.2-48 73.28 73.28 0 1 1 125.44 75.2z" fill="#888888" p-id="9897"></path></svg>',
    //         link: 'https://alist.sian.one',
    //     }
    // },
    // {
    //     path: '/public',
    //     name: 'Pubic',
    //     component: () => import('../../views/public/index.vue'),
    //     meta: {
    //         title: '全站数据',
    //         layout: 'empty',
    //         hidden: 2,
    //         icon: '<svg t="1728658950160" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3298" width="200" height="200"><path d="M560.437687 126.70475 560.437687 567.712883 119.430578 567.712883c14.220886 215.9524 193.801914 386.761648 413.387052 386.761648 228.867548 0 414.393985-185.526437 414.393985-414.408311C947.211615 320.506664 776.413624 140.938939 560.437687 126.70475L560.437687 126.70475zM514.390955 65.801658C270.259772 65.801658 72.371796 263.702937 72.371796 507.821841l442.019159 0L514.390955 65.801658 514.390955 65.801658zM514.390955 65.801658" fill="#888888" p-id="3299"></path></svg>',
    //     }
    // },
]