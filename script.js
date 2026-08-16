const SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pub?gid=1685697799&single=true&output=csv';
const SHEET_HTML = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pubhtml/sheet?headers=false&gid=1685697799';
const POKEDEX_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pub?gid=0&single=true&output=csv';
const POKEDEX_SHEET_HTML = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pubhtml/sheet?headers=false&gid=0';
const MOVES_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pub?gid=1813387196&single=true&output=csv';
const MOVES_SHEET_HTML = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pubhtml/sheet?headers=false&gid=1813387196';

const TYPE_COLORS = {
  Normal: '#A8A77A',
  Fire: '#EE8130',
  Water: '#6390F0',
  Electric: '#F7D02C',
  Grass: '#7AC74C',
  Ice: '#96D9D6',
  Fighting: '#C22E28',
  Poison: '#A33EA1',
  Ground: '#E2BF65',
  Flying: '#A98FF3',
  Psychic: '#F95587',
  Bug: '#A6B91A',
  Rock: '#B6A136',
  Ghost: '#735797',
  Dragon: '#6F35FC',
  Dark: '#705746',
  Steel: '#B7B7CE',
  Fairy: '#D685AD'
};

const TYPE_ORDER = Object.keys(TYPE_COLORS);
const TYPE_EFFECTIVENESS = {
  Normal: { Rock: 0.5, Ghost: 0, Steel: 0.5 },
  Fire: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 2, Bug: 2, Rock: 0.5, Dragon: 0.5, Steel: 2 },
  Water: { Fire: 2, Water: 0.5, Grass: 0.5, Dragon: 0.5, Ground: 2, Rock: 2 },
  Electric: { Water: 2, Electric: 0.5, Grass: 0.5, Dragon: 0.5, Ground: 0, Flying: 2, Steel: 0.5 },
  Grass: { Fire: 0.5, Water: 2, Grass: 0.5, Poison: 0.5, Ground: 2, Flying: 0.5, Bug: 0.5, Rock: 2, Dragon: 0.5, Steel: 0.5 },
  Ice: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 0.5, Ground: 2, Flying: 2, Dragon: 2, Steel: 0.5 },
  Fighting: { Normal: 2, Ice: 2, Poison: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Rock: 2, Ghost: 0, Dark: 2, Steel: 2, Fairy: 0.5 },
  Poison: { Grass: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5, Steel: 0, Fairy: 2 },
  Ground: { Fire: 2, Electric: 2, Grass: 0.5, Bug: 0.5, Flying: 0, Poison: 2, Rock: 2, Steel: 2 },
  Flying: { Electric: 0.5, Grass: 2, Fighting: 2, Bug: 2, Rock: 0.5, Steel: 0.5 },
  Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5, Dark: 0, Steel: 0.5 },
  Bug: { Fire: 0.5, Grass: 2, Fighting: 0.5, Poison: 0.5, Flying: 0.5, Psychic: 2, Ghost: 0.5, Dark: 2, Steel: 0.5, Fairy: 0.5 },
  Rock: { Fire: 2, Ice: 2, Fighting: 0.5, Ground: 0.5, Flying: 2, Bug: 2, Steel: 0.5 },
  Ghost: { Normal: 0, Psychic: 0.5, Ghost: 2, Dark: 0.5 },
  Dragon: { Dragon: 2, Steel: 0.5, Fairy: 0 },
  Dark: { Fighting: 0.5, Psychic: 2, Ghost: 2, Fairy: 0.5 },
  Steel: { Fire: 0.5, Water: 0.5, Electric: 0.5, Ice: 2, Rock: 2, Steel: 0.5, Fairy: 2 },
  Fairy: { Fire: 0.5, Fighting: 2, Poison: 0.5, Dragon: 2, Dark: 2, Steel: 0.5 }
};

const elements = {
  searchInput: document.getElementById('searchInput'),
  typeButtons: document.getElementById('typeButtons'),
  pokemonList: document.getElementById('pokemonList'),
  listCount: document.getElementById('listCount'),
  status: document.getElementById('status'),
  details: document.getElementById('details'),
  randomButton: document.getElementById('randomButton')
};

let allPokemon = [];
let filteredPokemon = [];
let activeType = null;
let selectedPokemon = null;
let selectedPokedexGen = 1;
let selectedMoveCategory = 'levelUp';
let groupsByDex = {};
let movesLookup = {};
let movePopupHideTimer = null;
const GEN_RANGES = {
  1: [1, 151],
  2: [152, 251],
  3: [252, 386],
  4: [387, 493],
  5: [494, 649],
  6: [650, 721],
  7: [722, 809],
  8: [810, 898],
  9: [899, 1008]
};

window.addEventListener('DOMContentLoaded', () => {
  initialize();
});

async function initialize() {
  elements.status.textContent = 'Loading sheet data from Google...';
  try {
    const [rawRows, pokedexRows, movesRows] = await Promise.all([loadData(), loadPokedexData(), loadMovesData()]);
    allPokemon = buildPokemon(rawRows);
    const pokedexLookup = buildPokedexLookup(pokedexRows);
    movesLookup = buildMovesLookup(movesRows);
    allPokemon.forEach((pokemon) => {
      pokemon.pokedexEntries = pokedexLookup[pokemon.formKey] || pokedexLookup[normalizePokemonName(pokemon.name)] || [];
    });
    groupsByDex = buildGroups(allPokemon);
    processGroups(groupsByDex);
    filteredPokemon = Object.values(groupsByDex).map((group) => group[0]);
    renderTypeFilters(allPokemon);
    renderList(filteredPokemon);
    if (filteredPokemon.length) {
      selectPokemon(filteredPokemon[0]);
    }
    elements.status.textContent = `Loaded ${allPokemon.length} Pokémon.`;
  } catch (error) {
    console.error(error);
    elements.status.textContent = 'Unable to load sheet data. Check network access or sheet visibility.';
    elements.details.innerHTML = `<div class="details-placeholder"><h2>Unable to load data</h2><p>Please ensure the Google Sheet is published publicly or try again later.</p></div>`;
  }

  elements.searchInput.addEventListener('input', handleSearch);
  const clearFilters = document.getElementById('clearFiltersButton');
  if (clearFilters) {
    clearFilters.addEventListener('click', resetFilters);
  }
  elements.randomButton.addEventListener('click', () => {
    if (filteredPokemon.length === 0) return;
    const random = filteredPokemon[Math.floor(Math.random() * filteredPokemon.length)];
    selectPokemon(random);
    scrollToSelected();
  });
};

function resetFilters() {
  elements.searchInput.value = '';

  const typeButtons = document.querySelectorAll('#typeButtons .type-button');
  typeButtons.forEach((btn, index) => {
    btn.classList.remove('selected', 'active');
    if (index === 0) btn.classList.add('active');
  });
  const typeButtonsDiv = document.getElementById('typeButtons');
  if (typeButtonsDiv) typeButtonsDiv.classList.remove('has-selection');

  const logicAnd = document.getElementById('logicAnd');
  const logicOr = document.getElementById('logicOr');
  if (logicAnd && logicOr) {
    logicOr.classList.add('active');
    logicAnd.classList.remove('active');
  }

  document.querySelectorAll('input[name="typingFilter"]').forEach((input) => {
    input.checked = input.value === 'any';
  });

  document.querySelectorAll('.generation-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.generation === 'any');
  });

  document.querySelectorAll('.filter-panel input[type="number"]').forEach((input) => {
    input.value = '';
  });

  applyFilter();
}

async function loadData() {
  try {
    const response = await fetch(SHEET_CSV);
    if (!response.ok) throw new Error('CSV fetch failed');
    const text = await response.text();
    return parseCSV(text);
  } catch (csvError) {
    console.warn('CSV fetch failed, trying HTML fallback', csvError);
    const response = await fetch(SHEET_HTML);
    if (!response.ok) throw new Error('HTML fetch failed');
    const htmlText = await response.text();
    return parseSheetHTML(htmlText);
  }
}

async function loadPokedexData() {
  try {
    const response = await fetch(POKEDEX_SHEET_CSV);
    if (!response.ok) throw new Error('Pokedex CSV fetch failed');
    const text = await response.text();
    return parseCSV(text);
  } catch (csvError) {
    console.warn('Pokedex CSV fetch failed, trying HTML fallback', csvError);
    const response = await fetch(POKEDEX_SHEET_HTML);
    if (!response.ok) throw new Error('Pokedex sheet HTML fetch failed');
    const htmlText = await response.text();
    return parseSheetHTML(htmlText);
  }
}

