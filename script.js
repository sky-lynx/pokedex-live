const SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pub?gid=1685697799&single=true&output=csv';
const SHEET_HTML = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pubhtml/sheet?headers=false&gid=1685697799';
const POKEDEX_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pub?gid=0&single=true&output=csv';
const POKEDEX_SHEET_HTML = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pubhtml/sheet?headers=false&gid=0';
const ABILITY_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pub?gid=1698131980&single=true&output=csv';
const MOVES_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pub?gid=1813387196&single=true&output=csv';
const MOVES_SHEET_HTML = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pubhtml/sheet?headers=false&gid=1813387196';
const MOVE_DESCRIPTIONS_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pub?gid=2098324621&single=true&output=csv';
const SHEET_CACHE_DB_NAME = 'interactive-pokedex-cache';
const SHEET_CACHE_STORE_NAME = 'sheets';

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
const MOVE_GAMESET_INFO = {
  GSC: { generation: 2, label: 'Gold / Silver / Crystal' },
  RSE: { generation: 3, label: 'Ruby / Sapphire / Emerald' },
  FRLG: { generation: 3, label: 'FireRed / LeafGreen' },
  DPPL: { generation: 4, label: 'Diamond / Pearl / Platinum' },
  HGSS: { generation: 4, label: 'HeartGold / SoulSilver' },
  BW: { generation: 5, label: 'Black / White' },
  B2W2: { generation: 5, label: 'Black 2 / White 2' },
  XY: { generation: 6, label: 'X / Y' },
  ORAS: { generation: 6, label: 'Omega Ruby / Alpha Sapphire' },
  SM: { generation: 7, label: 'Sun / Moon' },
  USUM: { generation: 7, label: 'Ultra Sun / Ultra Moon' },
  LGPE: { generation: 7, label: "Let's Go Pikachu / Eevee" },
  SWSH: { generation: 8, label: 'Sword / Shield' },
  BDSP: { generation: 8, label: 'Brilliant Diamond / Shining Pearl' },
  PLA: { generation: 8, label: 'Legends: Arceus' },
  SV: { generation: 9, label: 'Scarlet / Violet' },
  ZA: { generation: 9, label: 'Legends: Z-A' },
  CHA: { generation: 9, label: 'Pokémon Champions' }
};
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
  randomButton: document.getElementById('randomButton'),
  profileButton: document.getElementById('profileButton'),
  sidebarToggleButton: document.getElementById('sidebarToggleButton'),
  floatingActions: document.getElementById('floatingActions'),
  floatingRandomButton: document.getElementById('floatingRandomButton'),
  floatingSidebarButton: document.getElementById('floatingSidebarButton'),
  floatingProfileButton: document.getElementById('floatingProfileButton'),
  moveSearchInput: document.getElementById('moveSearchInput'),
  moveList: document.getElementById('moveList'),
  moveListCount: document.getElementById('moveListCount'),
  moveDetails: document.getElementById('moveDetails'),
  moveTypeButtons: document.getElementById('moveTypeButtons'),
  moveCategoryButtons: document.getElementById('moveCategoryButtons'),
  moveTargetButtons: document.getElementById('moveTargetButtons'),
  moveNumericFilters: document.getElementById('moveNumericFilters'),
  abilitySearchInput: document.getElementById('abilitySearchInput'),
  abilityList: document.getElementById('abilityList'),
  abilityListCount: document.getElementById('abilityListCount'),
  abilityDetails: document.getElementById('abilityDetails')
};

let allPokemon = [];
let filteredPokemon = [];
let pokemonIndexLookup = new WeakMap();
let pokemonListRenderToken = 0;
let pendingPokemonScroll = false;
let activeType = null;
let selectedPokemon = null;
let selectedDex = 'pokemon';
let selectedPokedexGen = 1;
let selectedMoveCategory = 'levelUp';
let typingFilterValue = 'any';
let eggGroupLogic = 'or';
let groupsByDex = {};
let movesLookup = {};
let allMoves = [];
let filteredMoves = [];
let allAbilities = [];
let filteredAbilities = [];
let abilitySheetRows = [];
let abilityDataLoaded = false;
let moveDataLoaded = false;
let moveDescriptionsLoaded = false;
let moveDexInitialized = false;
let abilityDexInitialized = false;
let abilityDataPromise = null;
let moveDexDataPromise = null;
let moveDescriptionsDataPromise = null;
let moveLearnersLookup = {};
let moveDescriptionsLookup = {};
let moveDescriptionGamesets = [];
let selectedMove = null;
let selectedAbility = null;
let selectedAbilityGen = 3;
let abilityDescriptionGamesets = [];
let selectedMoveTypes = new Set();
let selectedMoveCategoryFilter = 'any';
let selectedMoveTarget = 'any';
let moveFavoriteFilter = 'any';
let moveNoteFilter = 'any';
let abilityFavoriteFilter = 'any';
let abilityNoteFilter = 'any';
let selectedMoveGen = 9;
let selectedMoveLearnerCategory = 'levelUp';
let abilityDescriptionsLookup = {};
let movePopupHideTimer = null;
let movePopupPinned = false;
let currentUsername = localStorage.getItem('pokedexCurrentUser') || '';
let authMode = 'login';
let customFavoriteFilter = 'any';
let customNoteFilter = 'any';
let sheetCacheDatabasePromise;
const PROFILE_STORAGE_KEY = 'pokedexLocalProfiles';
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
  bindProfileControls();
  bindSidebarToggle();
  bindFloatingActions();
  document.addEventListener('pointerover', (event) => {
    if (event.target instanceof Element && event.target.closest('.ability-box') && !abilityDataLoaded) {
      loadSupportingData();
    }
  });
  elements.pokemonList.addEventListener('click', (event) => {
    const card = event.target.closest('[data-pokemon-index]');
    if (!card || !elements.pokemonList.contains(card)) return;
    const pokemon = allPokemon[Number(card.dataset.pokemonIndex)];
    if (pokemon) selectPokemon(pokemon);
  });
  elements.status.textContent = 'Loading sheet data from Google...';
  let pokemonDataLoaded = false;
  try {
    const [rawRows, pokedexRows] = await Promise.all([
      loadCachedSheetRows('pokemon', loadData),
      loadCachedSheetRows('pokedex', loadPokedexData)
    ]);
    allPokemon = buildPokemon(rawRows);
    pokemonIndexLookup = new WeakMap(allPokemon.map((pokemon, index) => [pokemon, index]));
    const pokedexLookup = buildPokedexLookup(pokedexRows);
    allPokemon.forEach((pokemon) => {
      const formKey = buildPokedexLookupKey(pokemon.number, pokemon.mainDex, pokemon.name);
      const pokedexData = pokedexLookup[formKey] || pokedexLookup[normalizePokemonName(pokemon.name)];
      pokemon.pokedexEntries = pokedexData?.entries || [];
      pokemon.displayName = pokedexData?.displayName || pokemon.name;
    });
    groupsByDex = buildGroups(allPokemon);
    processGroups(groupsByDex);
    filteredPokemon = Object.values(groupsByDex).map((group) => group[0]);
    renderTypeFilters(allPokemon);
    renderAttributeFilters(allPokemon);
    renderList(filteredPokemon);
    if (filteredPokemon.length) {
      selectPokemon(filteredPokemon[0]);
    }
    elements.status.textContent = `Loaded ${allPokemon.length} Pokémon.`;
    pokemonDataLoaded = true;
  } catch (error) {
    console.error(error);
    elements.status.textContent = 'Unable to load sheet data. Check network access or sheet visibility.';
    elements.details.innerHTML = `<div class="details-placeholder"><h2>Unable to load data</h2><p>Please ensure the Google Sheet is published publicly or try again later.</p></div>`;
  }

  elements.searchInput.addEventListener('input', handleSearch);
  elements.moveSearchInput?.addEventListener('input', applyMoveFilters);
  elements.abilitySearchInput?.addEventListener('input', applyAbilityFilters);
  elements.moveTypeButtons?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-move-type]');
    if (!button) return;
    const type = button.dataset.moveType;
    if (type === 'any') {
      selectedMoveTypes.clear();
    } else if (selectedMoveTypes.has(type)) {
      selectedMoveTypes.delete(type);
    } else {
      selectedMoveTypes.add(type);
    }
    updateMoveFilterButtons();
    applyMoveFilters();
  });
  elements.moveCategoryButtons?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-move-category]');
    if (!button) return;
    selectedMoveCategoryFilter = button.dataset.moveCategory === selectedMoveCategoryFilter
      && button.dataset.moveCategory !== 'any'
      ? 'any'
      : button.dataset.moveCategory;
    updateMoveFilterButtons();
    applyMoveFilters();
  });
  elements.moveTargetButtons?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-move-target]');
    if (!button) return;
    selectedMoveTarget = button.dataset.moveTarget;
    updateMoveFilterButtons();
    applyMoveFilters();
  });
  document.querySelectorAll('#movePanel-custom .custom-filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.moveCustomGroup;
      const selectedValue = button.dataset.moveCustomFilter || 'any';
      const isDeselecting = selectedValue !== 'any' && button.classList.contains('active');
      const value = isDeselecting ? 'any' : selectedValue;
      if (group === 'favorites') moveFavoriteFilter = value;
      if (group === 'notes') moveNoteFilter = value;
      document.querySelectorAll(`#movePanel-custom .custom-filter-button[data-move-custom-group="${group}"]`).forEach((item) => {
        item.classList.toggle('active', item.dataset.moveCustomFilter === value);
      });
      applyMoveFilters();
    });
  });
  document.getElementById('clearMoveFiltersButton')?.addEventListener('click', () => {
    elements.moveSearchInput.value = '';
    selectedMoveTypes.clear();
    selectedMoveCategoryFilter = 'any';
    selectedMoveTarget = 'any';
    moveFavoriteFilter = 'any';
    moveNoteFilter = 'any';
    document.querySelectorAll('#movePanel-custom .custom-filter-button').forEach((button) => {
      button.classList.toggle('active', button.dataset.moveCustomFilter === 'any');
    });
    resetMoveRangeFilters();
    updateMoveFilterButtons();
    applyMoveFilters();
  });
  document.getElementById('clearMoveStatsButton')?.addEventListener('click', () => {
    resetMoveRangeFilters();
    applyMoveFilters();
  });
  document.querySelectorAll('#abilityPanel-custom .custom-filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.abilityCustomGroup;
      const selectedValue = button.dataset.abilityCustomFilter || 'any';
      const isDeselecting = selectedValue !== 'any' && button.classList.contains('active');
      const value = isDeselecting ? 'any' : selectedValue;
      if (group === 'favorites') abilityFavoriteFilter = value;
      if (group === 'notes') abilityNoteFilter = value;
      document.querySelectorAll(`#abilityPanel-custom .custom-filter-button[data-ability-custom-group="${group}"]`).forEach((item) => {
        item.classList.toggle('active', item.dataset.abilityCustomFilter === value);
      });
      applyAbilityFilters();
    });
  });
  document.getElementById('clearAbilityFiltersButton')?.addEventListener('click', () => {
    if (elements.abilitySearchInput) elements.abilitySearchInput.value = '';
    abilityFavoriteFilter = 'any';
    abilityNoteFilter = 'any';
    document.querySelectorAll('#abilityPanel-custom .custom-filter-button').forEach((button) => {
      button.classList.toggle('active', button.dataset.abilityCustomFilter === 'any');
    });
    applyAbilityFilters();
  });
  bindDexSwitcher();
  bindMoveFilterTabs();
  bindStatCalculatorDismissal();
  const clearFilters = document.getElementById('clearFiltersButton');
  if (clearFilters) {
    clearFilters.addEventListener('click', resetFilters);
  }
  if (pokemonDataLoaded) loadMoveDexData();
  elements.randomButton.addEventListener('click', selectRandomDexEntry);
};

function selectRandomDexEntry() {
  if (selectedDex === 'pokemon') {
    if (!filteredPokemon.length) return;
    selectPokemon(filteredPokemon[Math.floor(Math.random() * filteredPokemon.length)]);
    scrollToSelected();
    return;
  }
  if (selectedDex === 'move') {
    if (!filteredMoves.length) return;
    selectMove(filteredMoves[Math.floor(Math.random() * filteredMoves.length)]);
    return;
  }
  if (!filteredAbilities.length) return;
  selectAbility(filteredAbilities[Math.floor(Math.random() * filteredAbilities.length)]);
}

function loadSupportingData() {
  if (abilityDataPromise) return abilityDataPromise;
  abilityDataPromise = (async () => {
    try {
      const abilityRows = await loadCachedSheetRows('abilities', loadAbilityData);
      abilitySheetRows = abilityRows;
      abilityDescriptionsLookup = buildAbilityDescriptionsLookup(abilityRows);
      abilityDescriptionGamesets = getAbilityDescriptionGamesets(abilityRows);
      abilityDataLoaded = true;
      refreshPokemonAbilitySection();
      initializeDexView(selectedDex);
    } catch (error) {
      abilityDataPromise = null;
      console.error('Unable to load ability data', error);
      elements.status.textContent = `Loaded ${allPokemon.length} Pokémon, but ability descriptions could not be loaded.`;
    }
  })();
  return abilityDataPromise;
}

function loadMoveDexData() {
  if (moveDexDataPromise) return moveDexDataPromise;
  moveDexDataPromise = loadCachedSheetRows('moves', loadMovesData).then((movesRows) => {
    movesLookup = buildMovesLookup(movesRows);
    allMoves = Object.values(movesLookup).filter((move) => move.name).sort((a, b) => a.name.localeCompare(b.name));
    moveDataLoaded = true;
    refreshPokemonMoveset();
    initializeDexView('move');
  }).catch((error) => {
    moveDexDataPromise = null;
    console.error('Unable to load move data', error);
    elements.status.textContent = `Loaded ${allPokemon.length} Pokémon, but move data could not be loaded.`;
  });
  return moveDexDataPromise;
}

function loadMoveDescriptions() {
  if (moveDescriptionsDataPromise) return moveDescriptionsDataPromise;
  moveDescriptionsDataPromise = loadCachedSheetRows('move-descriptions', loadMoveDescriptionsData).then((rows) => {
    moveDescriptionsLookup = buildMoveDescriptionsLookup(rows);
    moveDescriptionGamesets = rows.length ? getMoveDescriptionGamesets(rows) : [];
    moveDescriptionsLoaded = true;
    initializeDexView('move');
  }).catch((error) => {
    moveDescriptionsDataPromise = null;
    console.error('Unable to load move descriptions', error);
    elements.status.textContent = `Loaded ${allPokemon.length} Pokémon and moves, but move descriptions could not be loaded.`;
  });
  return moveDescriptionsDataPromise;
}

