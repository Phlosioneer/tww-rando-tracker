const islands = [
  'Forsaken Fortress',
  'Star Island',
  'Northern Fairy Island',
  'Gale Isle',
  'Crescent Moon Island',
  'Seven-Star Isles',
  'Overlook Island',
  'Four-Eye Reef',
  'Mother and Child Isles',
  'Spectacle Island',
  'Windfall Island',
  'Pawprint Isle',
  'Dragon Roost Island',
  'Flight Control Platform',
  'Western Fairy Island',
  'Rock Spire Isle',
  'Tingle Island',
  'Northern Triangle Island',
  'Eastern Fairy Island',
  'Fire Mountain',
  'Star Belt Archipelago',
  'Three-Eye Reef',
  'Greatfish Isle',
  'Cyclops Reef',
  'Six-Eye Reef',
  'Tower of the Gods',
  'Eastern Triangle Island',
  'Thorned Fairy Island',
  'Needle Rock Isle',
  'Islet of Steel',
  'Stone Watcher Island',
  'Southern Triangle Island',
  'Private Oasis',
  'Bomb Island',
  "Bird's Peak Rock",
  'Diamond Steppe Island',
  'Five-Eye Reef',
  'Shark Island',
  'Southern Fairy Island',
  'Ice Ring Isle',
  'Forest Haven',
  'Cliff Plateau Isles',
  'Horseshoe Island',
  'Outset Island',
  'Headstone Island',
  'Two-Eye Reef',
  'Angular Isles',
  'Boating Course',
  'Five-Star Isles',
  'Mailbox',
  'The Great Sea',
  'Hyrule'
];
const charts = [
  'Treasure Chart 25',
  'Treasure Chart 7',
  'Treasure Chart 24',
  'Triforce Chart 2',
  'Treasure Chart 11',
  'Triforce Chart 7',
  'Treasure Chart 13',
  'Treasure Chart 41',
  'Treasure Chart 29',
  'Treasure Chart 22',
  'Treasure Chart 18',
  'Treasure Chart 30',
  'Treasure Chart 39',
  'Treasure Chart 19',
  'Treasure Chart 8',
  'Treasure Chart 2',
  'Treasure Chart 10',
  'Treasure Chart 26',
  'Treasure Chart 3',
  'Treasure Chart 37',
  'Treasure Chart 27',
  'Treasure Chart 38',
  'Triforce Chart 1',
  'Treasure Chart 21',
  'Treasure Chart 6',
  'Treasure Chart 14',
  'Treasure Chart 34',
  'Treasure Chart 5',
  'Treasure Chart 28',
  'Treasure Chart 35',
  'Triforce Chart 3',
  'Triforce Chart 6',
  'Treasure Chart 1',
  'Treasure Chart 20',
  'Treasure Chart 36',
  'Treasure Chart 23',
  'Treasure Chart 12',
  'Treasure Chart 16',
  'Treasure Chart 4',
  'Treasure Chart 17',
  'Treasure Chart 31',
  'Triforce Chart 5',
  'Treasure Chart 9',
  'Triforce Chart 4',
  'Treasure Chart 40',
  'Triforce Chart 8',
  'Treasure Chart 15',
  'Treasure Chart 32',
  'Treasure Chart 33',
];
const dungeons = [
  'Dragon Roost Cavern',
  'Forbidden Woods',
  'Tower of the Gods',
  'Forsaken Fortress',
  'Earth Temple',
  'Wind Temple',
  "Ganon's Tower"
];
const caves = [
  'Savage Labyrinth',
  'Dragon Roost Island Secret Cave',
  'Fire Mountain Secret Cave',
  'Ice Ring Isle Secret Cave',
  'Cabana Labyrinth',
  'Needle Rock Isle Secret Cave',
  'Angular Isles Secret Cave',
  'Boating Course Secret Cave',
  'Stone Watcher Island Secret Cave',
  'Overlook Island Secret Cave',
  "Bird's Peak Rock Secret Cave",
  'Pawprint Isle Chuchu Cave',
  'Pawprint Isle Wizzrobe Cave',
  'Diamond Steppe Island Warp Maze Cave',
  'Bomb Island Secret Cave',
  'Rock Spire Isle Secret Cave',
  'Shark Island Secret Cave',
  'Cliff Plateau Isles Secret Cave',
  'Horseshoe Island Secret Cave',
  'Star Island Secret Cave'
];
const shortDungeonNames = [
  'DRC',
  'FW',
  'TotG',
  'FF',
  'ET',
  'WT',
  'GT'
];