async function loadMovesData() {
  try {
    const response = await fetch(MOVES_SHEET_CSV);
    if (!response.ok) throw new Error('Moves CSV fetch failed');
    const text = await response.text();
    return parseCSV(text);
  } catch (csvError) {
    console.warn('Moves CSV fetch failed, trying HTML fallback', csvError);
    const response = await fetch(MOVES_SHEET_HTML);
    if (!response.ok) throw new Error('Moves sheet HTML fetch failed');
    const htmlText = await response.text();
    return parseSheetHTML(htmlText);
  }
}

function buildPokedexLookup(rows) {
  const headerIndex = rows.findIndex((row) => row[0] === 'Dex #' && row[1] === 'Main Dex' && row[2] === 'Pokemon');
  if (headerIndex === -1) return {};
  return rows.slice(headerIndex + 1).reduce((lookup, row) => {
    const dexNumber = String(row[0] || '').trim();
    const mainDex = String(row[1] || '').trim();
    const pokemonName = String(row[2] || '').trim();
    if (!dexNumber || !pokemonName) return lookup;

    const entries = POKEDEX_ENTRY_COLUMNS.reduce((acc, column) => {
      const entryText = String(row[column.index] || '').trim();
      if (entryText && entryText.toLowerCase() !== 'undefined') {
        acc.push({ game: column.game, generation: column.generation, entry: entryText });
      }
      return acc;
    }, []);

    if (entries.length) {
      const formKey = buildPokedexLookupKey(dexNumber, mainDex, pokemonName);
      const nameKey = normalizePokemonName(pokemonName);
      lookup[formKey] = entries;
      if (!lookup[nameKey]) {
        lookup[nameKey] = entries;
      }
    }
    return lookup;
  }, {});
}

function parseCSV(text) {
  const rows = [];
  let current = [];
  let buffer = '';
  let insideQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (insideQuotes) {
      if (char === '"') {
        if (next === '"') {
          buffer += '"';
          i += 1;
        } else {
          insideQuotes = false;
        }
      } else {
        buffer += char;
      }
    } else {
      if (char === '"') {
        insideQuotes = true;
      } else if (char === ',') {
        current.push(buffer.trim());
        buffer = '';
      } else if (char === '\r') {
        continue;
      } else if (char === '\n') {
        current.push(buffer.trim());
        rows.push(current);
        current = [];
        buffer = '';
      } else {
        buffer += char;
      }
    }
  }
  if (buffer.length || current.length) {
    current.push(buffer.trim());
    rows.push(current);
  }
  return rows.map(row => row.map(cell => cell.replace(/\s+/g, ' ').trim()));
}

function parseSheetHTML(htmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');
  const table = doc.querySelector('table.waffle');
  if (!table) throw new Error('Unable to parse HTML sheet');
  const rows = Array.from(table.querySelectorAll('tr')).map((row) =>
    Array.from(row.querySelectorAll('th,td')).map((cell) => cell.textContent.replace(/\s+/g, ' ').trim())
  );
  return rows;
}

function getRowValue(row, index) {
  return index >= 0 ? row[index] || '' : '';
}

const POKEDEX_GAME_COLUMNS = [
  { index: 6, game: 'Red', generation: 1 },
  { index: 7, game: 'Green', generation: 1 },
  { index: 8, game: 'Blue', generation: 1 },
  { index: 9, game: 'Yellow', generation: 1 },
  { index: 10, game: 'Gold', generation: 2 },
  { index: 11, game: 'Silver', generation: 2 },
  { index: 12, game: 'Crystal', generation: 2 },
  { index: 13, game: 'Ruby', generation: 3 },
  { index: 14, game: 'Sapphire', generation: 3 },
  { index: 15, game: 'Emerald', generation: 3 },
  { index: 16, game: 'FireRed', generation: 3 },
  { index: 17, game: 'LeafGreen', generation: 3 },
  { index: 18, game: 'Diamond', generation: 4 },
  { index: 19, game: 'Pearl', generation: 4 },
  { index: 20, game: 'Platinum', generation: 4 },
  { index: 21, game: 'HeartGold', generation: 4 },
  { index: 22, game: 'SoulSilver', generation: 4 },
  { index: 23, game: 'Black', generation: 5 },
  { index: 24, game: 'White', generation: 5 },
  { index: 25, game: 'Black 2', generation: 5 },
  { index: 26, game: 'White 2', generation: 5 },
  { index: 27, game: 'X', generation: 6 },
  { index: 28, game: 'Y', generation: 6 },
  { index: 29, game: 'Omega Ruby', generation: 6 },
  { index: 30, game: 'Alpha Sapphire', generation: 6 },
  { index: 31, game: 'Sun', generation: 7 },
  { index: 32, game: 'Moon', generation: 7 },
  { index: 33, game: 'Ultra Sun', generation: 7 },
  { index: 34, game: 'Ultra Moon', generation: 7 },
  { index: 35, game: 'Let\'s Go Pikachu', generation: 7 },
  { index: 36, game: 'Let\'s Go Eevee', generation: 7 },
  { index: 37, game: 'Sword', generation: 8 },
  { index: 38, game: 'Shield', generation: 8 },
  { index: 39, game: 'Sword Isle of Armor', generation: 8 },
  { index: 40, game: 'Shield Isle of Armor', generation: 8 },
  { index: 41, game: 'Sword Crown Tundra', generation: 8 },
  { index: 42, game: 'Shield Crown Tundra', generation: 8 },
  { index: 43, game: 'Brilliant Diamond', generation: 8 },
  { index: 44, game: 'Shining Pearl', generation: 8 },
  { index: 45, game: 'Legends: Arceus', generation: 8 },
  { index: 46, game: 'Scarlet', generation: 9 },
  { index: 47, game: 'Violet', generation: 9 },
  { index: 48, game: 'Scarlet Teal Mask', generation: 9 },
  { index: 49, game: 'Violet Teal Mask', generation: 9 },
  { index: 50, game: 'Scarlet Indigio Disk', generation: 9 },
  { index: 51, game: 'Violet Indigio Disk', generation: 9 },
  { index: 52, game: 'Legends: ZA', generation: 9 }, 
  { index: 53, game: 'ZA Mega Dimension', generation: 9 }
];

/* UPDATE THIS IF POKEDEX SHEET CHANGES (GEN SHEETS */

const POKEDEX_ENTRY_COLUMNS = [
  { index: 3, game: 'Red', generation: 1 },
  { index: 4, game: 'Green', generation: 1 },
  { index: 5, game: 'Blue', generation: 1 },
  { index: 6, game: 'Yellow', generation: 1 },
  { index: 7, game: 'Gold', generation: 2 },
  { index: 8, game: 'Silver', generation: 2 },
  { index: 9, game: 'Crystal', generation: 2 },
  { index: 10, game: 'Ruby', generation: 3 },
  { index: 11, game: 'Sapphire', generation: 3 },
  { index: 12, game: 'Emerald', generation: 3 },
  { index: 13, game: 'FireRed', generation: 3 },
  { index: 14, game: 'LeafGreen', generation: 3 },
  { index: 15, game: 'Diamond', generation: 4 },
  { index: 16, game: 'Pearl', generation: 4 },
  { index: 17, game: 'Platinum', generation: 4 },
  { index: 18, game: 'HeartGold', generation: 4 },
  { index: 19, game: 'SoulSilver', generation: 4 },
  { index: 20, game: 'Black', generation: 5 },
  { index: 21, game: 'White', generation: 5 },
  { index: 22, game: 'Black 2', generation: 5 },
  { index: 23, game: 'White 2', generation: 5 },
  { index: 24, game: 'X', generation: 6 },
  { index: 25, game: 'Y', generation: 6 },
  { index: 26, game: 'Omega Ruby', generation: 6 },
  { index: 27, game: 'Alpha Sapphire', generation: 6 },
  { index: 28, game: 'Sun', generation: 7 },
  { index: 29, game: 'Moon', generation: 7 },
  { index: 30, game: 'Ultra Sun', generation: 7 },
  { index: 31, game: 'Ultra Moon', generation: 7 },
  { index: 32, game: 'Let\'s Go Pikachu', generation: 7 },
  { index: 33, game: 'Let\'s Go Eevee', generation: 7 },
  { index: 34, game: 'Sword', generation: 8 },
  { index: 35, game: 'Shield', generation: 8 },
  { index: 36, game: 'Brilliant Diamond', generation: 8 },
  { index: 37, game: 'Shining Pearl', generation: 8 },
  { index: 38, game: 'Pokemon Legends: Arceus', generation: 8 },
  { index: 39, game: 'Scarlet', generation: 9 },
  { index: 40, game: 'Violet', generation: 9 },
  { index: 41, game: 'Legends: ZA', generation: 9 }
];