function bindFloatingActions() {
  elements.floatingRandomButton?.addEventListener('click', () => elements.randomButton?.click());
  elements.floatingSidebarButton?.addEventListener('click', () => elements.sidebarToggleButton?.click());
  elements.floatingProfileButton?.addEventListener('click', () => elements.profileButton?.click());

  const heroButtons = document.querySelector('.hero-buttons');
  if (!heroButtons || !elements.floatingActions || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(([entry]) => {
    elements.floatingActions.classList.toggle('visible', entry.intersectionRatio === 0);
  }, { threshold: [0, 1] });
  observer.observe(heroButtons);
}

function bindSidebarToggle() {
  elements.sidebarToggleButton?.addEventListener('click', () => {
    const activeLayout = document.querySelector('.layout:not([hidden])');
    if (!activeLayout) return;
    const collapsed = activeLayout.classList.toggle('sidebar-collapsed');
    const label = collapsed ? 'Show list & filters' : 'Hide list & filters';
    elements.sidebarToggleButton.setAttribute('aria-expanded', String(!collapsed));
    elements.sidebarToggleButton.textContent = label;
    if (elements.floatingSidebarButton) {
      elements.floatingSidebarButton.setAttribute('aria-expanded', String(!collapsed));
      elements.floatingSidebarButton.textContent = label;
    }
  });
}

function bindDexSwitcher() {
  const pokedexTab = document.getElementById('pokedexTab');
  const movedexTab = document.getElementById('movedexTab');
  const abilitydexTab = document.getElementById('abilitydexTab');
  pokedexTab.addEventListener('click', () => switchDexView('pokemon'));
  movedexTab.addEventListener('click', () => switchDexView('move'));
  abilitydexTab.addEventListener('click', () => switchDexView('ability'));
}

function switchDexView(dex) {
  const views = {
    pokemon: document.getElementById('pokedexView'),
    move: document.getElementById('movedexView'),
    ability: document.getElementById('abilitydexView')
  };
  const tabs = {
    pokemon: document.getElementById('pokedexTab'),
    move: document.getElementById('movedexTab'),
    ability: document.getElementById('abilitydexTab')
  };
  selectedDex = dex;
  Object.entries(views).forEach(([key, view]) => {
    view.hidden = key !== dex;
    tabs[key].classList.toggle('active', key === dex);
    tabs[key].setAttribute('aria-selected', String(key === dex));
  });
  document.querySelector('.dex-switcher').style.setProperty(
    '--dex-active-index',
    String(Object.keys(tabs).indexOf(dex))
  );
  const activeView = views[dex];
  activeView.classList.remove('dex-view-enter');
  void activeView.offsetWidth;
  activeView.classList.add('dex-view-enter');
  activeView.addEventListener('animationend', () => {
    activeView.classList.remove('dex-view-enter');
  }, { once: true });
  requestAnimationFrame(() => scrollToSelectedDexEntry(dex));
  const dexTitles = {
    pokemon: ['PokéDex Live', 'PokéDex Live'],
    move: ['PokéDex Live', 'MoveDex Live'],
    ability: ['PokéDex Live', 'AbilityDex Live']
  };
  document.getElementById('heroEyebrow').textContent = dexTitles[dex][0];
  document.getElementById('heroTitle').textContent = dexTitles[dex][1];
  const randomLabels = {
    pokemon: 'Random Pokémon',
    move: 'Random Move',
    ability: 'Random Ability'
  };
  elements.randomButton.textContent = randomLabels[dex];
  elements.floatingRandomButton.textContent = randomLabels[dex];
  elements.randomButton.hidden = false;
  elements.floatingRandomButton.hidden = false;
  initializeDexView(dex);
}

function initializeDexView(dex) {
  if (dex === 'move' && !moveDataLoaded) {
    loadMoveDexData();
    return;
  }
  if (dex === 'move' && !moveDescriptionsLoaded) {
    loadMoveDescriptions();
    return;
  }
  if (dex === 'move' && !moveDexInitialized) {
    moveLearnersLookup = buildMoveLearnersLookup(allPokemon);
    moveDexInitialized = true;
    renderMoveFilters();
    applyMoveFilters();
    return;
  }
  if (dex === 'ability' && !abilityDataLoaded) {
    loadSupportingData();
    return;
  }
  if (dex === 'ability' && !abilityDexInitialized) {
    abilityDexInitialized = true;
    allAbilities = buildAbilityDexEntries(abilitySheetRows, allPokemon);
    if (allAbilities.length) {
      applyAbilityFilters();
    } else {
      renderAbilityList();
      elements.abilityDetails.innerHTML = '<div class="details-placeholder"><h2>No ability data available</h2><p>Ability entries could not be loaded from the published sheet.</p></div>';
    }
  }
}

function navigateToPokemon(number, name) {
  const pokemon = allPokemon.find((entry) => (
    String(entry.number) === String(number)
    && normalizePokemonName(entry.name) === normalizePokemonName(name)
  ));
  if (!pokemon) return;
  switchDexView('pokemon');
  resetFilters();
  selectPokemon(pokemon);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToMove(moveId) {
  const move = movesLookup[moveId];
  if (!move) return;
  switchDexView('move');
  elements.moveSearchInput.value = '';
  selectedMoveTypes.clear();
  selectedMoveCategoryFilter = 'any';
  selectedMoveTarget = 'any';
  resetMoveRangeFilters();
  updateMoveFilterButtons();
  applyMoveFilters();
  selectMove(move);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getProfiles() {
  try {
    return JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}');
  } catch (error) {
    console.warn('Unable to read local profiles', error);
    return {};
  }
}

function saveProfiles(profiles) {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profiles));
}

function getCurrentProfile() {
  return currentUsername ? getProfiles()[currentUsername] || null : null;
}

function getPokemonKey(pokemon) {
  return pokemon.formKey || `${pokemon.number}|${normalizePokemonName(pokemon.name)}`;
}

function updateProfileButton() {
  if (!elements.profileButton) return;
  const label = currentUsername ? `Log out (${currentUsername})` : 'Log in';
  elements.profileButton.textContent = label;
  if (elements.floatingProfileButton) elements.floatingProfileButton.textContent = label;
}

function bindProfileControls() {
  updateProfileButton();
  elements.profileButton?.addEventListener('click', () => {
    if (currentUsername) {
      currentUsername = '';
      localStorage.removeItem('pokedexCurrentUser');
      updateProfileButton();
      applyFilter();
      applyMoveFilters();
      applyAbilityFilters();
      if (selectedPokemon) refreshPersonalTools(selectedPokemon);
      if (selectedMove) refreshMovePersonalTools(selectedMove);
      if (selectedAbility) refreshAbilityPersonalTools(selectedAbility);
      return;
    }
    openAuthModal('login');
  });

  document.querySelectorAll('[data-auth-close]').forEach((button) => {
    button.addEventListener('click', closeAuthModal);
  });
  document.getElementById('authModeToggle')?.addEventListener('click', () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  });
  document.getElementById('authForm')?.addEventListener('submit', handleAuthSubmit);
}

function setAuthMode(mode) {
  authMode = mode;
  const isLogin = mode === 'login';
  const title = document.getElementById('authTitle');
  const submit = document.getElementById('authSubmit');
  const toggle = document.getElementById('authModeToggle');
  const password = document.getElementById('authPassword');
  if (title) title.textContent = isLogin ? 'Log in' : 'Create a profile';
  if (submit) submit.textContent = isLogin ? 'Log in' : 'Create profile';
  if (toggle) toggle.textContent = isLogin ? 'Create a local profile' : 'I already have a profile';
  if (password) password.autocomplete = isLogin ? 'current-password' : 'new-password';
  const message = document.getElementById('authMessage');
  if (message) message.textContent = '';
  document.getElementById('authUsernameMessage').textContent = '';
  document.getElementById('authPasswordMessage').textContent = '';
}

function openAuthModal(mode = 'login') {
  const modal = document.getElementById('authModal');
  if (!modal) return;
  setAuthMode(mode);
  modal.hidden = false;
  document.getElementById('authUsername')?.focus();
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.hidden = true;
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const username = String(form.username.value || '').trim();
  const password = String(form.password.value || '');
  const message = document.getElementById('authMessage');
  const usernameMessage = document.getElementById('authUsernameMessage');
  const passwordMessage = document.getElementById('authPasswordMessage');
  const profiles = getProfiles();

  if (message) message.textContent = '';
  if (usernameMessage) usernameMessage.textContent = username ? username.length < 3 ? 'Username must be at least 3 characters.' : '' : 'Username is required.';
  if (passwordMessage) passwordMessage.textContent = password ? password.length < 4 ? 'Password must be at least 4 characters.' : '' : 'Password is required.';
  if (!username || username.length < 3 || !password || password.length < 4) return;

  if (authMode === 'register') {
    if (profiles[username]) {
      if (message) message.textContent = 'That username already exists on this browser.';
      return;
    }
    profiles[username] = { password, favorites: [], notes: {} };
    saveProfiles(profiles);
  } else if (!profiles[username] || profiles[username].password !== password) {
    if (message) message.textContent = 'Username or password is incorrect.';
    return;
  }

  currentUsername = username;
  localStorage.setItem('pokedexCurrentUser', currentUsername);
  updateProfileButton();
  closeAuthModal();
  form.reset();
  applyFilter();
  applyMoveFilters();
  applyAbilityFilters();
  if (selectedPokemon) refreshPersonalTools(selectedPokemon);
  if (selectedMove) refreshMovePersonalTools(selectedMove);
  if (selectedAbility) refreshAbilityPersonalTools(selectedAbility);
}

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
  typingFilterValue = 'any';

  document.querySelectorAll('.generation-button').forEach((button) => {
    if (button.closest('#panel-generation')) {
      button.classList.toggle('active', button.dataset.generation === 'any');
    }
  });
  document.querySelectorAll('.attribute-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.value === 'any');
  });
  eggGroupLogic = 'or';
  document.getElementById('eggGroupLogicAnd')?.classList.remove('active');
  document.getElementById('eggGroupLogicOr')?.classList.add('active');

  customFavoriteFilter = 'any';
  customNoteFilter = 'any';
  document.querySelectorAll('#panel-custom .custom-filter-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.customFilter === 'any');
  });

  document.querySelectorAll('.filter-panel input[type="number"]').forEach((input) => {
    input.value = '';
  });

  resetDualRangeFilters();

  applyFilter();
}

function resetDualRangeFilters() {
  document.querySelectorAll('.dual-range-filter').forEach((control) => {
    const max = Number(control.dataset.rangeMax);
    const min = Number(control.dataset.rangeMin || 0);
    const minRange = control.querySelector('input[type="range"][id$="-min-range"]');
    const maxRange = control.querySelector('input[type="range"][id$="-max-range"]');
    const minInput = control.querySelector('input[type="number"][id$="-min"]');
    const maxInput = control.querySelector('input[type="number"][id$="-max"]');
    const fill = control.querySelector('.dual-range-fill');
    const values = control.querySelector('.dual-range-values');
    if (!minRange || !maxRange || !minInput || !maxInput || !fill || !values) return;

    minRange.value = String(min);
    maxRange.value = String(max);
    minInput.value = String(min);
    maxInput.value = String(max);
    fill.style.left = '0%';
    fill.style.width = '100%';
    values.textContent = `${min} - ${max}`;
  });
}