const regularItems = [
  'Bait Bag',
  'Bombs',
  'Boomerang',
  'Cabana Deed',
  'Command Melody',
  'Deku Leaf',
  'Delivery Bag',
  "Din's Pearl",
  "Earth God's Lyric",
  'Empty Bottle',
  "Farore's Pearl",
  'Ghost Ship Chart',
  'Grappling Hook',
  "Hero's Charm",
  'Hookshot',
  'Hurricane Spin',
  'Iron Boots',
  "Maggie's Letter",
  'Magic Armor',
  'Mirror Shield',
  "Moblin's Letter",
  "Nayru's Pearl",
  'Note to Mom',
  'Power Bracelets',
  'Skull Hammer',
  'Spoils Bag',
  'Telescope',
  'Tingle Tuner',
  "Wind God's Aria"
];
const progressiveItems = [
  'Progressive Bomb Bag',
  'Progressive Bow',
  'Progressive Picto Box',
  'Progressive Quiver',
  'Progressive Sword',
  'Progressive Wallet'
];
// These "items" are just tooltips for some letters.
// They are given to the player at the start of the game.
const letterTooltipItems = {
  beatFW: 'Beat Kalle Demos (Forbidden Woods)',
  beatET: 'Beat Jalhalla (Earth Temple)',
  beatFF: 'Beat Helmaroc King (Forsaken Fortress)'
]

var items = {
  'Tingle Tuner': 0,
  'Wind Waker': 0,
  'Spoils Bag': 0,
  'Grappling Hook': 0,
  'Power Bracelets': 0,
  'Iron Boots': 0,
  'Bait Bag': 0,
  'Boomerang': 0,
  'Hookshot': 0,
  'Delivery Bag': 0,
  'Bombs': 0,
  'Skull Hammer': 0,
  'Deku Leaf': 0,
  "Hero's Shield": 0,
  'Mirror Shield': 0,

  'Triforce Shard': 0,

  "Nayru's Pearl": 0,
  "Din's Pearl": 0,
  "Farore's Pearl": 0,

  "Wind's Requiem": 0,
  'Ballad of Gales': 0,
  'Command Melody': 0,
  "Earth God's Lyric": 0,
  "Wind God's Aria": 0,
  'Song of Passing': 0,

  "Boat's Sail": 0,

  'Note to Mom': 0,
  "Maggie's Letter": 0,
  "Moblin's Letter": 0,
  'Cabana Deed': 0,

  'Tingle Statue': 0,

  'Magic Meter Upgrade': 0,

  'Ghost Ship Chart': 0,

  'Progressive Sword': 0,
  'Progressive Bow': 0,
  'Progressive Wallet': 0,
  'Progressive Picto Box': 0,
  'Empty Bottle': 0,

  'Telescope': 0,
  'Magic Armor': 0,
  "Hero's Charm": 0,
  'Progressive Quiver': 0,
  'Progressive Bomb Bag': 0,
  'Hurricane Spin': 0
};

// the items you get at the start of a new playthrough
var startingItems = {
  // These "items" are just tooltips for some letters.
  'Beat Kalle Demos (Forbidden Woods)',
  'Beat Jalhalla (Earth Temple)',
  'Beat Helmaroc King (Forsaken Fortress)'
};
var impossibleItems = []; // the items that are missing from the item pool and are impossible to obtain
var keys = {
  'DRC Big Key': 0,
  'DRC Small Key': 0,
  'FW Big Key': 0,
  'FW Small Key': 0,
  'TotG Big Key': 0,
  'TotG Small Key': 0,
  'ET Big Key': 0,
  'ET Small Key': 0,
  'WT Big Key': 0,
  'WT Small Key': 0,
};
var locationsChecked = {};
var entrances = {}; // the key is the exit name, the value is the entrance name
var flags = [];
var options = {
  keylunacy: false,
  randomize_entrances: 'Disabled',
  randomize_charts: false,
  sword_mode: 'Start with Sword',
  skip_rematch_bosses: false,
  num_starting_triforce_shards: 0,
  race_mode: false,
  starting_gear: 0
};

var locationsAreProgress = {};
var locationsAreAvailable = {};