const DLC_GAME_NAMES = new Set([
  'Sword Isle of Armor',
  'Shield Isle of Armor',
  'Sword Crown Tundra',
  'Shield Crown Tundra',
  'Scarlet Teal Mask',
  'Violet Teal Mask',
  'Scarlet Indigio Disk',
  'Violet Indigio Disk',
  'ZA Mega Dimension'
]);

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
  'Legends: ZA': '#39936c',
  'ZA': '#39936c',
  'ZA Mega Dimension': '#aebb52'
};

function hexToRgba(hex, alpha = 0.25) {
  const normalized = String(hex || '').trim().replace('#', '');
  const value = normalized.length === 3
    ? normalized.split('').map((char) => char + char).join('')
    : normalized;

  if (!/^[0-9A-Fa-f]{6}$/.test(value)) {
    return `rgba(148, 163, 184, ${alpha})`;
  }

  const num = Number.parseInt(value, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function hslToHex(h, s, l) {
  const saturation = s / 100;
  const lightness = l / 100;
  const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = lightness - c / 2;
  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const toHex = (value) => {
    const hex = Math.round((value + m) * 255).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

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

function normalizePokemonName(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[’'"“”`]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildPokedexLookupKey(number, mainDex, name) {
  const normalizedName = normalizePokemonName(name);
  const dex = String(number || '').trim();
  const main = String(mainDex || '').trim();
  return `${normalizedName}|${main}|${dex}`;
}

function buildMovesLookup(rows) {
  const startIndex = rows.findIndex((row) => {
    const candidate = String(row[1] || '').trim();
    return /^\d+$/.test(candidate);
  });

  const dataRows = startIndex >= 0 ? rows.slice(startIndex) : rows;
  return dataRows.reduce((lookup, row) => {
    const id = String(row[1] || '').trim();
    if (!id || !/^\d+$/.test(id)) return lookup;

    const minPP = String(row[4] || '').trim();
    const maxPP = String(row[5] || '').trim();
    lookup[id] = {
      id,
      name: String(row[0] || '').trim(),
      type: String(row[2] || '').trim(),
      category: String(row[3] || '').trim(),
      minPP,
      maxPP,
      power: String(row[6] || '').trim(),
      accuracy: String(row[7] || '').trim(),
      critRate: String(row[8] || '').trim(),
      priority: String(row[9] || '').trim(),
      target: String(row[10] || '').trim(),
      effect: String(row[11] || '').trim(),
      secondaryEffect: String(row[11] || '').trim(),
      secondaryStats: String(row[12] || '').trim(),
      secondaryChance: String(row[13] || '').trim()
    };
    return lookup;
  }, {});
}

function getGameGradientColor(gameName) {
  if (!gameName) return undefined;
  const trimmed = String(gameName).trim();
  if (POKEDEX_GAME_GRADIENT[trimmed]) return POKEDEX_GAME_GRADIENT[trimmed];
  const normalized = normalizeGameKey(trimmed);
  if (!normalized) return undefined;

  const normalizedMatch = Object.entries(POKEDEX_GAME_GRADIENT).find(([key]) => normalizeGameKey(key) === normalized);
  if (normalizedMatch) return normalizedMatch[1];

  const hash = Array.from(normalized).reduce((acc, char) => acc * 31 + char.charCodeAt(0), 0);
  const hue = Math.abs(hash) % 360;
  const saturation = 55 + (Math.abs(hash) % 20);
  const lightness = 45 + (Math.abs(hash) % 15);
  return hslToHex(hue, saturation, lightness);
}

function hexIsLight(hex) {
  const normalized = String(hex || '').trim().replace('#', '');
  const value = normalized.length === 3
    ? normalized.split('').map((char) => char + char).join('')
    : normalized;
  if (!/^[0-9A-Fa-f]{6}$/.test(value)) return false;
  const num = Number.parseInt(value, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 180;
}

function parseHeightFeetInches(rawValue) {
  if (!rawValue) return null;
  const raw = String(rawValue).trim();
  const match = raw.match(/^\s*(\d+)(?:\s*['’′]\s*(\d+)?\s*(?:["”″])?\s*)?$/);
  if (!match) return null;
  const feet = Number(match[1]);
  const inches = Number(match[2] || 0);
  return Number.isFinite(feet) ? feet * 12 + inches : null;
}

function formatHeightFeetInches(inches) {
  const value = Number(inches);
  if (!Number.isFinite(value) || value <= 0) return '';
  const feet = Math.floor(value / 12);
  const remainder = Math.round(value % 12);
  return remainder ? `${feet}'${remainder}"` : `${feet}'`;
}

function buildPokemon(rows) {
  const headerIndex = rows.findIndex((row) => row[0] === 'Dex #' && row[2] === 'Pokemon');
  if (headerIndex === -1) throw new Error('Header row not found');
  const headerRow = rows[headerIndex];
  const dataStartIndex = headerIndex + 1;

/*   CHANGE THESE NUMBER VALUES IF DEX SPREADSHEET CHANGES    */

  const gameColumnsStart = 6;
  const baseStatIndices = [54, 55, 56, 57, 58, 59];
  const evIndices = [82, 83, 84, 85, 86, 87];
  const genderIndices = [89, 90];
  const typeStart = 91;
  const movesetIndex = 109;
  const moveCategoryIndices = {
    levelUp: 109,
    tm: 110,
    egg: 111,
    evolution: 112,
    reminder: 113
  };

  const effectivenessIndices = [];
  const typeNames = [];

  for (let i = typeStart; i < (movesetIndex >= 0 ? movesetIndex : headerRow.length); i += 1) {
    if (headerRow[i]) {
      typeNames.push(headerRow[i]);
      effectivenessIndices.push(i);
    }
  }

  const gameColumns = [];
  for (let i = gameColumnsStart; i < baseStatIndices[0]; i += 1) {
    const raw = (headerRow[i] || 'Game').trim();
    const label = raw.replace(/\s+\d+$/, '');
    const canonicalGame = POKEDEX_GAME_COLUMNS.find((column) => column.index === i)?.game || label;
    gameColumns.push({ index: i, label, raw, game: canonicalGame });
  }

  const buildPokemonEntry = (row) => {
    const number = row[0] || '';
    const mainDex = row[1] || '';
    const name = row[2] || '';
    const classification = row[3] || '';
    const type1 = row[4] || '';
    const type2 = row[5] || '';
    const types = type2 ? [type1, type2] : [type1];
    const color = row[61] || '';
    const shape = row[62] || '';
    const abilities = [row[64] || '', row[65] || ''].filter(Boolean);
    const hiddenAbility = row[66] || '';
    const evolutionMethod = row[67] || ''; // Not used yet
    const catchRate = row[68] || '';
    const eggGroup1 = row[70] || '';
    const eggGroup2 = row[71] || '';
    const eggCycles = row[72] || '';
    const eggSteps = row[73] || ''; // Not used yet
    const levelRate = row[74] || '';
    const totalXP = row[75] || ''; // Not used yet
    const heightM = row[76] || '';
    const heightFtRaw = row[77] || '';
    const weightKg = row[78] || '';
    const weightLb = row[79] || '';
    const baseFriendship = row[80] || '';
    const xp = row[81] || '';
    const gender = {
      male: row[89] || '',
      female: row[90] || ''
    };


/*   END OF SPREADSHEET COLUMN VALUES    */


    const baseStats = baseStatIndices.map((idx) => Number(getRowValue(row, idx)));
    const evStats = evIndices.map((idx) => Number(getRowValue(row, idx)));
    const baseTotal = baseStats.reduce((sum, stat) => sum + stat, 0);
    const evTotal = evStats.reduce((sum, stat) => sum + stat, 0);
    const heightFt = parseHeightFeetInches(heightFtRaw);
    const formId = mainDex || number;
    const isPrimary = Boolean(mainDex);
    const formKey = buildPokedexLookupKey(number, mainDex, name);
    const moves = {
      levelUp: getRowValue(row, moveCategoryIndices.levelUp),
      tm: getRowValue(row, moveCategoryIndices.tm),
      egg: getRowValue(row, moveCategoryIndices.egg),
      evolution: getRowValue(row, moveCategoryIndices.evolution),
      reminder: getRowValue(row, moveCategoryIndices.reminder)
    };
    const availability = gameColumns.map((game) => {
      const value = getRowValue(row, game.index).toLowerCase();
      return {
        label: game.label,
        status: value === 'true' ? 'available' : value === 'false' ? 'transfer' : 'blank',
        raw: value,
        gameName: game.game
      };
    });

    const effectiveness = effectivenessIndices.map((idx, index) => ({
      type: typeNames[index] || headerRow[idx],
      value: getRowValue(row, idx)
    }));

    return {
      row,
      number,
      mainDex,
      formId,
      isPrimary,
      group: number,
      name,
      classification,
      types,
      baseStats: {
        HP: baseStats[0],
        ATK: baseStats[1],
        DEF: baseStats[2],
        SpA: baseStats[3],
        SpD: baseStats[4],
        SPE: baseStats[5],
        total: baseTotal
      },
      evStats: {
        HP: evStats[0],
        ATK: evStats[1],
        DEF: evStats[2],
        SpA: evStats[3],
        SpD: evStats[4],
        SPE: evStats[5],
        total: evTotal
      },
      gender,
      availability,
      effectiveness,
      abilities,
      hiddenAbility,
      evolutionMethod,
      eggGroup1,
      eggGroup2,
      eggCycles,
      eggSteps,
      totalXP,
      ability: abilities[0] || 'Unknown',
      catchRate,
      levelRate,
      baseFriendship,
      xp,
      shape,
      color,
      heightM,
      heightFtRaw,
      heightFt,
      weightKg,
      weightLb,
      moves
    };
  };

  return rows
    .slice(dataStartIndex)
    .filter((row) => row.length > 3 && row[0] && !isNaN(parseInt(row[0], 10)))
    .map(buildPokemonEntry);
}

function buildGroups(pokemonList) {
  return pokemonList.reduce((groups, pokemon) => {
    const key = pokemon.group;
    if (!groups[key]) groups[key] = [];
    groups[key].push(pokemon);
    return groups;
  }, {});
}

function processGroups(groups) {
  Object.values(groups).forEach((group) => {
    group.sort((a, b) => Number(b.isPrimary) - Number(a.isPrimary));
    group.forEach((pokemon) => {
      pokemon.groupForms = group;
    });
  });
}

function renderTypeFilters(pokemonList) {
  const availableTypes = [...new Set(pokemonList.flatMap((pokemon) => pokemon.types))].filter(Boolean).sort();

  const typeButtonsDiv = document.getElementById('typeButtons');
  typeButtonsDiv.innerHTML = '';

  // All button clears selection
  const allButton = document.createElement('button');
  allButton.type = 'button';
  allButton.className = 'type-button active';
  allButton.textContent = 'All Types';
  allButton.addEventListener('click', () => {
    document.querySelectorAll('#typeButtons .type-button').forEach((btn) => btn.classList.remove('selected'));
    document.querySelectorAll('#typeButtons .type-button').forEach((btn) => btn.classList.remove('active'));
    allButton.classList.add('active');
    typeButtonsDiv.classList.remove('has-selection');
    applyFilter();
  });
  typeButtonsDiv.appendChild(allButton);

  availableTypes.forEach((type) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'type-button';
    button.textContent = type;
    button.style.background = TYPE_COLORS[type] || '#64748b';
    button.addEventListener('click', () => {
      // Toggle selection (multi-select)
      const isSelected = button.classList.toggle('selected');
      if (isSelected) {
        button.classList.add('active');
        allButton.classList.remove('active');
      } else {
        button.classList.remove('active');
      }
      const anySelected = document.querySelectorAll('#typeButtons .type-button.selected').length > 0;
      typeButtonsDiv.classList.toggle('has-selection', anySelected);
      if (!anySelected) {
        allButton.classList.add('active');
      }
      applyFilter();
    });
    typeButtonsDiv.appendChild(button);
  });

  // Logic buttons
  const logicAnd = document.getElementById('logicAnd');
  const logicOr = document.getElementById('logicOr');
  if (logicAnd && logicOr) {
    logicAnd.addEventListener('click', () => { logicAnd.classList.add('active'); logicOr.classList.remove('active'); applyFilter(); });
    logicOr.addEventListener('click', () => { logicOr.classList.add('active'); logicAnd.classList.remove('active'); applyFilter(); });
  }

  // Filter tab switching
  const tabButtons = document.querySelectorAll('.filter-tab');
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((tab) => tab.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('.filter-panel').forEach((panel) => (panel.style.display = 'none'));
      const panel = document.getElementById(`panel-${button.dataset.panel}`);
      if (panel) panel.style.display = '';
    });
  });

  // Generation buttons
  const generationButtons = document.querySelectorAll('.generation-button');
  generationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      generationButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      applyFilter();
    });
  });

  // Populate base stat inputs if empty
  const statsGrid = document.querySelector('.stats-grid');
  const stats = ['HP','ATK','DEF','SpA','SpD','SPE','TOTAL'];
  if (statsGrid && statsGrid.children.length === 0) {
    stats.forEach((stat) => {
      const wrap = document.createElement('div');
      wrap.className = 'stat-filter-row';
      wrap.innerHTML = `<label>${stat} min <input id="stat-${stat}-min" type="number" /></label><label>${stat} max <input id="stat-${stat}-max" type="number" /></label>`;
      statsGrid.appendChild(wrap);
    });
  }

  // Populate yields grid
  const yieldsGrid = document.querySelector('.yields-grid');
  const evs = ['HP','ATK','DEF','SpA','SpD','SPE'];
  if (yieldsGrid && yieldsGrid.children.length === 0) {
    evs.forEach((ev) => {
      const wrap = document.createElement('div');
      wrap.className = 'yield-filter-row';
      wrap.innerHTML = `<label>${ev} EV min <input id="ev-${ev}-min" type="number" /></label><label>${ev} EV max <input id="ev-${ev}-max" type="number" /></label>`;
      yieldsGrid.appendChild(wrap);
    });
    const xpWrap = document.createElement('div');
    xpWrap.innerHTML = `<label>Base XP min <input id="baseXpMin" type="number" /></label><label>Base XP max <input id="baseXpMax" type="number" /></label>`;
    yieldsGrid.appendChild(xpWrap);
    const frWrap = document.createElement('div');
    frWrap.innerHTML = `<label>Base Friendship min <input id="baseFriendMin" type="number" /></label><label>Base Friendship max <input id="baseFriendMax" type="number" /></label>`;
    yieldsGrid.appendChild(frWrap);
  }

  // Attach listeners for inputs to re-filter on change
  document.querySelectorAll('.type-filter-card input, .type-filter-card select, .type-filter-card .type-button').forEach((el) => {
    el.addEventListener('change', () => applyFilter());
    el.addEventListener('input', () => applyFilter());
  });
}

function handleSearch() {
  applyFilter();
}

function applyFilter() {
  const query = elements.searchInput.value.trim().toLowerCase();
  const all = Object.values(groupsByDex).map((group) => group[0]);

  // selected types
  const selectedTypeButtons = Array.from(document.querySelectorAll('#typeButtons .type-button.selected'));
  const selectedTypes = selectedTypeButtons.map((b) => b.textContent.trim());
  const logicAnd = document.getElementById('logicAnd') && document.getElementById('logicAnd').classList.contains('active');

  // typing filter
  const typingVal = (document.querySelector('input[name="typingFilter"]:checked') || {}).value || 'any';

  // generation
  const genSel = document.querySelector('.generation-button.active') ? document.querySelector('.generation-button.active').dataset.generation : 'any';

  // helper to parse numeric inputs
  const parseVal = (v) => {
    if (v === null || v === undefined || String(v).trim() === '') return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };

  // build stat filters
  const statNames = ['HP','ATK','DEF','SpA','SpD','SPE','TOTAL'];
  const statFilters = {};
  statNames.forEach((s) => {
    const min = document.getElementById(`stat-${s}-min`);
    const max = document.getElementById(`stat-${s}-max`);
    statFilters[s] = { min: min ? parseVal(min.value) : null, max: max ? parseVal(max.value) : null };
  });

  // yields filters
  const evNames = ['HP','ATK','DEF','SpA','SpD','SPE'];
  const evFilters = {};
  evNames.forEach((e) => {
    const min = document.getElementById(`ev-${e}-min`);
    const max = document.getElementById(`ev-${e}-max`);
    evFilters[e] = { min: min ? parseVal(min.value) : null, max: max ? parseVal(max.value) : null };
  });
  const baseXpMin = parseVal(document.getElementById('baseXpMin') ? document.getElementById('baseXpMin').value : null);
  const baseXpMax = parseVal(document.getElementById('baseXpMax') ? document.getElementById('baseXpMax').value : null);
  const baseFriendMin = parseVal(document.getElementById('baseFriendMin') ? document.getElementById('baseFriendMin').value : null);
  const baseFriendMax = parseVal(document.getElementById('baseFriendMax') ? document.getElementById('baseFriendMax').value : null);

  // extra filters
  const heightMin = parseVal(document.getElementById('heightMin') ? document.getElementById('heightMin').value : null);
  const heightMax = parseVal(document.getElementById('heightMax') ? document.getElementById('heightMax').value : null);
  const weightMin = parseVal(document.getElementById('weightMin') ? document.getElementById('weightMin').value : null);
  const weightMax = parseVal(document.getElementById('weightMax') ? document.getElementById('weightMax').value : null);
  const catchMin = parseVal(document.getElementById('catchMin') ? document.getElementById('catchMin').value : null);
  const catchMax = parseVal(document.getElementById('catchMax') ? document.getElementById('catchMax').value : null);
  const dexMin = parseVal(document.getElementById('dexMin') ? document.getElementById('dexMin').value : null);
  const dexMax = parseVal(document.getElementById('dexMax') ? document.getElementById('dexMax').value : null);

  filteredPokemon = all.filter((pokemon) => {
    const groupForms = pokemon.groupForms || [pokemon];

    // search query match
    const nameMatch = groupForms.some((form) => form.name.toLowerCase().includes(query));
    const numberMatch = String(pokemon.number || '').toLowerCase().includes(query);
    const typeMatch = groupForms.some((form) => form.types.some((type) => (type || '').toLowerCase().includes(query)));
    if (!(nameMatch || numberMatch || typeMatch || !query)) return false;

    // type filter
    if (selectedTypes.length > 0) {
      if (logicAnd) {
        // every selected type must appear in at least one form
        const allMatch = selectedTypes.every((t) => groupForms.some((form) => form.types.includes(t)));
        if (!allMatch) return false;
      } else {
        const anyMatch = selectedTypes.some((t) => groupForms.some((form) => form.types.includes(t)));
        if (!anyMatch) return false;
      }
    }

    // typing (mono/dual)
    if (typingVal === 'monotype') {
      const hasOne = (pokemon.types || []).filter(Boolean).length === 1;
      if (!hasOne) return false;
    } else if (typingVal === 'dual') {
      const hasTwo = (pokemon.types || []).filter(Boolean).length >= 2;
      if (!hasTwo) return false;
    }

    // generation
    if (genSel && genSel !== 'any') {
      const rng = GEN_RANGES[Number(genSel)];
      const dexNum = Number(String(pokemon.number).replace(/^0+/, '')) || 0;
      if (!(dexNum >= rng[0] && dexNum <= rng[1])) return false;
    }

    // base stat filters
    for (const sKey of Object.keys(statFilters)) {
      const f = statFilters[sKey];
      const val = sKey === 'TOTAL' ? Number(pokemon.baseStats.total || 0) : Number(pokemon.baseStats[sKey] || 0);
      if (f.min !== null && val < f.min) return false;
      if (f.max !== null && val > f.max) return false;
    }

    // yields filters
    for (const eKey of Object.keys(evFilters)) {
      const f = evFilters[eKey];
      const val = Number((pokemon.evStats && pokemon.evStats[eKey]) || 0);
      if (f.min !== null && val < f.min) return false;
      if (f.max !== null && val > f.max) return false;
    }
    if (baseXpMin !== null && Number(pokemon.xp || 0) < baseXpMin) return false;
    if (baseXpMax !== null && Number(pokemon.xp || 0) > baseXpMax) return false;
    if (baseFriendMin !== null && Number(pokemon.baseFriendship || 0) < baseFriendMin) return false;
    if (baseFriendMax !== null && Number(pokemon.baseFriendship || 0) > baseFriendMax) return false;

    // extra numeric filters
    const pHeight = Number(String(pokemon.heightM || '').replace(/[^0-9.]/g, '')) || 0;
    const pWeight = Number(String(pokemon.weightKg || '').replace(/[^0-9.]/g, '')) || 0;
    const pCatch = Number(String(pokemon.catchRate || '').replace(/[^0-9]/g, '')) || 0;
    const pDex = Number(String(pokemon.number || '').replace(/^0+/, '')) || 0;

    if (heightMin !== null && pHeight < heightMin) return false;
    if (heightMax !== null && pHeight > heightMax) return false;
    if (weightMin !== null && pWeight < weightMin) return false;
    if (weightMax !== null && pWeight > weightMax) return false;
    if (catchMin !== null && pCatch < catchMin) return false;
    if (catchMax !== null && pCatch > catchMax) return false;
    if (dexMin !== null && pDex < dexMin) return false;
    if (dexMax !== null && pDex > dexMax) return false;

    return true;
  });

  renderList(filteredPokemon);
  if (filteredPokemon.length === 0) {
    elements.details.innerHTML = `<div class="details-placeholder"><h2>No Pokémon found</h2><p>Adjust the search or type filter to display more results.</p></div>`;
  }
}

function renderList(pokemonList) {
  elements.pokemonList.innerHTML = '';
  elements.listCount.textContent = `${pokemonList.length} available`;

  pokemonList.forEach((pokemon) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'pokemon-card';
    card.innerHTML = `<h3>${pokemon.name}</h3><p>#${pokemon.number} • ${pokemon.types.filter(Boolean).join(' / ')}</p>`;
    card.addEventListener('click', () => selectPokemon(pokemon));
    if (selectedPokemon && selectedPokemon.group === pokemon.group) {
      card.classList.add('active');
    }
    elements.pokemonList.appendChild(card);
  });
}