function openSheetCache() {
  if (!sheetCacheDatabasePromise) {
    sheetCacheDatabasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(SHEET_CACHE_DB_NAME, 1);
      request.onupgradeneeded = () => {
        request.result.createObjectStore(SHEET_CACHE_STORE_NAME);
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  return sheetCacheDatabasePromise;
}

async function readCachedSheetRows(key) {
  try {
    const database = await openSheetCache();
    return await new Promise((resolve, reject) => {
      const request = database
        .transaction(SHEET_CACHE_STORE_NAME, 'readonly')
        .objectStore(SHEET_CACHE_STORE_NAME)
        .get(key);
      request.onsuccess = () => resolve(Array.isArray(request.result) ? request.result : null);
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.warn(`Unable to read cached ${key} sheet data`, error);
    return null;
  }
}

async function writeCachedSheetRows(key, rows) {
  try {
    const database = await openSheetCache();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction(SHEET_CACHE_STORE_NAME, 'readwrite');
      transaction.objectStore(SHEET_CACHE_STORE_NAME).put(rows, key);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  } catch (error) {
    console.warn(`Unable to save cached ${key} sheet data`, error);
  }
}

async function loadCachedSheetRows(key, loader) {
  const cachedRows = await readCachedSheetRows(key);
  if (cachedRows) {
    scheduleSheetRefresh(key, loader);
    return cachedRows;
  }

  const rows = await loader();
  if (rows.length) await writeCachedSheetRows(key, rows);
  return rows;
}

function scheduleSheetRefresh(key, loader) {
  const refresh = () => {
    loader()
      .then(async (rows) => {
        if (rows.length) await writeCachedSheetRows(key, rows);
      })
      .catch((error) => console.warn(`Unable to refresh cached ${key} sheet data`, error));
  };
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(refresh, { timeout: 5000 });
  } else {
    window.setTimeout(refresh, 1000);
  }
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

async function loadAbilityData() {
  try {
    const response = await fetch(ABILITY_SHEET_CSV);
    if (!response.ok) throw new Error('Ability CSV fetch failed');
    return parseCSV(await response.text());
  } catch (error) {
    console.warn('Unable to load ability descriptions', error);
    return [];
  }
}

async function loadMoveDescriptionsData() {
  try {
    const response = await fetch(MOVE_DESCRIPTIONS_CSV);
    if (!response.ok) throw new Error('Move descriptions CSV fetch failed');
    return parseCSV(await response.text());
  } catch (error) {
    console.warn('Unable to load move descriptions', error);
    return [];
  }
}

function getMoveDescriptionGamesets(rows) {
  const headerIndex = rows.findIndex((row) => String(row[0] || '').trim() === 'Dex #' && String(row[1] || '').trim() === 'Ability');
  if (headerIndex < 0) return [];
  return rows[headerIndex].slice(2).map((value) => String(value || '').trim()).filter(Boolean);
}

function buildMoveDescriptionsLookup(rows) {
  const headerIndex = rows.findIndex((row) => String(row[0] || '').trim() === 'Dex #' && String(row[1] || '').trim() === 'Ability');
  if (headerIndex < 0) return {};
  const headers = rows[headerIndex];
  return rows.slice(headerIndex + 1).reduce((lookup, row) => {
    const moveName = String(row[1] || '').trim();
    if (!moveName) return lookup;
    lookup[normalizePokemonName(moveName)] = headers.slice(2).reduce((descriptions, gameset, index) => {
      const description = String(row[index + 2] || '').trim();
      if (gameset && description) descriptions[gameset] = description;
      return descriptions;
    }, {});
    return lookup;
  }, {});
}

function buildAbilityDescriptionsLookup(rows) {
  const headerIndex = rows.findIndex((row) => row.some((cell) => /^(ability|ability name)$/i.test(String(cell || '').trim())));
  if (headerIndex < 0) return {};

  const headers = rows[headerIndex];
  const abilityColumn = headers.findIndex((cell) => /^(ability|ability name)$/i.test(String(cell || '').trim()));
  if (abilityColumn < 0) return {};

  const abilityGameNames = {
    RSE: 'Ruby / Sapphire / Emerald',
    FRLG: 'FireRed / LeafGreen',
    DPPL: 'Diamond / Pearl / Platinum',
    HGSS: 'HeartGold / SoulSilver',
    BW: 'Black / White',
    B2W2: 'Black 2 / White 2',
    XY: 'X / Y',
    OAAS: 'Omega Ruby / Alpha Sapphire',
    SM: 'Sun / Moon',
    USUM: 'Ultra Sun / Ultra Moon',
    SWSH: 'Sword / Shield',
    BDSP: 'Brilliant Diamond / Shining Pearl',
    SV: 'Scarlet / Violet',
    CHA: 'Pokémon Champions'
  };
  const gamesByHeader = new Map(POKEDEX_ENTRY_COLUMNS.map((column) => [normalizeGameKey(column.game), column.game]));
  const gameColumns = headers.reduce((columns, header, index) => {
    const headerName = String(header || '').trim();
    if (index <= abilityColumn || !headerName) return columns;
    const normalizedHeader = normalizeGameKey(headerName);
    const game = abilityGameNames[headerName.toUpperCase()] || gamesByHeader.get(normalizedHeader) || headerName;
    columns.push({ index, game });
    return columns;
  }, []);

  return rows.slice(headerIndex + 1).reduce((lookup, row) => {
    const abilityName = String(row[abilityColumn] || '').trim();
    if (!abilityName) return lookup;
    const key = normalizePokemonName(abilityName);
    const latestDescription = [...gameColumns].reverse().find((column) => {
      const value = String(row[column.index] || '').trim();
      return value && value.toLowerCase() !== 'undefined';
    });
    if (latestDescription) {
      lookup[key] = [{
        game: latestDescription.game,
        description: String(row[latestDescription.index]).trim()
      }];
    }
    return lookup;
  }, {});
}

function getAbilityDescriptionGamesets(rows) {
  const headerIndex = rows.findIndex((row) => (
    String(row[0] || '').trim() === 'Dex #'
    && String(row[1] || '').trim() === 'Ability'
  ));
  return headerIndex < 0
    ? []
    : rows[headerIndex].slice(2).map((gameset) => String(gameset || '').trim()).filter(Boolean);
}

function buildAbilityPokemonLookup(pokemonList) {
  const lookup = {};
  pokemonList.forEach((pokemon) => {
    const slotsByAbility = new Map();
    pokemon.abilities.forEach((ability) => {
      const key = normalizePokemonName(ability);
      if (key) slotsByAbility.set(key, ['Regular']);
    });
    const hiddenKey = normalizePokemonName(pokemon.hiddenAbility);
    if (hiddenKey) {
      const slots = slotsByAbility.get(hiddenKey) || [];
      slots.push('Hidden');
      slotsByAbility.set(hiddenKey, slots);
    }
    slotsByAbility.forEach((slots, key) => {
      if (!lookup[key]) lookup[key] = [];
      lookup[key].push({ pokemon, slots });
    });
  });
  return lookup;
}

function buildAbilityDexEntries(rows, pokemonList) {
  const headerIndex = rows.findIndex((row) => (
    String(row[0] || '').trim() === 'Dex #'
    && String(row[1] || '').trim() === 'Ability'
  ));
  if (headerIndex < 0) return [];

  const headers = rows[headerIndex];
  const pokemonByAbility = buildAbilityPokemonLookup(pokemonList);
  return rows.slice(headerIndex + 1).reduce((entries, row) => {
    const dexNumber = String(row[0] || '').trim();
    const name = String(row[1] || '').trim();
    if (!dexNumber || !name) return entries;
    const descriptions = headers.slice(2).reduce((lookup, gameset, index) => {
      const key = String(gameset || '').trim();
      const description = String(row[index + 2] || '').trim();
      if (key && description && description.toLowerCase() !== 'undefined') lookup[key] = description;
      return lookup;
    }, {});
    const pokemon = pokemonByAbility[normalizePokemonName(name)] || [];
    entries.push({ dexNumber, name, descriptions, pokemon });
    return entries;
  }, []).sort((left, right) => Number(left.dexNumber) - Number(right.dexNumber));
}

function buildPokedexLookup(rows) {
  const headerIndex = rows.findIndex((row) => (
    String(row[0] || '').trim() === 'Dex #'
    && String(row[1] || '').trim() === 'Main Dex'
    && String(row[2] || '').trim() === 'Display Name'
    && String(row[3] || '').trim() === 'Pokemon'
  ));
  if (headerIndex === -1) return {};
  return rows.slice(headerIndex + 1).reduce((lookup, row) => {
    const dexNumber = String(row[0] || '').trim();
    const mainDex = String(row[1] || '').trim();
    const displayName = String(row[2] || '').trim();
    const pokemonName = String(row[3] || '').trim();
    if (!dexNumber || !pokemonName) return lookup;

    const entries = POKEDEX_ENTRY_COLUMNS.reduce((acc, column) => {
      const entryText = String(row[column.index] || '').trim();
      if (entryText && entryText.toLowerCase() !== 'undefined') {
        acc.push({ game: column.game, generation: column.generation, entry: entryText });
      }
      return acc;
    }, []);

    const formKey = buildPokedexLookupKey(dexNumber, mainDex, pokemonName);
    const nameKey = normalizePokemonName(pokemonName);
    const pokedexData = { entries, displayName };
    lookup[formKey] = pokedexData;
    if (!lookup[nameKey]) {
      lookup[nameKey] = pokedexData;
    }
    return lookup;
  }, {});
}

async function parseCSV(text) {
  const rows = [];
  let current = [];
  let buffer = '';
  let insideQuotes = false;
  const cleanCell = (value) => value.replace(/\s+/g, ' ').trim();
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
        current.push(cleanCell(buffer));
        buffer = '';
      } else if (char === '\r') {
        continue;
      } else if (char === '\n') {
        current.push(cleanCell(buffer));
        rows.push(current);
        current = [];
        buffer = '';
      } else {
        buffer += char;
      }
    }
    if ((i + 1) % 16384 === 0) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
  if (buffer.length || current.length) {
    current.push(cleanCell(buffer));
    rows.push(current);
  }
  return rows;
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
  { index: 4, game: 'Red', generation: 1 },
  { index: 5, game: 'Green', generation: 1 },
  { index: 6, game: 'Blue', generation: 1 },
  { index: 7, game: 'Yellow', generation: 1 },
  { index: 8, game: 'Gold', generation: 2 },
  { index: 9, game: 'Silver', generation: 2 },
  { index: 10, game: 'Crystal', generation: 2 },
  { index: 11, game: 'Ruby', generation: 3 },
  { index: 12, game: 'Sapphire', generation: 3 },
  { index: 13, game: 'Emerald', generation: 3 },
  { index: 14, game: 'FireRed', generation: 3 },
  { index: 15, game: 'LeafGreen', generation: 3 },
  { index: 16, game: 'Diamond', generation: 4 },
  { index: 17, game: 'Pearl', generation: 4 },
  { index: 18, game: 'Platinum', generation: 4 },
  { index: 19, game: 'HeartGold', generation: 4 },
  { index: 20, game: 'SoulSilver', generation: 4 },
  { index: 21, game: 'Black', generation: 5 },
  { index: 22, game: 'White', generation: 5 },
  { index: 23, game: 'Black 2', generation: 5 },
  { index: 24, game: 'White 2', generation: 5 },
  { index: 25, game: 'X', generation: 6 },
  { index: 26, game: 'Y', generation: 6 },
  { index: 27, game: 'Omega Ruby', generation: 6 },
  { index: 28, game: 'Alpha Sapphire', generation: 6 },
  { index: 29, game: 'Sun', generation: 7 },
  { index: 30, game: 'Moon', generation: 7 },
  { index: 31, game: 'Ultra Sun', generation: 7 },
  { index: 32, game: 'Ultra Moon', generation: 7 },
  { index: 33, game: 'Let\'s Go Pikachu', generation: 7 },
  { index: 34, game: 'Let\'s Go Eevee', generation: 7 },
  { index: 35, game: 'Sword', generation: 8 },
  { index: 36, game: 'Shield', generation: 8 },
  { index: 37, game: 'Brilliant Diamond', generation: 8 },
  { index: 38, game: 'Shining Pearl', generation: 8 },
  { index: 39, game: 'Pokemon Legends: Arceus', generation: 8 },
  { index: 40, game: 'Scarlet', generation: 9 },
  { index: 41, game: 'Violet', generation: 9 },
  { index: 42, game: 'Legends: ZA', generation: 9 }
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

function buildMoveLearnersLookup(pokemonList) {
  const categories = ['levelUp', 'tm', 'egg', 'evolution', 'reminder'];
  const lookup = {};

  pokemonList.forEach((pokemon) => {
    categories.forEach((category) => {
      String(pokemon.moves?.[category] || '')
        .split('|')
        .map((entry) => entry.trim())
        .filter(Boolean)
        .forEach((entry) => {
          const separator = entry.indexOf('-');
          if (separator <= 0) return;
          const moveId = entry.slice(0, separator).trim();
          const learnedAs = entry.slice(separator + 1).trim();
          if (!/^\d+$/.test(moveId)) return;
          if (!lookup[moveId]) lookup[moveId] = Object.fromEntries(categories.map((key) => [key, []]));
          lookup[moveId][category].push({ pokemon, learnedAs });
        });
    });
  });

  Object.values(lookup).forEach((groups) => {
    Object.values(groups).forEach((learners) => {
      learners.sort((left, right) => Number(left.pokemon.number) - Number(right.pokemon.number)
        || left.pokemon.name.localeCompare(right.pokemon.name));
    });
  });
  return lookup;
}

function renderMoveFilters() {
  const types = [...new Set(allMoves.map((move) => move.type).filter(Boolean))].sort();
  elements.moveTypeButtons.innerHTML = ['any', ...types].map((type) => {
    const label = type === 'any' ? 'Any type' : type;
    const color = TYPE_COLORS[type] || '#334155';
    const selected = selectedMoveTypes.has(type);
    const active = type === 'any' ? selectedMoveTypes.size === 0 : selected;
    return `<button type="button" class="type-button${active ? ' active' : ''}${selected ? ' selected' : ''}" data-move-type="${escapeHtml(type)}" aria-pressed="${active}" style="background:${color}">${escapeHtml(label)}</button>`;
  }).join('');
  elements.moveTypeButtons.classList.toggle('has-selection', selectedMoveTypes.size > 0);
  elements.moveCategoryButtons.innerHTML = [
    ['any', 'Any'], ['Physical', 'Physical'], ['Special', 'Special'], ['Status', 'Status']
  ].map(([category, label]) => `<button type="button" class="generation-button${category === selectedMoveCategoryFilter ? ' active' : ''}" data-move-category="${category}" aria-pressed="${category === selectedMoveCategoryFilter}">${label}</button>`).join('');
  const availableTargets = new Set(allMoves.map((move) => move.target).filter(Boolean));
  const targetRows = [
    [['any', 'Any target']],
    [['All', 'All'], ['All Allies', 'All Allies'], ['All Foes', 'All Foes']],
    [['All Adjacent', 'All Adjacent'], ['All Adjacent Foes', 'All Adjacent Foes']],
    [['Any', 'Any'], ['Selected', 'Selected']],
    [['Adjacent Ally', 'Adjacent Ally'], ['Adjacent Foe', 'Adjacent Foe']],
    [['Self', 'Self'], ['Ally or Self', 'Ally or Self']],
    [['Previous Opponent', 'Previous Opponent']]
  ];
  elements.moveTargetButtons.innerHTML = targetRows
    .map((row) => row.filter(([target]) => target === 'any' || availableTargets.has(target)))
    .filter((row) => row.length)
    .map((row) => `<div class="move-target-filter-row columns-${row.length}">${row.map(([target, label]) => `<button type="button" class="generation-button${target === selectedMoveTarget ? ' active' : ''}" data-move-target="${escapeHtml(target)}" aria-pressed="${target === selectedMoveTarget}">${escapeHtml(label)}</button>`).join('')}</div>`)
    .join('');
  const maximum = (getValue, fallback = 1) => Math.max(fallback, ...allMoves.map((move) => parseMoveFilterNumber(getValue(move)) || 0));
  const priorities = allMoves.map((move) => parseMoveFilterNumber(move.priority)).filter(Number.isFinite);
  const minimumPriority = Math.min(0, ...priorities);
  const maximumPriority = Math.max(0, ...priorities);
  elements.moveNumericFilters.innerHTML = [
    renderDualRangeFilter('movePP', 'PP', maximum((move) => move.minPP)),
    renderDualRangeFilter('movePower', 'Power', maximum((move) => move.power)),
    renderDualRangeFilter('moveAccuracy', 'Accuracy (%)', maximum((move) => move.accuracy, 100)),
    renderDualRangeFilter('moveCritRate', 'Crit Rate', maximum((move) => move.critRate), 0.01),
    renderDualRangeFilter('movePriority', 'Priority', maximumPriority, 1, minimumPriority)
  ].join('');
  bindDualRangeFilters();
}

function bindMoveFilterTabs() {
  const tabs = document.querySelectorAll('#moveFilterTabs .filter-tab');
  tabs.forEach((button) => {
    button.addEventListener('click', () => {
      tabs.forEach((tab) => {
        const active = tab === button;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      document.querySelectorAll('#moveFilterPanels .filter-panel').forEach((panel) => {
        panel.style.display = panel.id === `movePanel-${button.dataset.movePanel}` ? '' : 'none';
      });
      applyMoveFilters();
    });
  });
}

function updateMoveFilterButtons() {
  elements.moveTypeButtons?.querySelectorAll('[data-move-type]').forEach((button) => {
    const selected = selectedMoveTypes.has(button.dataset.moveType);
    const active = button.dataset.moveType === 'any' ? selectedMoveTypes.size === 0 : selected;
    button.classList.toggle('active', active);
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(active));
  });
  elements.moveTypeButtons?.classList.toggle('has-selection', selectedMoveTypes.size > 0);
  elements.moveCategoryButtons?.querySelectorAll('[data-move-category]').forEach((button) => {
    const active = button.dataset.moveCategory === selectedMoveCategoryFilter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  elements.moveTargetButtons?.querySelectorAll('[data-move-target]').forEach((button) => {
    const active = button.dataset.moveTarget === selectedMoveTarget;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function parseMoveFilterNumber(value) {
  const normalized = String(value ?? '').trim().replace(/[^0-9.\-]/g, '');
  if (!normalized) return null;
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function getMoveRange(prefix) {
  return {
    min: Number(document.getElementById(`${prefix}-min`)?.value || 0),
    max: Number(document.getElementById(`${prefix}-max`)?.value || 0)
  };
}

function resetMoveRangeFilters() {
  document.querySelectorAll('#moveNumericFilters .dual-range-filter').forEach((control) => {
    const prefix = control.dataset.rangePrefix;
    const max = Number(control.dataset.rangeMax);
    const min = Number(control.dataset.rangeMin || 0);
    control.querySelector(`#${prefix}-min-range`).value = String(min);
    control.querySelector(`#${prefix}-max-range`).value = String(max);
    control.querySelector(`#${prefix}-min`).value = String(min);
    control.querySelector(`#${prefix}-max`).value = String(max);
    control.querySelector('.dual-range-fill').style.cssText = 'left:0%;width:100%';
    control.querySelector('.dual-range-values').textContent = `${min} - ${max}`;
  });
}

function applyMoveFilters() {
  const query = String(elements.moveSearchInput?.value || '').trim().toLowerCase();
  const profile = getCurrentProfile();
  const ppRange = getMoveRange('movePP');
  const powerRange = getMoveRange('movePower');
  const accuracyRange = getMoveRange('moveAccuracy');
  const critRateRange = getMoveRange('moveCritRate');
  const priorityRange = getMoveRange('movePriority');
  filteredMoves = allMoves.filter((move) => {
    const matchesQuery = !query || `${move.name} ${move.type} ${move.category}`.toLowerCase().includes(query);
    const pp = parseMoveFilterNumber(move.minPP) ?? 0;
    const power = parseMoveFilterNumber(move.power) ?? 0;
    const accuracy = parseMoveFilterNumber(move.accuracy) ?? 0;
    const critRate = parseMoveFilterNumber(move.critRate) ?? 0;
    const priority = parseMoveFilterNumber(move.priority) ?? 0;
    const moveKey = getPersonalToolsKey(move, 'move');
    const isFavorite = Boolean(profile?.favorites?.includes(moveKey));
    const hasNote = Boolean(profile?.notes?.[moveKey]?.trim());
    return matchesQuery
      && (selectedMoveTypes.size === 0 || selectedMoveTypes.has(move.type))
      && (selectedMoveCategoryFilter === 'any' || move.category === selectedMoveCategoryFilter)
      && (selectedMoveTarget === 'any' || move.target === selectedMoveTarget)
      && pp >= ppRange.min && pp <= ppRange.max
      && power >= powerRange.min && power <= powerRange.max
      && accuracy >= accuracyRange.min && accuracy <= accuracyRange.max
      && critRate >= critRateRange.min && critRate <= critRateRange.max
      && priority >= priorityRange.min && priority <= priorityRange.max
      && (moveFavoriteFilter !== 'favorite' || isFavorite)
      && (moveFavoriteFilter !== 'notFavorite' || !isFavorite)
      && (moveNoteFilter !== 'hasNote' || hasNote)
      && (moveNoteFilter !== 'noNote' || !hasNote);
  });
  renderMoveList();
  if (selectedMove) return;
  if (filteredMoves.length) {
    selectMove(filteredMoves[0]);
  } else {
    elements.moveDetails.innerHTML = '<div class="details-placeholder"><h2>No moves found</h2><p>Try another search or filter.</p></div>';
  }
}

function renderMoveList() {
  elements.moveList.innerHTML = '';
  elements.moveListCount.textContent = `${filteredMoves.length} available`;
  const profile = getCurrentProfile();
  filteredMoves.forEach((move) => {
    const card = document.createElement('div');
    card.className = 'pokemon-card move-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    const isFavorite = Boolean(profile?.favorites?.includes(getPersonalToolsKey(move, 'move')));
    card.innerHTML = `<h3>${escapeHtml(move.name)}${isFavorite ? ' <span class="favorite-star" aria-label="Favorite">★</span>' : ''}</h3><div class="move-card-meta">${renderMoveTypePill(move.type)}${renderMoveCategoryBadge(move.category)}</div>`;
    if (selectedMove?.id === move.id) card.classList.add('active');
    card.addEventListener('click', (event) => {
      selectMove(move);
    });
    card.addEventListener('keydown', (event) => {
      if (event.target !== card || !['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      selectMove(move);
    });
    elements.moveList.appendChild(card);
  });
}

function renderAbilityList() {
  elements.abilityList.innerHTML = '';
  elements.abilityListCount.textContent = `${filteredAbilities.length} available`;
  const profile = getCurrentProfile();
  filteredAbilities.forEach((ability) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'pokemon-card move-card';
    const isFavorite = Boolean(profile?.favorites?.includes(getPersonalToolsKey(ability, 'ability')));
    card.innerHTML = `<h3>${escapeHtml(ability.name)}${isFavorite ? ' <span class="favorite-star" aria-label="Favorite">★</span>' : ''}</h3>`;
    if (selectedAbility?.dexNumber === ability.dexNumber) card.classList.add('active');
    card.addEventListener('click', () => selectAbility(ability));
    elements.abilityList.appendChild(card);
  });
  if (selectedDex === 'ability') scrollToSelectedDexEntry('ability');
}

function applyAbilityFilters() {
  if (!abilityDexInitialized) return;
  const query = String(elements.abilitySearchInput?.value || '').trim().toLowerCase();
  const profile = getCurrentProfile();
  filteredAbilities = allAbilities.filter((ability) => {
    const matchesQuery = !query || ability.name.toLowerCase().includes(query);
    const key = getPersonalToolsKey(ability, 'ability');
    const isFavorite = Boolean(profile?.favorites?.includes(key));
    const hasNote = Boolean(profile?.notes?.[key]?.trim());
    return matchesQuery
      && (abilityFavoriteFilter !== 'favorite' || isFavorite)
      && (abilityFavoriteFilter !== 'notFavorite' || !isFavorite)
      && (abilityNoteFilter !== 'hasNote' || hasNote)
      && (abilityNoteFilter !== 'noNote' || !hasNote);
  });
  renderAbilityList();

  if (selectedAbility && filteredAbilities.some((ability) => ability.dexNumber === selectedAbility.dexNumber)) return;
  if (filteredAbilities.length) {
    selectAbility(filteredAbilities[0]);
  } else {
    selectedAbility = null;
    elements.abilityDetails.innerHTML = '<div class="details-placeholder"><h2>No abilities found</h2><p>Try another search or filter.</p></div>';
  }
}

function selectAbility(ability) {
  selectedAbility = ability;
  selectedAbilityGen = 9;
  renderAbilityList();
  renderAbilityDetails(ability);
  if (selectedDex === 'ability') scrollToSelectedDexEntry('ability');
}

function selectMove(move) {
  selectedMove = move;
  selectedMoveLearnerCategory = 'levelUp';
  renderMoveList();
  renderMoveDetails(move);
  if (selectedDex === 'move') scrollToSelectedDexEntry('move');
}

function renderMoveDetails(move) {
  const accuracy = move.accuracy
    ? (String(move.accuracy).trim().endsWith('%') ? move.accuracy : `${move.accuracy}%`)
    : '—';
  const minPP = parseMoveFilterNumber(move.minPP);
  const maxPP = parseMoveFilterNumber(move.maxPP);
  const pp = minPP !== null && maxPP !== null
    ? (minPP === maxPP ? String(minPP) : `${minPP}-${maxPP}`)
    : String(move.minPP || move.maxPP || '—');
  const stats = [
    ['PP', pp], ['Power', move.power || '—'], ['Accuracy', accuracy],
    ['Crit Rate', move.critRate || '—'], ['Priority', move.priority || '—']
  ];
  const statHtml = stats.map(([label, value]) => `<div class="move-stat"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
  const effects = [
    ['Secondary Effect', move.secondaryEffect],
    ['Secondary Stats', move.secondaryStats], ['Secondary Chance', move.secondaryChance]
  ].filter(([, value]) => value);
  elements.moveDetails.classList.remove('details-placeholder');
  elements.moveDetails.innerHTML = `
    <article class="detail-card move-detail-card">
      <div class="move-detail-heading">
        <h2>${escapeHtml(move.name)}</h2>
        <div class="badges">
          ${renderMoveTypePill(move.type)}
          ${renderMoveCategoryBadge(move.category)}
        </div>
      </div>
      ${renderPersonalTools(move, 'move')}
      <div class="move-overview-grid">
        <section class="move-stat-grid" aria-label="Move stats">${statHtml}</section>
        ${renderMoveTarget(move.target)}
      </div>
      ${renderMovePokedexSection(move)}
      ${effects.length ? `<section class="move-effects-section"><h2>Battle Effects</h2>${effects.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join('')}</section>` : ''}
      ${renderMoveLearnersSection(move)}
    </article>`;

  bindPersonalToolHandlers(move, elements.moveDetails, 'move');
  elements.moveDetails.querySelectorAll('.move-pokedex-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMoveGen = button.dataset.gameset || Number(button.dataset.generation);
      renderMoveDetails(move);
    });
  });

  elements.moveDetails.querySelectorAll('.pokemon-navigation-link').forEach((button) => {
    button.addEventListener('click', () => navigateToPokemon(button.dataset.pokemonNumber, button.dataset.pokemonName));
  });

  elements.moveDetails.querySelectorAll('.move-learners-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMoveLearnerCategory = button.dataset.category || 'levelUp';
      renderMoveDetails(move);
    });
  });
}

function renderAbilityDetails(ability) {
  elements.abilityDetails.classList.remove('details-placeholder');
  elements.abilityDetails.innerHTML = `
    <article class="detail-card move-detail-card ability-detail-card">
      <div class="move-detail-heading">
        <h2>${escapeHtml(ability.name)}</h2>
      </div>
      ${renderPersonalTools(ability, 'ability')}
      ${renderAbilityEntriesSection(ability)}
      ${renderAbilityPokemonSection(ability)}
    </article>`;

  bindPersonalToolHandlers(ability, elements.abilityDetails, 'ability');
  elements.abilityDetails.querySelectorAll('.ability-dex-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedAbilityGen = button.dataset.generation === 'CHA' ? 'CHA' : Number(button.dataset.generation);
      renderAbilityDetails(ability);
    });
  });
  elements.abilityDetails.querySelectorAll('.pokemon-navigation-link').forEach((button) => {
    button.addEventListener('click', () => navigateToPokemon(button.dataset.pokemonNumber, button.dataset.pokemonName));
  });
  attachTypeHoverHandlers(elements.abilityDetails);
  attachPopupClickHandler(elements.abilityDetails);
}

function renderAbilityEntriesSection(ability) {
  const generations = [...new Set(abilityDescriptionGamesets.map((gameset) => (
    gameset === 'CHA' ? 'CHA' : MOVE_GAMESET_INFO[gameset]?.generation
  )).filter(Boolean))];
  const tabs = generations.map((generation) => `
    <button type="button" class="pokedex-tab ability-dex-tab${selectedAbilityGen === generation ? ' active' : ''}" data-generation="${generation}">
      ${generation === 'CHA' ? 'CHA' : `Gen ${generation}`}
    </button>`).join('');
  const gamesets = abilityDescriptionGamesets.filter((gameset) => (
    selectedAbilityGen === 'CHA'
      ? gameset === 'CHA'
      : MOVE_GAMESET_INFO[gameset]?.generation === selectedAbilityGen
  ));
  const cards = gamesets.map((gameset) => {
    const game = MOVE_GAMESET_INFO[gameset]?.label || gameset;
    const description = ability.descriptions[gameset];
    if (!description) {
      return `<div class="pokedex-entry-box pokedex-no-entry"><div class="pokedex-entry-game">${escapeHtml(game)}</div><div class="pokedex-entry-text">No Dex Entry</div></div>`;
    }
    const color = getGameGradientColor(game) || '#38bdf8';
    const gradient = color.startsWith('rgba(') ? color : hexToRgba(color, 0.18);
    return `<div class="pokedex-entry-box" style="background:linear-gradient(360deg,rgba(15,23,32,0.92),${gradient})"><div class="pokedex-entry-game">${escapeHtml(game)}</div><div class="pokedex-entry-text">${escapeHtml(description)}</div></div>`;
  }).join('');
  const content = cards || `<div class="pokedex-empty">No ability entries are listed for ${selectedAbilityGen === 'CHA' ? 'Pokémon Champions' : `Generation ${selectedAbilityGen}`}.</div>`;
  return `
    <section class="pokedex-card stats-card ability-pokedex-section">
      <div class="section-header"><h2>Ability Dex Entries</h2></div>
      <div class="pokedex-tabs">${tabs}</div>
      <div class="pokedex-grid">${content}</div>
    </section>`;
}

function renderAbilityPokemonSection(ability) {
  const rows = ability.pokemon.length
    ? ability.pokemon.map(({ pokemon, slots }) => `
        <tr>
          <td>#${escapeHtml(pokemon.number)}</td>
          <td><button type="button" class="dex-navigation-link pokemon-navigation-link" data-pokemon-number="${escapeHtml(pokemon.number)}" data-pokemon-name="${escapeHtml(pokemon.name)}">${escapeHtml(pokemon.displayName || pokemon.name)}</button></td>
          <td><div class="move-learner-types">${pokemon.types.filter(Boolean).map((type) => renderTypeBadge(type, { compact: true })).join('') || '—'}</div></td>
          <td>${slots.map(escapeHtml).join(', ')}</td>
        </tr>`).join('')
    : '<tr><td colspan="4" class="moveset-empty">No Pokémon are listed with this ability.</td></tr>';

  return `
    <section class="moveset-card stats-card ability-pokemon-card">
      <div class="section-header"><h2>Pokémon with This Ability</h2></div>
      <div class="moveset-table-wrap">
        <table class="moveset-table ability-pokemon-table">
          <thead><tr><th>Dex #</th><th>Pokémon</th><th>Type</th><th>Slot</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>`;
}

function renderMoveTypePill(type) {
  const safeType = String(type || '').trim();
  const color = TYPE_COLORS[safeType] || '#475569';
  const textColor = hexIsLight(color) ? '#07111a' : '#ffffff';
  return `<span class="move-type-pill" style="background:${color};color:${textColor}">${escapeHtml(safeType || 'Unknown')}</span>`;
}

function renderMoveCategoryBadge(category) {
  const safeCategory = String(category || 'Unknown').trim();
  const className = ['physical', 'special', 'status'].includes(safeCategory.toLowerCase())
    ? safeCategory.toLowerCase()
    : 'unknown';
  return `<span class="move-category-badge category-${className}">${escapeHtml(safeCategory)}</span>`;
}

function renderMovePokedexSection(move) {
  const descriptions = moveDescriptionsLookup[normalizePokemonName(move.name)] || {};
  const tabs = Array.from({ length: 8 }, (_, index) => index + 2)
    .map((generation) => `<button type="button" class="pokedex-tab move-pokedex-tab${selectedMoveGen === generation ? ' active' : ''}" data-generation="${generation}">Gen ${generation}</button>`);
  tabs.push(`<button type="button" class="pokedex-tab move-pokedex-tab${selectedMoveGen === 'CHA' ? ' active' : ''}" data-gameset="CHA">CHA</button>`);
  const gamesets = selectedMoveGen === 'CHA'
    ? moveDescriptionGamesets.includes('CHA') ? ['CHA'] : []
    : moveDescriptionGamesets.filter((gameset) => MOVE_GAMESET_INFO[gameset]?.generation === selectedMoveGen && gameset !== 'CHA');
  const cards = gamesets.map((gameset) => {
    const game = MOVE_GAMESET_INFO[gameset]?.label || gameset;
    const description = descriptions[gameset];
    if (!description) {
      return `<div class="pokedex-entry-box pokedex-no-entry"><div class="pokedex-entry-game">${escapeHtml(game)}</div><div class="pokedex-entry-text">No Dex Entry</div></div>`;
    }
    const color = getGameGradientColor(game) || '#38bdf8';
    const gradient = color.startsWith('rgba(') ? color : hexToRgba(color, 0.18);
    return `<div class="pokedex-entry-box" style="background:linear-gradient(360deg,rgba(15,23,32,0.92),${gradient})"><div class="pokedex-entry-game">${escapeHtml(game)}</div><div class="pokedex-entry-text">${escapeHtml(description)}</div></div>`;
  }).join('');
  const content = cards || `<div class="pokedex-empty">No move description gamesets are listed for ${selectedMoveGen === 'CHA' ? 'Pokémon Champions' : `Generation ${selectedMoveGen}`}.</div>`;
  return `
    <section class="pokedex-card stats-card move-pokedex-section">
      <div class="section-header"><h2>Pokédex Entries</h2></div>
      <div class="pokedex-tabs">${tabs.join('')}</div>
      <div class="pokedex-grid">${content}</div>
    </section>`;
}

function renderMoveTarget(targetValue) {
  const target = String(targetValue || '').trim();
  const targetKey = target.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const targetMap = {
    'adjacent ally': [5],
    'adjacent foes': [1, 2],
    'adjacent foe': [1, 2],
    all: [1, 2, 3, 4, 5, 6],
    'all adjacent': [1, 2, 5],
    'all adjacent foes': [1, 2],
    'all adjacent foes only': [1, 2],
    'all allies': [4, 5, 6],
    'ally or self': [4, 5, 6],
    'self ally': [4, 5, 6],
    'self or ally': [4, 5, 6],
    'self ally target': [4, 5, 6],
    'all foes': [1, 2, 3],
    'all enemies': [1, 2, 3],
    'previous opponent': [2],
    selected: [1, 2, 5],
    self: [4],
    any: [1, 2, 3, 5, 6],
    adjacent: [1, 2, 5],
    opponent: [1]
  };
  const highlighted = targetMap[targetKey] || [];
  const positions = [
    { number: 1, label: 'Opponent', side: 'foe' },
    { number: 2, label: 'Opponent', side: 'foe' },
    { number: 3, label: 'Opponent', side: 'foe' },
    { number: 4, label: 'User', side: 'ally' },
    { number: 5, label: 'Ally', side: 'ally' },
    { number: 6, label: 'Ally', side: 'ally' }
  ];
  const adjacentPairs = [[1, 2], [2, 3], [4, 5], [5, 6], [1, 4], [2, 5], [3, 6]];
  const slotCenters = {
    1: [50, 38], 2: [150, 38], 3: [250, 38],
    4: [50, 122], 5: [150, 122], 6: [250, 122]
  };
  const connections = targetKey.includes('all')
    ? adjacentPairs
      .filter(([from, to]) => highlighted.includes(from) && highlighted.includes(to))
      .map(([from, to]) => {
        const [x1, y1] = slotCenters[from];
        const [x2, y2] = slotCenters[to];
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
      }).join('')
    : '';
  const renderSlot = (position) => `<div class="target-slot target-${position.side}${highlighted.includes(position.number) ? ' is-targeted' : ''}" data-position="${position.number}"><span class="target-piece" aria-hidden="true"></span><span>${position.label}</span></div>`;
  return `
    <section class="move-target-section" aria-label="Move target: ${escapeHtml(target || 'Unknown')}">
      <div class="section-header"><h2>Target</h2><span class="small">${escapeHtml(target || 'Unknown')}</span></div>
      <div class="target-board" role="img" aria-label="Highlighted positions are affected by this move">
        <svg class="target-connections" viewBox="0 0 300 160" preserveAspectRatio="none" aria-hidden="true">${connections}</svg>
        <div class="target-slots">${positions.map(renderSlot).join('')}</div>
      </div>
    </section>`;
}

function formatMoveLearningMethod(category, learnedAs) {
  const method = String(learnedAs || '').trim();
  if (category === 'levelUp') return `Level ${method || '—'}`;
  if (category === 'tm') return /HM/i.test(method) ? 'HM' : 'TM';
  if (category === 'egg') return /EM/i.test(method) ? 'Egg Move' : method || 'Egg Move';
  if (category === 'evolution') return /EV/i.test(method) ? 'Evolution' : method || 'Evolution';
  if (category === 'reminder') return /R/i.test(method) ? 'Reminder' : method || 'Reminder';
  return method || '—';
}

function renderMoveLearnersSection(move) {
  const groups = [
    { key: 'levelUp', label: 'Level-Up' },
    { key: 'tm', label: 'TM / HM' },
    { key: 'egg', label: 'Egg' },
    { key: 'evolution', label: 'Evolution' },
    { key: 'reminder', label: 'Reminder' }
  ];
  const learnersByCategory = moveLearnersLookup[move.id] || {};
  const activeCategory = groups.find((group) => group.key === selectedMoveLearnerCategory) || groups[0];
  const learners = learnersByCategory[activeCategory.key] || [];
  const rows = learners.length
    ? learners.map(({ pokemon, learnedAs }) => `
        <tr>
          <td>#${escapeHtml(pokemon.number)}</td>
          <td><button type="button" class="dex-navigation-link pokemon-navigation-link" data-pokemon-number="${escapeHtml(pokemon.number)}" data-pokemon-name="${escapeHtml(pokemon.name)}">${escapeHtml(pokemon.name)}</button></td>
          <td><div class="move-learner-types">${pokemon.types.filter(Boolean).map(renderMoveTypePill).join('') || '—'}</div></td>
          <td>${escapeHtml(formatMoveLearningMethod(activeCategory.key, learnedAs))}</td>
        </tr>`).join('')
    : '<tr><td colspan="4" class="moveset-empty">No Pokémon learn this move in this category.</td></tr>';
  const tabs = groups.map((group) => {
    const count = (learnersByCategory[group.key] || []).length;
    return `<button type="button" class="moveset-tab move-learners-tab${activeCategory.key === group.key ? ' active' : ''}${count ? '' : ' disabled'}" data-category="${group.key}">${group.label}</button>`;
  }).join('');

  return `
    <section class="moveset-card stats-card move-learners-card">
      <div class="section-header"><h2>Pokémon That Learn This Move</h2></div>
      <div class="moveset-tabs">${tabs}</div>
      <div class="moveset-table-wrap">
        <table class="moveset-table move-learners-table">
          <thead><tr><th>Dex #</th><th>Pokémon</th><th>Type</th><th>Learned Via</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>`;
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
  const tabButtons = document.querySelectorAll('#pokedexView .filter-tab');
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((tab) => tab.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('#filterPanels .filter-panel').forEach((panel) => (panel.style.display = 'none'));
      const panel = document.getElementById(`panel-${button.dataset.panel}`);
      if (panel) panel.style.display = '';
    });
  });

  // Generation buttons
  const generationButtons = document.querySelectorAll('#panel-generation .generation-button');
  generationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.generation === 'any') {
        generationButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
      } else {
        button.classList.toggle('active');
        const selected = document.querySelectorAll('.generation-button.active:not([data-generation="any"])');
        const allButton = document.querySelector('.generation-button[data-generation="any"]');
        if (selected.length === 0) {
          allButton?.classList.add('active');
        } else {
          allButton?.classList.remove('active');
        }
      }
      applyFilter();
    });
  });

  document.querySelectorAll('#panel-custom .custom-filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.customGroup;
      const selectedValue = button.dataset.customFilter || 'any';
      const isDeselecting = selectedValue !== 'any' && button.classList.contains('active');
      const value = isDeselecting ? 'any' : selectedValue;
      if (group === 'favorites') customFavoriteFilter = value;
      if (group === 'notes') customNoteFilter = value;
      document.querySelectorAll(`#panel-custom .custom-filter-button[data-custom-group="${group}"]`).forEach((item) => {
        item.classList.toggle('active', item.dataset.customFilter === value);
      });
      applyFilter();
    });
  });

  const typingLabels = document.querySelectorAll('#panel-typing .radio-button');
  const anyTypingInput = document.querySelector('input[name="typingFilter"][value="any"]');
  typingLabels.forEach((label) => {
    const input = label.querySelector('input[name="typingFilter"]');
    label.addEventListener('click', (event) => {
      const deselecting = input.value !== 'any' && typingFilterValue === input.value;
      if (deselecting) {
        event.preventDefault();
      }
      setTimeout(() => {
        typingFilterValue = deselecting ? 'any' : input.value;
        anyTypingInput.checked = typingFilterValue === 'any';
        input.checked = typingFilterValue === input.value;
        applyFilter();
      }, 0);
    });
  });

  // Populate base stat inputs if empty
  const statsGrid = document.querySelector('.stats-grid');
  const stats = ['HP','ATK','DEF','SpA','SpD','SPE','TOTAL'];
  if (statsGrid && statsGrid.children.length === 0) {
    stats.forEach((stat) => {
      const wrap = document.createElement('div');
      wrap.className = 'stat-filter-row';
      const max = stat === 'TOTAL' ? 1300 : 255;
      wrap.innerHTML = renderDualRangeFilter(`stat-${stat}`, stat, max);
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
      wrap.innerHTML = renderDualRangeFilter(`ev-${ev}`, `${ev} EV`, 4);
      yieldsGrid.appendChild(wrap);
    });
    const xpWrap = document.createElement('div');
    xpWrap.className = 'yield-filter-row';
    xpWrap.innerHTML = renderDualRangeFilter('baseXp', 'Base XP', getNumericFilterMax(pokemonList, 'xp', 1));
    yieldsGrid.appendChild(xpWrap);
    const frWrap = document.createElement('div');
    frWrap.className = 'yield-filter-row';
    frWrap.innerHTML = renderDualRangeFilter('baseFriend', 'Base Friendship', getNumericFilterMax(pokemonList, 'baseFriendship', 1));
    yieldsGrid.appendChild(frWrap);
  }

  const extraGrid = document.querySelector('.extra-grid');
  if (extraGrid && extraGrid.children.length === 0) {
    extraGrid.innerHTML = [
      renderDualRangeFilter('height', 'Height (m)', getNumericFilterMax(pokemonList, 'heightM', 1), 0.01),
      renderDualRangeFilter('weight', 'Weight (kg)', getNumericFilterMax(pokemonList, 'weightKg', 1), 0.1),
      renderDualRangeFilter('catch', 'Catch Rate', getNumericFilterMax(pokemonList, 'catchRate', 1)),
      renderDualRangeFilter('dex', 'Dex #', getNumericFilterMax(pokemonList, 'number', 1))
    ].join('');
  }

  bindDualRangeFilters();

  // Attach listeners for inputs to re-filter on change
  document.querySelectorAll('.type-filter-card input, .type-filter-card select, .type-filter-card .type-button').forEach((el) => {
    if (el.closest('.dual-range-filter')) return;
    el.addEventListener('change', () => applyFilter());
    el.addEventListener('input', () => applyFilter());
  });
}

function getNumericFilterMax(pokemonList, key, fallback) {
  const values = pokemonList
    .map((pokemon) => Number(String(pokemon[key] || '').replace(/[^0-9.]/g, '')))
    .filter((value) => Number.isFinite(value));
  return values.length ? Math.max(fallback, Math.max(...values)) : fallback;
}

function renderAttributeFilters(pokemonList) {
  const groups = {
    shape: [...new Set(pokemonList.map((pokemon) => String(pokemon.shape || '').trim()).filter(Boolean))].sort(),
    color: [...new Set(pokemonList.map((pokemon) => String(pokemon.color || '').trim()).filter(Boolean))].sort(),
    eggGroup: [...new Set(pokemonList
      .flatMap((pokemon) => [pokemon.eggGroup1, pokemon.eggGroup2])
      .map((value) => String(value || '').trim())
      .filter(Boolean))].sort((left, right) => {
      const leftIsNoEggs = left.toLowerCase() === 'no eggs discovered';
      const rightIsNoEggs = right.toLowerCase() === 'no eggs discovered';
      if (leftIsNoEggs !== rightIsNoEggs) return leftIsNoEggs ? 1 : -1;
      return left.localeCompare(right);
    })
  };

  Object.entries(groups).forEach(([group, values]) => {
    const container = document.getElementById(`${group === 'eggGroup' ? 'eggGroup' : group}Buttons`);
    if (!container) return;

    container.innerHTML = [
      `<button type="button" class="generation-button attribute-button active" data-attribute-group="${group}" data-value="any">Any</button>`,
      ...values.map((value) => `<button type="button" class="generation-button attribute-button" data-attribute-group="${group}" data-value="${escapeHtml(value)}">${escapeHtml(value)}</button>`)
    ].join('');

    container.querySelectorAll('.attribute-button').forEach((button) => {
      button.addEventListener('click', () => {
        const groupButtons = container.querySelectorAll('.attribute-button');
        if (button.dataset.value === 'any') {
          groupButtons.forEach((item) => item.classList.remove('active'));
          button.classList.add('active');
        } else {
          const isNoEggsDiscovered = group === 'eggGroup' && button.dataset.value.toLowerCase() === 'no eggs discovered';
          if (isNoEggsDiscovered) {
            const wasSelected = button.classList.contains('active');
            groupButtons.forEach((item) => item.classList.remove('active'));
            const anyButton = container.querySelector('.attribute-button[data-value="any"]');
            if (wasSelected) {
              anyButton?.classList.add('active');
            } else {
              button.classList.add('active');
            }
            applyFilter();
            return;
          }
          if (group === 'eggGroup') {
            container.querySelector('[data-value="No Eggs Discovered"]')?.classList.remove('active');
          }
          button.classList.toggle('active');
          const selected = container.querySelectorAll('.attribute-button.active:not([data-value="any"])');
          const anyButton = container.querySelector('.attribute-button[data-value="any"]');
          anyButton?.classList.toggle('active', selected.length === 0);
          if (selected.length > 0) anyButton?.classList.remove('active');
        }
        applyFilter();
      });
    });
  });

  const eggGroupLogicAnd = document.getElementById('eggGroupLogicAnd');
  const eggGroupLogicOr = document.getElementById('eggGroupLogicOr');
  eggGroupLogicAnd?.addEventListener('click', () => {
    eggGroupLogic = 'and';
    eggGroupLogicAnd.classList.add('active');
    eggGroupLogicOr?.classList.remove('active');
    applyFilter();
  });
  eggGroupLogicOr?.addEventListener('click', () => {
    eggGroupLogic = 'or';
    eggGroupLogicOr.classList.add('active');
    eggGroupLogicAnd?.classList.remove('active');
    applyFilter();
  });
}

function getSelectedAttributeValues(group) {
  return Array.from(document.querySelectorAll(`.attribute-button[data-attribute-group="${group}"].active:not([data-value="any"])`))
    .map((button) => button.dataset.value);
}

function renderDualRangeFilter(prefix, label, max, step = 1, min = 0) {
  return `
    <div class="dual-range-filter" data-range-prefix="${prefix}" data-range-min="${min}" data-range-max="${max}">
      <div class="dual-range-heading"><strong>${label}</strong><span class="dual-range-values">${min} - ${max}</span></div>
      <div class="dual-range-track">
        <div class="dual-range-fill"></div>
        <input id="${prefix}-min-range" type="range" min="${min}" max="${max}" step="${step}" value="${min}" aria-label="${label} minimum" />
        <input id="${prefix}-max-range" type="range" min="${min}" max="${max}" step="${step}" value="${max}" aria-label="${label} maximum" />
      </div>
      <div class="dual-range-inputs">
        <label>Min <input id="${prefix}-min" type="number" min="${min}" max="${max}" step="${step}" value="${min}" /></label>
        <label>Max <input id="${prefix}-max" type="number" min="0" max="${max}" step="${step}" value="${max}" /></label>
      </div>
    </div>
  `;
}

function bindDualRangeFilters() {
  document.querySelectorAll('.dual-range-filter').forEach((control) => {
    if (control.dataset.bound === '1') return;
    const prefix = control.dataset.rangePrefix;
    const max = Number(control.dataset.rangeMax);
    const min = Number(control.dataset.rangeMin || 0);
    const minRange = control.querySelector(`#${prefix}-min-range`);
    const maxRange = control.querySelector(`#${prefix}-max-range`);
    const minInput = control.querySelector(`#${prefix}-min`);
    const maxInput = control.querySelector(`#${prefix}-max`);
    const fill = control.querySelector('.dual-range-fill');
    const values = control.querySelector('.dual-range-values');
    const track = control.querySelector('.dual-range-track');
    if (!minRange || !maxRange || !minInput || !maxInput || !fill || !values) return;
    const filterAction = control.closest('#movedexView') ? applyMoveFilters : applyFilter;

    const update = (source) => {
      let minValue = Number(minRange.value);
      let maxValue = Number(maxRange.value);
      if (source === 'min') minValue = Math.min(minValue, maxValue);
      if (source === 'max') maxValue = Math.max(maxValue, minValue);
      minRange.value = String(minValue);
      maxRange.value = String(maxValue);
      minInput.value = String(minValue);
      maxInput.value = String(maxValue);
      const range = max - min || 1;
      const left = ((minValue - min) / range) * 100;
      const right = ((maxValue - min) / range) * 100;
      fill.style.left = `${left}%`;
      fill.style.width = `${Math.max(0, right - left)}%`;
      values.textContent = `${minValue} - ${maxValue}`;
      const minimumThumbOnTop = minValue === maxValue && maxValue !== 0;
      minRange.style.zIndex = minimumThumbOnTop ? '3' : '2';
      maxRange.style.zIndex = minimumThumbOnTop ? '2' : '3';
    };

    minRange.addEventListener('input', () => {
      update('min');
      filterAction();
    });
    maxRange.addEventListener('input', () => {
      update('max');
      filterAction();
    });
    minInput.addEventListener('input', () => {
      const value = minInput.value === '' ? min : Math.max(min, Math.min(max, Number(minInput.value) || 0));
      minRange.value = String(Math.min(value, Number(maxRange.value)));
      update('min');
      filterAction();
    });
    maxInput.addEventListener('input', () => {
      const value = maxInput.value === '' ? max : Math.max(min, Math.min(max, Number(maxInput.value) || 0));
      maxRange.value = String(Math.max(value, Number(minRange.value)));
      update('max');
      filterAction();
    });

    if (track) {
      track.addEventListener('pointerdown', (event) => {
        if (Number(minRange.value) !== Number(maxRange.value)) return;
        const startX = event.clientX;
        let activeRange = null;
        event.preventDefault();
        event.stopPropagation();
        track.setPointerCapture(event.pointerId);

        const handlePointerMove = (moveEvent) => {
          if (moveEvent.pointerId !== event.pointerId) return;
          const direction = moveEvent.clientX - startX;
          if (!direction) return;
          activeRange = direction > 0 ? maxRange : minRange;
          const bounds = track.getBoundingClientRect();
          const usableWidth = Math.max(1, bounds.width - 16);
          const position = Math.max(0, Math.min(1, (moveEvent.clientX - bounds.left - 8) / usableWidth));
          const range = max - min || 1;
          const step = Number(activeRange.step) || 1;
          const rawValue = min + position * range;
          const nextValue = min + Math.round((rawValue - min) / step) * step;
          const roundedValue = Number(nextValue.toFixed(String(step).split('.')[1]?.length || 0));

          if (activeRange === maxRange) {
            maxRange.value = String(Math.max(roundedValue, Number(minRange.value)));
          } else {
            minRange.value = String(Math.min(roundedValue, Number(maxRange.value)));
          }
          activeRange.dispatchEvent(new Event('input', { bubbles: true }));
        };

        const finishPointerMove = (upEvent) => {
          if (upEvent.pointerId !== event.pointerId) return;
          track.removeEventListener('pointermove', handlePointerMove);
          track.removeEventListener('pointerup', finishPointerMove);
          track.removeEventListener('pointercancel', finishPointerMove);
          if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
        };

        track.addEventListener('pointermove', handlePointerMove);
        track.addEventListener('pointerup', finishPointerMove);
        track.addEventListener('pointercancel', finishPointerMove);
      });
    }

    update();
    control.dataset.bound = '1';
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
  const selectedGenerations = Array.from(document.querySelectorAll('#panel-generation .generation-button.active:not([data-generation="any"])'))
    .map((button) => Number(button.dataset.generation));

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
  const baseXpMin = parseVal(document.getElementById('baseXp-min') ? document.getElementById('baseXp-min').value : null);
  const baseXpMax = parseVal(document.getElementById('baseXp-max') ? document.getElementById('baseXp-max').value : null);
  const baseFriendMin = parseVal(document.getElementById('baseFriend-min') ? document.getElementById('baseFriend-min').value : null);
  const baseFriendMax = parseVal(document.getElementById('baseFriend-max') ? document.getElementById('baseFriend-max').value : null);

  // extra filters
  const heightMin = parseVal(document.getElementById('height-min') ? document.getElementById('height-min').value : null);
  const heightMax = parseVal(document.getElementById('height-max') ? document.getElementById('height-max').value : null);
  const weightMin = parseVal(document.getElementById('weight-min') ? document.getElementById('weight-min').value : null);
  const weightMax = parseVal(document.getElementById('weight-max') ? document.getElementById('weight-max').value : null);
  const catchMin = parseVal(document.getElementById('catch-min') ? document.getElementById('catch-min').value : null);
  const catchMax = parseVal(document.getElementById('catch-max') ? document.getElementById('catch-max').value : null);
  const dexMin = parseVal(document.getElementById('dex-min') ? document.getElementById('dex-min').value : null);
  const dexMax = parseVal(document.getElementById('dex-max') ? document.getElementById('dex-max').value : null);
  const selectedShapes = getSelectedAttributeValues('shape');
  const selectedColors = getSelectedAttributeValues('color');
  const selectedEggGroups = getSelectedAttributeValues('eggGroup');
  const profile = getCurrentProfile();

  filteredPokemon = all.filter((pokemon) => {
    const groupForms = pokemon.groupForms || [pokemon];

    // search query match
    const nameMatch = groupForms.some((form) => (
      String(form.displayName || '').toLowerCase().includes(query)
      || form.name.toLowerCase().includes(query)
    ));
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

    if (selectedShapes.length > 0 && !selectedShapes.includes(String(pokemon.shape || '').trim())) return false;
    if (selectedColors.length > 0 && !selectedColors.includes(String(pokemon.color || '').trim())) return false;
    if (selectedEggGroups.length > 0) {
      const eggGroups = [pokemon.eggGroup1, pokemon.eggGroup2].map((value) => String(value || '').trim());
      const noEggsDiscoveredSelected = selectedEggGroups.some((group) => group.toLowerCase() === 'no eggs discovered');
      if (noEggsDiscoveredSelected) {
        if (!eggGroups.some((group) => group.toLowerCase() === 'no eggs discovered')) return false;
      } else if (eggGroupLogic === 'and') {
        if (!selectedEggGroups.every((group) => eggGroups.includes(group))) return false;
      } else if (!selectedEggGroups.some((group) => eggGroups.includes(group))) {
        return false;
      }
    }

    if (customFavoriteFilter !== 'any' || customNoteFilter !== 'any') {
      const pokemonKey = getPokemonKey(pokemon);
      const isFavorite = Boolean(profile?.favorites?.includes(pokemonKey));
      const hasNote = Boolean(profile?.notes?.[pokemonKey]?.trim());
      if (customFavoriteFilter === 'favorite' && !isFavorite) return false;
      if (customFavoriteFilter === 'notFavorite' && isFavorite) return false;
      if (customNoteFilter === 'hasNote' && !hasNote) return false;
      if (customNoteFilter === 'noNote' && hasNote) return false;
    }

    // generation
    if (selectedGenerations.length > 0) {
      const dexNum = Number(String(pokemon.number).replace(/^0+/, '')) || 0;
      const pokemonGeneration = Object.entries(GEN_RANGES)
        .find(([, range]) => dexNum >= range[0] && dexNum <= range[1]);
      if (!pokemonGeneration || !selectedGenerations.includes(Number(pokemonGeneration[0]))) return false;
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
}

function renderList(pokemonList) {
  elements.listCount.textContent = `${pokemonList.length} available`;
  const profile = getCurrentProfile();
  const renderToken = pokemonListRenderToken + 1;
  pokemonListRenderToken = renderToken;
  pendingPokemonScroll = false;
  elements.pokemonList.replaceChildren();
  const batchSize = 40;
  let index = 0;

  const appendBatch = () => {
    if (renderToken !== pokemonListRenderToken) return;
    const batch = pokemonList.slice(index, index + batchSize).map((pokemon) => {
      const isFavorite = Boolean(profile?.favorites?.includes(getPokemonKey(pokemon)));
      const active = selectedPokemon?.group === pokemon.group ? ' active' : '';
      const pokemonIndex = pokemonIndexLookup.get(pokemon);
      return `<button type="button" class="pokemon-card${active}" data-pokemon-index="${pokemonIndex}"><h3>${pokemon.displayName || pokemon.name}${isFavorite ? ' <span class="favorite-star" aria-label="Favorite">★</span>' : ''}</h3><div class="pokemon-card-meta"><p>#${pokemon.number}</p><div class="pokemon-card-types">${pokemon.types.filter(Boolean).map(renderMoveTypePill).join('')}</div></div></button>`;
    }).join('');
    elements.pokemonList.insertAdjacentHTML('beforeend', batch);
    index += batchSize;

    if (pendingPokemonScroll && elements.pokemonList.querySelector('.pokemon-card.active')) {
      pendingPokemonScroll = false;
      scrollToSelected();
    }
    if (index < pokemonList.length) requestAnimationFrame(appendBatch);
  };

  appendBatch();
}

function selectPokemon(pokemon) {
  selectedPokemon = pokemon;
  elements.pokemonList.querySelector('.pokemon-card.active')?.classList.remove('active');
  const visiblePokemon = filteredPokemon.find((entry) => entry.group === pokemon.group);
  const visibleIndex = visiblePokemon ? pokemonIndexLookup.get(visiblePokemon) : undefined;
  if (visibleIndex !== undefined) {
    elements.pokemonList.querySelector(`[data-pokemon-index="${visibleIndex}"]`)?.classList.add('active');
  }
  renderDetails(pokemon);
}

function renderDetails(pokemon) {
  const typesHtml = pokemon.types
    .filter(Boolean)
    .map((type) => renderTypeBadge(type))
    .join('');

  const groupForms = pokemon.groupForms || [pokemon];
  const formSwitcher = groupForms.length > 1 ? renderFormSwitcher(groupForms, pokemon) : '';

  elements.details.classList.remove('details-placeholder');
  elements.details.innerHTML = `
    <div class="detail-card">
      <nav class="mobile-detail-nav" aria-label="Detail navigation">
        <button type="button" class="mobile-back-button">Back to list</button>
        <strong>#${escapeHtml(pokemon.number)} ${escapeHtml(pokemon.name)}</strong>
      </nav>
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

        ${renderPersonalTools(pokemon)}

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
                ${renderMetaItem('Shape', pokemon.shape, '', 'shape')}
                ${renderMetaItem('Color', pokemon.color, '', 'color')}
                ${renderMetaItem('Egg Group', `${pokemon.eggGroup1}${pokemon.eggGroup2 ? ' / ' + pokemon.eggGroup2 : ''}`, '', 'egg-group')}
                ${renderMetaItem('Egg Cycles', pokemon.eggCycles, '', 'egg-cycles', pokemon.eggSteps)}
                ${renderMetaItem('Catch Rate', pokemon.catchRate, '', 'catch-rate')}
                ${renderMetaItem('Level Rate', pokemon.levelRate, '', 'level-rate', pokemon.totalXP)}
              </div>
            </div>
          </section>
        </div>
      </div>

      ${renderStatCalculator(pokemon)}

      <div class="stats-row">
        <section class="stats-card">
          <div class="section-header">
            <h2>Base Stats</h2>
          </div>
          <div class="stat-bars">
            ${renderStatBar('HP', pokemon.baseStats.HP, 260, 'base', pokemon.number)}
            ${renderStatBar('ATK', pokemon.baseStats.ATK, 260, 'base', pokemon.number)}
            ${renderStatBar('DEF', pokemon.baseStats.DEF, 260, 'base', pokemon.number)}
            ${renderStatBar('SpA', pokemon.baseStats.SpA, 260, 'base', pokemon.number)}
            ${renderStatBar('SpD', pokemon.baseStats.SpD, 260, 'base', pokemon.number)}
            ${renderStatBar('SPE', pokemon.baseStats.SPE, 260, 'base', pokemon.number)}
            ${renderStatBar('TOTAL', pokemon.baseStats.total, 1300, 'base', pokemon.number)}
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
            ${renderMetaItem('Base XP', pokemon.xp, 'xp')}
            ${renderMetaItem('Base Friendship', pokemon.baseFriendship, 'baseFriendship')}
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
                <div class="game-pill" data-game-name="${escapeHtml(game.gameName)}" data-game-color="${escapeHtml(gameColor)}" style="background: ${badgeBg}; border-color: ${borderColor}; color: #ffffff;">
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

  elements.details.querySelector('.mobile-back-button')?.addEventListener('click', () => {
    document.querySelector('.list-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    elements.searchInput?.focus({ preventScroll: true });
  });

  bindPersonalToolHandlers(pokemon, elements.details);

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

  bindPokemonMovesetControls(elements.details, pokemon);

  attachTypeHoverHandlers();
  attachGameHoverHandlers();
  attachBaseStatHoverHandlers();
  attachPopupClickHandler();
  attachMoveHoverHandlers();
  bindStatCalculator(pokemon);
}

function bindPokemonMovesetControls(container, pokemon) {
  container.querySelectorAll('.moveset-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMoveCategory = button.dataset.category || 'levelUp';
      renderDetails(pokemon);
    });
  });

  container.querySelectorAll('.move-navigation-link').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      navigateToMove(button.dataset.moveId);
    });
  });
}

function refreshPokemonMoveset() {
  if (!selectedPokemon) return;
  const currentMoveset = elements.details.querySelector('.moveset-card');
  if (!currentMoveset) return;
  const template = document.createElement('template');
  template.innerHTML = renderMovesetSection(selectedPokemon);
  const refreshedMoveset = template.content.firstElementChild;
  if (!refreshedMoveset) return;
  currentMoveset.replaceWith(refreshedMoveset);
  bindPokemonMovesetControls(refreshedMoveset, selectedPokemon);
  attachMoveHoverHandlers();
}

function refreshPokemonAbilitySection() {
  if (!selectedPokemon) return;
  const abilityList = elements.details.querySelector('.ability-list');
  if (!abilityList) return;
  abilityList.innerHTML = renderAbilitySection(selectedPokemon.abilities, selectedPokemon.hiddenAbility);
  attachPopupClickHandler();
}

const NATURES = {
  Hardy: ['ATK', 'ATK'], Lonely: ['ATK', 'DEF'], Adamant: ['ATK', 'SpA'], Naughty: ['ATK', 'SpD'], Brave: ['ATK', 'SPE'],
  Bold: ['DEF', 'ATK'], Docile: ['DEF', 'DEF'], Impish: ['DEF', 'SpA'], Lax: ['DEF', 'SpD'], Relaxed: ['DEF', 'SPE'],
  Modest: ['SpA', 'ATK'], Mild: ['SpA', 'DEF'], Bashful: ['SpA', 'SpA'], Rash: ['SpA', 'SpD'], Quiet: ['SpA', 'SPE'],
  Calm: ['SpD', 'ATK'], Gentle: ['SpD', 'DEF'], Careful: ['SpD', 'SpA'], Quirky: ['SpD', 'SpD'], Sassy: ['SpD', 'SPE'],
  Timid: ['SPE', 'ATK'], Hasty: ['SPE', 'DEF'], Jolly: ['SPE', 'SpA'], Naive: ['SPE', 'SpD'], Serious: ['SPE', 'SPE']
};

function getNatureLabel(nature) {
  const [raised, lowered] = NATURES[nature] || [];
  return raised === lowered ? nature : `${nature} (${raised} ↑ | ${lowered} ↓)`;
}

function renderStatCalculator(pokemon) {
  const natureOptions = Object.keys(NATURES).sort((left, right) => left.localeCompare(right)).map((nature) => `<button type="button" class="nature-option" data-nature="${nature}">${getNatureLabel(nature)}</button>`).join('');
  const rows = ['HP', 'ATK', 'DEF', 'SpA', 'SpD', 'SPE'].map((stat) => `
    <div class="calculator-stat-row" data-calc-stat="${stat}">
      <strong>${stat}</strong><span class="calculator-result">-</span>
      <label>IV <input class="calculator-iv" type="number" min="0" max="31" value="31" /></label>
      <label>EV <input class="calculator-ev" type="number" min="0" max="252" step="4" value="0" /></label>
    </div>`).join('');
  return `
    <section class="stat-calculator">
      <button type="button" class="calculator-toggle" aria-expanded="false">Stat Calculator</button>
      <div class="calculator-content">
          <div class="calculator-controls">
            <label>Level <input class="calculator-level" type="number" min="1" max="100" value="50" /></label>
            <div class="nature-picker">
              <span class="calculator-label">Nature</span>
              <button type="button" class="nature-trigger" aria-expanded="false" data-nature="Hardy">${getNatureLabel('Hardy')}</button>
              <div class="nature-menu" hidden>${natureOptions}</div>
            </div>
            <label class="calculator-unlimited-label"><input class="calculator-unlimited" type="checkbox" /> No limit</label>
          </div>
          <div class="calculator-stats">${rows}</div>
      </div>
    </section>`;
}

function bindStatCalculator(pokemon) {
  const calculator = elements.details.querySelector('.stat-calculator');
  if (!calculator) return;
  const toggle = calculator.querySelector('.calculator-toggle');
  const content = calculator.querySelector('.calculator-content');
  let contentAnimation = null;
  toggle.addEventListener('click', () => {
    const open = !calculator.classList.contains('open');
    const currentHeight = content.getBoundingClientRect().height;
    const currentMarginTop = parseFloat(getComputedStyle(content).marginTop) || 0;
    if (contentAnimation) {
      content.style.height = `${currentHeight}px`;
      content.style.marginTop = `${currentMarginTop}px`;
      content.style.overflow = 'hidden';
      contentAnimation.cancel();
      contentAnimation = null;
    }

    calculator.classList.remove('closing');
    toggle.setAttribute('aria-expanded', String(open));

    if (open) {
      calculator.classList.add('open');
    } else {
      calculator.classList.remove('open');
      calculator.classList.add('closing');
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      if (!open) calculator.classList.remove('closing');
      content.removeAttribute('style');
      return;
    }

    const targetHeight = open ? content.scrollHeight : 0;
    const targetMarginTop = open ? parseFloat(getComputedStyle(content).marginTop) || 0 : 0;
    const startHeight = currentHeight || 0;
    const startMarginTop = currentMarginTop;
    content.style.overflow = 'hidden';
    const animation = content.animate(
      [
        { height: `${startHeight}px`, marginTop: `${startMarginTop}px` },
        { height: `${targetHeight}px`, marginTop: `${targetMarginTop}px` }
      ],
      { duration: open ? 180 : 240, easing: open ? 'ease-out' : 'ease-in', fill: 'forwards' }
    );
    contentAnimation = animation;
    animation.onfinish = () => {
      if (contentAnimation !== animation) return;
      animation.cancel();
      if (!open) calculator.classList.remove('closing');
      content.removeAttribute('style');
      contentAnimation = null;
    };
  });

  const natureTrigger = calculator.querySelector('.nature-trigger');
  const natureMenu = calculator.querySelector('.nature-menu');
  const unlimitedToggle = calculator.querySelector('.calculator-unlimited');
  natureTrigger.addEventListener('click', () => {
    const open = natureMenu.hidden;
    natureMenu.hidden = !open;
    natureTrigger.setAttribute('aria-expanded', String(open));
  });
  natureMenu.querySelectorAll('.nature-option').forEach((option) => {
    option.addEventListener('click', () => {
      natureTrigger.dataset.nature = option.dataset.nature;
      natureTrigger.textContent = getNatureLabel(option.dataset.nature);
      natureMenu.hidden = true;
      natureTrigger.setAttribute('aria-expanded', 'false');
      update();
    });
  });

  const clampInput = (input, minimum, maximum) => {
    const clamp = () => {
      if (input.value === '') return;
      const numericValue = Number(input.value);
      if (!Number.isFinite(numericValue)) {
        input.value = String(minimum);
        return;
      }
      input.value = String(Math.max(minimum, unlimitedToggle.checked ? numericValue : Math.min(maximum, numericValue)));
    };
    input.addEventListener('input', clamp);
    input.addEventListener('change', () => {
      if (input.value === '') input.value = String(minimum);
      clamp();
    });
  };
  clampInput(calculator.querySelector('.calculator-level'), 1, 100);
  calculator.querySelectorAll('.calculator-iv').forEach((input) => clampInput(input, 0, 31));
  calculator.querySelectorAll('.calculator-ev').forEach((input) => clampInput(input, 0, 252));
  unlimitedToggle.addEventListener('change', () => {
    const inputs = calculator.querySelectorAll('.calculator-level, .calculator-iv, .calculator-ev');
    inputs.forEach((input) => {
      if (unlimitedToggle.checked) input.removeAttribute('max');
      else input.setAttribute('max', input.classList.contains('calculator-level') ? '100' : input.classList.contains('calculator-iv') ? '31' : '252');
      input.dispatchEvent(new Event('change'));
    });
    update();
  });

  const update = () => {
    const level = Math.max(1, Number(calculator.querySelector('.calculator-level').value) || 1);
    const nature = natureTrigger.dataset.nature || 'Hardy';
    const [raised, lowered] = NATURES[nature] || [];
    calculator.querySelectorAll('.calculator-stat-row').forEach((row) => {
      const stat = row.dataset.calcStat;
      const iv = Math.max(0, Number(row.querySelector('.calculator-iv').value) || 0);
      const ev = Math.max(0, Number(row.querySelector('.calculator-ev').value) || 0);
      const base = Number(pokemon.baseStats[stat]) || 0;
      const core = Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100);
      let value = stat === 'HP' ? core + level + 10 : core + 5;
      if (stat !== 'HP') value = Math.floor(value * (stat === raised && raised !== lowered ? 1.1 : stat === lowered && raised !== lowered ? 0.9 : 1));
      row.querySelector('.calculator-result').textContent = value;
    });
  };
  calculator.addEventListener('input', update);
  calculator.addEventListener('change', update);
  update();
}

function bindStatCalculatorDismissal() {
  document.addEventListener('click', (event) => {
    const calculator = elements.details.querySelector('.stat-calculator');
    const naturePicker = calculator?.querySelector('.nature-picker');
    const natureMenu = naturePicker?.querySelector('.nature-menu');
    const natureTrigger = naturePicker?.querySelector('.nature-trigger');
    if (!natureMenu || natureMenu.hidden) return;
    if (event.target instanceof Element && event.target.closest('.nature-picker')) return;
    natureMenu.hidden = true;
    natureTrigger.setAttribute('aria-expanded', 'false');
  });
}

function renderPersonalTools(item, itemType = 'pokemon') {
  const profile = getCurrentProfile();
  const key = getPersonalToolsKey(item, itemType);
  const isFavorite = Boolean(profile?.favorites?.includes(key));
  const note = profile?.notes?.[key] || '';
  const noteId = `${itemType}PersonalNote`;
  return `
    <section class="personal-tools${currentUsername ? '' : ' locked'}" aria-label="Personal profile tools">
      <div class="personal-tool-panel favorite-panel">
        <button type="button" class="favorite-button${isFavorite ? ' active' : ''}"${currentUsername ? '' : ' disabled'}>${isFavorite ? '★ Favorited' : '☆ Favorite'}</button>
      </div>
      <div class="personal-tool-panel note-panel">
        <div class="note-editor">
          <label for="${noteId}">Personal note${currentUsername ? ` for ${escapeHtml(currentUsername)}` : ''}</label>
          <textarea id="${noteId}" class="pokemon-note" rows="2" maxlength="500" placeholder="Add a private note..." ${currentUsername ? '' : 'disabled'}>${escapeHtml(note)}</textarea>
          <div class="note-actions">
            <button type="button" class="save-note-button"${currentUsername ? '' : ' disabled'}>Save note</button>
            <span class="note-saved-message" aria-live="polite"></span>
          </div>
        </div>
      </div>
      ${currentUsername ? '' : '<button type="button" class="personal-tools-lock">Login to use this feature</button>'}
    </section>
  `;
}

function refreshPersonalTools(pokemon) {
  const currentTools = elements.details.querySelector('.personal-tools');
  if (!currentTools) return;
  currentTools.outerHTML = renderPersonalTools(pokemon);
  bindPersonalToolHandlers(pokemon, elements.details);
}

function refreshMovePersonalTools(move) {
  const currentTools = elements.moveDetails.querySelector('.personal-tools');
  if (!currentTools) return;
  currentTools.outerHTML = renderPersonalTools(move, 'move');
  bindPersonalToolHandlers(move, elements.moveDetails, 'move');
}

function refreshAbilityPersonalTools(ability) {
  const currentTools = elements.abilityDetails.querySelector('.personal-tools');
  if (!currentTools) return;
  currentTools.outerHTML = renderPersonalTools(ability, 'ability');
  bindPersonalToolHandlers(ability, elements.abilityDetails, 'ability');
}

function getPersonalToolsKey(item, itemType) {
  if (itemType === 'move') return `move|${item.id}`;
  if (itemType === 'ability') return `ability|${normalizePokemonName(item.name)}`;
  return getPokemonKey(item);
}

function bindPersonalToolHandlers(item, container, itemType = 'pokemon') {
  container.querySelector('.personal-tools-lock')?.addEventListener('click', () => {
    openAuthModal('login');
  });

  const favoriteButton = container.querySelector('.favorite-button');
  favoriteButton?.addEventListener('click', () => {
    if (!currentUsername) return;
    const profiles = getProfiles();
    const profile = profiles[currentUsername];
    const key = getPersonalToolsKey(item, itemType);
    const favoriteIndex = profile.favorites.indexOf(key);
    if (favoriteIndex >= 0) profile.favorites.splice(favoriteIndex, 1);
    else profile.favorites.push(key);
    saveProfiles(profiles);
    const isFavorite = profile.favorites.includes(key);
    favoriteButton.classList.toggle('active', isFavorite);
    favoriteButton.textContent = isFavorite ? '★ Favorited' : '☆ Favorite';
    if (itemType === 'pokemon') applyFilter();
    else if (itemType === 'move') applyMoveFilters();
    else applyAbilityFilters();
  });

  container.querySelector('.save-note-button')?.addEventListener('click', () => {
    if (!currentUsername) return;
    const profiles = getProfiles();
    const profile = profiles[currentUsername];
    const key = getPersonalToolsKey(item, itemType);
    const note = container.querySelector('.pokemon-note')?.value.trim() || '';
    if (note) profile.notes[key] = note;
    else delete profile.notes[key];
    saveProfiles(profiles);
    if (itemType === 'pokemon') applyFilter();
    else if (itemType === 'move') applyMoveFilters();
    else applyAbilityFilters();
    const message = container.querySelector('.note-saved-message');
    if (message) message.textContent = 'Saved';
  });
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

function renderMetaItem(label, value, rankingKey = '', metaType = '', metaExtra = '') {
  const rankingAttributes = rankingKey
    ? ` class="meta-item ranking-meta-item" data-ranking-key="${escapeHtml(rankingKey)}" data-ranking-value="${escapeHtml(value)}"`
    : ` class="meta-item${metaType ? ` ${metaType}-meta-item` : ''}"${metaType ? ` data-meta-value="${escapeHtml(value)}" data-meta-extra="${escapeHtml(metaExtra)}"` : ''}`;
  return `<div${rankingAttributes}><strong>${label}</strong><p>${value || '—'}</p></div>`;
}

function renderAbilityBox(ability, hidden = false) {
  const tooltipId = `ability-tooltip-${normalizePokemonName(ability).replace(/\s+/g, '-')}`;
  const descriptions = abilityDescriptionsLookup[normalizePokemonName(ability)] || [];
  const tooltipContent = descriptions.length
    ? descriptions.map(({ game, description }) => `<div class="ability-description-entry"><strong>${escapeHtml(game)}</strong><span>${escapeHtml(description)}</span></div>`).join('')
    : '<span class="ability-description-unavailable">No ability description available.</span>';
  return `
    <button type="button" class="ability-box${hidden ? ' hidden' : ''}" aria-describedby="${escapeHtml(tooltipId)}">
      <span>${ability}</span>
      ${hidden ? '<span class="ability-tag">Hidden</span>' : ''}
      <span class="ability-tooltip" id="${escapeHtml(tooltipId)}" role="tooltip">${tooltipContent}</span>
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

function renderStatBar(label, value, max, statScope = '', statDex = '') {
  const percent = max ? Math.round((Number(value) / max) * 100) : 0;
  return `
    <div class="stat-line${statScope === 'base' ? ' base-stat-line' : ''}"${statScope === 'base' ? ` data-stat-key="${escapeHtml(label)}" data-stat-value="${escapeHtml(value)}" data-stat-dex="${escapeHtml(statDex)}"` : ''}>
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

  const movesByGroup = new Map(moveGroups.map((group) => [
    group.key,
    String(pokemon.moves?.[group.key] || '')
      .split('|')
      .map((entry) => entry.trim())
      .filter(Boolean)
  ]));
  const activeGroup = moveGroups.find((group) => group.key === selectedMoveCategory) || moveGroups[0];
  const currentMoves = movesByGroup.get(activeGroup.key) || [];

  const rowsHtml = currentMoves.length
    ? currentMoves
        .map((entry) => {
          const [moveId, levelValue] = entry.split('-');
          const move = movesLookup[moveId];
          if (!move) {
            return `<tr><td>${escapeHtml(levelValue || entry)}</td><td data-move-id="${escapeHtml(moveId)}">${escapeHtml(moveId)}</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>`;
          }

          const moveName = escapeHtml(move.name || moveId);
          const moveType = move.type ? renderMoveTypePill(move.type) : '—';
          const moveCategory = move.category ? renderMoveCategoryBadge(move.category) : '—';
          const movePP = escapeHtml(move.pp || '—');
          const movePower = escapeHtml(move.power || '—');
          const moveAccuracy = escapeHtml(move.accuracy || '—');
          const moveCrit = escapeHtml(move.critRate || '—');
          const movePriority = escapeHtml(move.priority || '—');
          const moveTarget = escapeHtml(move.target || '—');

          return `
            <tr>
              <td>${escapeHtml(levelValue || '-')}</td>
              <td class="move-name" data-move-id="${escapeHtml(moveId)}"><button type="button" class="dex-navigation-link move-navigation-link" data-move-id="${escapeHtml(moveId)}">${moveName}</button></td>
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
    .map((group) => {
      const hasMoves = movesByGroup.get(group.key).length > 0;
      return `<button type="button" class="moveset-tab ${activeGroup.key === group.key ? 'active' : ''}${hasMoves ? '' : ' disabled'}" data-category="${group.key}">${group.label}</button>`;
    })
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
  if (!elements.pokemonList.querySelector('.pokemon-card.active')) {
    pendingPokemonScroll = true;
    return;
  }
  scrollSelectedListItem(elements.pokemonList);
}

function scrollToSelectedDexEntry(dex) {
  const list = {
    pokemon: elements.pokemonList,
    move: elements.moveList,
    ability: elements.abilityList
  }[dex];
  scrollSelectedListItem(list);
}

function scrollSelectedListItem(list) {
  const selectedCard = list?.querySelector('.pokemon-card.active');
  if (!list || !selectedCard) return;

  const listRect = list.getBoundingClientRect();
  const cardRect = selectedCard.getBoundingClientRect();
  const targetTop = list.scrollTop
    + cardRect.top - listRect.top
    - (list.clientHeight - selectedCard.offsetHeight) / 2;
  const maxScrollTop = list.scrollHeight - list.clientHeight;
  const boundedTarget = Math.max(0, Math.min(maxScrollTop, targetTop));
  list.scrollTo({
    top: boundedTarget,
    behavior: 'smooth'
  });
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
  resetPopupTheme(popup);
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

function resetPopupTheme(popup) {
  popup.style.background = '';
  popup.style.borderColor = '';
  popup.style.boxShadow = '';
}

function showGamePopup(gameName, gameColor, clientX, clientY, targetElement) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  const safeColor = gameColor || '#94a3b8';
  popup.style.background = `linear-gradient(135deg, ${hexToRgba(safeColor, 0.96)}, rgba(15, 23, 32, 0.98))`;
  popup.style.borderColor = hexToRgba(safeColor, 0.8);
  popup.style.boxShadow = `0 12px 36px ${hexToRgba(safeColor, 0.42)}`;
  popup.innerHTML = `
    <div style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;text-align:center;color:rgba(255,255,255,.78);margin-bottom:7px;">Game</div>
    <div style="font-size:20px;line-height:1.15;font-weight:800;text-align:center;color:#ffffff;">${escapeHtml(gameName)}</div>
  `;
  popup.setAttribute('aria-hidden', 'false');
  if (!popup.classList.contains('visible')) popup.classList.add('visible');

  const offset = 8;
  const width = popup.offsetWidth || 220;
  const height = popup.offsetHeight || 54;
  let left = clientX + offset;
  let top = clientY + offset;

  if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
    const rect = targetElement.getBoundingClientRect();
    left = Math.round(rect.left + rect.width / 2 - width / 2);
    top = rect.top - height - offset;
    if (top < 8) top = rect.bottom + offset;
  }

  if (left < 8) left = 8;
  if (left + width + 8 > window.innerWidth) left = Math.max(8, window.innerWidth - width - 8);
  if (top + height + 8 > window.innerHeight) top = Math.max(8, window.innerHeight - height - 8);
  popup.style.left = `${Math.max(8, Math.round(left))}px`;
  popup.style.top = `${Math.max(8, Math.round(top))}px`;

  if (movePopupHideTimer) {
    clearTimeout(movePopupHideTimer);
    movePopupHideTimer = null;
  }
}

function attachTypeHoverHandlers(container = elements.details) {
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

function attachGameHoverHandlers() {
  const container = elements.details;
  if (!container) return;

  container.querySelectorAll('.game-pill').forEach((pill) => {
    if (pill.dataset.gameHoverBound === '1') return;
    const gameName = pill.dataset.gameName;
    if (!gameName) return;

    pill.addEventListener('mouseenter', (event) => {
      showGamePopup(gameName, pill.dataset.gameColor, event.clientX, event.clientY, pill);
    });
    pill.addEventListener('mousemove', (event) => {
      showGamePopup(gameName, pill.dataset.gameColor, event.clientX, event.clientY, pill);
    });
    pill.addEventListener('mouseleave', () => {
      if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
      movePopupHideTimer = setTimeout(hideMovePopup, 180);
    });

    pill.dataset.gameHoverBound = '1';
  });
}

function attachPopupClickHandler(container = elements.details) {
  if (!container) return;

  container.querySelectorAll('.ability-box').forEach((button) => {
    bindPopupPinClick(button, true);
  });
  if (container.dataset.popupClickBound === '1') return;

  container.addEventListener('click', (event) => {
    const trigger = event.target.closest('.type-pill-button, .game-pill, .base-stat-line, .ranking-meta-item, .catch-rate-meta-item, .level-rate-meta-item, .egg-cycles-meta-item, .shape-meta-item, .color-meta-item, .egg-group-meta-item, .ability-box, .moveset-table tbody tr');
    if (!trigger || !container.contains(trigger)) return;

    container.querySelectorAll('.ability-box.pinned').forEach((ability) => {
      if (ability !== trigger) ability.classList.remove('pinned');
    });

    if (trigger.matches('.ability-box')) {
      trigger.classList.toggle('pinned');
      event.stopPropagation();
      return;
    }

    movePopupPinned = true;
    if (movePopupHideTimer) {
      clearTimeout(movePopupHideTimer);
      movePopupHideTimer = null;
    }
    event.stopPropagation();
  });

  container.dataset.popupClickBound = '1';
}

function bindPopupPinClick(trigger, abilityTrigger = false) {
  if (trigger.dataset.popupPinBound === '1') return;
  trigger.addEventListener('click', (event) => {
    document.querySelectorAll('.ability-box.pinned').forEach((ability) => {
      if (ability !== trigger) ability.classList.remove('pinned');
    });

    if (abilityTrigger) trigger.classList.toggle('pinned');
    movePopupPinned = true;
    if (movePopupHideTimer) {
      clearTimeout(movePopupHideTimer);
      movePopupHideTimer = null;
    }
    event.stopPropagation();
  });
  trigger.dataset.popupPinBound = '1';
}

function getDexNumber(pokemon) {
  return Number(String(pokemon.number || '').replace(/^0+/, '')) || Number.MAX_SAFE_INTEGER;
}

function getNumericRanking(source, key, value, dexNumber) {
  const lookupKey = key === 'TOTAL' ? 'total' : key;
  const statEntries = allPokemon
    .map((pokemon) => ({
      value: Number(source === 'baseStats' ? pokemon.baseStats?.[lookupKey] : pokemon[lookupKey]),
      dexNumber: getDexNumber(pokemon)
    }))
    .filter((entry) => Number.isFinite(entry.value));

  if (!statEntries.length) return null;

  const sortedEntries = [...statEntries].sort((left, right) => (
    right.value - left.value || left.dexNumber - right.dexNumber
  ));
  const rank = sortedEntries.findIndex((entry) => entry.value === value && entry.dexNumber === dexNumber) + 1;
  const atOrBelow = statEntries.filter((entry) => entry.value <= value).length;

  return {
    rank,
    count: statEntries.length,
    percentile: Math.round((atOrBelow / statEntries.length) * 100)
  };
}

function showBaseStatPopup(label, value, dexNumber, clientX, clientY, targetElement, source = 'baseStats', rankingKey = label, heading = 'Base Stat') {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  resetPopupTheme(popup);
  const ranking = getNumericRanking(source, rankingKey, value, dexNumber);
  if (!ranking) return;

  popup.innerHTML = `
    <div style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;text-align:center;color:#93c5fd;margin-bottom:7px;">${escapeHtml(heading)}</div>
    <div style="font-size:20px;line-height:1.15;font-weight:800;text-align:center;color:#ffffff;margin-bottom:8px;">${escapeHtml(value)} ${escapeHtml(label)}</div>
    <div style="text-align:center;color:#dbeafe;font-weight:700;">${ranking.percentile}% percentile</div>
    <div style="text-align:center;color:#cbd5e1;margin-top:4px;">Rank ${ranking.rank} / ${ranking.count}</div>
  `;
  popup.setAttribute('aria-hidden', 'false');
  if (!popup.classList.contains('visible')) popup.classList.add('visible');

  const offset = 8;
  const width = popup.offsetWidth || 220;
  const height = popup.offsetHeight || 100;
  let left = clientX + offset;
  let top = clientY + offset;

  if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
    const rect = targetElement.getBoundingClientRect();
    left = Math.round(rect.left + rect.width / 2 - width / 2);
    top = rect.top - height - offset;
    if (top < 8) top = rect.bottom + offset;
  }

  if (left < 8) left = 8;
  if (left + width + 8 > window.innerWidth) left = Math.max(8, window.innerWidth - width - 8);
  if (top + height + 8 > window.innerHeight) top = Math.max(8, window.innerHeight - height - 8);
  popup.style.left = `${Math.max(8, Math.round(left))}px`;
  popup.style.top = `${Math.max(8, Math.round(top))}px`;

  if (movePopupHideTimer) {
    clearTimeout(movePopupHideTimer);
    movePopupHideTimer = null;
  }
}

function showCatchRatePopup(catchRate, clientX, clientY, targetElement) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  resetPopupTheme(popup);
  const catchChance = Math.pow(catchRate / 765, 0.75) * 100;
  const formattedChance = Number.isFinite(catchChance) ? catchChance.toFixed(1) : '-';

  popup.innerHTML = `
    <div style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;text-align:center;color:#93c5fd;margin-bottom:7px;">Catch Chance</div>
    <div style="font-size:20px;line-height:1.15;font-weight:800;text-align:center;color:#ffffff;margin-bottom:8px;">${escapeHtml(formattedChance)}%</div>
    <div style="text-align:center;color:#dbeafe;font-weight:700;">Catch Rate: ${escapeHtml(catchRate)}</div>
    <div style="text-align:center;color:#cbd5e1;margin-top:4px;">Full HP - Regular Poke Ball</div>
  `;
  popup.setAttribute('aria-hidden', 'false');
  if (!popup.classList.contains('visible')) popup.classList.add('visible');

  const offset = 8;
  const width = popup.offsetWidth || 220;
  const height = popup.offsetHeight || 100;
  let left = clientX + offset;
  let top = clientY + offset;

  if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
    const rect = targetElement.getBoundingClientRect();
    left = Math.round(rect.left + rect.width / 2 - width / 2);
    top = rect.top - height - offset;
    if (top < 8) top = rect.bottom + offset;
  }

  if (left < 8) left = 8;
  if (left + width + 8 > window.innerWidth) left = Math.max(8, window.innerWidth - width - 8);
  if (top + height + 8 > window.innerHeight) top = Math.max(8, window.innerHeight - height - 8);
  popup.style.left = `${Math.max(8, Math.round(left))}px`;
  popup.style.top = `${Math.max(8, Math.round(top))}px`;

  if (movePopupHideTimer) {
    clearTimeout(movePopupHideTimer);
    movePopupHideTimer = null;
  }
}

function showLevelRatePopup(levelRate, totalXP, clientX, clientY, targetElement) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  resetPopupTheme(popup);

  popup.innerHTML = `
    <div style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;text-align:center;color:#93c5fd;margin-bottom:7px;">Level Rate</div>
    <div style="font-size:20px;line-height:1.15;font-weight:800;text-align:center;color:#ffffff;margin-bottom:8px;">${escapeHtml(levelRate || '-')}</div>
    <div style="text-align:center;color:#dbeafe;font-weight:700;">XP needed: ${escapeHtml(totalXP || '-')}</div>
  `;
  popup.setAttribute('aria-hidden', 'false');
  if (!popup.classList.contains('visible')) popup.classList.add('visible');

  const offset = 8;
  const width = popup.offsetWidth || 220;
  const height = popup.offsetHeight || 90;
  let left = clientX + offset;
  let top = clientY + offset;

  if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
    const rect = targetElement.getBoundingClientRect();
    left = Math.round(rect.left + rect.width / 2 - width / 2);
    top = rect.top - height - offset;
    if (top < 8) top = rect.bottom + offset;
  }

  if (left < 8) left = 8;
  if (left + width + 8 > window.innerWidth) left = Math.max(8, window.innerWidth - width - 8);
  if (top + height + 8 > window.innerHeight) top = Math.max(8, window.innerHeight - height - 8);
  popup.style.left = `${Math.max(8, Math.round(left))}px`;
  popup.style.top = `${Math.max(8, Math.round(top))}px`;

  if (movePopupHideTimer) {
    clearTimeout(movePopupHideTimer);
    movePopupHideTimer = null;
  }
}

function showEggCyclePopup(eggCycles, eggSteps, clientX, clientY, targetElement) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  resetPopupTheme(popup);

  popup.innerHTML = `
    <div style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;text-align:center;color:#93c5fd;margin-bottom:7px;">Egg Cycles</div>
    <div style="font-size:20px;line-height:1.15;font-weight:800;text-align:center;color:#ffffff;margin-bottom:8px;">${escapeHtml(eggCycles || '-')} cycles</div>
    <div style="text-align:center;color:#dbeafe;font-weight:700;">Egg Steps: ${escapeHtml(eggSteps || '-')}</div>
  `;
  popup.setAttribute('aria-hidden', 'false');
  if (!popup.classList.contains('visible')) popup.classList.add('visible');

  const offset = 8;
  const width = popup.offsetWidth || 220;
  const height = popup.offsetHeight || 90;
  let left = clientX + offset;
  let top = clientY + offset;

  if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
    const rect = targetElement.getBoundingClientRect();
    left = Math.round(rect.left + rect.width / 2 - width / 2);
    top = rect.top - height - offset;
    if (top < 8) top = rect.bottom + offset;
  }

  if (left < 8) left = 8;
  if (left + width + 8 > window.innerWidth) left = Math.max(8, window.innerWidth - width - 8);
  if (top + height + 8 > window.innerHeight) top = Math.max(8, window.innerHeight - height - 8);
  popup.style.left = `${Math.max(8, Math.round(left))}px`;
  popup.style.top = `${Math.max(8, Math.round(top))}px`;

  if (movePopupHideTimer) {
    clearTimeout(movePopupHideTimer);
    movePopupHideTimer = null;
  }
}

