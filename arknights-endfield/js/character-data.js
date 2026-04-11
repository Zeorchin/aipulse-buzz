// Arknights: Endfield Character Data
const operators = {
    'chen-qianyu': {
        name: 'Chen Qianyu',
        rarity: 5,
        element: 'Physical',
        class: 'Guard',
        weapon: 'Sword',
        faction: 'Rhodes Island',
        description: 'A free 5-star Guard operator obtained early in the game. Chen Qianyu excels at dealing physical damage and lifting enemies, making her a solid choice for early-game teams.',
        image: 'https://www.prydwen.gg/static/b5f4f9e0769b3fd2d4551171e9b9c84d/60b4d/Chen_Qianyu_icon.webp',
        stats: {
            hp: 9850,
            atk: 485,
            def: 320,
            critRate: 15,
            critDmg: 150
        },
        skills: [
            {
                name: 'Ascending Strike',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png',
                description: 'Performs an uppercut slash at the target enemy, dealing Physical DMG and applying Lift.',
                cost: 100
            },
            {
                name: 'Dragon Slash',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png',
                description: 'Unleashes a powerful slash that deals massive Physical DMG to all enemies in front. Damage increases based on number of Vulnerability stacks on the target.',
                cost: 200
            }
        ],
        bestWeapon: {
            name: 'Azure Horizon',
            rarity: 5,
            icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/150px-Chen_Qianyu_Icon.png',
            description: 'A balanced sword that increases ATK by 20% and boosts Critical Rate by 12%. Perfect for physical damage dealers.'
        },
        modules: [
            { name: 'ATK Boost Alpha', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' },
            { name: 'Crit Rate Beta', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' },
            { name: 'Physical DMG Gamma', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' }
        ],
        teams: [
            {
                name: 'Early Game Physical',
                members: [
                    { name: 'Chen Qianyu', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' },
                    { name: 'Perlica', icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png' },
                    { name: 'Estella', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' },
                    { name: 'Alesh', icon: 'https://endfield.wiki.gg/images/thumb/4/41/Alesh_Icon.png/75px-Alesh_Icon.png' }
                ],
                description: 'A solid early-game team focusing on physical damage. Chen Qianyu serves as the main DPS while Estella provides ice support for reactions.'
            }
        ]
    },
    'perlica': {
        name: 'Perlica',
        rarity: 5,
        element: 'Electric',
        class: 'Caster',
        weapon: 'Handcannon',
        faction: 'Endfield Industries',
        description: 'One of the first operators to join your team. Perlica is an Electric Caster who provides consistent ranged damage and support.',
        image: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/300px-Perlica_Icon.png',
        stats: {
            hp: 8540,
            atk: 520,
            def: 280,
            critRate: 12,
            critDmg: 140
        },
        skills: [
            {
                name: 'Lightning Bolt',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png',
                description: 'Fires a bolt of lightning that deals Electric DMG and chains to nearby enemies.',
                cost: 80
            },
            {
                name: 'Thunderstorm',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png',
                description: 'Summons a thunderstorm that deals continuous Electric DMG to all enemies in the area.',
                cost: 180
            }
        ],
        bestWeapon: {
            name: 'Stellar Core',
            rarity: 5,
            icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/150px-Perlica_Icon.png',
            description: 'Increases ATK by 20% and Elemental DMG by 15%. Ideal for casters focusing on elemental damage.'
        },
        modules: [
            { name: 'Elemental Mastery', icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png' },
            { name: 'Energy Regen', icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png' },
            { name: 'Electric Boost', icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png' }
        ],
        teams: [
            {
                name: 'Electric Shock',
                members: [
                    { name: 'Perlica', icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png' },
                    { name: 'Da Pan', icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png' },
                    { name: 'Estella', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' },
                    { name: 'Chen Qianyu', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' }
                ],
                description: 'Uses Electric-Ice reactions to deal massive damage. Perlica and Da Pan provide electric damage while Estella sets up Superconduct.'
            }
        ]
    },
    'rossi': {
        name: 'Rossi',
        rarity: 6,
        element: 'Physical',
        class: 'Guard',
        weapon: 'Sword',
        faction: 'Wolf Pack',
        description: 'Rossina Wulfperl Luppino, younger sister of Wulfgard and the Pearl of the Pack. A 6-star Physical Guard with exceptional burst damage capabilities.',
        image: 'https://www.prydwen.gg/static/35757e812a398610ac4ba824fe6b6cfb/60b4d/rossi_s.webp',
        stats: {
            hp: 11200,
            atk: 580,
            def: 350,
            critRate: 20,
            critDmg: 170
        },
        skills: [
            {
                name: 'Wolven Ambush',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png',
                description: 'Dashes towards a target, dealing Physical DMG and applying Lift. If the target is Vulnerable, triggers Wolven Ambrage for additional Heat DMG.',
                cost: 100
            },
            {
                name: 'Razorclaw Ambuscade',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png',
                description: 'Unleashes rapid hits dealing Heat DMG before dashing through the target with a final strike that deals high Heat DMG and applies Heat Infliction.',
                cost: 220
            }
        ],
        bestWeapon: {
            name: 'Wolf\'s Fang',
            rarity: 6,
            icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/150px-Rossi_Icon.png',
            description: 'Signature weapon that increases Physical DMG by 25% and Crit DMG by 30%. Perfect for Rossi\'s aggressive playstyle.'
        },
        modules: [
            { name: 'Physical DMG Alpha', icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png' },
            { name: 'Crit DMG Beta', icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png' },
            { name: 'ATK Speed Gamma', icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png' }
        ],
        teams: [
            {
                name: 'Endgame Physical',
                members: [
                    { name: 'Rossi', icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png' },
                    { name: 'Wulfgard', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' },
                    { name: 'Da Pan', icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png' },
                    { name: 'Catcher', icon: 'https://endfield.wiki.gg/images/thumb/8/86/Catcher_Icon.png/75px-Catcher_Icon.png' }
                ],
                description: 'High-end physical damage team with Rossi as the main DPS. Wulfgard provides support while Da Pan tanks and Catcher offers utility.'
            }
        ]
    },
    'endministrator': {
        name: 'Endministrator',
        rarity: 6,
        element: 'Originium',
        class: 'Striker',
        weapon: 'Sword',
        faction: 'Endfield Industries',
        description: 'The player character and Administrator of Endfield Industries. A versatile 6-star Striker who can adapt to various combat situations.',
        image: 'https://www.prydwen.gg/static/023920d03faaf3d3a27d57abd409f016/60b4d/Endministrator_icon.webp',
        stats: {
            hp: 10800,
            atk: 565,
            def: 340,
            critRate: 18,
            critDmg: 160
        },
        skills: [
            {
                name: 'Originium Strike',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/e/e3/Endministrator_%28Female%29_Icon.png/75px-Endministrator_%28Female%29_Icon.png',
                description: 'A powerful slash infused with Originium energy, dealing Originium DMG and enhancing the next combo skill.',
                cost: 90
            },
            {
                name: 'Administrator\'s Authority',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/e/e3/Endministrator_%28Female%29_Icon.png/75px-Endministrator_%28Female%29_Icon.png',
                description: 'Releases a massive wave of Originium energy, dealing heavy damage to all enemies and boosting the entire team\'s ATK.',
                cost: 200
            }
        ],
        bestWeapon: {
            name: 'Endfield Blade',
            rarity: 6,
            icon: 'https://endfield.wiki.gg/images/thumb/e/e3/Endministrator_%28Female%29_Icon.png/150px-Endministrator_%28Female%29_Icon.png',
            description: 'The Administrator\'s signature weapon. Increases all damage types by 15% and boosts Originium reactions.'
        },
        modules: [
            { name: 'Originium Mastery', icon: 'https://endfield.wiki.gg/images/thumb/e/e3/Endministrator_%28Female%29_Icon.png/75px-Endministrator_%28Female%29_Icon.png' },
            { name: 'ATK Boost', icon: 'https://endfield.wiki.gg/images/thumb/e/e3/Endministrator_%28Female%29_Icon.png/75px-Endministrator_%28Female%29_Icon.png' },
            { name: 'Team Buff', icon: 'https://endfield.wiki.gg/images/thumb/e/e3/Endministrator_%28Female%29_Icon.png/75px-Endministrator_%28Female%29_Icon.png' }
        ],
        teams: [
            {
                name: 'Balanced Team',
                members: [
                    { name: 'Endministrator', icon: 'https://endfield.wiki.gg/images/thumb/e/e3/Endministrator_%28Female%29_Icon.png/75px-Endministrator_%28Female%29_Icon.png' },
                    { name: 'Perlica', icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png' },
                    { name: 'Chen Qianyu', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' },
                    { name: 'Estella', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' }
                ],
                description: 'A well-rounded team with the Endministrator providing Originium enhancement to boost all elemental reactions.'
            }
        ]
    },
    'gilberta': {
        name: 'Gilberta',
        rarity: 5,
        element: 'Ice',
        class: 'Supporter',
        weapon: 'Handcannon',
        faction: 'Rhodes Island',
        description: 'A 5-star Ice Supporter who specializes in crowd control and applying solidification to enemies.',
        image: 'https://www.prydwen.gg/static/e9ccbf17fde837b08c8af24883e5f2c2/60b4d/Gilberta_icon.webp',
        stats: {
            hp: 8200,
            atk: 495,
            def: 265,
            critRate: 10,
            critDmg: 130
        },
        skills: [
            {
                name: 'Frost Nova',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/a/a2/Gilberta_Icon.png/75px-Gilberta_Icon.png',
                description: 'Creates a burst of frost that deals Ice DMG and applies Solidification to all enemies in the area.',
                cost: 100
            },
            {
                name: 'Glacial Prison',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/a/a2/Gilberta_Icon.png/75px-Gilberta_Icon.png',
                description: 'Traps enemies in a prison of ice, dealing continuous Ice DMG and preventing movement for 5 seconds.',
                cost: 180
            }
        ],
        bestWeapon: {
            name: 'Frozen Heart',
            rarity: 5,
            icon: 'https://endfield.wiki.gg/images/thumb/a/a2/Gilberta_Icon.png/150px-Gilberta_Icon.png',
            description: 'Increases Ice DMG by 25% and extends the duration of Solidification by 2 seconds.'
        },
        modules: [
            { name: 'Ice Mastery', icon: 'https://endfield.wiki.gg/images/thumb/a/a2/Gilberta_Icon.png/75px-Gilberta_Icon.png' },
            { name: 'Control Duration', icon: 'https://endfield.wiki.gg/images/thumb/a/a2/Gilberta_Icon.png/75px-Gilberta_Icon.png' },
            { name: 'SP Regen', icon: 'https://endfield.wiki.gg/images/thumb/a/a2/Gilberta_Icon.png/75px-Gilberta_Icon.png' }
        ],
        teams: [
            {
                name: 'Ice Control',
                members: [
                    { name: 'Gilberta', icon: 'https://endfield.wiki.gg/images/thumb/a/a2/Gilberta_Icon.png/75px-Gilberta_Icon.png' },
                    { name: 'Estella', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' },
                    { name: 'Alesh', icon: 'https://endfield.wiki.gg/images/thumb/4/41/Alesh_Icon.png/75px-Alesh_Icon.png' },
                    { name: 'Chen Qianyu', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' }
                ],
                description: 'A team focused on ice-elemental control. Gilberta and Estella apply solidification while Alesh and Chen Qianyu deal physical damage to frozen enemies.'
            }
        ]
    },
    'estella': {
        name: 'Estella',
        rarity: 5,
        element: 'Ice',
        class: 'Guard',
        weapon: 'Sword',
        faction: 'Endfield Industries',
        description: 'A 5-star Ice Guard who excels at breaking enemy defenses and setting up elemental reactions.',
        image: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/300px-Estella_Icon.png',
        stats: {
            hp: 9450,
            atk: 465,
            def: 310,
            critRate: 14,
            critDmg: 145
        },
        skills: [
            {
                name: 'Ice Breaker',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png',
                description: 'A powerful slash that deals Ice DMG and reduces enemy defense. Applies Vulnerability if the enemy is already affected by Solidification.',
                cost: 90
            },
            {
                name: 'Glacier Edge',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png',
                description: 'Creates a line of ice spikes that deal massive Ice DMG and freeze all enemies in the path.',
                cost: 190
            }
        ],
        bestWeapon: {
            name: 'Frostbite',
            rarity: 5,
            icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/150px-Estella_Icon.png',
            description: 'Increases Ice DMG by 20% and defense reduction effects by 25%.'
        },
        modules: [
            { name: 'Defense Break', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' },
            { name: 'Ice DMG', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' },
            { name: 'ATK Boost', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' }
        ],
        teams: [
            {
                name: 'Superconduct',
                members: [
                    { name: 'Estella', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' },
                    { name: 'Perlica', icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png' },
                    { name: 'Da Pan', icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png' },
                    { name: 'Chen Qianyu', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' }
                ],
                description: 'Uses Ice-Electric Superconduct reactions to reduce enemy defenses, allowing physical damage dealers to deal massive damage.'
            }
        ]
    },
    'avywenna': {
        name: 'Avywenna',
        rarity: 6,
        element: 'Fire',
        class: 'Caster',
        weapon: 'Handcannon',
        faction: 'Endfield Industries',
        description: 'A 6-star Fire Caster with exceptional area damage and the ability to apply powerful burn effects.',
        image: 'https://www.prydwen.gg/static/a49365dddc97dff2d6ae31e8139ff663/60b4d/Avywenna_icon.webp',
        stats: {
            hp: 8900,
            atk: 620,
            def: 290,
            critRate: 15,
            critDmg: 165
        },
        skills: [
            {
                name: 'Flame Burst',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png',
                description: 'Launches a fireball that explodes on impact, dealing Fire DMG and applying Heat Infliction.',
                cost: 90
            },
            {
                name: 'Inferno Rain',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png',
                description: 'Summons a rain of fire that covers a large area, dealing massive Fire DMG over 5 seconds.',
                cost: 220
            }
        ],
        bestWeapon: {
            name: 'Phoenix Wing',
            rarity: 6,
            icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/150px-Avywenna_Icon.png',
            description: 'Increases Fire DMG by 35% and extends Heat Infliction duration by 3 seconds.'
        },
        modules: [
            { name: 'Fire Mastery', icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png' },
            { name: 'Crit Rate', icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png' },
            { name: 'Elemental DMG', icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png' }
        ],
        teams: [
            {
                name: 'Burning Field',
                members: [
                    { name: 'Avywenna', icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png' },
                    { name: 'Xaihi', icon: 'https://endfield.wiki.gg/images/thumb/7/71/Xaihi_Icon.png/75px-Xaihi_Icon.png' },
                    { name: 'Estella', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' },
                    { name: 'Wulfgard', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' }
                ],
                description: 'Double Fire setup with Avywenna and Xaihi creating massive burn damage. Estella provides ice for melt reactions.'
            }
        ]
    },
    'da-pan': {
        name: 'Da Pan',
        rarity: 5,
        element: 'Electric',
        class: 'Defender',
        weapon: 'Heavy Weapon',
        faction: 'Endfield Industries',
        description: 'A 5-star Electric Defender who provides excellent protection for the team while dealing electric damage to enemies.',
        image: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/300px-Da_Pan_Icon.png',
        stats: {
            hp: 12500,
            atk: 380,
            def: 480,
            critRate: 8,
            critDmg: 120
        },
        skills: [
            {
                name: 'Thunder Shield',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png',
                description: 'Creates an electric shield that absorbs damage and deals Electric DMG to attackers.',
                cost: 80
            },
            {
                name: 'Lightning Fortress',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png',
                description: 'Surrounds the area with electric barriers, protecting all allies and continuously damaging enemies inside.',
                cost: 200
            }
        ],
        bestWeapon: {
            name: 'Titan\'s Wall',
            rarity: 5,
            icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/150px-Da_Pan_Icon.png',
            description: 'Massively increases DEF by 30% and provides a shield equal to 15% of max HP at the start of battle.'
        },
        modules: [
            { name: 'DEF Boost', icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png' },
            { name: 'HP Boost', icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png' },
            { name: 'Electric Reflect', icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png' }
        ],
        teams: [
            {
                name: 'Tank and Spank',
                members: [
                    { name: 'Da Pan', icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png' },
                    { name: 'Rossi', icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png' },
                    { name: 'Wulfgard', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' },
                    { name: 'Avywenna', icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png' }
                ],
                description: 'Da Pan tanks while Rossi and Wulfgard deal damage from the backline. Avywenna provides healing and support.'
            }
        ]
    },
    'wulfgard': {
        name: 'Wulfgard',
        rarity: 6,
        element: 'Physical',
        class: 'Vanguard',
        weapon: 'Sword',
        faction: 'Wolf Pack',
        description: 'Leader of the Wolf Pack and a powerful 6-star Vanguard. Wulfgard excels at generating SP for the team and dealing consistent physical damage.',
        image: 'https://www.prydwen.gg/static/d95cc31b8e326622aa75b9477d1223da/60b4d/Wulfguard_icon.webp',
        stats: {
            hp: 10800,
            atk: 545,
            def: 360,
            critRate: 16,
            critDmg: 155
        },
        skills: [
            {
                name: 'Pack Leader\'s Howl',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png',
                description: 'Generates SP for the entire team while dealing Physical DMG to enemies in front.',
                cost: 70
            },
            {
                name: 'Wolf\'s Onslaught',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png',
                description: 'Unleashes a flurry of attacks dealing massive Physical DMG. SP generation is doubled for 10 seconds after use.',
                cost: 180
            }
        ],
        bestWeapon: {
            name: 'Alpha Fang',
            rarity: 6,
            icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/150px-Wulfgard_Icon.png',
            description: 'Increases SP generation by 30% and Physical DMG by 20%. Perfect for Wulfgard\'s support-DPS role.'
        },
        modules: [
            { name: 'SP Generation', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' },
            { name: 'ATK Boost', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' },
            { name: 'Team Buff', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' }
        ],
        teams: [
            {
                name: 'SP Battery',
                members: [
                    { name: 'Wulfgard', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' },
                    { name: 'Rossi', icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png' },
                    { name: 'Avywenna', icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png' },
                    { name: 'Da Pan', icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png' }
                ],
                description: 'Wulfgard generates SP rapidly to fuel Rossi and Avywenna\'s powerful ultimates. Da Pan provides protection.'
            }
        ]
    },
    'xaihi': {
        name: 'Xaihi',
        rarity: 5,
        element: 'Fire',
        class: 'Guard',
        weapon: 'Sword',
        faction: 'Endfield Industries',
        description: 'A 5-star Fire Guard who combines physical attacks with fire damage for a hybrid playstyle.',
        image: 'https://www.prydwen.gg/static/42cee416854261a105cb5df69c66c663/60b4d/Xaihi_icon.webp',
        stats: {
            hp: 9600,
            atk: 490,
            def: 315,
            critRate: 17,
            critDmg: 150
        },
        skills: [
            {
                name: 'Blazing Slash',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/7/71/Xaihi_Icon.png/75px-Xaihi_Icon.png',
                description: 'A sword slash infused with fire, dealing both Physical and Fire DMG.',
                cost: 85
            },
            {
                name: 'Phoenix Strike',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/7/71/Xaihi_Icon.png/75px-Xaihi_Icon.png',
                description: 'Channels the power of a phoenix to deal massive Fire DMG and heal for a portion of damage dealt.',
                cost: 190
            }
        ],
        bestWeapon: {
            name: 'Ember Blade',
            rarity: 5,
            icon: 'https://endfield.wiki.gg/images/thumb/7/71/Xaihi_Icon.png/150px-Xaihi_Icon.png',
            description: 'Converts 30% of Physical DMG to Fire DMG and increases overall damage by 15%.'
        },
        modules: [
            { name: 'Hybrid DMG', icon: 'https://endfield.wiki.gg/images/thumb/7/71/Xaihi_Icon.png/75px-Xaihi_Icon.png' },
            { name: 'Life Steal', icon: 'https://endfield.wiki.gg/images/thumb/7/71/Xaihi_Icon.png/75px-Xaihi_Icon.png' },
            { name: 'ATK Speed', icon: 'https://endfield.wiki.gg/images/thumb/7/71/Xaihi_Icon.png/75px-Xaihi_Icon.png' }
        ],
        teams: [
            {
                name: 'Fire DPS',
                members: [
                    { name: 'Xaihi', icon: 'https://endfield.wiki.gg/images/thumb/7/71/Xaihi_Icon.png/75px-Xaihi_Icon.png' },
                    { name: 'Avywenna', icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png' },
                    { name: 'Gilberta', icon: 'https://endfield.wiki.gg/images/thumb/a/a2/Gilberta_Icon.png/75px-Gilberta_Icon.png' },
                    { name: 'Chen Qianyu', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' }
                ],
                description: 'Xaihi and Avywenna stack fire damage while Gilberta provides crowd control. Chen Qianyu adds physical damage for versatility.'
            }
        ]
    },
    'alesh': {
        name: 'Alesh',
        rarity: 4,
        element: 'Ice',
        class: 'Caster',
        weapon: 'Handcannon',
        faction: 'Endfield Industries',
        description: 'A 4-star Ice Caster who excels at supporting the team by consuming elemental stacks for bonus effects.',
        image: 'https://www.prydwen.gg/static/0b189aa0c08151df3af68645f32b0bf2/60b4d/alesh.webp',
        stats: {
            hp: 7800,
            atk: 445,
            def: 255,
            critRate: 12,
            critDmg: 135
        },
        skills: [
            {
                name: 'Cryo Conversion',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/4/41/Alesh_Icon.png/75px-Alesh_Icon.png',
                description: 'Consumes Ice Infliction stacks on enemies to deal bonus damage and restore SP.',
                cost: 70
            },
            {
                name: 'Frozen Barrage',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/4/41/Alesh_Icon.png/75px-Alesh_Icon.png',
                description: 'Fires a barrage of ice projectiles. Damage increases based on number of elemental stacks consumed.',
                cost: 160
            }
        ],
        bestWeapon: {
            name: 'Cryo Cannon',
            rarity: 4,
            icon: 'https://endfield.wiki.gg/images/thumb/4/41/Alesh_Icon.png/150px-Alesh_Icon.png',
            description: 'Increases Ice DMG by 20% and SP restoration from skills by 15%.'
        },
        modules: [
            { name: 'SP Efficiency', icon: 'https://endfield.wiki.gg/images/thumb/4/41/Alesh_Icon.png/75px-Alesh_Icon.png' },
            { name: 'Ice DMG', icon: 'https://endfield.wiki.gg/images/thumb/4/41/Alesh_Icon.png/75px-Alesh_Icon.png' },
            { name: 'Support', icon: 'https://endfield.wiki.gg/images/thumb/4/41/Alesh_Icon.png/75px-Alesh_Icon.png' }
        ],
        teams: [
            {
                name: 'Budget Ice',
                members: [
                    { name: 'Alesh', icon: 'https://endfield.wiki.gg/images/thumb/4/41/Alesh_Icon.png/75px-Alesh_Icon.png' },
                    { name: 'Estella', icon: 'https://endfield.wiki.gg/images/thumb/1/12/Estella_Icon.png/75px-Estella_Icon.png' },
                    { name: 'Chen Qianyu', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' },
                    { name: 'Perlica', icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png' }
                ],
                description: 'An affordable ice team for beginners. Alesh and Estella work together to apply and consume ice stacks.'
            }
        ]
    },
    'catcher': {
        name: 'Catcher',
        rarity: 4,
        element: 'Physical',
        class: 'Supporter',
        weapon: 'Handcannon',
        faction: 'Endfield Industries',
        description: 'A 4-star Physical Supporter who provides buffs and debuffs to control the battlefield.',
        image: 'https://www.prydwen.gg/static/f6236f7c665c84fda60b5b93f5934097/60b4d/catcher_sm.webp',
        stats: {
            hp: 8200,
            atk: 410,
            def: 280,
            critRate: 10,
            critDmg: 125
        },
        skills: [
            {
                name: 'Target Mark',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/8/86/Catcher_Icon.png/75px-Catcher_Icon.png',
                description: 'Marks an enemy, increasing damage taken and revealing weak points.',
                cost: 60
            },
            {
                name: 'Tactical Field',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/8/86/Catcher_Icon.png/75px-Catcher_Icon.png',
                description: 'Creates a field that boosts ally ATK and reduces enemy DEF within its range.',
                cost: 150
            }
        ],
        bestWeapon: {
            name: 'Tactical Rifle',
            rarity: 4,
            icon: 'https://endfield.wiki.gg/images/thumb/8/86/Catcher_Icon.png/150px-Catcher_Icon.png',
            description: 'Increases buff effectiveness by 20% and reduces skill cooldown by 10%.'
        },
        modules: [
            { name: 'Buff Duration', icon: 'https://endfield.wiki.gg/images/thumb/8/86/Catcher_Icon.png/75px-Catcher_Icon.png' },
            { name: 'SP Regen', icon: 'https://endfield.wiki.gg/images/thumb/8/86/Catcher_Icon.png/75px-Catcher_Icon.png' },
            { name: 'Support Range', icon: 'https://endfield.wiki.gg/images/thumb/8/86/Catcher_Icon.png/75px-Catcher_Icon.png' }
        ],
        teams: [
            {
                name: 'Buff Squad',
                members: [
                    { name: 'Catcher', icon: 'https://endfield.wiki.gg/images/thumb/8/86/Catcher_Icon.png/75px-Catcher_Icon.png' },
                    { name: 'Rossi', icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png' },
                    { name: 'Wulfgard', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' },
                    { name: 'Da Pan', icon: 'https://endfield.wiki.gg/images/thumb/8/8e/Da_Pan_Icon.png/75px-Da_Pan_Icon.png' }
                ],
                description: 'Catcher amplifies the damage of Rossi and Wulfgard while Da Pan keeps everyone safe.'
            }
        ]
    },
    'laevatain': {
        name: 'Laevatain',
        rarity: 6,
        element: 'Fire',
        class: 'Striker',
        weapon: 'Sword',
        faction: 'Wolf Pack',
        description: 'A 6-star Fire Striker known as the Combustion Queen. Laevatain dominates AoE scenarios with her ultimate ability that creates sustained damage zones across enemy waves.',
        image: 'https://www.prydwen.gg/static/a7ef28fdf47027491cad40746b1e733e/60b4d/Laevatain_icon.webp',
        stats: {
            hp: 10200,
            atk: 610,
            def: 315,
            critRate: 18,
            critDmg: 165
        },
        skills: [
            {
                name: 'Flame Burst',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/a/a3/Laevatain_Icon.png/75px-Laevatain_Icon.png',
                description: 'Releases a burst of flames dealing Fire DMG and applying Heat Infliction to enemies in the area.',
                cost: 90
            },
            {
                name: 'Inferno Zone',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/a/a3/Laevatain_Icon.png/75px-Laevatain_Icon.png',
                description: 'Creates a zone of sustained fire damage that persists for 10 seconds, dealing continuous Fire DMG to all enemies within.',
                cost: 220
            }
        ],
        bestWeapon: {
            name: 'Blazing Fang',
            rarity: 6,
            icon: 'https://endfield.wiki.gg/images/thumb/a/a3/Laevatain_Icon.png/150px-Laevatain_Icon.png',
            description: 'Increases Fire DMG by 35% and extends the duration of Heat Infliction by 3 seconds.'
        },
        modules: [
            { name: 'Fire Mastery', icon: 'https://endfield.wiki.gg/images/thumb/a/a3/Laevatain_Icon.png/75px-Laevatain_Icon.png' },
            { name: 'ATK Boost', icon: 'https://endfield.wiki.gg/images/thumb/a/a3/Laevatain_Icon.png/75px-Laevatain_Icon.png' },
            { name: 'Crit DMG', icon: 'https://endfield.wiki.gg/images/thumb/a/a3/Laevatain_Icon.png/75px-Laevatain_Icon.png' }
        ],
        teams: [
            {
                name: 'Combustion Team',
                members: [
                    { name: 'Laevatain', icon: 'https://endfield.wiki.gg/images/thumb/a/a3/Laevatain_Icon.png/75px-Laevatain_Icon.png' },
                    { name: 'Avywenna', icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png' },
                    { name: 'Wulfgard', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' },
                    { name: 'Antal', icon: 'https://endfield.wiki.gg/images/thumb/9/9e/Antal_Icon.png/75px-Antal_Icon.png' }
                ],
                description: 'A powerful fire team built around Laevatain. Avywenna and Wulfgard provide fire support while Antal offers amplification buffs.'
            }
        ]
    },
    'ardelia': {
        name: 'Ardelia',
        rarity: 6,
        element: 'Physical',
        class: 'Supporter',
        weapon: 'Orbiter',
        faction: 'Endfield Industries',
        description: 'A 6-star Support operator and the only character capable of applying both Physical and Arts Susceptibility simultaneously. Ardelia fits into virtually any team composition and provides excellent healing.',
        image: 'https://www.prydwen.gg/static/8574831d6cafcabda682c72486766a38/60b4d/ardelia_icon.webp',
        stats: {
            hp: 9200,
            atk: 480,
            def: 295,
            critRate: 10,
            critDmg: 130
        },
        skills: [
            {
                name: 'Healing Wave',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/e/e0/Ardelia_Icon.png/75px-Ardelia_Icon.png',
                description: 'Restores HP to all allies and applies Corrosion to enemies, reducing their resistances to all damage types.',
                cost: 80
            },
            {
                name: 'Universal Support',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/e/e0/Ardelia_Icon.png/75px-Ardelia_Icon.png',
                description: 'Applies both Physical and Arts Susceptibility to all enemies while providing a massive healing burst to the team.',
                cost: 180
            }
        ],
        bestWeapon: {
            name: 'Celestial Orb',
            rarity: 6,
            icon: 'https://endfield.wiki.gg/images/thumb/e/e0/Ardelia_Icon.png/150px-Ardelia_Icon.png',
            description: 'Increases healing effectiveness by 30% and extends the duration of Corrosion by 4 seconds.'
        },
        modules: [
            { name: 'Healing Boost', icon: 'https://endfield.wiki.gg/images/thumb/e/e0/Ardelia_Icon.png/75px-Ardelia_Icon.png' },
            { name: 'SP Regen', icon: 'https://endfield.wiki.gg/images/thumb/e/e0/Ardelia_Icon.png/75px-Ardelia_Icon.png' },
            { name: 'Support Range', icon: 'https://endfield.wiki.gg/images/thumb/e/e0/Ardelia_Icon.png/75px-Ardelia_Icon.png' }
        ],
        teams: [
            {
                name: 'Universal Team',
                members: [
                    { name: 'Ardelia', icon: 'https://endfield.wiki.gg/images/thumb/e/e0/Ardelia_Icon.png/75px-Ardelia_Icon.png' },
                    { name: 'Rossi', icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png' },
                    { name: 'Laevatain', icon: 'https://endfield.wiki.gg/images/thumb/a/a3/Laevatain_Icon.png/75px-Laevatain_Icon.png' },
                    { name: 'Wulfgard', icon: 'https://endfield.wiki.gg/images/thumb/5/58/Wulfgard_Icon.png/75px-Wulfgard_Icon.png' }
                ],
                description: 'A versatile team that works with any damage type. Ardelia provides universal support while other members deal damage.'
            }
        ]
    },
    'ember': {
        name: 'Ember',
        rarity: 6,
        element: 'Fire',
        class: 'Defender',
        weapon: 'Greatsword',
        faction: 'Endfield Industries',
        description: 'A 6-star Heat Defender who provides exceptional defensive utility including damage reduction, healing, shields, and Vulnerability application. She frequently appears in Physical team compositions despite her Heat element.',
        image: 'https://www.prydwen.gg/static/28918f510e618ffca5b384460ac0336a/60b4d/ember_icon.webp',
        stats: {
            hp: 12800,
            atk: 395,
            def: 520,
            critRate: 8,
            critDmg: 125
        },
        skills: [
            {
                name: 'Defensive Stance',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/d/dc/Ember_Icon.png/75px-Ember_Icon.png',
                description: 'Deals Heat DMG to nearby enemies, causing Knock Down and Stagger. Leaps to defend the active character when they are attacked.',
                cost: 70
            },
            {
                name: 'Protective Shield',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/d/dc/Ember_Icon.png/75px-Ember_Icon.png',
                description: 'Grants the entire team a shield that absorbs damage and provides damage reduction for 15 seconds.',
                cost: 160
            }
        ],
        bestWeapon: {
            name: 'Titan Guard',
            rarity: 6,
            icon: 'https://endfield.wiki.gg/images/thumb/d/dc/Ember_Icon.png/150px-Ember_Icon.png',
            description: 'Increases DEF by 35% and provides a team-wide shield at the start of battle equal to 20% of max HP.'
        },
        modules: [
            { name: 'DEF Boost', icon: 'https://endfield.wiki.gg/images/thumb/d/dc/Ember_Icon.png/75px-Ember_Icon.png' },
            { name: 'HP Boost', icon: 'https://endfield.wiki.gg/images/thumb/d/dc/Ember_Icon.png/75px-Ember_Icon.png' },
            { name: 'Shield Duration', icon: 'https://endfield.wiki.gg/images/thumb/d/dc/Ember_Icon.png/75px-Ember_Icon.png' }
        ],
        teams: [
            {
                name: 'Tank & DPS',
                members: [
                    { name: 'Ember', icon: 'https://endfield.wiki.gg/images/thumb/d/dc/Ember_Icon.png/75px-Ember_Icon.png' },
                    { name: 'Rossi', icon: 'https://endfield.wiki.gg/images/thumb/4/42/Rossi_Icon.png/75px-Rossi_Icon.png' },
                    { name: 'Chen Qianyu', icon: 'https://endfield.wiki.gg/images/thumb/f/fc/Chen_Qianyu_Icon.png/75px-Chen_Qianyu_Icon.png' },
                    { name: 'Ardelia', icon: 'https://endfield.wiki.gg/images/thumb/e/e0/Ardelia_Icon.png/75px-Ardelia_Icon.png' }
                ],
                description: 'Ember tanks while Rossi and Chen Qianyu deal physical damage. Ardelia provides healing and support.'
            }
        ]
    },
    'antal': {
        name: 'Antal',
        rarity: 5,
        element: 'Fire',
        class: 'Caster',
        weapon: 'Handcannon',
        faction: 'Endfield Industries',
        description: 'A 5-star Fire Caster who specializes in elemental amplification. Antal provides dual Susceptibility application and damage amplification buffs for Heat and Electric teams.',
        image: 'https://www.prydwen.gg/static/e1dfc699651c2d822d2a69a5f6de154b/60b4d/antal_sm.webp',
        stats: {
            hp: 8450,
            atk: 535,
            def: 275,
            critRate: 14,
            critDmg: 145
        },
        skills: [
            {
                name: 'Amplify',
                type: 'Battle Skill',
                icon: 'https://endfield.wiki.gg/images/thumb/9/9e/Antal_Icon.png/75px-Antal_Icon.png',
                description: 'Applies Heat and Electric Susceptibility to enemies while boosting the team elemental damage.',
                cost: 85
            },
            {
                name: 'Elemental Burst',
                type: 'Ultimate',
                icon: 'https://endfield.wiki.gg/images/thumb/9/9e/Antal_Icon.png/75px-Antal_Icon.png',
                description: 'Deals massive Fire DMG and significantly amplifies all elemental damage taken by enemies for 10 seconds.',
                cost: 190
            }
        ],
        bestWeapon: {
            name: 'Amplifier Cannon',
            rarity: 5,
            icon: 'https://endfield.wiki.gg/images/thumb/9/9e/Antal_Icon.png/150px-Antal_Icon.png',
            description: 'Increases Elemental DMG buffs by 25% and reduces skill cooldown by 10%.'
        },
        modules: [
            { name: 'Elemental Amp', icon: 'https://endfield.wiki.gg/images/thumb/9/9e/Antal_Icon.png/75px-Antal_Icon.png' },
            { name: 'SP Regen', icon: 'https://endfield.wiki.gg/images/thumb/9/9e/Antal_Icon.png/75px-Antal_Icon.png' },
            { name: 'Cooldown Red', icon: 'https://endfield.wiki.gg/images/thumb/9/9e/Antal_Icon.png/75px-Antal_Icon.png' }
        ],
        teams: [
            {
                name: 'Elemental Boost',
                members: [
                    { name: 'Antal', icon: 'https://endfield.wiki.gg/images/thumb/9/9e/Antal_Icon.png/75px-Antal_Icon.png' },
                    { name: 'Laevatain', icon: 'https://endfield.wiki.gg/images/thumb/a/a3/Laevatain_Icon.png/75px-Laevatain_Icon.png' },
                    { name: 'Avywenna', icon: 'https://endfield.wiki.gg/images/thumb/3/3a/Avywenna_Icon.png/75px-Avywenna_Icon.png' },
                    { name: 'Perlica', icon: 'https://endfield.wiki.gg/images/thumb/2/22/Perlica_Icon.png/75px-Perlica_Icon.png' }
                ],
                description: 'Antal amplifies the elemental damage of Laevatain and Avywenna while Perlica provides Electric support.'
            }
        ]
    }
};
