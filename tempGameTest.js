const POKEDEX_GAME_GRADIENT = {
  Red: '#FF1111',
  Green: '#11FF11',
  Blue: '#1111FF',
  Yellow: '#FFD733',
  Gold: '#DAA520',
  Silver: '#C0C0C0',
  Crystal: '#4FD9FF',
  Ruby: '#A00000',
  Sapphire: '#0000A0',
  Emerald: '#00A000',
  FireRed: '#FF7327',
  LeafGreen: '#00DD00',
  Diamond: '#5060B0',
  Pearl: '#FF99CC',
  Platinum: '#999999',
  HeartGold: '#B69E00',
  SoulSilver: '#C0C0E1',
  Black: '#444444',
  White: '#E1E1E1',
  'Black 2': '#444444',
  'White 2': '#E1E1E1',
  X: '#87CEEB',
  Y: '#B22222',
  'Omega Ruby': '#A00000',
  'Alpha Sapphire': '#0000A0',
  Sun: '#FF8C00',
  Moon: '#4169E1',
  'Ultra Sun': '#FF8C00',
  'Ultra Moon': '#4169E1',
  "Let's Go Pikachu": '#FFD700',
  "Let's Go Eevee": '#D2B48C',
  Sword: '#1E90FF',
  Shield: '#CD5C5C',
  'Sword Isle of Armor': '#F4A460',
  'Shield Isle of Armor': '#F4A460',
  'Sword Crown Tundra': '#90EE90',
  'Shield Crown Tundra': '#90EE90',
  'Brilliant Diamond': '#4F97D3',
  'Shining Pearl': '#F2A2E8',
  'Legends: Arceus': '#4682B4',
  Scarlet: '#FF2400',
  Violet: '#8F00FF',
  'Scarlet Teal Mask': '#008080',
  'Violet Teal Mask': '#008080',
  'Scarlet Indigio Disk': '#4B0082',
  'Violet Indigio Disk': '#4B0082',
};

function normalizeGameKey(key) {
  return String(key || '')
    .trim()
    .toLowerCase()
    .replace(/[’'"“”`]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\b(version|edition|game|pok[eé]mon)\b/g, '')
    .trim();
}

function getGameGradientColor(gameName) {
  if (!gameName) return undefined;
  const trimmed = String(gameName).trim();
  if (POKEDEX_GAME_GRADIENT[trimmed]) return POKEDEX_GAME_GRADIENT[trimmed];
  const normalized = normalizeGameKey(trimmed);
  if (!normalized) return undefined;

  const normalizedMatch = Object.entries(POKEDEX_GAME_GRADIENT).find(([key]) => normalizeGameKey(key) === normalized);
  if (normalizedMatch) return normalizedMatch[1];

  return undefined;
}

const tests = ['Red','Blue','Yellow','FireRed','LeafGreen','Alpha Sapphire','Shining Pearl','Lets Go Pikachu','Let’s Go Pikachu','Brilliant Diamond','X','Y','x','y','  X  ','  Y  '];
for (const test of tests) {
  console.log(JSON.stringify(test), normalizeGameKey(test), getGameGradientColor(test));
}