function showEggGroupPopup(pokemon, clientX, clientY, targetElement) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  resetPopupTheme(popup);
  const eggGroups = [...new Set([pokemon.eggGroup1, pokemon.eggGroup2]
    .map((group) => String(group || '').trim())
    .filter(Boolean))];
  const rows = eggGroups.map((group) => {
    const count = allPokemon.filter((otherPokemon) => (
      otherPokemon !== pokemon
      && [otherPokemon.eggGroup1, otherPokemon.eggGroup2]
        .map((value) => String(value || '').trim())
        .includes(group)
    )).length;
    return `<div style="display:flex;justify-content:space-between;gap:1.5rem;"><span>${escapeHtml(group)}</span><strong>${count} other ${count === 1 ? 'Pokemon' : 'Pokemon'}</strong></div>`;
  }).join('');

  popup.innerHTML = `
    <div style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;text-align:center;color:#93c5fd;margin-bottom:7px;">Egg Group</div>
    <div style="display:grid;gap:6px;color:#dbeafe;">${rows || '<div style="text-align:center;color:#cbd5e1;">No egg group</div>'}</div>
  `;
  popup.setAttribute('aria-hidden', 'false');
  if (!popup.classList.contains('visible')) popup.classList.add('visible');

  const offset = 8;
  const width = popup.offsetWidth || 240;
  const height = popup.offsetHeight || 90;
  let left = clientX + offset;
  let top = clientY + offset;

  if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
    const rect = targetElement.getBoundingClientRect();
    left = Math.round(rect.left + rect.width / 2 - width / 2);
    top = rect.top - height - offset;
    if (top < 8) top = rect.bottom + offset;
  }

  if (left < 8) left = 8;
  if (left + width + 8 > window.innerWidth) left = Math.max(8, window.innerWidth - width - 8);
  if (top + height + 8 > window.innerHeight) top = Math.max(8, window.innerHeight - height - 8);
  popup.style.left = `${Math.max(8, Math.round(left))}px`;
  popup.style.top = `${Math.max(8, Math.round(top))}px`;

  if (movePopupHideTimer) {
    clearTimeout(movePopupHideTimer);
    movePopupHideTimer = null;
  }
}

