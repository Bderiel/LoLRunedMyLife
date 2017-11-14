const db = require('./db');
const Mastery = require('./db/models/mastery');
const Category = require('./db/models/category');


const categories = [
    {
        image: '/images/precision/precisionicon.png', 
        name: 'Precision', 
        description: 'Improved Attacks And Sustained Damage'
    },
    {
        image: '/images/domination/dominationicon.png', 
        name: 'Domination', 
        description: 'Burst Damage And Target Access'
    },
    {
        image: '/images/sorcery/sorceryicon.png', 
        name: 'Sorcery', 
        description: 'Empowered Abilities And Resource Manipulation'
    },
    {
        image: '/images/resolve/resolveicon.png', 
        name: 'Resolve', 
        description: 'Durability And Crowd Control'
    },
    {
        image: '/images/inspiration/inspirationicon.png', 
        name: 'Inspiration', 
        description: 'Creative Toolds And Rule Bending'
    },
    
];

const masteries = [
    //******************PRECISION******************************//
    {   
        name: 'Press The Attack', 
        image: '/images/precision/Press the Attack.png', 
        categoryId: 1,
        type: 'keystone', 
        description: 'Hitting An Enemy Champion With 3 Consecutive Basic Attacks Will Deal 30 - 120 Bonus Adaptive Damage (Based On Level) And Makes Them Vulernable, Increasing The Damage They Receieve By 12% From All Soruces For 6s.' 
    },
    {   
        name: 'Lethal Tempo', 
        image: '/images/precision/Lethal Tempo.png', 
        categoryId: 1,
        type: 'keystone',
        description: '1.5s After Damaging A Champion Gain 30 - 80% Attack Speed (Based On Level) For 3s. Attacking A Champion Extends The Effect To 6s. Cooldown: 10s Lethal Tempo Allows You To Temporarily Exceed The Attack Speed Limit.' 
    },
    {   
        name: 'Fleet Footwork', 
        image: '/images/precision/Fleet Footwork.png', 
        categoryId: 1,
        type: 'keystone',
        description: 'Attacking And Moving Builds Energy Stacks. At 100 Stacks, Your Next Attack Is Energized. Energized Attacks Heal You For 5 - 50 (+0.10 Bonus AD, +0.2 AP) And Grant You 30% Increased Movement Speed For 1 Second. Healing Is 60% Effective When Used On A Minion' 
    }, 
    {   
        name: 'Overheal', 
        image: '/images/precision/Overheal.png', 
        categoryId: 1,
        type: 'greater rune',
        description: 'Excess Healing On You Becomes A Shield, For Up To 10 + 10% Of Your Total Health. Shield Is Built Up From 30% Of Excess Healing From Self, Or Up To 300% Of Excess Healing From Allies (Based On Level).' 
    },
    {   
        name: 'Triumph', 
        image: '/images/precision/Triumph.png', 
        categoryId: 1,
        type: 'greater rune',
        description: 'Takedowns Restore 15% Of Your Missing Health And Grant An Additional 25 Gold.' 
    }, 
    {   
        name: 'Prescence Of Mind', 
        image: '/images/precision/Presence of Mind.png', 
        categoryId: 1,
        type: 'greater rune',
        description: 'For 5s After Gaining A Level Or Takedown The Mana You Spend On Abilities Is Fully Restored.' 
    }, 
    {   
        name: 'Legend: Alaclarity',
        image: '/images/precision/Legend Alaclarity.png', 
        categoryId: 1,
        type: 'rune', 
        description: 'Gain 3% Attack Speed Plus An Additional 1.5% For Every Legend Stack (Max 10 Stacks). Earn Progress Toward Legend Stacks For Every Champion Takedown, Epic Monster Takedown, Large Monster Kill, And Minion Kill.'
    },
    {   
        name: 'Legend: Tenacity', 
        image: '/images/precision/Legend Tenacity.png', 
        categoryId: 1,
        type: 'rune',
        description: 'Gain 5% Tenacity Plus An Additional 1.5% For Every Legend Stack (Max 10 Stacks). Earn Progress Toward Legend Stacks For Every Champion Takedown, Epic Monster Takedown, Large Monster Kill, And Minion Kill.'
    },
    {   
        name: 'Legend: Bloodline',
        image: '/images/precision/Legend Bloodline.png', 
        categoryId: 1,
        type: 'rune', 
        description: 'Gain 0.8% Life Steal For Every Legend Stack (Max 10 Stacks). Earn Progress Toward Legend Stacks For Every Champion Takedown, Epic Monster Takedown, Large Monster Kill, And Minion Kill.'
    },
    {   
        name: 'Coup De Grace', 
        image: '/images/precision/Coupe De Grace.png', 
        categoryId: 1,
        type: 'rune', 
        description: 'Deal Up To 10% More Damage To Champions Who Have Less Than 40% Health. Additionally, Takedowns On Champions Grant An Adaptive Bonus Of 9 Attack Damage Or 15 Ability Power For 10 Seconds.'
    },
    {   
        name: 'Cut Down', 
        image: '/images/precision/Cut Down.png', 
        categoryId: 1,
        type: 'rune', 
        description: 'Deal 4% More Damage To Champions With 150 More Maximum Health Than You, Increases To 10% At 2000 More Max Health.'
    },
    {   
        name: 'Last Stand', 
        image: '/images/precision/Last Stand.png', 
        categoryId: 1,
        type: 'rune', 
        description: 'Deal 5% To 12% More Damage To Champions While You Are Below 60% Health, Maximum Damage Gained At 30% Health.'
    },
    ///////**********DOMINATION*************////////
    {   
        name: 'Electrocute', 
        image: '/images/domination/Electrocute.png', 
        categoryId: 2,
        type: 'keystone', 
        description: 'Hitting A Champion With 3 Separate Attacks Or Abilities Within 3 Seconds Deals Bonus Adaptive Damage. Damage: 50 - 220 (+0.50 Bonus AD, +0.3 AP) Damage. Cooldown: 50 - 25s.' 
    },
    {   
        name: 'Predator', 
        image: '/images/domination/Predator.png', 
        categoryId: 2,
        type: 'keystone',
        description: 'Enchants Your Boots With The Active Effect Predator. Channel For 1.5 Seconds Out Of Combat To Gain 45% Movement Speed For 15 Seconds. Damaging Attacks Or Abilities End This Effect, Dealing 60 - 140 (+0.4 Bonus AD)(+0.25 AP) Bonus Damage. Cooldown: 180s-120s Starts The Game On Cooldown And Goes On Cooldown If Interrupted While Channeling.'
    },
    {   
        name: 'Dark Harvest', 
        image: '/images/domination/Dark Harvest.png', 
        categoryId: 2,
        type: 'keystone',
        description: 'Champions, Large Minions, And Large Monsters Drop Soul Essence On Death. Collect Souls To Become Soul Charged. Soul Charged To Deal Bonus Adaptive Damage. Soul Charged Lasts 20 S, Increased To 300s After Collecting 150 Soul Essence. Bonus Damage: 40 - 80 (+0.25 Bonus AD) (+0.2 AP) + Soul Essence Collected. Champion Souls - 6 Soul Essence. Monster Souls - 2 Soul Essence. Minion Souls - 4 Soul Essence.' 
    }, 
    {   
        name: 'Cheap Shot', 
        image: '/images/domination/Cheap Shot.png', 
        categoryId: 2,
        type: 'greater rune',
        description: 'Damaging Champions With Impaired Movement Or Actions Deals 12 - 30 Bonus True Damage (Based On Level). Cooldown: 4s. Applies To Damage Occurring After The Impairment.' 
    },
    {   
        name: 'Taste Of Blood', 
        image: '/images/domination/Taste Of Blood.png', 
        categoryId: 2,
        type: 'greater rune',
        description: 'Heal When You Damage An Enemy Champion. Healing: 18-35 (+0.20 Bonus AD, +0.1 AP) Health (Based On Level) Cooldown: 20s.' 
    }, 
    {   
        name: 'Sudden Impact', 
        image: '/images/domination/Sudden Impact.png', 
        categoryId: 2,
        type: 'greater rune',
        description: 'After Exiting Stealth Or Using A Dash, Leap, Blink, Teleport, Dealing Any Damage To A Champion Grants You 10 Lethality And 8 Magic Penetration For 5s. Cooldown: 4s.' 
    }, 
    {   
        name: 'Zombie Ward',
        image: './images/domination/Zombie Ward.png', 
        categoryId: 2,
        type: 'rune', 
        description: "After Killing An Enemy Ward, A Friendly Zombie Ward Is Raised In Its Place. Additionally, When Your Wards Expire, They Resurrect As Zombie Wards. Zombie Wards Are Visible, Last For 180s And Don't Count Towards Your Ward Limit."
    },
    {   
        name: 'Ghost Poro', 
        image: '/images/domination/Ghost Poro.png', 
        categoryId: 2,
        type: 'rune',
        description: 'Enter A Brush To Summon A Poro After A Brief Channel. The Poro Will Stay Behind To Give You Vision Until You Summon A New One. If An Enemy Enters Brush With A Poro In It, They Scare It Away, Putting This Effect On A 3s Cooldown. Poro Channel Is Interupted If You Enter Combat With A Champion.'
    },
    {   
        name: 'Eyeball Collection',
        image: '/images/domination/Eyeball Collection.png', 
        categoryId: 2,
        type: 'rune', 
        description: 'Collect Eyeballs On Champion And Ward Takedowns (2 Per Champion, 1 Per Ward). Gain +1 Ability Power Or +0.6 Attack Damage, Adaptive, Per Eyeball Collected. Max: 20 Eyeballs Upon Completing Your Collection, Gain 10 Ability Power And 6 Attack Damage, Adaptive.'
    },
    {   
        name: 'Ravenous Hunter', 
        image: '/images/domination/Ravenous Hunter.png', 
        categoryId: 2,
        type: 'rune', 
        description: 'Heal For A Percentage Of The Damage Dealt By Your Abilities. Healing: 2.5% + 2.5% Per Bounty Hunter Stack. Earn A Bounty Hunter Stack The First Time You Get A Takedown On Each Enemy Champion. AoE: Healing Reduced To One Third On AoE Abilities.'
    },
    {   
        name: 'Ingenious Hunter', 
        image: '/images/domination/Ingenious Hunter.png', 
        categoryId: 2,
        type: 'rune', 
        description: 'Gain 10% Active Item CDR Plus An Additional 6% Per Bounty Hunter Stack (Includes Trinkets). Earn A Bounty Hunter Stack The First Time You Get A Takedown On Each Enemy Champion.'
    },
    {   
        name: 'Relentless Hunter', 
        image: '/images/domination/Relentless Hunter.png', 
        categoryId: 2,
        type: 'rune', 
        description: 'Gain 8 Out Of Combat Movement Speed Plus 8 Per Bounty Hunter Stack. Earn A Bounty Hunter Stack The First Time You Get A Takedown On Each Enemy Champion.'
    },
    //**********SORCERY*************//
    {   
        name: 'Summon Aery', 
        image: '/images/sorcery/Summon Aery.png', 
        categoryId: 3,
        type: 'keystone', 
        description: 'Your Attacks And Abilities Send Aery To A Target, Damaging Enemies Or Shielding Allies. Damage: 20 - 60 Based On Level (+0.10 AP And +0.15 Bonus AD). Shield: 30 - 80 Based On Level (+0.25 AP And +0.40 Bonus AD). Aery Cannot Be Sent Out Again Until She Returns To You.' 
    },
    {   
        name: 'Arcane Comet', 
        image: '/images/sorcery/Arcane Comet.png', 
        categoryId: 3,
        type: 'keystone',
        description: 'Damaging A Champion With An Ability Hurls A Comet At Their Location, Or, If Arcane Comet Is On Cooldown, Reduces It\'s Remaining Cooldown. Adaptive Damage: 30-100 Based On Level (+0.20 AP And +0.35 Bonus AD). Cooldown: 20s-8s. Single Target: 20%. Area Of Effect: 10%. Damage Over Time: 5%'
    },
    {   
        name: 'Phase Rush', 
        image: '/images/sorcery/Phase Rush.png', 
        categoryId: 3,
        type: 'keystone',
        description: 'Hitting An Enemy Champion With 3 Attacks Or Separate Abilities Within 3s Grants 15 - 40% Movement Speed Based On Level. Duration: 3s. Cooldown: 15s. Melee: Additionally, Gain 75% Slow Resistance For The Duration.'
    },
    {   
        name: 'Nullifying Orb', 
        image: '/images/sorcery/Nullifying Orb.png', 
        categoryId: 3,
        type: 'greater rune',
        description: 'Upon Taking Magic Damage That Would Reduce Health Below 30%, Grants A Shield That Absorbs 40 - 120 Based On Level (+0.10 AP Or +0.15 AD) For 4 Seconds. Cooldown: 60s.'
    },
    {   
        name: 'Manaflow Band', 
        image: '/images/sorcery/Manaflow Band.png', 
        categoryId: 3,
        type: 'greater rune',
        description: 'Every 60 Seconds, Your Next Ability Used Has Its Mana Or Energy Cost Refunded, And Restores 8% Of Your Missing Mana Or Energy.' 
    }, 
    {   
        name: 'The Ultimate Hat', 
        image: '/images/sorcery/The Ultimate Hat.png', 
        categoryId: 3,
        type: 'greater rune',
        description: 'Your Ultimate\'s Cooldown Is Reduced By 5%. This Number Is Increased By 2.0% Each Time Your Ultimate Goes On Cooldown. Stacks Up To 5 Times.' 
    }, 
    {   
        name: 'Transcendence',
        image: '/images/sorcery/Transcendence.png', 
        categoryId: 3,
        type: 'rune', 
        description: 'Gain 10% CDR When You Reach Level 10. Each Percent Of CDR Exceeding The CDR Limit Is Converted To An Adaptive Bonus Of 1.2 Attack Damage Or 2 Ability Power.'
    },
    {   
        name: 'Celerity', 
        image: '/images/sorcery/Celerity.png', 
        categoryId: 3,
        type: 'rune',
        description: 'Gain 4% Increased Movement Speed And Add 8% Of Your Bonus Movement Speed To Your AP Or AD, Adaptive (Based On Level).'
    },
    {   
        name: 'Absolute Focus',
        image: '/images/sorcery/Absolute Focus.png', 
        categoryId: 3,
        type: 'rune', 
        description: 'While Above 70% Health, Gain An Adaptive Bonus Of Up To 24 Attack Damage Or 40 Ability Power (Based On Level).'
    },
    {   
        name: 'Scorch', 
        image: '/images/sorcery/Scorch.png', 
        categoryId: 3,
        type: 'rune', 
        description: 'Your Next Ability Hit Sets Champions On Fire Dealing 30 - 60 Bonus Magic Damage Based On Level After 1s. Cooldown: 20s.'
    },
    {   
        name: 'Waterwalking', 
        image: '/images/sorcery/Waterwalking.png', 
        categoryId: 3,
        type: 'rune', 
        description: 'Gain 25 Movement Speed And An Adaptive Bonus Of Up To 18 Attack Damage Or 30 Ability Power (Based On Level) When In The River.'
    },
    {   
        name: 'Gathering Storm', 
        image: '/images/sorcery/Gathering Storm.png', 
        categoryId: 3,
        type: 'rune', 
        description: 'Every 10 Minutes Gain AP Or AD (Adaptive). 10 Min: + 8 AP Or 5 AD. 20 Min: + 24 AP Or 14 AD. 30 Min: + 48 AP Or 29 AD. 40 Min: + 80AP Or 48 AD. 50 Min: + 120 AP Or 72 AD. 60 Min: + 168 AP Or 101 AD.'
    },
    //**********RESOLVE*************//
    {   
        name: 'Grasp Of The Undying', 
        image: '/images/resolve/Grasp Of The Undying.png', 
        categoryId: 4,
        type: 'keystone', 
        description: 'Every 4s In Combat, Your Next Basic Attack On A Champion Will: Deal Bonus Damage Equal To 4% Of Your Max Health. Heal You For 2% Of Your Max Health. Permanently Increase Your Health By 5. Ranged Champions:  Damage And Healing Are Halved And Gain 2 Permanent Health Instead.' 
    },
    {   
        name: 'Aftershock', 
        image: '/images/resolve/Aftershock.png', 
        categoryId: 4,
        type: 'keystone',
        description: 'After Immobilizing An Enemy Champion, Increase Your Current Armor And Magic Resist By 20 + 30% For 2.5s. Then, After 2.5s Deal Damage To Nearby Enemies. Damage: 40-140 (+3.5% Of Your Maximum Health), Adaptive. Cooldown: 20s.'
    },
    {   
        name: 'Gaurdian', 
        image: '/images/resolve/Gaurdian.png', 
        categoryId: 4,
        type: 'keystone',
        description: 'Guard Allies Within 175 Units Of You, And Guard Allies You Target With Spells For 2.5s. While Guarding, If You Or The Ally Would Take Damage, Both Of You Gain A Shield And Are Hasted For 1.5s. Cooldown: 45s. Shield Total Strength: 60 - 150 +(0.20 AP) + (+10% Bonus Health). Haste: 20% Increased Movement Speed.'
    },
    {   
        name: 'Unflinching', 
        image: '/images/resolve/Unflinching.png', 
        categoryId: 4,
        type: 'greater rune',
        description: 'Increase Your Tenacity And Slow Resistance By 10% For Each Summoner Spell On Cooldown. After Casting A Summoner Spell, Gain 15% Additional Tenacity And Slow Resistance For 10s. '
    },
    {   
        name: 'Demolish', 
        image: '/images/resolve/Demolish.png', 
        categoryId: 4,
        type: 'greater rune',
        description: 'Charge Up A Powerful Attack Against A Tower Over 4s, While Within 600 Range Of It. The Charged Attack Deals 125 (+30% Of Your Max Health) Bonus Physical Damage. Cooldown: 45s.' 
    }, 
    {   
        name: 'Font Of Life', 
        image: '/images/resolve/Font Of Life.png', 
        categoryId: 4,
        type: 'greater rune',
        description: 'Impairing The Movement Of An Enemy Champion Marks Them For 4s. Ally Champions Who Attack Marked Enemies Heal For 5 + 1.0% Of Your Max Health.' 
    }, 
    {   
        name: 'Iron Skin',
        image: '/images/resolve/Iron Skin.png', 
        categoryId: 4,
        type: 'rune', 
        description: 'Gain +5 Armor. Heal Effects From Consumables, Heals For At Least 20 Health And Shields Increase Your Total Armor By 5% For 3s.'
    },
    {   
        name: 'Mirror Shell', 
        image: '/images/resolve/Mirror Shell.png', 
        categoryId: 4,
        type: 'rune',
        description: 'Gain +5 Magic Resist. Heal Effects From Consumables, Heals For At Least 20 Health And Shields Increase Your Total Magic Resist By 5% For 3s.'
    },
    {   
        name: 'Conditioning',
        image: '/images/resolve/Conditioning.png', 
        categoryId: 4,
        type: 'rune', 
        description: 'After 10 Min Gain +8 Armor And +8 Magic Resist And Increase Your Total Armor And Magic Resist By 5%.'
    },
    {   
        name: 'Overgrowth', 
        image: '/images/resolve/Overgrowth.png', 
        categoryId: 4,
        type: 'rune', 
        description: 'Every 8 Monsters Or Enemy Minions That Die Near You Permanently Increase Your Max Health By 0.2%. Range: 1400 Units.'
    },
    {   
        name: 'Reavitalize', 
        image: '/images/resolve/Revitalize.png', 
        categoryId: 4,
        type: 'rune', 
        description: 'Heals And Shields Are 5% Stronger And Increased By An Additional 10% On Targets Below 40% Health.'
    },
    {   
        name: 'Second Wind', 
        image: '/images/resolve/Second Wind.png', 
        categoryId: 4,
        type: 'rune', 
        description: 'After Taking Damage From An Enemy Champion, Heal For 6+4% Of Your Missing Health Over 10s.'
    },
    //**********INSPIRATION*************//
    {   
        name: 'Unsealed Spellbook', 
        image: '/images/inspiration/Unsealed Spellbook.png', 
        categoryId: 5,
        type: 'keystone', 
        description: 'Gain A Summoner Shard At 2 Min And Another Every 6 Min After (Max 2 Shards). While Near The Shop, You Can Exchange 1 Summoner Shard To Replace A Summoner Spell With A Different One. Additionally, Your Summoner Spell Cooldowns Are Reduced By 25%. Smite: Buying Smite Won\'t Grant You Access To Smite Items. You Cannot Have Two Of The Same Summoner Spell.' 
    },
    {   
        name: 'Glacial Augment', 
        image: '/images/inspiration/Glacial Augment.png', 
        categoryId: 5,
        type: 'keystone',
        description: 'Basic Attacking A Champion Slows Them For 2s. The Slow Increases In Strength Over Its Duration. Ranged: Ranged Attacks Slow By Up To 20% - 40%. Melee: Melee Attacks Slow By Up To 40% - 50%. Slowing A Champion With Active Items Shoots A Freeze Ray Through Them, Freezing The Nearby Ground For 5s, Slowing All Units Inside By 50%. Cooldown: 7-4 Second Per-Unit Cooldown.'
    },
    {   
        name: 'Kleptomancy', 
        image: '/images/inspiration/Kleptomancy.png', 
        categoryId: 5,
        type: 'keystone',
        description: 'After Using An Ability, Your Next Attack Grants Bonus Gold. There\'s A Chance You\'ll Also Gain A Consumable.'
    },
    {   
        name: 'Hextech Flashtraption', 
        image: '/images/inspiration/Hextech Flashtraption.png', 
        categoryId: 5,
        type: 'greater rune',
        description: 'While Flash Is On Cooldown It Is Replaced By Hexflash. Hexflash: Channel For 2.0s To Blink To A New Location. Cooldown: 20s.Goes On A 10s Cooldown When You Enter Champion Combat.'
    },
    {   
        name: 'Biscuit Delivery', 
        image: '/images/inspiration/Biscuit Delivery.png', 
        categoryId: 5,
        type: 'greater rune',
        description: 'Biscuit Delivery: Gain A Total Biscuit Of Everlasting Will Every 3 Mins, Until 12 Min. Biscuits Restore 15% Of Your Missing Health And Mana And Increase Your Mana Cap By 40 Mana Permanently. Manaless: Champions Without Mana Restore 20% Missing Health Instead.' 
    }, 
    {   
        name: 'Perfect Timing', 
        image: '/images/inspiration/Perfect Timing.png', 
        categoryId: 5,
        type: 'greater rune',
        description: 'Start The Game With A Commencing Stopwatch That Transforms Into A Stopwatch After 6 Min. Stopwatch Has A One Time Use Stasis Effect. Reduces The Cooldown Of Zhonyas Hourglass, Guardian Angel, And Gargoyle\'s Stoneplate By 15%.' 
    }, 
    {   
        name: 'Magical Footwear',
        image: '/images/inspiration/Magical Footwear.png', 
        categoryId: 5,
        type: 'rune', 
        description: 'You Get Free Slightly Magical Boots At 10 Min, But You Cannot Buy Boots Before Then. For Each Takedown You Acquire The Boots 30s Sooner. Slightly Magical Boots Give You An Additional +10 Movement Speed And Upgrade For 50 Gold Less.'
    },
    {   
        name: 'Future\'s Market', 
        image: '/images/inspiration/Future\'s Market.png', 
        categoryId: 5,
        type: 'rune',
        description: 'You Can Enter Debt To Buy Items. The Amount You Can Borrow Increases Over Time. Lending Fee: 50 Gold Per Item. Debt Limit: 150 + 5. Debt Doesn\'t Become Available Until 2 Minutes.'
    },
    {   
        name: 'Minion Dematerializer',
        image: '/images/inspiration/Minion Dematerializer.png', 
        categoryId: 5,
        type: 'rune', 
        description: 'Start The Game With 6 Minion Dematerializers That Kill And Absorb Lane Minions Instantly. Minion Dematerializers Are On Cooldown For The First 155s Of The Game. Absorbing A Minion Increases Your Damage By +4% Against That Type Of Minion Permanently, And An Extra +1% For Each Additional Minion Of That Type Absorbed.'
    },
    {   
        name: 'Cosmic Insight', 
        image: '/images/inspiration/Cosmic Insight.png', 
        categoryId: 5,
        type: 'rune', 
        description: '+5% CDR. +5% Max CDR. +5% Summoner Spell CDR. +5% Item CDR.'
    },
    {   
        name: 'Approach Velocity', 
        image: '/images/inspiration/Approach Velocity.png', 
        categoryId: 5,
        type: 'rune', 
        description: 'Gain 10% Movement Speed Towards Nearby Allied Champions That Are Movement Impaired Or Enemies That You Impair. Range: 1000.'
    },
    {   
        name: 'Celestial Body', 
        image: '/images/inspiration/Celestial Body.png', 
        categoryId: 5,
        type: 'rune', 
        description: '+100 Health Permanently. -10% Damage To Champions Until 10 Min.'
    },
];

const seed = () =>
  Promise.all(categories.map(category =>
    Category.create(category))
  )
  .then(() =>
  Promise.all(masteries.map(mastery =>
    Mastery.create(mastery))
  ))

const seedDatabase = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
    return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

seedDatabase();