function selectPokemon(pokemon) {
  selectedPokemon = pokemon;
  renderList(filteredPokemon);
  renderDetails(pokemon);
}

function renderDetails(pokemon) {
  const typesHtml = pokemon.types
    .filter(Boolean)
    .map((type) => renderTypeBadge(type))
    .join('');

  const groupForms = pokemon.groupForms || [pokemon];
  const formSwitcher = groupForms.length > 1 ? renderFormSwitcher(groupForms, pokemon) : '';

  elements.details.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        ${formSwitcher}
        <div class="title-block">
          <div>
            <div class="dex-label" style="text-align: left;">#${pokemon.number}</div>
            <h2 style="text-align: left;">${pokemon.name}</h2>
            <p class="text-muted" style="text-align: left;">${pokemon.classification}</p>
          </div>
          <div class="badges">${typesHtml}</div>
        </div>

        <div class="ability-section">
          <div class="ability-list">
            ${renderAbilitySection(pokemon.abilities, pokemon.hiddenAbility)}
          </div>
        </div>
        <div class="divider"></div>

        <div class="detail-summary-row">
          <section class="size-bar-card stats-card">
            <div class="section-header">
              <h2>Height & Weight</h2>
            </div>
            <div class="vertical-bar-grid">
              ${renderVerticalBar('Height (m)', pokemon.heightM, 110, 'left')}
              ${renderVerticalBar('Height (ft)', pokemon.heightFt ? pokemon.heightFt / 12 : 0, 361, 'left', formatHeightFeetInches(pokemon.heightFt) || pokemon.heightFtRaw)}
              ${renderVerticalBar('Weight (kg)', pokemon.weightKg, 1100, 'right')}
              ${renderVerticalBar('Weight (lb)', pokemon.weightLb, 2425, 'right')}
            </div>
          </section>

          <section class="meta-card stats-card">
            <div class="detail-meta-row">
              <div class="meta-grid">
                ${renderMetaItem('Shape', pokemon.shape)}
                ${renderMetaItem('Color', pokemon.color)}
                ${renderMetaItem('Egg Group', `${pokemon.eggGroup1}${pokemon.eggGroup2 ? ' / ' + pokemon.eggGroup2 : ''}`)}
                ${renderMetaItem('Egg Cycles', pokemon.eggCycles)}
                ${renderMetaItem('Catch Rate', pokemon.catchRate)}
                ${renderMetaItem('Level Rate', pokemon.levelRate)}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="stats-row">
        <section class="stats-card">
          <div class="section-header">
            <h2>Base Stats</h2>
          </div>
          <div class="stat-bars">
            ${renderStatBar('HP', pokemon.baseStats.HP, 260)}
            ${renderStatBar('ATK', pokemon.baseStats.ATK, 260)}
            ${renderStatBar('DEF', pokemon.baseStats.DEF, 260)}
            ${renderStatBar('SpA', pokemon.baseStats.SpA, 260)}
            ${renderStatBar('SpD', pokemon.baseStats.SpD, 260)}
            ${renderStatBar('SPE', pokemon.baseStats.SPE, 260)}
            ${renderStatBar('TOTAL', pokemon.baseStats.total, 1300)}
          </div>
        </section>

        <section class="stats-card">
          <div class="section-header">
            <h2>EV Yield</h2>
          </div>
          <div class="stat-bars">
            ${renderStatBar('HP', pokemon.evStats.HP, 4)}
            ${renderStatBar('ATK', pokemon.evStats.ATK, 4)}
            ${renderStatBar('DEF', pokemon.evStats.DEF, 4)}
            ${renderStatBar('SpA', pokemon.evStats.SpA, 4)}
            ${renderStatBar('SpD', pokemon.evStats.SpD, 4)}
            ${renderStatBar('SPE', pokemon.evStats.SPE, 4)}
          </div>
          <div class="ev-summary">
            ${renderMetaItem('Base XP', pokemon.xp)}
            ${renderMetaItem('Base Friendship', pokemon.baseFriendship)}
          </div>
        </section>
      </div>

      <section class="gender-card stats-card">
        <div class="section-header">
          <h2>Gender Ratio</h2>
        </div>
        ${renderGenderBar(pokemon.gender)}
      </section>

      <section class="effectiveness-card stats-card">
        <div class="section-header">
          <h2>Type Effectiveness</h2>
        </div>
        <table class="type-table">
          <thead>
            <tr><th></th>${pokemon.effectiveness.map((item) => `<th>${renderTypeBadge(String(item.type || ''), { compact: true })}</th>`).join('')}</tr>
          </thead>
          <tbody>
            <tr>
              <td class="type-stack-cell">
                <div class="type-stack">
                  ${pokemon.types.map((type) => renderTypeBadge(type, { compact: true })).join('')}
                </div>
              </td>
              ${pokemon.effectiveness.map((item) => `<td>${item.value || '—'}</td>`).join('')}
            </tr>
          </tbody>
        </table>
      </section>

      <section class="availability-card stats-card">
        <div class="section-header">
          <h2>Game Availability</h2>
        </div>
        <div class="availability-grid">
          ${pokemon.availability
            .map((game) => {
              const gameColor = getGameGradientColor(game.gameName) || '#94a3b8';
              const badgeBg = hexToRgba(gameColor, 0.18);
              const borderColor = hexToRgba(gameColor, 0.32);
              const statusClass = game.status === 'blank' ? 'empty' : game.status;
              const statusLabel = game.status === 'available' ? 'Available' : game.status === 'transfer' ? 'Transfer' : 'Missing';
              return `
              <div class="value-pill">
                <div class="game-pill" style="background: ${badgeBg}; border-color: ${borderColor}; color: #ffffff;">
                  <span>${game.label}</span>
                </div>
                <strong class="status-chip ${statusClass}">${statusLabel}</strong>
              </div>`;
            })
            .join('')}
        </div>
      </section>

      ${renderPokedexSection(pokemon)}
      ${renderMovesetSection(pokemon)}
    </div>
  `;

  if (groupForms.length > 1) {
    elements.details.querySelectorAll('.form-select').forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.formIndex);
        selectPokemon(groupForms[index]);
      });
    });
  }

  elements.details.querySelectorAll('.pokedex-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedPokedexGen = Number(button.dataset.generation);
      renderDetails(pokemon);
    });
  });

  elements.details.querySelectorAll('.moveset-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMoveCategory = button.dataset.category || 'levelUp';
      renderDetails(pokemon);
    });
  });

  attachTypeHoverHandlers();
  attachMoveHoverHandlers();
}

function renderTypeBadge(type, options = {}) {
  const safeType = String(type || '').trim();
  if (!safeType) return '<span class="type-pill type-pill-empty">—</span>';

  const compact = Boolean(options.compact);
  const label = compact ? safeType.slice(0, 3) : safeType;
  const background = TYPE_COLORS[safeType] || '#475569';
  return `<button type="button" class="type-pill type-pill-button${compact ? ' compact' : ''}" data-type="${escapeHtml(safeType)}" style="background: ${background};">${escapeHtml(label)}</button>`;
}

function renderFormSwitcher(forms, selected) {
  return `
    <div class="form-switcher">
      ${forms
        .map(
          (form, index) => `<button type="button" class="form-select ${form.name === selected.name ? 'active' : ''}" data-form-index="${index}">${form.name}</button>`
        )
        .join('')}
    </div>
  `;
}

function renderVerticalBar(label, rawValue, max, side = 'center', displayValue = null) {
  const numericValue = Number(rawValue);
  const numeric = Number.isFinite(numericValue) ? numericValue : Number(String(rawValue || '').replace(/[^0-9.]/g, '')) || 0;
  const percent = rawValue ? Math.min(100, Math.round((numeric / max) * 100)) : 0;
  const display = displayValue != null ? displayValue : rawValue || '—';
  const sideClass = side === 'left' ? 'side-left' : side === 'right' ? 'side-right' : '';
  return `
    <div class="vertical-bar ${sideClass}">
      <div class="vertical-bar-track">
        <div class="vertical-bar-fill" style="--fill-height: ${percent}%"></div>
      </div>
      <div class="vertical-bar-label">
        <span>${label}</span>
        <strong>${display}</strong>
      </div>
    </div>
  `;
}

function renderAbilitySection(abilities, hiddenAbility) {
  const boxes = abilities.filter(Boolean).map((ability) => renderAbilityBox(ability));
  if (hiddenAbility) boxes.push(renderAbilityBox(hiddenAbility, true));
  if (boxes.length === 0) {
    return `<div class="ability-empty">Unknown</div>`;
  }
  return boxes.join('');
}

function renderAbilityBox(ability, hidden = false) {
  return `
    <div class="ability-box${hidden ? ' hidden' : ''}">
      <span>${ability}</span>
      ${hidden ? '<span class="ability-tag">Hidden</span>' : ''}
      <div class="ability-tooltip">Description coming soon</div>
    </div>
  `;
}

function renderMetaItem(label, value) {
  return `<div class="meta-item"><strong>${label}</strong><p>${value || '—'}</p></div>`;
}

function renderAbilityBox(ability, hidden = false) {
  return `
    <button type="button" class="ability-box${hidden ? ' hidden' : ''}" title="Hover for ability description">
      <span>${ability}</span>
      ${hidden ? '<span class="ability-tag">Hidden</span>' : ''}
    </button>
  `;
}

function renderAbilities(ability, hiddenAbility) {
  if (!ability && !hiddenAbility) return '—';
  const hiddenText = hiddenAbility ? `Hidden: ${hiddenAbility}` : '';
  return [ability, hiddenText].filter(Boolean).join(' · ');
}

function renderSize(pokemon) {
  const formattedFeet = formatHeightFeetInches(pokemon.heightFt) || pokemon.heightFtRaw;
  const height = pokemon.heightM ? `${pokemon.heightM} m / ${formattedFeet}` : pokemon.heightM || formattedFeet || '—';
  const weight = pokemon.weightKg ? `${pokemon.weightKg} kg / ${pokemon.weightLb} lb` : pokemon.weightKg || pokemon.weightLb || '—';
  return `${height} · ${weight}`;
}

function renderStatBar(label, value, max) {
  const percent = max ? Math.round((Number(value) / max) * 100) : 0;
  return `
    <div class="stat-line">
      <div class="stat-row"><span>${label}</span><span>${value}</span></div>
      <div class="bar-track">
        <div class="bar-fill" style="--fill-width: ${percent}%"></div>
      </div>
    </div>
  `;
}

function renderGenderBar(gender) {
  const maleValue = Number(String(gender.male || '').replace('%', '').trim()) || 0;
  const femaleValue = Number(String(gender.female || '').replace('%', '').trim()) || 0;
  if (!maleValue && !femaleValue) {
    return `<p class="small">No gender ratio available for this form.</p>`;
  }

  return `
    <div class="gender-bar">
      <div class="gender-fill gender-male" style="width:${maleValue}%">${maleValue ? `${maleValue}%` : ''}</div>
      <div class="gender-fill gender-female" style="width:${femaleValue}%">${femaleValue ? `${femaleValue}%` : ''}</div>
    </div>
    <div class="section-header" style="padding: 0; margin: 0; display:flex; justify-content:space-between; gap:1rem;">
      <span class="small">Male ${maleValue}%</span>
      <span class="small">Female ${femaleValue}%</span>
    </div>
  `;
}

function renderPokedexSection(pokemon) {
  const entriesByGen = Array.from({ length: 9 }, (_, index) => ({ generation: index + 1, entries: [] }));
  (pokemon.pokedexEntries || []).forEach((entry) => {
    const generation = Number(entry.generation) || 0;
    const bucket = entriesByGen.find((item) => item.generation === generation);
    if (bucket) bucket.entries.push(entry);
  });

  const tabButtons = entriesByGen
    .map(
      (item) => `<button type="button" class="pokedex-tab ${selectedPokedexGen === item.generation ? 'active' : ''}" data-generation="${item.generation}">Gen ${item.generation}</button>`
    )
    .join('');

  const selectedGameColumns = POKEDEX_ENTRY_COLUMNS.filter((column) => column.generation === selectedPokedexGen);
  const entryMap = new Map((pokemon.pokedexEntries || []).map((entry) => [normalizeGameKey(entry.game), entry]));

  const contentHtml = selectedGameColumns.length
    ? selectedGameColumns
        .map((column) => {
          const entry = entryMap.get(normalizeGameKey(column.game));
          if (entry) {
            const gradientColor = getGameGradientColor(entry.game) || '#38bdf8';
            const gradient = gradientColor.startsWith('rgba(') ? gradientColor : hexToRgba(gradientColor, 0.18);
            return `<div class="pokedex-entry-box" style="background: linear-gradient(360deg, rgba(15,23,32,0.92), ${gradient});"><div class="pokedex-entry-game">${escapeHtml(entry.game)}</div><div class="pokedex-entry-text">${escapeHtml(entry.entry)}</div></div>`;
          }

          return `<div class="pokedex-entry-box pokedex-no-entry"><div class="pokedex-entry-game">${escapeHtml(column.game)}</div><div class="pokedex-entry-text">No Dex Entry</div></div>`;
        })
        .join('')
    : `<div class="pokedex-empty">No entries available for Generation ${selectedPokedexGen}.</div>`;

  return `
      <section class="pokedex-card stats-card">
        <div class="section-header">
          <div>
            <h2>Pokedex Entries</h2>
          </div>
        </div>
        <div class="pokedex-tabs">${tabButtons}</div>
        <div class="pokedex-grid">${contentHtml}</div>
      </section>
    `;
}

function renderMovesetSection(pokemon) {
  const moveGroups = [
    { key: 'levelUp', label: 'Level-Up' },
    { key: 'tm', label: 'TM' },
    { key: 'egg', label: 'Egg' },
    { key: 'evolution', label: 'EV' },
    { key: 'reminder', label: 'Reminder' }
  ];

  const activeGroup = moveGroups.find((group) => group.key === selectedMoveCategory) || moveGroups[0];
  const currentMoves = String(pokemon.moves?.[activeGroup.key] || '')
    .split('|')
    .map((entry) => entry.trim())
    .filter(Boolean);

  const rowsHtml = currentMoves.length
    ? currentMoves
        .map((entry) => {
          const [moveId, levelValue] = entry.split('-');
          const move = movesLookup[moveId];
          if (!move) {
            return `<tr><td>${escapeHtml(levelValue || entry)}</td><td data-move-id="${escapeHtml(moveId)}">${escapeHtml(moveId)}</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>`;
          }

          const moveName = escapeHtml(move.name || moveId);
          const moveType = escapeHtml(move.type || '—');
          const moveCategory = escapeHtml(move.category || '—');
          const movePP = escapeHtml(move.pp || '—');
          const movePower = escapeHtml(move.power || '—');
          const moveAccuracy = escapeHtml(move.accuracy || '—');
          const moveCrit = escapeHtml(move.critRate || '—');
          const movePriority = escapeHtml(move.priority || '—');
          const moveTarget = escapeHtml(move.target || '—');

          return `
            <tr>
              <td>${escapeHtml(levelValue || '-')}</td>
              <td class="move-name" data-move-id="${escapeHtml(moveId)}">${moveName}</td>
              <td>${moveType}</td>
              <td>${moveCategory}</td>
              <td>${movePP}</td>
              <td>${movePower}</td>
              <td>${moveAccuracy}</td>
              <td>${moveCrit}</td>
              <td>${movePriority}</td>
              <td>${moveTarget}</td>
            </tr>`;
        })
        .join('')
    : `<tr><td colspan="10" class="moveset-empty">No moves available for this category.</td></tr>`;

  const tabButtons = moveGroups
    .map((group) => `<button type="button" class="moveset-tab ${activeGroup.key === group.key ? 'active' : ''}" data-category="${group.key}">${group.label}</button>`)
    .join('');

  return `
    <section class="moveset-card stats-card">
      <div class="section-header">
        <div>
          <h2>Moveset</h2>
          <span class="small">Entries are currently shown for Scarlet and Violet move-learning data.</span>
        </div>
      </div>
      <div class="moveset-tabs">${tabButtons}</div>
      <div class="moveset-table-wrap">
        <table class="moveset-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Move</th>
              <th>Type</th>
              <th>Category</th>
              <th>PP</th>
              <th>Power</th>
              <th>Accuracy</th>
              <th>Crit Rate</th>
              <th>Priority</th>
              <th>Target</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    </section>
  `;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function scrollToSelected() {
  const selectedCard = Array.from(document.querySelectorAll('.pokemon-card')).find((card) => card.classList.contains('active'));
  if (selectedCard) {
    selectedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// --- Type and move popup helpers ---
function getTypeMultiplier(attackType, defendingType) {
  return Number(TYPE_EFFECTIVENESS[attackType]?.[defendingType] ?? 1);
}

function getTypeDefensiveSummary(typeName) {
  return TYPE_ORDER.map((attackingType) => ({
    type: attackingType,
    value: getTypeMultiplier(attackingType, typeName)
  }));
}

function getTypeOffensiveSummary(typeName) {
  return TYPE_ORDER.map((defendingType) => ({
    type: defendingType,
    value: getTypeMultiplier(typeName, defendingType)
  }));
}

function formatTypeMultiplier(value) {
  if (!Number.isFinite(Number(value))) return '—';
  const numeric = Number(value);
  return `${numeric}x`;
}

function showTypePopup(typeName, clientX, clientY, targetElement) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  const offenseRows = getTypeOffensiveSummary(typeName);
  const defenseRows = getTypeDefensiveSummary(typeName);
  const color = TYPE_COLORS[typeName] || '#475569';

  const cellHtml = (rows) => rows
    .map((entry) => `<div style="display:contents"><span style="color:#dbeafe;">${escapeHtml(entry.type)}</span><span style="justify-self:end; font-weight:700; color:${entry.value === 0 ? '#fca5a5' : entry.value > 1 ? '#86efac' : entry.value < 1 ? '#fcd34d' : '#e2e8f0'};">${formatTypeMultiplier(entry.value)}</span></div>`)
    .join('');

  popup.innerHTML = `
    <div style="font-weight:700;margin-bottom:8px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;padding:2px 8px;border-radius:999px;background:${color};color:white;font-size:11px;letter-spacing:.08em;text-transform:uppercase;">${escapeHtml(typeName)}</span>
      <span style="color:#cbd5e1;font-size:12px;">Type chart</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;min-width:300px;max-width:380px;">
      <div>
        <div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#93c5fd;margin-bottom:4px;">Offense</div>
        <div style="display:grid;grid-template-columns:1fr auto;gap:2px 6px;align-items:center;">${cellHtml(offenseRows)}</div>
      </div>
      <div>
        <div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#ddd6fe;margin-bottom:4px;">Defense</div>
        <div style="display:grid;grid-template-columns:1fr auto;gap:2px 6px;align-items:center;">${cellHtml(defenseRows)}</div>
      </div>
    </div>
  `;

  popup.setAttribute('aria-hidden', 'false');
  if (!popup.classList.contains('visible')) popup.classList.add('visible');

  const offset = 8;
  const width = popup.offsetWidth || 340;
  const height = popup.offsetHeight || 180;
  let left = 0;
  let top = 0;

  if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
    const rect = targetElement.getBoundingClientRect();
    left = Math.round(rect.left + rect.width / 2 - width / 2);
    top = rect.top - height - offset;
    if (top < 8) top = rect.bottom + offset;
    if (left < 8) left = 8;
    if (left + width + 8 > window.innerWidth) left = Math.max(8, window.innerWidth - width - 8);
  } else if (typeof clientX === 'number' && typeof clientY === 'number') {
    left = clientX + offset;
    top = clientY + offset;
    if (left + width + 16 > window.innerWidth) left = clientX - width - offset;
    if (top + height + 16 > window.innerHeight) top = clientY - height - offset;
  }

  popup.style.left = `${Math.max(8, Math.round(left))}px`;
  popup.style.top = `${Math.max(8, Math.round(top))}px`;

  if (movePopupHideTimer) {
    clearTimeout(movePopupHideTimer);
    movePopupHideTimer = null;
  }
}

function attachTypeHoverHandlers() {
  const container = elements.details;
  if (!container) return;

  container.querySelectorAll('.type-pill-button').forEach((button) => {
    if (button.dataset.typeHoverBound === '1') return;
    const typeName = button.dataset.type;
    if (!typeName) return;

    button.addEventListener('mouseenter', (event) => {
      if (movePopupHideTimer) {
        clearTimeout(movePopupHideTimer);
        movePopupHideTimer = null;
      }
      showTypePopup(typeName, event.clientX, event.clientY, button);
    });
    button.addEventListener('mousemove', (event) => {
      showTypePopup(typeName, event.clientX, event.clientY, button);
    });
    button.addEventListener('mouseleave', () => {
      if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
      movePopupHideTimer = setTimeout(hideMovePopup, 180);
    });

    button.dataset.typeHoverBound = '1';
  });
}

function createMovePopup() {
  if (document.getElementById('move-popup')) return;
  // inject styles once
    if (!document.getElementById('move-popup-styles')) {
    const style = document.createElement('style');
    style.id = 'move-popup-styles';
    style.textContent = `
      #move-popup{position:fixed;z-index:9999;min-width:220px;max-width:420px;padding:10px;border-radius:8px;box-shadow:0 10px 36px rgba(2,6,23,0.75);background:#0f1720;color:#e6eef8;font-size:13px;border:1px solid rgba(255,255,255,0.06);opacity:0;transform:translateY(10px) scale(.986);transition:opacity .26s cubic-bezier(.2,.7,.2,1),transform .26s cubic-bezier(.2,.7,.2,1);pointer-events:none;backdrop-filter: blur(3px);transform-origin:center bottom}
      #move-popup.visible{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}
      #move-popup .move-popup-effect{color:#cbd5e1;margin-top:6px;font-size:12px}
    `;
    document.head.appendChild(style);
  }

  const popup = document.createElement('div');
  popup.id = 'move-popup';
  popup.setAttribute('role', 'dialog');
  popup.setAttribute('aria-hidden', 'true');
  popup.style.left = '8px';
  popup.style.top = '8px';
  document.body.appendChild(popup);

  // interactive enter/leave handling
  popup.addEventListener('mouseenter', () => {
    if (movePopupHideTimer) {
      clearTimeout(movePopupHideTimer);
      movePopupHideTimer = null;
    }
  });
  popup.addEventListener('mouseleave', () => {
    if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
    movePopupHideTimer = setTimeout(hideMovePopup, 250);
  });
}

function showMovePopup(moveId, clientX, clientY, targetElement) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  const move = movesLookup[moveId];
  if (!move) return;

  const html = `
    <div style="font-weight:700;margin-bottom:6px">${escapeHtml(move.name || moveId)}</div>
    <div style="flex-basis:100%"></div>
    <div style="display:flex;gap:8px;margin-bottom:6px">
      <div style="opacity:.9"><strong>Type:</strong> ${escapeHtml(move.type || '—')}</div>
      <div style="opacity:.9"><strong>Category:</strong> ${escapeHtml(move.category || '—')}</div>
    </div>
    <div style="flex-basis:100%"></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px">
      <div><strong>PP:</strong> ${escapeHtml((move.minPP || '—') + (move.maxPP ? `-${move.maxPP}` : ''))}</div>
      <div><strong>Base Power:</strong> ${escapeHtml(move.power || '—')}</div>
      <div><strong>Accuracy:</strong> ${escapeHtml(move.accuracy || '—')}</div>
      <div style="flex-basis:100%"></div>
      <div><strong>Base Crit Rate:</strong> ${escapeHtml(move.critRate || '—')}</div>
      <div><strong>Speed Priority:</strong> ${escapeHtml(move.priority || '—')}</div>
      <div style="flex-basis:100%"><strong>Target:</strong> ${escapeHtml(move.target || '—')}</div>
      <div style="flex-basis:100%"></div>

    </div>
  `;

  // assemble effect area (primary + optional secondary)
  let effectHtml = '';
  if (move.secondaryEffect) {
    effectHtml += `<div style="margin-top:6px;color:#cbd5e1"><small><strong>Secondary:</strong> ${escapeHtml(move.secondaryEffect)}</small></div>`;
    if (move.secondaryChance) {
      effectHtml += `<div style="color:#9fb0c8;font-size:12px;margin-top:4px"><small>Chance: ${escapeHtml(move.secondaryChance)}</small></div>`;
    }
  }

  popup.innerHTML = html + (effectHtml || `<div class="move-popup-effect"><small>—</small></div>`);
  popup.setAttribute('aria-hidden', 'false');
  // make visible with animation
  if (!popup.classList.contains('visible')) popup.classList.add('visible');
  const offset = 8;
  // Measure after content set
  const width = popup.offsetWidth || 260;
  const height = popup.offsetHeight || 120;
  let left = 0;
  let top = 0;
  if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
    const rect = targetElement.getBoundingClientRect();
    // Place centered horizontally above the row
    left = Math.round(rect.left + rect.width / 2 - width / 2);
    top = rect.top - height - offset;
    // If not enough space above, place below the row
    if (top < 8) top = rect.bottom + offset;
    // Keep within viewport horizontally
    if (left < 8) left = 8;
    if (left + width + 8 > window.innerWidth) left = Math.max(8, window.innerWidth - width - 8);
  } else if (typeof clientX === 'number' && typeof clientY === 'number') {
    left = clientX + offset;
    top = clientY + offset;
    if (left + width + 16 > window.innerWidth) left = clientX - width - offset;
    if (top + height + 16 > window.innerHeight) top = clientY - height - offset;
  }
  popup.style.left = `${Math.max(8, Math.round(left))}px`;
  popup.style.top = `${Math.max(8, Math.round(top))}px`;
  if (movePopupHideTimer) {
    clearTimeout(movePopupHideTimer);
    movePopupHideTimer = null;
  }
}

function hideMovePopup() {
  const popup = document.getElementById('move-popup');
  if (!popup) return;
  popup.setAttribute('aria-hidden', 'true');
  popup.classList.remove('visible');
  // allow transition to finish before removing content
  setTimeout(() => {
    if (popup && !popup.classList.contains('visible')) popup.innerHTML = '';
  }, 220);
}

function attachMoveHoverHandlers() {
  createMovePopup();
  const table = document.querySelector('.moveset-table');
  if (!table) return;
  // Attach handlers to the entire move row so hover works anywhere on the row
  table.querySelectorAll('tbody tr').forEach((row) => {
    if (row.dataset.movePopupBound) return;
    const moveCell = row.querySelector('td[data-move-id], td.move-name');
    if (!moveCell) return;
    const moveId = moveCell.dataset.moveId;
    if (!moveId) return;
    const move = moveId;
    row.addEventListener('mouseenter', (ev) => {
      if (movePopupHideTimer) { clearTimeout(movePopupHideTimer); movePopupHideTimer = null; }
      showMovePopup(move, ev.clientX, ev.clientY, row);
    });
    row.addEventListener('mousemove', (ev) => {
      showMovePopup(move, ev.clientX, ev.clientY, row);
    });
    row.addEventListener('mouseleave', () => {
      if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
      movePopupHideTimer = setTimeout(hideMovePopup, 180);
    });
    row.dataset.movePopupBound = '1';
  });
}