function showAttributeCountPopup(label, value, clientX, clientY, targetElement) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  resetPopupTheme(popup);
  const count = allPokemon.filter((pokemon) => pokemon !== selectedPokemon && String(pokemon[value.key] || '').trim() === value.value).length;

  popup.innerHTML = `
    <div style="font-size:10px;letter-spacing:.16em;text-transform:uppercase;text-align:center;color:#93c5fd;margin-bottom:7px;">${escapeHtml(label)}</div>
    <div style="font-size:20px;line-height:1.15;font-weight:800;text-align:center;color:#ffffff;margin-bottom:5px;">${escapeHtml(value.value || '-')}</div>
    <div style="text-align:center;color:#dbeafe;font-weight:700;">${count} other ${count === 1 ? 'Pokemon' : 'Pokemon'}</div>
  `;
  popup.setAttribute('aria-hidden', 'false');
  if (!popup.classList.contains('visible')) popup.classList.add('visible');

  const offset = 8;
  const width = popup.offsetWidth || 220;
  const height = popup.offsetHeight || 90;
  let left = clientX + offset;
  let top = clientY + offset;

  if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
    const rect = targetElement.getBoundingClientRect();
    left = Math.round(rect.left + rect.width / 2 - width / 2);
    top = rect.top - height - offset;
    if (top < 8) top = rect.bottom + offset;
  }

  if (left < 8) left = 8;
  if (left + width + 8 > window.innerWidth) left = Math.max(8, window.innerWidth - width - 8);
  if (top + height + 8 > window.innerHeight) top = Math.max(8, window.innerHeight - height - 8);
  popup.style.left = `${Math.max(8, Math.round(left))}px`;
  popup.style.top = `${Math.max(8, Math.round(top))}px`;

  if (movePopupHideTimer) {
    clearTimeout(movePopupHideTimer);
    movePopupHideTimer = null;
  }
}

function attachBaseStatHoverHandlers() {
  const container = elements.details;
  if (!container) return;

  container.querySelectorAll('.base-stat-line').forEach((statLine) => {
    if (statLine.dataset.baseStatHoverBound === '1') return;
    const statKey = statLine.dataset.statKey;
    const value = Number(statLine.dataset.statValue);
    const dexNumber = getDexNumber({ number: statLine.dataset.statDex });
    if (!statKey || !Number.isFinite(value) || !Number.isFinite(dexNumber)) return;

    statLine.addEventListener('mouseenter', (event) => {
      showBaseStatPopup(statKey, value, dexNumber, event.clientX, event.clientY, statLine);
    });
    statLine.addEventListener('mousemove', (event) => {
      showBaseStatPopup(statKey, value, dexNumber, event.clientX, event.clientY, statLine);
    });
    statLine.addEventListener('mouseleave', () => {
      if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
      movePopupHideTimer = setTimeout(hideMovePopup, 180);
    });

    statLine.dataset.baseStatHoverBound = '1';
  });

  container.querySelectorAll('.ranking-meta-item').forEach((metaItem) => {
    if (metaItem.dataset.rankingHoverBound === '1') return;
    const rankingKey = metaItem.dataset.rankingKey;
    const value = Number(metaItem.dataset.rankingValue);
    const label = metaItem.querySelector('strong')?.textContent || rankingKey;
    const dexNumber = getDexNumber({ number: selectedPokemon?.number });
    if (!rankingKey || !Number.isFinite(value)) return;

    metaItem.addEventListener('mouseenter', (event) => {
      showBaseStatPopup(label, value, dexNumber, event.clientX, event.clientY, metaItem, 'root', rankingKey, 'Base Data');
    });
    metaItem.addEventListener('mousemove', (event) => {
      showBaseStatPopup(label, value, dexNumber, event.clientX, event.clientY, metaItem, 'root', rankingKey, 'Base Data');
    });
    metaItem.addEventListener('mouseleave', () => {
      if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
      movePopupHideTimer = setTimeout(hideMovePopup, 180);
    });

    metaItem.dataset.rankingHoverBound = '1';
  });

  container.querySelectorAll('.catch-rate-meta-item').forEach((metaItem) => {
    if (metaItem.dataset.catchRateHoverBound === '1') return;
    const catchRate = Number(metaItem.dataset.metaValue);
    if (!Number.isFinite(catchRate)) return;

    metaItem.addEventListener('mouseenter', (event) => {
      showCatchRatePopup(catchRate, event.clientX, event.clientY, metaItem);
    });
    metaItem.addEventListener('mousemove', (event) => {
      showCatchRatePopup(catchRate, event.clientX, event.clientY, metaItem);
    });
    metaItem.addEventListener('mouseleave', () => {
      if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
      movePopupHideTimer = setTimeout(hideMovePopup, 180);
    });

    metaItem.dataset.catchRateHoverBound = '1';
  });

  container.querySelectorAll('.level-rate-meta-item').forEach((metaItem) => {
    if (metaItem.dataset.levelRateHoverBound === '1') return;
    const levelRate = metaItem.dataset.metaValue;
    const totalXP = metaItem.dataset.metaExtra;
    if (!levelRate) return;

    metaItem.addEventListener('mouseenter', (event) => {
      showLevelRatePopup(levelRate, totalXP, event.clientX, event.clientY, metaItem);
    });
    metaItem.addEventListener('mousemove', (event) => {
      showLevelRatePopup(levelRate, totalXP, event.clientX, event.clientY, metaItem);
    });
    metaItem.addEventListener('mouseleave', () => {
      if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
      movePopupHideTimer = setTimeout(hideMovePopup, 180);
    });

    metaItem.dataset.levelRateHoverBound = '1';
  });

  container.querySelectorAll('.egg-cycles-meta-item').forEach((metaItem) => {
    if (metaItem.dataset.eggCyclesHoverBound === '1') return;
    const eggCycles = metaItem.dataset.metaValue;
    const eggSteps = metaItem.dataset.metaExtra;
    if (!eggCycles) return;

    metaItem.addEventListener('mouseenter', (event) => {
      showEggCyclePopup(eggCycles, eggSteps, event.clientX, event.clientY, metaItem);
    });
    metaItem.addEventListener('mousemove', (event) => {
      showEggCyclePopup(eggCycles, eggSteps, event.clientX, event.clientY, metaItem);
    });
    metaItem.addEventListener('mouseleave', () => {
      if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
      movePopupHideTimer = setTimeout(hideMovePopup, 180);
    });

    metaItem.dataset.eggCyclesHoverBound = '1';
  });

  container.querySelectorAll('.egg-group-meta-item').forEach((metaItem) => {
    if (metaItem.dataset.eggGroupHoverBound === '1') return;
    if (!selectedPokemon) return;
    bindPopupPinClick(metaItem);

    metaItem.addEventListener('mouseenter', (event) => {
      showEggGroupPopup(selectedPokemon, event.clientX, event.clientY, metaItem);
    });
    metaItem.addEventListener('mousemove', (event) => {
      showEggGroupPopup(selectedPokemon, event.clientX, event.clientY, metaItem);
    });
    metaItem.addEventListener('mouseleave', () => {
      if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
      movePopupHideTimer = setTimeout(hideMovePopup, 180);
    });

    metaItem.dataset.eggGroupHoverBound = '1';
  });

  ['shape', 'color'].forEach((attributeKey) => {
    const metaType = `${attributeKey}-meta-item`;
    container.querySelectorAll(`.${metaType}`).forEach((metaItem) => {
      const boundKey = `${attributeKey}HoverBound`;
      if (metaItem.dataset[boundKey] === '1') return;
      bindPopupPinClick(metaItem);
      const label = metaItem.querySelector('strong')?.textContent || attributeKey;
      const attributeValue = metaItem.querySelector('p')?.textContent?.trim() || '';
      if (!selectedPokemon || !attributeValue) return;

      const value = { key: attributeKey, value: attributeValue };
      metaItem.addEventListener('mouseenter', (event) => {
        showAttributeCountPopup(label, value, event.clientX, event.clientY, metaItem);
      });
      metaItem.addEventListener('mousemove', (event) => {
        showAttributeCountPopup(label, value, event.clientX, event.clientY, metaItem);
      });
      metaItem.addEventListener('mouseleave', () => {
        if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
        movePopupHideTimer = setTimeout(hideMovePopup, 180);
      });

      metaItem.dataset[boundKey] = '1';
    });
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
      #move-popup.visible{opacity:1;transform:translateY(0) scale(1);pointer-events:none}
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

  document.addEventListener('click', () => {
    movePopupPinned = false;
    document.querySelectorAll('.ability-box.pinned').forEach((ability) => ability.classList.remove('pinned'));
    hideMovePopup();
  });
  window.addEventListener('scroll', () => {
    movePopupPinned = false;
    document.querySelectorAll('.ability-box.pinned').forEach((ability) => ability.classList.remove('pinned'));
    hideMovePopup();
  }, true);

}

function showMovePopup(moveId, clientX, clientY, targetElement) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  resetPopupTheme(popup);
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
  if (movePopupPinned) return;
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
