const SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pub?gid=1685697799&single=true&output=csv';
const SHEET_HTML = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pubhtml/sheet?headers=false&gid=1685697799';
const POKEDEX_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pub?gid=0&single=true&output=csv';
const POKEDEX_SHEET_HTML = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pubhtml/sheet?headers=false&gid=0';
const ABILITY_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pub?gid=1698131980&single=true&output=csv';
const MOVES_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pub?gid=1813387196&single=true&output=csv';
const MOVES_SHEET_HTML = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwDxqxofxdx7M2HU-pMFBFBcMDI6mIVBeVim1sxIC_zalARL4Z7DVNiPkhGwY4ZKmVpC9FETrjZtOH/pubhtml/sheet?headers=false&gid=1813387196';
const MOVE_DESCRIPTIONS_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT91AhjLXEf0LGvk-ck5jcQJOzEHIaBajUKI92zfHkrg1I4SrTnABPLXyveLTNRKegrImW49xxmY8L3/pub?gid=2098324621&single=true&output=csv';
const GENERATION_MOVE_SHEET_URLS = [
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWjGrOFDEGsnUaj9wysSNYp9SRklG0bzdX5Us5DHJGHUwL8d2YBuNjYS2S6XumN5Ku2kxh3-d5cubU/pub?gid=0&single=true&output=csv',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWjGrOFDEGsnUaj9wysSNYp9SRklG0bzdX5Us5DHJGHUwL8d2YBuNjYS2S6XumN5Ku2kxh3-d5cubU/pub?gid=110138543&single=true&output=csv',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWjGrOFDEGsnUaj9wysSNYp9SRklG0bzdX5Us5DHJGHUwL8d2YBuNjYS2S6XumN5Ku2kxh3-d5cubU/pub?gid=724577958&single=true&output=csv',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWjGrOFDEGsnUaj9wysSNYp9SRklG0bzdX5Us5DHJGHUwL8d2YBuNjYS2S6XumN5Ku2kxh3-d5cubU/pub?gid=502916521&single=true&output=csv',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWjGrOFDEGsnUaj9wysSNYp9SRklG0bzdX5Us5DHJGHUwL8d2YBuNjYS2S6XumN5Ku2kxh3-d5cubU/pub?gid=1538379012&single=true&output=csv',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWjGrOFDEGsnUaj9wysSNYp9SRklG0bzdX5Us5DHJGHUwL8d2YBuNjYS2S6XumN5Ku2kxh3-d5cubU/pub?gid=856795351&single=true&output=csv',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWjGrOFDEGsnUaj9wysSNYp9SRklG0bzdX5Us5DHJGHUwL8d2YBuNjYS2S6XumN5Ku2kxh3-d5cubU/pub?gid=1662250866&single=true&output=csv',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWjGrOFDEGsnUaj9wysSNYp9SRklG0bzdX5Us5DHJGHUwL8d2YBuNjYS2S6XumN5Ku2kxh3-d5cubU/pub?gid=1847237187&single=true&output=csv',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWjGrOFDEGsnUaj9wysSNYp9SRklG0bzdX5Us5DHJGHUwL8d2YBuNjYS2S6XumN5Ku2kxh3-d5cubU/pub?gid=447964549&single=true&output=csv'
];
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
  abilityDetails: document.getElementById('abilityDetails'),
  teamPokemonSearch: document.getElementById('teamPokemonSearch'),
  teamPokemonList: document.getElementById('teamPokemonList'),
  teamPokemonCount: document.getElementById('teamPokemonCount'),
  teamCount: document.getElementById('teamCount'),
  teamRoster: document.getElementById('teamRoster'),
  teamAnalysis: document.getElementById('teamAnalysis'),
  pokemonCompareView: document.getElementById('pokemonCompareView'),
  comparePokemonSearch: document.getElementById('comparePokemonSearch'),
  comparePokemonList: document.getElementById('comparePokemonList'),
  comparePokemonCount: document.getElementById('comparePokemonCount'),
  pokemonCompareSlots: document.getElementById('pokemonCompareSlots'),
  pokemonCompareContent: document.getElementById('pokemonCompareContent')
};

let allPokemon = [];
let filteredPokemon = [];
let pokemonIndexLookup = new WeakMap();
let pokemonByKey = new Map();
let pokemonListRenderToken = 0;
let pendingPokemonScroll = false;
let activeType = null;
let selectedPokemon = null;
let selectedPokemonDetailTab = 'basic';
let selectedDex = 'pokemon';
let selectedPokemonSortKey = '';
let selectedPokemonSortDirection = 'none';
let selectedComparePokemonKeys = ['', '', '', ''];
let selectedCompareMoveCategory = 'levelUp';
let selectedCompareDetailTab = 'basic';
let comparePokemonRenderToken = 0;
let selectedPokedexGen = 1;
let selectedMoveCategory = 'levelUp';
let selectedMovesetGeneration = 9;
let selectedMovesetGamesetByGeneration = {};
let movesetGenerationData = {};
let movesetGenerationPromises = {};
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
let moveDataLoadFailed = false;
let moveDescriptionsLoaded = false;
let moveDexInitialized = false;
let abilityDexInitialized = false;
let abilityDataPromise = null;
let moveDexDataPromise = null;
let moveDescriptionsDataPromise = null;
let moveLearnersLookupCache = new WeakMap();
let moveDescriptionsLookup = {};
let moveDescriptionGamesets = [];
let selectedMove = null;
let selectedAbility = null;
let selectedMoveDetailTab = 'basic';
let selectedAbilityDetailTab = 'basic';
let selectedTeamAnalysisTab = 'defensive';
let selectedAbilityGen = 3;
let abilityDescriptionGamesets = [];
let selectedMoveTypes = new Set();
let selectedMoveCategoryFilter = 'any';
let selectedMoveTarget = 'any';
let moveFavoriteFilter = 'any';
let moveNoteFilter = 'any';
let abilityFavoriteFilter = 'any';
let abilityNoteFilter = 'any';
let abilitySlotFilter = 'any';
let teamPokemonRenderToken = 0;
const TEAM_SIZE = 6;
const GUEST_TEAM_STORAGE_KEY = 'pokedexGuestTeam';
const GUEST_TEAM_MOVES_STORAGE_KEY = 'pokedexGuestTeamMoves';
let selectedMoveGen = 9;
let selectedMoveLearnerCategory = 'levelUp';
let selectedMoveLearnerGeneration = 9;
let selectedMoveLearnerGamesetByGeneration = {};
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
    pokemonByKey = new Map(allPokemon.map((pokemon) => [getPokemonKey(pokemon), pokemon]));
    applyPokedexSheetData(pokedexRows, false);
    groupsByDex = buildGroups(allPokemon);
    processGroups(groupsByDex);
    filteredPokemon = Object.values(groupsByDex).map((group) => group[0]);
    renderTypeFilters(allPokemon);
    renderAttributeFilters(allPokemon);
    renderList(filteredPokemon);
    if (filteredPokemon.length) {
      selectPokemon(filteredPokemon[0]);
    }
    bindPokemonComparisonControls();
    renderComparePokemonOptions();
    renderPokemonComparison();
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
    abilitySlotFilter = 'any';
    document.querySelectorAll('#abilityPanel-custom .custom-filter-button').forEach((button) => {
      button.classList.toggle('active', button.dataset.abilityCustomFilter === 'any');
    });
    document.querySelectorAll('.ability-slot-filter').forEach((button) => {
      button.classList.toggle('active', button.dataset.abilitySlot === 'any');
    });
    applyAbilityFilters();
  });
  document.querySelectorAll('.ability-slot-filter').forEach((button) => {
    button.addEventListener('click', () => {
      abilitySlotFilter = button.dataset.abilitySlot || 'any';
      document.querySelectorAll('.ability-slot-filter').forEach((item) => {
        item.classList.toggle('active', item === button);
      });
      applyAbilityFilters();
    });
  });
  elements.teamPokemonSearch?.addEventListener('input', renderTeamPokemonOptions);
  elements.teamPokemonList?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-team-add]');
    if (!button) return;
    addPokemonToTeam(button.dataset.teamAdd);
  });
  elements.teamRoster?.addEventListener('click', (event) => {
    const moveToggle = event.target.closest('[data-team-move-toggle]');
    if (moveToggle) {
      const picker = moveToggle.closest('.team-move-picker');
      const menu = picker?.querySelector('.team-move-menu');
      const isOpening = Boolean(menu?.hidden);
      closeTeamDropdowns();
      if (menu && isOpening) {
        menu.hidden = false;
        moveToggle.setAttribute('aria-expanded', 'true');
      }
      return;
    }
    const moveOption = event.target.closest('[data-team-move-id]');
    if (moveOption) {
      setTeamMove(
        moveOption.dataset.teamPokemonKey,
        Number(moveOption.dataset.teamMoveSlot),
        moveOption.dataset.teamMoveId
      );
      const picker = moveOption.closest('.team-move-picker');
      const menu = picker?.querySelector('.team-move-menu');
      if (menu) menu.hidden = true;
      const trigger = picker?.querySelector('[data-team-move-toggle]');
      trigger?.setAttribute('aria-expanded', 'false');
      trigger?.focus();
      return;
    }
    const formToggle = event.target.closest('[data-team-form-toggle]');
    if (formToggle) {
      const picker = formToggle.closest('.team-form-picker');
      const menu = picker?.querySelector('.team-form-menu');
      const isOpening = Boolean(menu?.hidden);
      closeTeamDropdowns();
      if (menu && isOpening) {
        menu.hidden = false;
        formToggle.setAttribute('aria-expanded', 'true');
      }
      return;
    }
    const formOption = event.target.closest('[data-team-form-index][data-team-form-key]');
    if (formOption) {
      changeTeamPokemonForm(Number(formOption.dataset.teamFormIndex), formOption.dataset.teamFormKey);
      return;
    }
    const removeButton = event.target.closest('[data-team-remove]');
    if (removeButton) {
      removePokemonFromTeam(Number(removeButton.dataset.teamRemove));
      return;
    }
    const viewButton = event.target.closest('[data-team-view]');
    if (viewButton) {
      const pokemon = pokemonByKey.get(viewButton.dataset.teamView);
      if (pokemon) navigateToPokemon(pokemon.number, pokemon.name);
    }
  });
  elements.teamRoster?.addEventListener('keydown', (event) => {
    const trigger = event.target.closest('[data-team-form-toggle]');
    const option = event.target.closest('.team-form-option');
    const moveTrigger = event.target.closest('[data-team-move-toggle]');
    const moveOption = event.target.closest('.team-move-option');
    if (event.key === 'Escape' && (trigger || option || moveTrigger || moveOption)) {
      if (moveTrigger || moveOption) {
        const picker = (moveTrigger || moveOption).closest('.team-move-picker');
        const menu = picker?.querySelector('.team-move-menu');
        const menuTrigger = picker?.querySelector('[data-team-move-toggle]');
        if (menu && !menu.hidden) {
          event.preventDefault();
          menu.hidden = true;
          menuTrigger?.setAttribute('aria-expanded', 'false');
          menuTrigger?.focus();
        }
        return;
      }
      const picker = (trigger || option).closest('.team-form-picker');
      const menu = picker?.querySelector('.team-form-menu');
      const menuTrigger = picker?.querySelector('[data-team-form-toggle]');
      if (menu && !menu.hidden) {
        event.preventDefault();
        menu.hidden = true;
        menuTrigger?.setAttribute('aria-expanded', 'false');
        menuTrigger?.focus();
      }
      return;
    }
    if (moveTrigger && event.key === 'ArrowDown') {
      event.preventDefault();
      if (moveTrigger.getAttribute('aria-expanded') !== 'true') moveTrigger.click();
      const picker = moveTrigger.closest('.team-move-picker');
      (picker?.querySelector('.team-move-option[aria-selected="true"]') || picker?.querySelector('.team-move-option'))?.focus();
      return;
    }
    if (moveOption && ['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const options = [...moveOption.closest('.team-move-menu').querySelectorAll('.team-move-option')];
      const currentIndex = options.indexOf(moveOption);
      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? options.length - 1
          : (currentIndex + (event.key === 'ArrowDown' ? 1 : options.length - 1)) % options.length;
      options[nextIndex]?.focus();
      return;
    }
    if (trigger && event.key === 'ArrowDown') {
      event.preventDefault();
      if (trigger.getAttribute('aria-expanded') !== 'true') trigger.click();
      trigger.closest('.team-form-picker')?.querySelector('.team-form-option')?.focus();
      return;
    }
    if (!option || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const options = [...option.closest('.team-form-menu').querySelectorAll('.team-form-option')];
    const currentIndex = options.indexOf(option);
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? options.length - 1
        : (currentIndex + (event.key === 'ArrowDown' ? 1 : options.length - 1)) % options.length;
    options[nextIndex]?.focus();
  });
  document.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('.team-form-picker, .team-move-picker')) return;
    closeTeamDropdowns();
  });
  document.getElementById('clearTeamButton')?.addEventListener('click', () => {
    saveActiveTeam([]);
    saveActiveTeamMoves({});
    renderTeamBuilder();
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
  if (selectedDex !== 'ability' || !filteredAbilities.length) return;
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
  moveDataLoadFailed = false;
  moveDexDataPromise = loadCachedSheetRows('moves', loadMovesData).then((movesRows) => {
    movesLookup = buildMovesLookup(movesRows);
    allMoves = Object.values(movesLookup).filter((move) => move.name).sort((a, b) => a.name.localeCompare(b.name));
    moveDataLoaded = true;
    moveDataLoadFailed = false;
    refreshPokemonMoveset();
    initializeDexView('move');
    if (selectedDex === 'team') renderTeamBuilder({ renderOptions: false });
    if (selectedDex === 'compare') renderPokemonComparison();
  }).catch((error) => {
    moveDexDataPromise = null;
    moveDataLoadFailed = true;
    console.error('Unable to load move data', error);
    elements.status.textContent = `Loaded ${allPokemon.length} Pokémon, but move data could not be loaded.`;
    if (selectedDex === 'compare') renderPokemonComparison();
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
  const teamBuilderTab = document.getElementById('teamBuilderTab');
  const pokemonCompareTab = document.getElementById('pokemonCompareTab');
  pokedexTab.addEventListener('click', () => switchDexView('pokemon'));
  movedexTab.addEventListener('click', () => switchDexView('move'));
  abilitydexTab.addEventListener('click', () => switchDexView('ability'));
  teamBuilderTab.addEventListener('click', () => switchDexView('team'));
  pokemonCompareTab.addEventListener('click', () => switchDexView('compare'));
}

function switchDexView(dex) {
  const views = {
    pokemon: document.getElementById('pokedexView'),
    move: document.getElementById('movedexView'),
    ability: document.getElementById('abilitydexView'),
    team: document.getElementById('teamBuilderView'),
    compare: elements.pokemonCompareView
  };
  const tabs = {
    pokemon: document.getElementById('pokedexTab'),
    move: document.getElementById('movedexTab'),
    ability: document.getElementById('abilitydexTab'),
    team: document.getElementById('teamBuilderTab'),
    compare: document.getElementById('pokemonCompareTab')
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
    ability: ['PokéDex Live', 'AbilityDex Live'],
    team: ['PokéDex Live', 'Team Builder'],
    compare: ['PokéDex Live', 'Compare Pokémon']
  };
  document.getElementById('heroEyebrow').textContent = dexTitles[dex][0];
  document.getElementById('heroTitle').textContent = dexTitles[dex][1];
  const randomLabels = {
    pokemon: 'Random Pokémon',
    move: 'Random Move',
    ability: 'Random Ability',
    team: 'Random Pokémon',
    compare: 'Random Pokémon'
  };
  elements.randomButton.textContent = randomLabels[dex];
  elements.floatingRandomButton.textContent = randomLabels[dex];
  const showRandom = dex !== 'team' && dex !== 'compare';
  elements.randomButton.hidden = !showRandom;
  elements.floatingRandomButton.hidden = !showRandom;
  elements.sidebarToggleButton.hidden = dex === 'compare';
  elements.floatingSidebarButton.hidden = dex === 'compare';
  initializeDexView(dex);
}

function initializeDexView(dex) {
  if (dex === 'compare') {
    loadMovesetGeneration(9);
    renderPokemonComparison();
    if (!moveDataLoaded) loadMoveDexData();
    return;
  }
  if (dex === 'team') {
    loadMovesetGeneration(9);
    renderTeamBuilder();
    if (!moveDataLoaded) loadMoveDexData();
    return;
  }
  if (dex === 'move' && !moveDataLoaded) {
    loadMoveDexData();
    return;
  }
  if (dex === 'move' && !moveDescriptionsLoaded) {
    loadMoveDescriptions();
    return;
  }
  if (dex === 'move') loadMovesetGeneration(9);
  if (dex === 'move' && !moveDexInitialized) {
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
      if (selectedDex === 'team') renderTeamBuilder();
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
    profiles[username] = { password, favorites: [], notes: {}, team: [] };
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
  if (selectedDex === 'team') renderTeamBuilder();
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
        if (!rows.length) return;
        await writeCachedSheetRows(key, rows);
        if (key === 'pokedex' && allPokemon.length) applyPokedexSheetData(rows);
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
    const response = await fetch(POKEDEX_SHEET_CSV, { cache: 'no-cache' });
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

async function loadGenerationMovesetData(generation) {
  const sheetUrl = GENERATION_MOVE_SHEET_URLS[generation - 1];
  if (!sheetUrl) throw new Error(`No moveset sheet is configured for Generation ${generation}`);
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(sheetUrl, { signal: controller.signal });
    if (!response.ok) throw new Error(`Generation ${generation} moveset CSV fetch failed`);
    return parseCSV(await response.text());
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(`Generation ${generation} moveset CSV request timed out`);
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}

function parseGenerationMoveset(rows) {
  const headerRow = rows[1] || [];
  const gameHeaderRow = rows[0] || [];
  const normalizeHeader = (header) => String(header || '').toLowerCase().replace(/[^a-z]/g, '');
  const categoryByHeader = {
    levelup: { key: 'levelUp', label: 'Level-Up' },
    tm: { key: 'tm', label: 'TM' },
    hm: { key: 'hm', label: 'HM' },
    tr: { key: 'tr', label: 'TR' },
    egg: { key: 'egg', label: 'Egg' },
    eggmove: { key: 'egg', label: 'Egg' },
    ev: { key: 'evolution', label: 'EV' },
    evolution: { key: 'evolution', label: 'EV' },
    rm: { key: 'reminder', label: 'Reminder' },
    reminder: { key: 'reminder', label: 'Reminder' },
    tu: { key: 'tutor', label: 'Move Tutor' },
    tutor: { key: 'tutor', label: 'Move Tutor' }
  };
  const groupStarts = gameHeaderRow.reduce((starts, name, index) => {
    if (index > 0 && String(name || '').trim()) starts.push(index);
    return starts;
  }, []);

  if (!groupStarts.length) {
    throw new Error('Generation moveset sheet has no game groups');
  }

  return groupStarts.map((start, groupIndex) => {
    const name = String(gameHeaderRow[start] || '').trim() || `Game Set ${groupIndex + 1}`;
    const end = groupStarts[groupIndex + 1] ?? headerRow.length;
    const columns = [];
    for (let index = start; index < end; index += 1) {
      const header = normalizeHeader(headerRow[index]);
      if (!header) continue;
      const category = categoryByHeader[header];
      if (!category) {
        throw new Error(`Generation moveset group "${name}" has an unsupported category header: ${headerRow[index]}`);
      }
      if (columns.some((column) => column.category.key === category.key)) {
        throw new Error(`Generation moveset group "${name}" has duplicate ${category.label} columns`);
      }
      columns.push({ category, index });
    }
    if (!columns.some((column) => column.category.key === 'levelUp')) {
      throw new Error(`Generation moveset group "${name}" has no Level Up column`);
    }
    const pokemon = new Map();
    rows.slice(2).forEach((row) => {
      const pokemonName = String(row[0] || '').trim();
      if (!pokemonName) return;
      const moves = Object.fromEntries(columns.map(({ category, index }) => [
        category.key,
        String(row[index] || '').trim()
      ]));
      pokemon.set(normalizePokemonName(pokemonName), moves);
    });
    return {
      key: `set-${groupIndex}`,
      name,
      tabLabel: getMovesetGameTabLabel(name),
      categories: columns.map((column) => column.category),
      pokemon
    };
  });
}

function getMovesetGameTabLabel(name) {
  const aliases = {
    'red blue': 'RB',
    'red green blue': 'RB',
    yellow: 'Y',
    'gold silver': 'GS',
    crystal: 'C',
    'ruby sapphire': 'RS',
    emerald: 'E',
    'fire red leaf green': 'FRLG',
    'firered leafgreen': 'FRLG',
    'diamond pearl': 'DP',
    platinum: 'Pt',
    'heart gold soul silver': 'HGSS',
    'heargold soulsilver': 'HGSS',
    'black white': 'BW',
    'black 2 white 2': 'B2W2',
    'black2 white2': 'B2W2',
    'x y': 'XY',
    'omega ruby alpha sapphire': 'ORAS',
    'omegaruby alphasapphire': 'ORAS',
    'sun moon': 'SM',
    'ultra sun ultra moon': 'USUM',
    'ultrasun ultramoon': 'USUM',
    'lets go pikachu eevee': 'LGPE',
    'sword shield': 'SWSH',
    'brilliant diamond shining pearl': 'BDSP',
    'brilliantdiamond shiningpearl': 'BDSP',
    'legends arceus': 'PLA',
    'scarlet violet': 'SV',
    'legends z a': 'PLZA'
  };
  return aliases[normalizeGameKey(name)] || name;
}

function loadMovesetGeneration(generation) {
  if (movesetGenerationData[generation]?.status === 'loaded') return Promise.resolve();
  if (movesetGenerationPromises[generation]) return movesetGenerationPromises[generation];

  movesetGenerationData[generation] = { status: 'loading', gamesets: [] };
  refreshPokemonMoveset();
  const promise = loadCachedSheetRows(
    `moveset-generation-categories-v2-${generation}`,
    () => loadGenerationMovesetData(generation)
  ).then((rows) => {
    movesetGenerationData[generation] = {
      status: 'loaded',
      gamesets: parseGenerationMoveset(rows)
    };
    if (generation === 9) refreshDefaultPokemonMoveset();
    refreshSelectedMoveLearners();
    refreshPokemonMoveset();
  }).catch((error) => {
    console.error(`Unable to load Generation ${generation} moveset data`, error);
    movesetGenerationData[generation] = { status: 'error', gamesets: [] };
    refreshSelectedMoveLearners();
    refreshPokemonMoveset();
  }).finally(() => {
    delete movesetGenerationPromises[generation];
  });
  movesetGenerationPromises[generation] = promise;
  return promise;
}

function refreshDefaultPokemonMoveset() {
  if (selectedMove) renderMoveDetails(selectedMove);
  if (selectedDex === 'team') renderTeamBuilder({ renderOptions: false });
  if (selectedDex === 'compare') renderPokemonComparison();
}

function refreshSelectedMoveLearners() {
  if (selectedDex === 'move' && selectedMove && selectedMoveDetailTab === 'learners') {
    renderMoveDetails(selectedMove);
  }
}

function getPokemonMovesFromDefaultGameset(pokemon) {
  return movesetGenerationData[9]?.gamesets[0]?.pokemon.get(normalizePokemonName(pokemon.name)) || {};
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

function applyPokedexSheetData(rows, rerender = true) {
  const pokedexLookup = buildPokedexLookup(rows);
  allPokemon.forEach((pokemon) => {
    const formKey = buildPokedexLookupKey(pokemon.number, pokemon.mainDex, pokemon.name);
    const pokedexData = pokedexLookup[formKey] || pokedexLookup[normalizePokemonName(pokemon.name)];
    pokemon.pokedexEntries = pokedexData?.entries || [];
    pokemon.displayName = pokedexData?.displayName || pokemon.name;
    pokemon.evolvesFrom = pokedexData?.evolvesFrom || '';
    pokemon.evolutionType = pokedexData?.evolutionType || '';
  });
  if (rerender && selectedPokemon && allPokemon.includes(selectedPokemon)) renderDetails(selectedPokemon);
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
  const headers = rows[headerIndex];
  const firstGameColumn = headers.findIndex((header) => normalizeGameKey(header) === 'r');
  const gameColumnShift = firstGameColumn >= 0 ? firstGameColumn - 4 : 0;
  const evolvesFromIndex = headers.findIndex((header) => normalizeGameKey(header) === 'evolves from');
  const evolutionTypeIndex = headers.findIndex((header) => normalizeGameKey(header) === 'evolution type');
  return rows.slice(headerIndex + 1).reduce((lookup, row) => {
    const dexNumber = String(row[0] || '').trim();
    const mainDex = String(row[1] || '').trim();
    const displayName = String(row[2] || '').trim();
    const pokemonName = String(row[3] || '').trim();
    if (!dexNumber || !pokemonName) return lookup;

    const entries = POKEDEX_ENTRY_COLUMNS.reduce((acc, column) => {
      const entryText = String(row[column.index + gameColumnShift] || '').trim();
      if (entryText && entryText.toLowerCase() !== 'undefined') {
        acc.push({ game: column.game, generation: column.generation, entry: entryText });
      }
      return acc;
    }, []);

    const formKey = buildPokedexLookupKey(dexNumber, mainDex, pokemonName);
    const nameKey = normalizePokemonName(pokemonName);
    const pokedexData = {
      entries,
      displayName,
      evolvesFrom: String(row[evolvesFromIndex] || '').trim(),
      evolutionType: String(row[evolutionTypeIndex] || '').trim()
    };
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

/* Game positions follow the two evolution columns in the Dex Entries sheet. */

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

function buildMoveLearnersLookup(gameset) {
  const categories = gameset.categories.map((category) => category.key);
  const lookup = {};
  const pokemonByName = new Map(allPokemon.map((pokemon) => [
    normalizePokemonName(pokemon.name),
    pokemon
  ]));

  gameset.pokemon.forEach((pokemonMoves, pokemonName) => {
    const pokemon = pokemonByName.get(pokemonName);
    if (!pokemon) return;
    categories.forEach((category) => {
      String(pokemonMoves[category] || '')
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

function getMoveLearnersLookup(gameset) {
  if (!gameset) return {};
  if (!moveLearnersLookupCache.has(gameset)) {
    moveLearnersLookupCache.set(gameset, buildMoveLearnersLookup(gameset));
  }
  return moveLearnersLookupCache.get(gameset);
}

function renderMoveFilters() {
  const types = [...new Set(allMoves.map((move) => move.type).filter(Boolean))].sort();
  elements.moveTypeButtons.innerHTML = ['any', ...types].map((type) => {
    const label = type === 'any' ? 'Any' : type;
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
      && (abilityNoteFilter !== 'noNote' || !hasNote)
      && (abilitySlotFilter === 'any'
        || ability.pokemon.some(({ slots }) => slots.includes(abilitySlotFilter)));
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

function getActiveTeamKeys() {
  const normalizeTeam = (team) => [...new Set(team.filter((key) => (
    typeof key === 'string' && (!pokemonByKey.size || pokemonByKey.has(key))
  )))].slice(0, TEAM_SIZE);
  if (currentUsername) {
    const profile = getCurrentProfile();
    return Array.isArray(profile?.team) ? normalizeTeam(profile.team) : [];
  }
  try {
    const team = JSON.parse(localStorage.getItem(GUEST_TEAM_STORAGE_KEY) || '[]');
    return Array.isArray(team) ? normalizeTeam(team) : [];
  } catch (error) {
    console.warn('Unable to read guest team', error);
    return [];
  }
}

function saveActiveTeam(team) {
  const pokemonKeys = team.slice(0, TEAM_SIZE);
  if (currentUsername) {
    const profiles = getProfiles();
    const profile = profiles[currentUsername];
    if (!profile) {
      console.error('Unable to save team: active profile was not found.');
      return;
    }
    profile.team = pokemonKeys;
    saveProfiles(profiles);
    return;
  }
  localStorage.setItem(GUEST_TEAM_STORAGE_KEY, JSON.stringify(pokemonKeys));
}

function getActiveTeamMoves() {
  if (currentUsername) {
    const profile = getCurrentProfile();
    return profile?.teamMoves && typeof profile.teamMoves === 'object' ? profile.teamMoves : {};
  }
  try {
    const moves = JSON.parse(localStorage.getItem(GUEST_TEAM_MOVES_STORAGE_KEY) || '{}');
    return moves && typeof moves === 'object' && !Array.isArray(moves) ? moves : {};
  } catch (error) {
    console.warn('Unable to read guest team move plan', error);
    return {};
  }
}

function saveActiveTeamMoves(teamMoves) {
  if (currentUsername) {
    const profiles = getProfiles();
    const profile = profiles[currentUsername];
    if (!profile) {
      console.error('Unable to save move plan: active profile was not found.');
      return;
    }
    profile.teamMoves = teamMoves;
    saveProfiles(profiles);
    return;
  }
  localStorage.setItem(GUEST_TEAM_MOVES_STORAGE_KEY, JSON.stringify(teamMoves));
}

function setTeamMove(pokemonKey, slot, moveId) {
  if (!Number.isInteger(slot) || slot < 0 || slot >= 4) return;
  const pokemon = pokemonByKey.get(pokemonKey);
  if (!pokemon) return;
  const availableMoveIds = new Set(getPokemonTeamMoves(pokemon).map(({ move }) => move.id));
  if (moveId && !availableMoveIds.has(moveId)) return;
  const teamMoves = getActiveTeamMoves();
  const selectedMoves = Array.isArray(teamMoves[pokemonKey]) ? teamMoves[pokemonKey].slice(0, 4) : [];
  selectedMoves[slot] = moveId || '';
  teamMoves[pokemonKey] = selectedMoves;
  saveActiveTeamMoves(teamMoves);
  const planner = [...elements.teamRoster.querySelectorAll('[data-team-move-planner]')]
    .find((element) => element.dataset.teamMovePlanner === pokemonKey);
  if (planner) {
    const count = selectedMoves.filter((id) => availableMoveIds.has(id)).length;
    planner.querySelector('.team-move-planner-heading > span').textContent = `${count} / 4 selected`;
    const picker = planner.querySelector(`[data-team-move-slot="${slot}"]`);
    const trigger = picker?.querySelector('[data-team-move-toggle]');
    const chosenMove = moveId ? movesLookup[moveId] : null;
    if (trigger) {
      trigger.querySelector('.team-move-trigger-copy').innerHTML = chosenMove
        ? `${escapeHtml(chosenMove.name)}${renderMoveTypePill(chosenMove.type)}<span class="team-move-category">${escapeHtml(chosenMove.category)}</span>`
        : '<span class="team-move-placeholder">Choose a move</span>';
    }
    picker?.querySelectorAll('.team-move-option').forEach((option) => {
      const isSelected = option.dataset.teamMoveId === (moveId || '');
      option.setAttribute('aria-selected', String(isSelected));
      option.classList.toggle('selected', isSelected);
    });
  }
  const team = getActiveTeamKeys().map((key) => pokemonByKey.get(key)).filter(Boolean);
  renderTeamAnalysis(team);
}

function closeTeamDropdowns() {
  [elements.teamRoster, elements.pokemonCompareSlots].forEach((container) => {
    container?.querySelectorAll('.team-form-menu, .team-move-menu').forEach((menu) => {
      menu.hidden = true;
    });
    container?.querySelectorAll('[data-team-form-toggle], [data-team-move-toggle], [data-compare-form-toggle]').forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
    });
  });
}

function getPokemonTeamMoves(pokemon) {
  const gameset = movesetGenerationData[9]?.gamesets[0];
  const categoryLabels = gameset?.categories || [
    { key: 'levelUp', label: 'Level-Up' },
    { key: 'tm', label: 'TM' },
    { key: 'egg', label: 'Egg' },
    { key: 'evolution', label: 'Evolution' },
    { key: 'reminder', label: 'Reminder' }
  ];
  const seen = new Set();
  return categoryLabels.flatMap(({ key, label }) => (
    String(getPokemonMovesFromDefaultGameset(pokemon)[key] || '')
      .split('|')
      .map((entry) => entry.trim())
      .filter(Boolean)
      .flatMap((entry) => {
        const separator = entry.indexOf('-');
        if (separator <= 0) return [];
        const moveId = entry.slice(0, separator).trim();
        const move = movesLookup[moveId];
        if (!move || seen.has(moveId)) return [];
        seen.add(moveId);
        return [{ move, method: label }];
      })
  ));
}

function addPokemonToTeam(pokemonKey) {
  const pokemon = pokemonByKey.get(pokemonKey);
  if (!pokemon) return;
  const team = getActiveTeamKeys();
  const alreadyInTeam = team.some((key) => pokemonByKey.get(key)?.group === pokemon.group);
  if (alreadyInTeam || team.length >= TEAM_SIZE) return;
  team.push(pokemonKey);
  saveActiveTeam(team);
  renderTeamBuilder({ renderOptions: false });
}

function changeTeamPokemonForm(teamIndex, pokemonKey) {
  const team = getActiveTeamKeys();
  const selectedPokemon = pokemonByKey.get(pokemonKey);
  if (!selectedPokemon || !Number.isInteger(teamIndex) || teamIndex < 0 || teamIndex >= team.length) return;
  const currentPokemon = pokemonByKey.get(team[teamIndex]);
  if (!currentPokemon || currentPokemon.group !== selectedPokemon.group) return;
  team[teamIndex] = pokemonKey;
  saveActiveTeam(team);
  renderTeamBuilder({ renderOptions: false });
}

function removePokemonFromTeam(index) {
  const team = getActiveTeamKeys();
  if (!Number.isInteger(index) || index < 0 || index >= team.length) return;
  const [removedKey] = team.splice(index, 1);
  const teamMoves = getActiveTeamMoves();
  delete teamMoves[removedKey];
  saveActiveTeamMoves(teamMoves);
  saveActiveTeam(team);
  renderTeamBuilder({ renderOptions: false });
}

function renderTeamPokemonOptions() {
  if (!elements.teamPokemonList || !allPokemon.length) return;
  const query = String(elements.teamPokemonSearch?.value || '').trim().toLowerCase();
  const originalPokemon = Object.values(groupsByDex).map((forms) => forms[0]);
  const matches = originalPokemon.filter((pokemon) => (
    !query
    || String(pokemon.number).toLowerCase().includes(query)
    || String(pokemon.displayName || pokemon.name).toLowerCase().includes(query)
    || pokemon.name.toLowerCase().includes(query)
    || pokemon.types.some((type) => type.toLowerCase().includes(query))
  ));
  const renderToken = teamPokemonRenderToken + 1;
  teamPokemonRenderToken = renderToken;
  elements.teamPokemonCount.textContent = `${matches.length} Pokémon found`;
  elements.teamPokemonList.replaceChildren();
  if (!matches.length) {
    elements.teamPokemonList.innerHTML = '<p class="small team-empty-message">No Pokémon match this search.</p>';
    return;
  }

  const batchSize = 40;
  let index = 0;
  const appendBatch = () => {
    if (renderToken !== teamPokemonRenderToken) return;
    const batch = matches.slice(index, index + batchSize).map((pokemon) => {
      const key = getPokemonKey(pokemon);
      return `<button type="button" class="team-pokemon-option" data-team-add="${escapeHtml(key)}"><span class="team-option-copy"><span class="team-option-name"><span class="team-option-number">#${escapeHtml(pokemon.number)}</span>${escapeHtml(pokemon.displayName || pokemon.name)}</span><span class="team-option-types">${pokemon.types.filter(Boolean).map(renderMoveTypePill).join('')}</span></span><span class="team-option-action"></span></button>`;
    }).join('');
    elements.teamPokemonList.insertAdjacentHTML('beforeend', batch);
    updateTeamPokemonOptions();
    index += batchSize;
    if (index < matches.length) requestAnimationFrame(appendBatch);
  };
  appendBatch();
}

function updateTeamPokemonOptions() {
  if (!elements.teamPokemonList) return;
  const team = getActiveTeamKeys();
  const full = team.length >= TEAM_SIZE;
  elements.teamPokemonList.querySelectorAll('[data-team-add]').forEach((button) => {
    const pokemon = pokemonByKey.get(button.dataset.teamAdd);
    if (!pokemon) return;
    const isAdded = team.some((teamKey) => pokemonByKey.get(teamKey)?.group === pokemon.group);
    button.disabled = full || isAdded;
    button.querySelector('.team-option-action').textContent = isAdded ? 'On team' : full ? 'Team full' : '+ Add';
  });
}

function getTeamDefensiveMatchups(team) {
  return TYPE_ORDER.map((attackType) => {
    const weak = [];
    const resist = [];
    const immune = [];
    team.forEach((pokemon) => {
      const multiplier = pokemon.types.filter(Boolean).reduce(
        (total, defendingType) => total * getTypeMultiplier(attackType, defendingType),
        1
      );
      const name = pokemon.displayName || pokemon.name;
      if (multiplier > 1) weak.push(name);
      else if (multiplier === 0) immune.push(name);
      else if (multiplier < 1) resist.push(name);
    });
    return { attackType, weak, resist, immune };
  });
}

function bindPokemonComparisonControls() {
  elements.comparePokemonSearch?.addEventListener('input', renderComparePokemonOptions);
  elements.comparePokemonList?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-compare-add]');
    if (!button) return;
    addPokemonToComparison(button.dataset.compareAdd);
  });
  elements.pokemonCompareSlots?.addEventListener('click', (event) => {
    const formToggle = event.target.closest('[data-compare-form-toggle]');
    if (formToggle) {
      const picker = formToggle.closest('.team-form-picker');
      const menu = picker?.querySelector('.team-form-menu');
      const isOpening = Boolean(menu?.hidden);
      closeTeamDropdowns();
      if (menu && isOpening) {
        menu.hidden = false;
        formToggle.setAttribute('aria-expanded', 'true');
      }
      return;
    }
    const formOption = event.target.closest('[data-compare-form-slot][data-compare-form-key]');
    if (formOption) {
      changeComparisonPokemonForm(Number(formOption.dataset.compareFormSlot), formOption.dataset.compareFormKey);
      return;
    }
    const removeButton = event.target.closest('[data-compare-remove]');
    if (!removeButton) return;
    removePokemonFromComparison(Number(removeButton.dataset.compareRemove));
  });
  elements.pokemonCompareSlots?.addEventListener('keydown', (event) => {
    const trigger = event.target.closest('[data-compare-form-toggle]');
    const option = event.target.closest('.pokemon-compare-form-option');
    if (event.key === 'Escape' && (trigger || option)) {
      const picker = (trigger || option).closest('.team-form-picker');
      const menu = picker?.querySelector('.team-form-menu');
      const menuTrigger = picker?.querySelector('[data-compare-form-toggle]');
      if (menu && !menu.hidden) {
        event.preventDefault();
        menu.hidden = true;
        menuTrigger?.setAttribute('aria-expanded', 'false');
        menuTrigger?.focus();
      }
      return;
    }
    if (trigger && event.key === 'ArrowDown') {
      event.preventDefault();
      if (trigger.getAttribute('aria-expanded') !== 'true') trigger.click();
      trigger.closest('.team-form-picker')?.querySelector('.pokemon-compare-form-option')?.focus();
      return;
    }
    if (!option || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const options = [...option.closest('.team-form-menu').querySelectorAll('.pokemon-compare-form-option')];
    const currentIndex = options.indexOf(option);
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? options.length - 1
        : (currentIndex + (event.key === 'ArrowDown' ? 1 : options.length - 1)) % options.length;
    options[nextIndex]?.focus();
  });
  elements.pokemonCompareContent?.addEventListener('click', (event) => {
    const moveLink = event.target.closest('.move-navigation-link');
    if (moveLink) {
      event.stopPropagation();
      navigateToMove(moveLink.dataset.moveId);
      return;
    }
    const button = event.target.closest('[data-compare-move-category]');
    if (!button) return;
    selectedCompareMoveCategory = button.dataset.compareMoveCategory;
    renderPokemonComparison();
  });
}

function getComparePokemon() {
  return selectedComparePokemonKeys.map((key) => key ? pokemonByKey.get(key) || null : null);
}

function addPokemonToComparison(pokemonKey) {
  const pokemon = pokemonByKey.get(pokemonKey);
  if (!pokemon) return;
  if (selectedComparePokemonKeys.some((key) => pokemonByKey.get(key)?.group === pokemon.group)) return;
  const emptySlot = selectedComparePokemonKeys.indexOf('');
  if (emptySlot < 0) return;
  selectedComparePokemonKeys[emptySlot] = pokemonKey;
  renderPokemonComparison();
}

function removePokemonFromComparison(slot) {
  if (!Number.isInteger(slot) || slot < 0 || slot >= selectedComparePokemonKeys.length) return;
  selectedComparePokemonKeys[slot] = '';
  renderPokemonComparison();
}

function changeComparisonPokemonForm(slot, pokemonKey) {
  if (!Number.isInteger(slot) || slot < 0 || slot >= selectedComparePokemonKeys.length) return;
  const pokemon = pokemonByKey.get(pokemonKey);
  const current = pokemonByKey.get(selectedComparePokemonKeys[slot]);
  if (!pokemon || !current || pokemon.group !== current.group) return;
  selectedComparePokemonKeys[slot] = pokemonKey;
  renderPokemonComparison();
}

function renderComparePokemonOptions() {
  if (!elements.comparePokemonList || !allPokemon.length) return;
  const query = String(elements.comparePokemonSearch?.value || '').trim().toLowerCase();
  const originalPokemon = Object.values(groupsByDex).map((forms) => forms[0]);
  const matches = originalPokemon.filter((pokemon) => (
    !query
    || String(pokemon.number).toLowerCase().includes(query)
    || String(pokemon.displayName || pokemon.name).toLowerCase().includes(query)
    || pokemon.name.toLowerCase().includes(query)
    || pokemon.types.some((type) => type.toLowerCase().includes(query))
  ));
  const renderToken = comparePokemonRenderToken + 1;
  comparePokemonRenderToken = renderToken;
  elements.comparePokemonCount.textContent = `${matches.length} Pokémon found`;
  elements.comparePokemonList.replaceChildren();
  if (!matches.length) {
    elements.comparePokemonList.innerHTML = '<p class="small team-empty-message">No Pokémon match this search.</p>';
    return;
  }
  const batchSize = 40;
  let index = 0;
  const appendBatch = () => {
    if (renderToken !== comparePokemonRenderToken) return;
    const batch = matches.slice(index, index + batchSize).map((pokemon) => {
      const key = getPokemonKey(pokemon);
      return `<button type="button" class="team-pokemon-option" data-compare-add="${escapeHtml(key)}"><span class="team-option-copy"><span class="team-option-name"><span class="team-option-number">#${escapeHtml(pokemon.number)}</span>${escapeHtml(pokemon.displayName || pokemon.name)}</span><span class="team-option-types">${pokemon.types.filter(Boolean).map(renderMoveTypePill).join('')}</span></span><span class="team-option-action"></span></button>`;
    }).join('');
    elements.comparePokemonList.insertAdjacentHTML('beforeend', batch);
    updateComparePokemonOptions();
    index += batchSize;
    if (index < matches.length) requestAnimationFrame(appendBatch);
  };
  appendBatch();
}

function updateComparePokemonOptions() {
  if (!elements.comparePokemonList) return;
  const selectedPokemon = getComparePokemon().filter(Boolean);
  const full = selectedComparePokemonKeys.every(Boolean);
  elements.comparePokemonList.querySelectorAll('[data-compare-add]').forEach((button) => {
    const pokemon = pokemonByKey.get(button.dataset.compareAdd);
    if (!pokemon) return;
    const isAdded = selectedPokemon.some((selected) => selected.group === pokemon.group);
    button.disabled = full || isAdded;
    button.querySelector('.team-option-action').textContent = isAdded ? 'Selected' : full ? 'Slots full' : '+ Add';
  });
}

function getPokemonCompareLabel(pokemon) {
  return `#${pokemon.number} ${pokemon.displayName || pokemon.name}`;
}

function getPokemonCompareMoves(pokemon, category) {
  return String(getPokemonMovesFromDefaultGameset(pokemon)[category] || '')
    .split('|')
    .map((entry) => {
      const [moveId, ...learnedAsParts] = entry.trim().split('-');
      if (!moveId) return null;
      const move = movesLookup[moveId];
      return {
        id: moveId,
        name: move?.name || `Move #${moveId}`,
        learnedAs: formatMoveLearningMethod(category, learnedAsParts.join('-'))
      };
    })
    .filter(Boolean)
    .sort((left, right) => left.name.localeCompare(right.name));
}

function bindComparisonMetadataPopups(container, pokemon) {
  const bindings = [
    {
      selector: '.catch-rate-meta-item',
      bind(metaItem) {
        const value = Number(metaItem.dataset.metaValue);
        if (!Number.isFinite(value)) return;
        const show = (event) => showCatchRatePopup(value, event.clientX, event.clientY, metaItem);
        bindMetadataPopupEvents(metaItem, show);
      }
    },
    {
      selector: '.level-rate-meta-item',
      bind(metaItem) {
        const value = metaItem.dataset.metaValue;
        if (!value) return;
        const show = (event) => showLevelRatePopup(value, metaItem.dataset.metaExtra, event.clientX, event.clientY, metaItem);
        bindMetadataPopupEvents(metaItem, show);
      }
    },
    {
      selector: '.egg-cycles-meta-item',
      bind(metaItem) {
        const value = metaItem.dataset.metaValue;
        if (!value) return;
        const show = (event) => showEggCyclePopup(value, metaItem.dataset.metaExtra, event.clientX, event.clientY, metaItem);
        bindMetadataPopupEvents(metaItem, show);
      }
    },
    {
      selector: '.egg-group-meta-item',
      bind(metaItem) {
        if (!pokemon.eggGroup1 && !pokemon.eggGroup2) return;
        const show = (event) => showEggGroupPopup(pokemon, event.clientX, event.clientY, metaItem);
        bindMetadataPopupEvents(metaItem, show);
      }
    },
    ...['shape', 'color'].map((key) => ({
      selector: `.${key}-meta-item`,
      bind(metaItem) {
        const value = String(pokemon[key] || '').trim();
        if (!value) return;
        const label = metaItem.querySelector('strong')?.textContent || key;
        const show = (event) => showAttributeCountPopup(label, { key, value }, event.clientX, event.clientY, metaItem, pokemon);
        bindMetadataPopupEvents(metaItem, show);
      }
    }))
  ];

  bindings.forEach(({ selector, bind }) => {
    container.querySelectorAll(selector).forEach((metaItem) => {
      if (metaItem.dataset.comparisonPopupBound === '1') return;
      bind(metaItem);
      metaItem.dataset.comparisonPopupBound = '1';
    });
  });
}

function bindMetadataPopupEvents(metaItem, showPopup) {
  metaItem.addEventListener('mouseenter', showPopup);
  metaItem.addEventListener('mousemove', showPopup);
  metaItem.addEventListener('mouseleave', () => {
    if (movePopupHideTimer) clearTimeout(movePopupHideTimer);
    movePopupHideTimer = setTimeout(hideMovePopup, 180);
  });
}

function renderPokemonComparison() {
  if (!elements.pokemonCompareContent || !elements.pokemonCompareSlots) return;
  if (!allPokemon.length) {
    elements.pokemonCompareContent.innerHTML = '<p class="small">Pokémon data is not available yet.</p>';
    return;
  }
  const selected = getComparePokemon();
  const moveGroups = (movesetGenerationData[9]?.gamesets[0]?.categories || [
    { key: 'levelUp', label: 'Level-Up' },
    { key: 'tm', label: 'TM' },
    { key: 'egg', label: 'Egg' },
    { key: 'evolution', label: 'Evolution' },
    { key: 'reminder', label: 'Reminder' }
  ]).map(({ key, label }) => [key, label]);
  const detailTabs = [
    ['basic', 'Basic'],
    ['stats', 'Stats'],
    ['moveset', 'Moveset']
  ];
  const comparedPokemon = selected
    .map((pokemon, slot) => pokemon ? { pokemon, slot } : null)
    .filter(Boolean);
  elements.pokemonCompareSlots.style.setProperty('--compare-count', String(selected.length));
  elements.pokemonCompareSlots.innerHTML = `
    ${selected.map((pokemon, slot) => {
      if (!pokemon) {
        return `<article class="pokemon-compare-slot pokemon-compare-slot-empty"><span>POKÉMON ${slot + 1}</span><strong>Choose a Pokémon from the list</strong></article>`;
      }
      const forms = pokemon.groupForms || [pokemon];
      const formOptions = forms.length > 1
        ? `<div class="team-form-control"><span class="team-form-label">Form</span><div class="team-form-picker"><button type="button" class="team-form-trigger" data-compare-form-toggle aria-haspopup="listbox" aria-expanded="false" aria-label="Choose form for Pokémon ${slot + 1}"><span>${escapeHtml(pokemon.name)}</span><span class="team-form-chevron" aria-hidden="true"></span></button><div class="team-form-menu" role="listbox" aria-label="Choose a form for ${escapeHtml(pokemon.displayName || pokemon.name)}" hidden>${forms.map((form) => {
          const isSelected = getPokemonKey(form) === selectedComparePokemonKeys[slot];
          return `<button type="button" role="option" aria-selected="${isSelected}" class="team-form-option pokemon-compare-form-option${isSelected ? ' selected' : ''}" data-compare-form-slot="${slot}" data-compare-form-key="${escapeHtml(getPokemonKey(form))}"><span>${escapeHtml(form.name)}</span>${isSelected ? '<span class="team-form-check" aria-hidden="true">✓</span>' : ''}</button>`;
        }).join('')}</div></div></div>`
        : '';
      return `<article class="pokemon-compare-slot"><div><span>POKÉMON ${slot + 1}</span><h3>${escapeHtml(getPokemonCompareLabel(pokemon))}</h3></div><div class="team-option-types">${pokemon.types.filter(Boolean).map(renderMoveTypePill).join('')}</div><div class="pokemon-compare-slot-actions">${formOptions}<button type="button" class="team-slot-remove" data-compare-remove="${slot}" aria-label="Remove ${escapeHtml(pokemon.displayName || pokemon.name)}">Remove</button></div></article>`;
    }).join('')}`;
  if (comparedPokemon.length < 2) {
    elements.pokemonCompareContent.innerHTML = '<p class="small pokemon-compare-prompt">Add at least two Pokémon from the list to compare their base stats, types, abilities, and learnable moves.</p>';
    updateComparePokemonOptions();
    attachTypeHoverHandlers(elements.pokemonCompareSlots);
    return;
  }
  const compared = comparedPokemon.map(({ pokemon }) => pokemon);
  const compareGridStyle = ` style="--compare-count:${compared.length}"`;
  const renderColumnHead = (label) => `<div class="pokemon-compare-column-head"${compareGridStyle}><strong>${label}</strong>${compared.map((pokemon) => `<strong>${escapeHtml(pokemon.displayName || pokemon.name)}</strong>`).join('')}</div>`;
  const renderRow = (label, cells, options = {}) => `<div class="pokemon-compare-row"${compareGridStyle}><div class="pokemon-compare-row-label"${options.hideLabel ? ' aria-hidden="true"' : ''}>${label}</div>${cells.join('')}</div>`;
  const renderValueCell = (value, className = '') => `<div class="pokemon-compare-value${className}">${escapeHtml(String(value ?? '—'))}</div>`;

  const statRows = [
    ['HP', 'HP'],
    ['Attack', 'ATK'],
    ['Defense', 'DEF'],
    ['Sp. Atk', 'SpA'],
    ['Sp. Def', 'SpD'],
    ['Speed', 'SPE']
  ];
  const renderComparedRows = (rows, source) => rows.map(([label, key]) => {
    const values = compared.map((pokemon) => Number(pokemon[source]?.[key]) || 0);
    const highest = Math.max(...values);
    const lowest = Math.min(...values);
    return renderRow(label, values.map((value) => {
      const className = highest !== lowest && value === highest ? ' is-highest' : '';
      return renderValueCell(value, className);
    }));
  }).join('');
  const statsMarkup = renderComparedRows(statRows, 'baseStats');
  const evMarkup = renderComparedRows(statRows, 'evStats');
  const renderComparedValues = (label, getValue) => {
    const values = compared.map((pokemon) => String(getValue(pokemon) ?? '').trim());
    const numericValues = values.map((value) => value ? Number(value) : NaN);
    const comparable = numericValues.every(Number.isFinite);
    const cells = values.map((value, index) => {
      const isHigher = comparable && numericValues[index] === Math.max(...numericValues)
        && numericValues.some((other) => other < numericValues[index]);
      return renderValueCell(value || '—', isHigher ? ' is-higher' : '');
    });
    return renderRow(label, cells);
  };
  const typeMarkup = renderRow('', compared.map((pokemon) => `<div class="pokemon-compare-type-values">${pokemon.types.filter(Boolean).map((type) => renderTypeBadge(type, { compact: true })).join('') || '<span class="small">Unknown</span>'}</div>`), { hideLabel: true });

  const renderAbilities = (pokemon) => {
    const abilities = pokemon.abilities.filter(Boolean).map((ability) => renderAbilityBox(ability));
    if (pokemon.hiddenAbility) {
      abilities.push(renderAbilityBox(pokemon.hiddenAbility, true));
    }
    return `<div class="pokemon-compare-ability-column">${abilities.join('') || '<span class="small">Unknown</span>'}</div>`;
  };
  const comparisonMetadata = [
    ['Shape', 'shape', (pokemon) => pokemon.shape, ''],
    ['Color', 'color', (pokemon) => pokemon.color, ''],
    ['Egg Group', 'egg-group', (pokemon) => [pokemon.eggGroup1, pokemon.eggGroup2].filter(Boolean).join(' / '), ''],
    ['Egg Cycles', 'egg-cycles', (pokemon) => pokemon.eggCycles, (pokemon) => pokemon.eggSteps],
    ['Catch Rate', 'catch-rate', (pokemon) => pokemon.catchRate, ''],
    ['Level Rate', 'level-rate', (pokemon) => pokemon.levelRate, (pokemon) => pokemon.totalXP]
  ];
  const renderComparisonMetaCell = (pokemon, slot, [label, type, getValue, getExtra]) => {
    const value = getValue(pokemon);
    const extra = typeof getExtra === 'function' ? getExtra(pokemon) : getExtra;
    return `<div class="pokemon-compare-meta-cell" data-compare-pokemon-slot="${slot}">${renderMetaItem(label, value, '', type, extra)}</div>`;
  };
  const metadataRows = comparisonMetadata.map((metadata) => renderRow(
    metadata[0],
    comparedPokemon.map(({ pokemon, slot }) => renderComparisonMetaCell(pokemon, slot, metadata))
  )).join('');
  const activeMoveGroup = moveGroups.find(([key]) => key === selectedCompareMoveCategory) || moveGroups[0];
  const moveById = new Map();
  compared.forEach((pokemon, pokemonIndex) => {
    getPokemonCompareMoves(pokemon, activeMoveGroup[0]).forEach((move) => {
      if (!moveById.has(move.id)) {
        moveById.set(move.id, {
          id: move.id,
          name: move.name,
          learnedAs: Array(compared.length).fill('')
        });
      }
      moveById.get(move.id).learnedAs[pokemonIndex] = move.learnedAs;
    });
  });
  const moveRows = [...moveById.values()]
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((move) => renderRow(`<button type="button" class="dex-navigation-link move-navigation-link" data-move-id="${escapeHtml(move.id)}">${escapeHtml(move.name)}</button>`, move.learnedAs.map((method) => renderValueCell(method || '—'))))
    .join('');
  const moveContent = moveDataLoaded
    ? moveRows
      ? `<div class="pokemon-compare-grid">${renderColumnHead('Move')}${moveRows}</div>`
      : '<p class="small">No moves are listed for this category.</p>'
    : moveDataLoadFailed
      ? '<p class="small">Move data could not be loaded. Check the connection and try again.</p>'
      : '<p class="small">Loading move data…</p>';

  const tabButtons = detailTabs.map(([key, label]) =>
    `<button type="button" id="compare-tab-${key}" class="pokemon-detail-tab${selectedCompareDetailTab === key ? ' active' : ''}" role="tab" aria-selected="${selectedCompareDetailTab === key}" aria-controls="compare-panel-${key}" tabindex="${selectedCompareDetailTab === key ? '0' : '-1'}" data-content-tab="${key}">${label}</button>`
  ).join('');
  const tabPanels = `
    <section id="compare-panel-basic" class="pokemon-detail-panel${selectedCompareDetailTab === 'basic' ? ' active' : ''}" role="tabpanel" aria-labelledby="compare-tab-basic" data-content-panel="basic"${selectedCompareDetailTab === 'basic' ? '' : ' hidden'}>
      <section class="stats-card pokemon-compare-types-section">
        <div class="pokemon-compare-grid">${renderColumnHead('Types')}${typeMarkup}</div>
      </section>
      <section class="stats-card pokemon-compare-abilities">
        <div class="pokemon-compare-grid">${renderColumnHead('Abilities')}${renderRow('', compared.map(renderAbilities), { hideLabel: true })}</div>
      </section>
      <section class="stats-card pokemon-compare-metadata">
        <div class="pokemon-compare-grid">${renderColumnHead('Details')}${metadataRows}</div>
      </section>
    </section>
    <section id="compare-panel-stats" class="pokemon-detail-panel${selectedCompareDetailTab === 'stats' ? ' active' : ''}" role="tabpanel" aria-labelledby="compare-tab-stats" data-content-panel="stats"${selectedCompareDetailTab === 'stats' ? '' : ' hidden'}>
      <section class="stats-card pokemon-compare-stats">
        <div class="pokemon-compare-grid">${renderColumnHead('Base Stats')}${statsMarkup}</div>
      </section>
      <section class="stats-card pokemon-compare-ev-stats">
        <div class="pokemon-compare-grid">${renderColumnHead('EV Yield')}${evMarkup}</div>
      </section>
      <section class="stats-card pokemon-compare-bonus-stats">
        <div class="pokemon-compare-grid">${renderColumnHead('Other')}${renderComparedValues('Base Friendship', (pokemon) => pokemon.baseFriendship)}${renderComparedValues('Base XP', (pokemon) => pokemon.xp)}</div>
      </section>
    </section>
    <section id="compare-panel-moveset" class="pokemon-detail-panel${selectedCompareDetailTab === 'moveset' ? ' active' : ''}" role="tabpanel" aria-labelledby="compare-tab-moveset" data-content-panel="moveset"${selectedCompareDetailTab === 'moveset' ? '' : ' hidden'}>
      <section class="stats-card pokemon-compare-move-section">
        <div class="moveset-tabs">${moveGroups.map(([key, label]) => `
          <button type="button" class="moveset-tab${activeMoveGroup[0] === key ? ' active' : ''}" data-compare-move-category="${key}">${label}</button>`).join('')}
        </div>
        ${moveContent}
      </section>
    </section>`;
  elements.pokemonCompareContent.innerHTML = `
    <div class="pokemon-detail-tabs" role="tablist" aria-label="Pokémon comparison details" data-content-tab-group="compare">${tabButtons}</div>
    ${tabPanels}`;
  updateComparePokemonOptions();
  attachTypeHoverHandlers(elements.pokemonCompareSlots);
  attachTypeHoverHandlers(elements.pokemonCompareContent);
  attachPopupClickHandler(elements.pokemonCompareContent);
  elements.pokemonCompareContent.querySelectorAll('.pokemon-compare-meta-cell').forEach((cell) => {
    const pokemon = selected[Number(cell.dataset.comparePokemonSlot)];
    if (!pokemon) return;
    bindComparisonMetadataPopups(cell, pokemon);
  });
  bindContentTabs(elements.pokemonCompareContent, 'compare', (key) => {
    selectedCompareDetailTab = key;
  });
}

function renderTeamAnalysis(team) {
  const representedTypes = [...new Set(team.flatMap((pokemon) => pokemon.types.filter(Boolean)))];
  const matchups = getTeamDefensiveMatchups(team);
  const sharedWeaknesses = matchups.filter(({ weak }) => weak.length > 1);
  const noDefensiveAnswer = matchups.filter(({ resist, immune }) => !resist.length && !immune.length);
  const teamMoves = getActiveTeamMoves();
  const selectedMoves = team.flatMap((pokemon) => {
    const availableIds = new Set(getPokemonTeamMoves(pokemon).map(({ move }) => move.id));
    const selectedIds = Array.isArray(teamMoves[getPokemonKey(pokemon)]) ? teamMoves[getPokemonKey(pokemon)] : [];
    return [...new Set(selectedIds.filter(Boolean))]
      .filter((id) => availableIds.has(id))
      .map((id) => movesLookup[id])
      .filter(Boolean)
      .map((move) => ({ ...move, pokemonName: pokemon.displayName || pokemon.name }));
  });
  const offensiveCoverage = TYPE_ORDER.map((defendingType) => ({
    defendingType,
    moves: selectedMoves.filter((move) => getTypeMultiplier(move.type, defendingType) > 1)
  }));
  elements.teamAnalysis.innerHTML = `
    <div class="section-tabs" role="tablist" aria-label="Team analysis" data-content-tab-group="team">
      <button type="button" class="section-tab${selectedTeamAnalysisTab === 'defensive' ? ' active' : ''}" role="tab" aria-selected="${selectedTeamAnalysisTab === 'defensive'}" aria-controls="team-analysis-panel-defensive" tabindex="${selectedTeamAnalysisTab === 'defensive' ? '0' : '-1'}" data-content-tab="defensive">Defensive</button>
      <button type="button" class="section-tab${selectedTeamAnalysisTab === 'offensive' ? ' active' : ''}" role="tab" aria-selected="${selectedTeamAnalysisTab === 'offensive'}" aria-controls="team-analysis-panel-offensive" tabindex="${selectedTeamAnalysisTab === 'offensive' ? '0' : '-1'}" data-content-tab="offensive">Offensive</button>
    </div>
    <section id="team-analysis-panel-defensive" class="content-tab-panel${selectedTeamAnalysisTab === 'defensive' ? ' active' : ''}" role="tabpanel" data-content-panel="defensive"${selectedTeamAnalysisTab === 'defensive' ? '' : ' hidden'}>
      ${team.length ? `
        <section class="team-coverage">
          <h3>Types represented</h3>
          <div class="team-coverage-types">${representedTypes.map(renderMoveTypePill).join('') || '—'}</div>
        </section>
        <section class="team-matchups">
          <h3>Defensive matchups</h3>
          <p class="team-analysis-summary">${sharedWeaknesses.length
            ? `${sharedWeaknesses.length} shared weakness${sharedWeaknesses.length === 1 ? '' : 'es'} affect multiple team members.`
            : 'No attacking type hits multiple team members super effectively.'}</p>
          ${noDefensiveAnswer.length
            ? `<p class="team-analysis-note">No team member resists or is immune to: ${noDefensiveAnswer.map(({ attackType }) => escapeHtml(attackType)).join(', ')}.</p>`
            : '<p class="team-analysis-note">The team has at least one resistance or immunity to every attacking type.</p>'}
          <div class="team-matchup-list">${matchups.map(({ attackType, weak, resist, immune }) => `
            <div class="team-matchup-row${weak.length > 1 ? ' has-shared-weakness' : ''}">
              ${renderMoveTypePill(attackType)}
              <span class="team-matchup-detail">
                <span class="team-matchup-stats">${weak.length ? `<span class="team-matchup-weak">Weak ${weak.length}</span>` : ''}${resist.length ? `<span class="team-matchup-resist">Resist ${resist.length}</span>` : ''}${immune.length ? `<span class="team-matchup-immune">Immune ${immune.length}</span>` : ''}</span>
                <span class="team-matchup-members">${weak.length ? `<span class="team-matchup-weak">Weak to: ${weak.map(escapeHtml).join(', ')}</span>` : ''}${resist.length ? `<span class="team-matchup-resist">Resisted by: ${resist.map(escapeHtml).join(', ')}</span>` : ''}${immune.length ? `<span class="team-matchup-immune">Immune: ${immune.map(escapeHtml).join(', ')}</span>` : ''}</span>
              </span>
            </div>`).join('')}</div>
        </section>` : '<p class="small team-empty-message">Add Pokémon to see defensive matchups.</p>'}
    </section>
    <section id="team-analysis-panel-offensive" class="content-tab-panel${selectedTeamAnalysisTab === 'offensive' ? ' active' : ''}" role="tabpanel" data-content-panel="offensive"${selectedTeamAnalysisTab === 'offensive' ? '' : ' hidden'}>
      ${team.length ? `
        <section class="team-offense">
          <h3>Offensive coverage</h3>
          <p class="team-analysis-note">${selectedMoves.length
            ? 'Shows selected moves that deal super-effective damage against each single type.'
            : 'Choose moves for your team to see super-effective coverage.'}</p>
          <div class="team-offense-grid">${offensiveCoverage.map(({ defendingType, moves }) => `
            <div class="team-offense-row${moves.length ? ' is-covered' : ''}">
              ${renderMoveTypePill(defendingType)}
              <span>${moves.length ? moves.map((move) => `${escapeHtml(move.name)} <small>(${escapeHtml(move.pokemonName)})</small>`).join(', ') : 'No super-effective move'}</span>
            </div>`).join('')}</div>
        </section>` : '<p class="small team-empty-message">Add Pokémon and plan moves to see offensive coverage.</p>'}
    </section>`;
  bindContentTabs(elements.teamAnalysis, 'team', (key) => {
    selectedTeamAnalysisTab = key;
  });
}

function renderTeamBuilder(options = {}) {
  if (!elements.teamRoster || !pokemonByKey.size) return;
  const team = getActiveTeamKeys()
    .map((key) => pokemonByKey.get(key))
    .filter(Boolean);
  elements.teamCount.textContent = `${team.length} / ${TEAM_SIZE} Pokémon${currentUsername ? ` · ${currentUsername}` : ' · Guest team'}`;
  renderTeamRoster(team);
  renderTeamAnalysis(team);
  if (options.renderOptions !== false) renderTeamPokemonOptions();
  else updateTeamPokemonOptions();
}

function renderTeamRoster(team) {
  elements.teamRoster.innerHTML = Array.from({ length: TEAM_SIZE }, (_, index) => {
    const pokemon = team[index];
    if (!pokemon) {
      return `<div class="team-slot team-slot-empty"><span class="team-slot-number">TEAM SLOT ${index + 1}</span><span class="team-slot-prompt">Choose a Pokémon from the list</span></div>`;
    }
    const key = getPokemonKey(pokemon);
    const forms = pokemon.groupForms || [pokemon];
    const formSwitcher = forms.length > 1
      ? `<div class="team-form-control"><span class="team-form-label">Form</span><div class="team-form-picker"><button type="button" class="team-form-trigger" data-team-form-toggle aria-haspopup="listbox" aria-expanded="false"><span>${escapeHtml(pokemon.name)}</span><span class="team-form-chevron" aria-hidden="true"></span></button><div class="team-form-menu" role="listbox" aria-label="Choose a form for ${escapeHtml(pokemon.displayName || pokemon.name)}" hidden>${forms.map((form) => `<button type="button" role="option" aria-selected="${getPokemonKey(form) === key}" class="team-form-option${getPokemonKey(form) === key ? ' selected' : ''}" data-team-form-index="${index}" data-team-form-key="${escapeHtml(getPokemonKey(form))}"><span>${escapeHtml(form.name)}</span>${getPokemonKey(form) === key ? '<span class="team-form-check" aria-hidden="true">✓</span>' : ''}</button>`).join('')}</div></div></div>`
      : '';
    return `<article class="team-slot"><div class="team-slot-heading"><span class="team-slot-number">TEAM SLOT ${index + 1} <span>#${escapeHtml(pokemon.number)}</span></span><div><button type="button" class="team-slot-link" data-team-view="${escapeHtml(key)}">View details</button><button type="button" class="team-slot-remove" data-team-remove="${index}" aria-label="Remove ${escapeHtml(pokemon.displayName || pokemon.name)}">Remove</button></div></div><h3>${escapeHtml(pokemon.displayName || pokemon.name)}</h3><div class="team-option-types">${pokemon.types.filter(Boolean).map(renderMoveTypePill).join('')}</div>${formSwitcher}${renderTeamMovePlanner(pokemon)}</article>`;
  }).join('');
}

function renderTeamMovePlanner(pokemon) {
  if (moveDataLoadFailed) {
    return '<div class="team-move-planner"><h4>Move plan</h4><p class="team-analysis-note">Move data could not be loaded. Try opening the MoveDex again.</p></div>';
  }
  if (!moveDataLoaded) {
    return '<div class="team-move-planner"><h4>Move plan</h4><p class="team-analysis-note">Loading move data…</p></div>';
  }
  const moves = getPokemonTeamMoves(pokemon);
  const teamMoves = getActiveTeamMoves();
  const selectedMoveIds = Array.isArray(teamMoves[getPokemonKey(pokemon)])
    ? teamMoves[getPokemonKey(pokemon)].slice(0, 4)
    : [];
  const availableMoveIds = new Set(moves.map(({ move }) => move.id));
  const validSelectedIds = selectedMoveIds.filter((id) => availableMoveIds.has(id));
  const categories = [...new Set(moves.map(({ method }) => method))];
  const count = validSelectedIds.length;
  const slots = Array.from({ length: 4 }, (_, slot) => {
    const selectedId = selectedMoveIds[slot] || '';
    const selectedMove = movesLookup[selectedId];
    const options = `<button type="button" role="option" aria-selected="${selectedId ? 'false' : 'true'}" class="team-move-option${selectedId ? '' : ' selected'}" data-team-move-slot="${slot}" data-team-pokemon-key="${escapeHtml(getPokemonKey(pokemon))}" data-team-move-id=""><span class="team-move-option-name">No move selected</span>${selectedId ? '' : '<span class="team-form-check" aria-hidden="true">✓</span>'}</button>${categories.map((category) => {
      const categoryMoves = moves.filter(({ method }) => method === category);
      return `<div class="team-move-group" role="group" aria-label="${escapeHtml(category)}"><span class="team-move-group-label">${escapeHtml(category)}</span>${categoryMoves.map(({ move }) => `<button type="button" role="option" aria-selected="${move.id === selectedId}" class="team-move-option${move.id === selectedId ? ' selected' : ''}" data-team-move-slot="${slot}" data-team-pokemon-key="${escapeHtml(getPokemonKey(pokemon))}" data-team-move-id="${escapeHtml(move.id)}"><span class="team-move-option-name">${escapeHtml(move.name)}</span>${renderMoveTypePill(move.type)}<span class="team-move-category">${escapeHtml(move.category)}</span>${move.id === selectedId ? '<span class="team-form-check" aria-hidden="true">✓</span>' : ''}</button>`).join('')}</div>`;
    }).join('')}`;
    const triggerContent = selectedMove
      ? `${escapeHtml(selectedMove.name)}${renderMoveTypePill(selectedMove.type)}<span class="team-move-category">${escapeHtml(selectedMove.category)}</span>`
      : '<span class="team-move-placeholder">Choose a move</span>';
    return `<div class="team-move-slot"><span class="team-move-slot-label">Move ${slot + 1}</span><div class="team-move-picker" data-team-move-slot="${slot}" data-team-pokemon-key="${escapeHtml(getPokemonKey(pokemon))}"><button type="button" class="team-move-trigger" data-team-move-toggle aria-haspopup="listbox" aria-expanded="false" aria-label="Move ${slot + 1} for ${escapeHtml(pokemon.displayName || pokemon.name)}"><span class="team-move-trigger-copy">${triggerContent}</span><span class="team-form-chevron" aria-hidden="true"></span></button><div class="team-move-menu" role="listbox" aria-label="Choose move ${slot + 1} for ${escapeHtml(pokemon.displayName || pokemon.name)}" hidden>${options}</div></div></div>`;
  }).join('');
  return `<section class="team-move-planner" data-team-move-planner="${escapeHtml(getPokemonKey(pokemon))}"><div class="team-move-planner-heading"><h4>Move plan</h4><span>${count} / 4 selected</span></div>${moves.length ? `<div class="team-move-slots">${slots}</div>` : '<p class="team-analysis-note">No move data is available for this Pokémon form.</p>'}</section>`;
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
      <div class="move-detail-heading move-identity-header">
        <h2>${escapeHtml(move.name)}</h2>
        <div class="badges">
          ${renderMoveTypePill(move.type)}
          ${renderMoveCategoryBadge(move.category)}
        </div>
      </div>
      <div class="section-tabs" role="tablist" aria-label="Move details" data-content-tab-group="move">
        ${[['basic', 'Basic'], ['entries', 'Dex Entries'], ['learners', 'Pokémon That Learn It']].map(([key, label]) => `
          <button type="button" class="section-tab${selectedMoveDetailTab === key ? ' active' : ''}" role="tab" aria-selected="${selectedMoveDetailTab === key}" aria-controls="move-panel-${key}" tabindex="${selectedMoveDetailTab === key ? '0' : '-1'}" data-content-tab="${key}">${label}</button>`).join('')}
      </div>
      <section id="move-panel-basic" class="content-tab-panel${selectedMoveDetailTab === 'basic' ? ' active' : ''}" role="tabpanel" data-content-panel="basic"${selectedMoveDetailTab === 'basic' ? '' : ' hidden'}>
      ${renderPersonalTools(move, 'move')}
      <div class="move-overview-grid">
        <section class="move-stat-grid" aria-label="Move stats">${statHtml}</section>
        ${renderMoveTarget(move.target)}
      </div>
      ${effects.length ? `<section class="move-effects-section"><h2>Battle Effects</h2>${effects.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join('')}</section>` : ''}
      </section>
      <section id="move-panel-entries" class="content-tab-panel${selectedMoveDetailTab === 'entries' ? ' active' : ''}" role="tabpanel" data-content-panel="entries"${selectedMoveDetailTab === 'entries' ? '' : ' hidden'}>
      ${renderMovePokedexSection(move)}
      </section>
      <section id="move-panel-learners" class="content-tab-panel${selectedMoveDetailTab === 'learners' ? ' active' : ''}" role="tabpanel" data-content-panel="learners"${selectedMoveDetailTab === 'learners' ? '' : ' hidden'}>
      ${renderMoveLearnersSection(move)}
      </section>
    </article>`;

  bindPersonalToolHandlers(move, elements.moveDetails, 'move');
  bindContentTabs(elements.moveDetails, 'move', (key) => {
    selectedMoveDetailTab = key;
  });
  elements.moveDetails.querySelectorAll('.move-pokedex-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMoveGen = button.dataset.gameset || Number(button.dataset.generation);
      renderMoveDetails(move);
    });
  });

  elements.moveDetails.querySelectorAll('.move-learners-generation-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMoveLearnerGeneration = Number(button.dataset.generation);
      loadMovesetGeneration(selectedMoveLearnerGeneration);
      renderMoveDetails(move);
    });
  });

  elements.moveDetails.querySelectorAll('.move-learners-gameset-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMoveLearnerGamesetByGeneration[selectedMoveLearnerGeneration] = button.dataset.gameset;
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
      <div class="move-detail-heading move-identity-header">
        <h2>${escapeHtml(ability.name)}</h2>
      </div>
      <div class="section-tabs" role="tablist" aria-label="Ability details" data-content-tab-group="ability">
        ${[['basic', 'Basic'], ['entries', 'Dex Entries'], ['pokemon', 'Pokémon That Have It']].map(([key, label]) => `
          <button type="button" class="section-tab${selectedAbilityDetailTab === key ? ' active' : ''}" role="tab" aria-selected="${selectedAbilityDetailTab === key}" aria-controls="ability-panel-${key}" tabindex="${selectedAbilityDetailTab === key ? '0' : '-1'}" data-content-tab="${key}">${label}</button>`).join('')}
      </div>
      <section id="ability-panel-basic" class="content-tab-panel${selectedAbilityDetailTab === 'basic' ? ' active' : ''}" role="tabpanel" data-content-panel="basic"${selectedAbilityDetailTab === 'basic' ? '' : ' hidden'}>
      ${renderPersonalTools(ability, 'ability')}
      </section>
      <section id="ability-panel-entries" class="content-tab-panel${selectedAbilityDetailTab === 'entries' ? ' active' : ''}" role="tabpanel" data-content-panel="entries"${selectedAbilityDetailTab === 'entries' ? '' : ' hidden'}>
      ${renderAbilityEntriesSection(ability)}
      </section>
      <section id="ability-panel-pokemon" class="content-tab-panel${selectedAbilityDetailTab === 'pokemon' ? ' active' : ''}" role="tabpanel" data-content-panel="pokemon"${selectedAbilityDetailTab === 'pokemon' ? '' : ' hidden'}>
      ${renderAbilityPokemonSection(ability)}
      </section>
    </article>`;

  bindPersonalToolHandlers(ability, elements.abilityDetails, 'ability');
  bindContentTabs(elements.abilityDetails, 'ability', (key) => {
    selectedAbilityDetailTab = key;
  });
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
  if (category === 'tm') return 'TM';
  if (category === 'hm') return 'HM';
  if (category === 'tr') return 'TR';
  if (category === 'tutor') return 'Move Tutor';
  if (category === 'egg') return /EM/i.test(method) ? 'Egg Move' : method || 'Egg Move';
  if (category === 'evolution') return /EV/i.test(method) ? 'Evolution' : method || 'Evolution';
  if (category === 'reminder') return /R/i.test(method) ? 'Reminder' : method || 'Reminder';
  return method || '—';
}

function renderMoveLearnersSection(move) {
  let groups = [
    { key: 'levelUp', label: 'Level-Up' },
    { key: 'tm', label: 'TM' },
    { key: 'hm', label: 'HM' },
    { key: 'tr', label: 'TR' },
    { key: 'egg', label: 'Egg' },
    { key: 'evolution', label: 'Evolution' },
    { key: 'reminder', label: 'Reminder' },
    { key: 'tutor', label: 'Move Tutor' }
  ];
  const generationTabs = Array.from({ length: 9 }, (_, index) => index + 1)
    .map((generation) => `<button type="button" class="moveset-tab moveset-generation-tab move-learners-generation-tab${selectedMoveLearnerGeneration === generation ? ' active' : ''}" data-generation="${generation}" aria-pressed="${selectedMoveLearnerGeneration === generation}">Gen ${generation}</button>`)
    .join('');
  const generationData = movesetGenerationData[selectedMoveLearnerGeneration];
  let gameSet = null;
  let gameSetTabs = '';
  let learnerNotice = '';
  let learnersByCategory = {};

  if (!generationData || generationData.status === 'loading') {
    learnerNotice = `<p class="moveset-status">Loading move data for Generation ${selectedMoveLearnerGeneration}...</p>`;
  } else if (generationData.status === 'error') {
    learnerNotice = `<p class="moveset-status">Move data for Generation ${selectedMoveLearnerGeneration} could not be loaded. Select this generation to try again.</p>`;
  } else if (!generationData.gamesets.length) {
    learnerNotice = `<p class="moveset-status">No move data is available for Generation ${selectedMoveLearnerGeneration}.</p>`;
  } else {
    const selectedGamesetKey = selectedMoveLearnerGamesetByGeneration[selectedMoveLearnerGeneration];
    gameSet = generationData.gamesets.find((item) => item.key === selectedGamesetKey)
      || generationData.gamesets[0];
    selectedMoveLearnerGamesetByGeneration[selectedMoveLearnerGeneration] = gameSet.key;
    groups = gameSet.categories;
    if (generationData.gamesets.length > 1) {
      gameSetTabs = `<div class="moveset-gameset-tabs" role="group" aria-label="Generation ${selectedMoveLearnerGeneration} games">${generationData.gamesets.map((item) => `<button type="button" class="moveset-tab move-learners-gameset-tab${gameSet.key === item.key ? ' active' : ''}" data-gameset="${escapeHtml(item.key)}" aria-pressed="${gameSet.key === item.key}">${escapeHtml(item.tabLabel)}</button>`).join('')}</div>`;
    } else {
      gameSetTabs = `<p class="moveset-gameset-label">${escapeHtml(gameSet.name)}</p>`;
    }

    learnersByCategory = getMoveLearnersLookup(gameSet)[move.id] || {};
  }

  const activeCategory = groups.find((group) => group.key === selectedMoveLearnerCategory) || groups[0];
  if (activeCategory) selectedMoveLearnerCategory = activeCategory.key;
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
  const tabs = gameSet ? groups.map((group) => {
    const count = (learnersByCategory[group.key] || []).length;
    return `<button type="button" class="moveset-tab move-learners-tab${activeCategory.key === group.key ? ' active' : ''}${count ? '' : ' disabled'}" data-category="${group.key}">${group.label}</button>`;
  }).join('') : '';
  const learnerTable = gameSet
    ? `<div class="moveset-tabs">${tabs}</div>
      <div class="moveset-table-wrap">
        <table class="moveset-table move-learners-table">
          <thead><tr><th>Dex #</th><th>Pokémon</th><th>Type</th><th>Learned Via</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`
    : '';

  return `
    <section class="moveset-card stats-card move-learners-card">
      <div class="section-header"><h2>Pokémon That Learn This Move</h2></div>
      <div class="moveset-generation-tabs" role="group" aria-label="Learner generation">${generationTabs}</div>
      ${gameSetTabs}
      ${learnerNotice}
      ${learnerTable}
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

  const effectivenessIndices = [];
  const typeNames = [];

  for (let i = typeStart; i < Math.min(headerRow.length, typeStart + TYPE_ORDER.length); i += 1) {
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
      weightLb
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
  allButton.textContent = 'All';
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

  const filterModeTabs = document.querySelectorAll('#pokedexView .filter-mode-tab');
  filterModeTabs.forEach((button) => {
    button.addEventListener('click', () => {
      const mode = button.dataset.filterMode;
      filterModeTabs.forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
      });
      document.querySelectorAll('#pokedexView .filter-mode-panel').forEach((panel) => {
        panel.hidden = panel.id !== `filterModePanel-${mode}`;
      });
    });
  });

  const sortOptionButtons = document.querySelectorAll('#pokedexView .sort-option');
  const sortDirectionButtons = document.querySelectorAll('#pokedexView .sort-direction-button');
  sortOptionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedPokemonSortKey = button.dataset.sortKey;
      if (selectedPokemonSortDirection === 'none') selectedPokemonSortDirection = 'asc';
      updatePokemonSortControls();
      applyFilter({ renderListImmediately: true });
    });
  });
  sortDirectionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedPokemonSortDirection = button.dataset.sortDirection;
      if (selectedPokemonSortDirection === 'none') {
        selectedPokemonSortKey = '';
      }
      updatePokemonSortControls();
      applyFilter({ renderListImmediately: true });
    });
  });
  updatePokemonSortControls();

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

function updatePokemonSortControls() {
  document.querySelectorAll('#pokedexView .sort-option').forEach((button) => {
    const isActive = button.dataset.sortKey === selectedPokemonSortKey;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  document.querySelectorAll('#pokedexView .sort-direction-button').forEach((button) => {
    const isActive = button.dataset.sortDirection === selectedPokemonSortDirection;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
    button.disabled = !selectedPokemonSortKey && button.dataset.sortDirection !== 'none';
  });
}

function handleSearch() {
  applyFilter();
}

function applyFilter(options = {}) {
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

  if (selectedPokemonSortKey && selectedPokemonSortDirection !== 'none') {
    const direction = selectedPokemonSortDirection === 'asc' ? 1 : -1;
    filteredPokemon = filteredPokemon
      .map((pokemon, index) => ({ pokemon, index, value: getPokemonSortValue(pokemon, selectedPokemonSortKey) }))
      .sort((left, right) => {
        if (left.value === null && right.value !== null) return 1;
        if (right.value === null && left.value !== null) return -1;
        if (left.value === null && right.value === null) return left.index - right.index;
        const comparison = typeof left.value === 'string'
          ? left.value.localeCompare(right.value, undefined, { numeric: true, sensitivity: 'base' })
          : left.value - right.value;
        return comparison === 0 ? left.index - right.index : comparison * direction;
      })
      .map(({ pokemon }) => pokemon);
  }

  renderList(filteredPokemon, options);
}

function getPokemonSortValue(pokemon, sortKey) {
  let value;
  if (sortKey === 'dex') value = pokemon.number;
  else if (sortKey === 'height') value = pokemon.heightM;
  else if (sortKey === 'weight') value = pokemon.weightKg;
  else if (sortKey === 'shape') value = pokemon.shape;
  else if (sortKey === 'color') value = pokemon.color;
  else if (sortKey === 'friendship') value = pokemon.baseFriendship;
  else if (sortKey === 'xp') value = pokemon.xp;
  else if (sortKey === 'base:TOTAL') value = pokemon.baseStats?.total;
  else if (sortKey.startsWith('base:')) value = pokemon.baseStats?.[sortKey.slice(5)];
  else if (sortKey.startsWith('ev:')) value = pokemon.evStats?.[sortKey.slice(3)];

  const text = String(value ?? '').trim();
  if (!text) return null;
  if (sortKey === 'shape' || sortKey === 'color') return text;
  const numericValue = Number(text.replace(/,/g, '').replace(/[^0-9.-]/g, ''));
  return Number.isFinite(numericValue) ? numericValue : null;
}

function renderList(pokemonList, options = {}) {
  elements.listCount.textContent = `${pokemonList.length} available`;
  const profile = getCurrentProfile();
  const renderToken = pokemonListRenderToken + 1;
  pokemonListRenderToken = renderToken;
  pendingPokemonScroll = false;
  const scrollTop = elements.pokemonList.scrollTop;
  elements.pokemonList.replaceChildren();
  const renderCard = (pokemon) => {
    const isFavorite = Boolean(profile?.favorites?.includes(getPokemonKey(pokemon)));
    const active = selectedPokemon?.group === pokemon.group ? ' active' : '';
    const pokemonIndex = pokemonIndexLookup.get(pokemon);
    return `<button type="button" class="pokemon-card${active}" data-pokemon-index="${pokemonIndex}"><h3>${pokemon.displayName || pokemon.name}${isFavorite ? ' <span class="favorite-star" aria-label="Favorite">★</span>' : ''}</h3><div class="pokemon-card-meta"><p>#${pokemon.number}</p><div class="pokemon-card-types">${pokemon.types.filter(Boolean).map(renderMoveTypePill).join('')}</div></div></button>`;
  };
  if (options.renderListImmediately) {
    elements.pokemonList.insertAdjacentHTML('beforeend', pokemonList.map(renderCard).join(''));
    elements.pokemonList.scrollTop = scrollTop;
    return;
  }
  const batchSize = 40;
  let index = 0;

  const appendBatch = () => {
    if (renderToken !== pokemonListRenderToken) return;
    const batch = pokemonList.slice(index, index + batchSize).map(renderCard).join('');
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

function createEvolutionParentResolver() {
  const byName = new Map();
  const byDisplayName = new Map();
  allPokemon.forEach((pokemon) => {
    const name = normalizePokemonName(pokemon.name);
    const displayName = normalizePokemonName(pokemon.displayName);
    if (name) byName.set(name, [...(byName.get(name) || []), pokemon]);
    if (displayName) byDisplayName.set(displayName, [...(byDisplayName.get(displayName) || []), pokemon]);
  });
  const prioritizePrimary = (lookup) => {
    lookup.forEach((pokemon) => pokemon.sort((left, right) => Number(right.isPrimary) - Number(left.isPrimary)));
  };
  prioritizePrimary(byName);
  prioritizePrimary(byDisplayName);
  return (pokemon) => {
    const parentName = normalizePokemonName(pokemon.evolvesFrom);
    if (!parentName) return null;
    const exactMatches = byName.get(parentName) || [];
    const matches = exactMatches.length ? exactMatches : byDisplayName.get(parentName) || [];
    return matches.find((candidate) => candidate !== pokemon) || null;
  };
}

function findEvolutionParent(pokemon) {
  return createEvolutionParentResolver()(pokemon);
}

function getEvolutionEdges(pokemon) {
  if (!allPokemon.some((candidate) => candidate.evolvesFrom)) return [];
  const resolveParent = createEvolutionParentResolver();
  let root = pokemon;
  const ancestors = new Set([pokemon]);
  while (true) {
    const parent = resolveParent(root);
    if (!parent || ancestors.has(parent)) break;
    ancestors.add(parent);
    root = parent;
  }

  const edges = [];
  const visited = new Set([root]);
  const seenEdges = new Set();
  const queue = [root];
  while (queue.length && edges.length < 128) {
    const parent = queue.shift();
    const children = allPokemon.filter((candidate) => resolveParent(candidate) === parent);
    children.forEach((child) => {
      const edgeKey = `${getPokemonKey(parent)}>${getPokemonKey(child)}`;
      if (seenEdges.has(edgeKey)) return;
      seenEdges.add(edgeKey);
      edges.push({
        parent,
        child,
        reversible: /<\s*-\s*>|↔/.test(String(child.evolutionType || ''))
      });
      if (!visited.has(child)) {
        visited.add(child);
        queue.push(child);
      }
    });
  }
  return edges;
}

function renderEvolutionNode(pokemon, childrenByParent, rendered = new Set()) {
  const key = getPokemonKey(pokemon);
  if (rendered.has(key)) return '';
  rendered.add(key);
  const children = (childrenByParent.get(pokemon) || []).filter(({ child }) => (
    !rendered.has(getPokemonKey(child))
  ));
  return `
    <div class="evolution-tree-node">
      <button type="button" class="evolution-pokemon${pokemon === selectedPokemon ? ' current' : ''}" data-evolution-pokemon-key="${escapeHtml(key)}">${escapeHtml(pokemon.name)}</button>
      ${children.length ? `<div class="evolution-children">${children.map(({ child, reversible }) => `
        <div class="evolution-branch">
          <span class="evolution-arrow${reversible ? ' reversible' : ''}" aria-label="${reversible ? 'Reversible form' : 'Evolves into'}">${reversible ? '↔' : '→'}</span>
          ${renderEvolutionNode(child, childrenByParent, rendered)}
        </div>`).join('')}</div>` : ''}
    </div>`;
}

function renderEvolutionSection(pokemon) {
  const edges = getEvolutionEdges(pokemon);
  if (!edges.length) return '';
  const resolveParent = createEvolutionParentResolver();
  let root = pokemon;
  const ancestors = new Set([pokemon]);
  while (true) {
    const parent = resolveParent(root);
    if (!parent || ancestors.has(parent)) break;
    ancestors.add(parent);
    root = parent;
  }
  const childrenByParent = new Map();
  edges.forEach((edge) => {
    if (!childrenByParent.has(edge.parent)) childrenByParent.set(edge.parent, []);
    childrenByParent.get(edge.parent).push(edge);
  });
  return `
    <section class="evolution-card stats-card">
      <div class="section-header"><h2>Evolution</h2></div>
      <div class="evolution-chain">
        <div class="evolution-tree">${renderEvolutionNode(root, childrenByParent)}</div>
      </div>
    </section>`;
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
      <div class="pokemon-identity-header">
        <div class="title-block">
          <div class="detail-title-copy">
            <div class="detail-title-line">
              <div class="dex-label" style="text-align: left;">#${pokemon.number}</div>
              ${formSwitcher}
            </div>
            <h2 style="text-align: left;">${pokemon.name}</h2>
            <p class="text-muted" style="text-align: left;">${pokemon.classification}</p>
          </div>
          <div class="badges">${typesHtml}</div>
        </div>
      </div>
      <div class="pokemon-detail-tabs" role="tablist" aria-label="Pokémon details">
        ${[
          ['basic', 'Basic'],
          ['stats', 'Stats'],
          ['availability', 'Availability'],
          ['entries', 'Dex Entries'],
          ['moveset', 'Moveset']
        ].map(([key, label]) => `<button type="button" id="pokemon-tab-${key}" class="pokemon-detail-tab${selectedPokemonDetailTab === key ? ' active' : ''}" role="tab" aria-selected="${selectedPokemonDetailTab === key}" aria-controls="pokemon-panel-${key}" tabindex="${selectedPokemonDetailTab === key ? '0' : '-1'}" data-pokemon-detail-tab="${key}">${label}</button>`).join('')}
      </div>
      <section id="pokemon-panel-basic" class="pokemon-detail-panel${selectedPokemonDetailTab === 'basic' ? ' active' : ''}" role="tabpanel" aria-labelledby="pokemon-tab-basic" data-pokemon-detail-panel="basic"${selectedPokemonDetailTab === 'basic' ? '' : ' hidden'}>
      <div class="detail-header">
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

      ${renderEvolutionSection(pokemon)}
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
      </section>

      <section id="pokemon-panel-stats" class="pokemon-detail-panel${selectedPokemonDetailTab === 'stats' ? ' active' : ''}" role="tabpanel" aria-labelledby="pokemon-tab-stats" data-pokemon-detail-panel="stats"${selectedPokemonDetailTab === 'stats' ? '' : ' hidden'}>
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
      </section>

      <section id="pokemon-panel-availability" class="pokemon-detail-panel${selectedPokemonDetailTab === 'availability' ? ' active' : ''}" role="tabpanel" aria-labelledby="pokemon-tab-availability" data-pokemon-detail-panel="availability"${selectedPokemonDetailTab === 'availability' ? '' : ' hidden'}>
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
      </section>

      <section id="pokemon-panel-entries" class="pokemon-detail-panel${selectedPokemonDetailTab === 'entries' ? ' active' : ''}" role="tabpanel" aria-labelledby="pokemon-tab-entries" data-pokemon-detail-panel="entries"${selectedPokemonDetailTab === 'entries' ? '' : ' hidden'}>
      ${renderPokedexSection(pokemon)}
      </section>

      <section id="pokemon-panel-moveset" class="pokemon-detail-panel${selectedPokemonDetailTab === 'moveset' ? ' active' : ''}" role="tabpanel" aria-labelledby="pokemon-tab-moveset" data-pokemon-detail-panel="moveset"${selectedPokemonDetailTab === 'moveset' ? '' : ' hidden'}>
      ${renderMovesetSection(pokemon)}
      </section>
    </div>
  `;

  elements.details.querySelector('.mobile-back-button')?.addEventListener('click', () => {
    document.querySelector('.list-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    elements.searchInput?.focus({ preventScroll: true });
  });

  bindPersonalToolHandlers(pokemon, elements.details);
  bindPokemonDetailTabs(elements.details);

  elements.details.querySelectorAll('[data-evolution-pokemon-key]').forEach((button) => {
    button.addEventListener('click', () => {
      const relatedPokemon = pokemonByKey.get(button.dataset.evolutionPokemonKey);
      if (relatedPokemon) selectPokemon(relatedPokemon);
    });
  });

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

function bindContentTabs(container, group, onSelect) {
  const tabList = container.querySelector(`[data-content-tab-group="${group}"]`);
  if (!tabList) return;
  const tabs = [...tabList.querySelectorAll('[data-content-tab]')];
  const panels = [...container.querySelectorAll('[data-content-panel]')];
  const activateTab = (tab) => {
    const selectedKey = tab.dataset.contentTab;
    if (!selectedKey) return;
    onSelect(selectedKey);
    tabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle('active', isSelected);
      item.setAttribute('aria-selected', String(isSelected));
      item.tabIndex = isSelected ? 0 : -1;
    });
    panels.forEach((panel) => {
      const isSelected = panel.dataset.contentPanel === selectedKey;
      panel.hidden = !isSelected;
      panel.classList.toggle('active', isSelected);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const index = tabs.indexOf(tab);
      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? tabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
      activateTab(tabs[nextIndex]);
      tabs[nextIndex].focus();
    });
  });
}

function bindPokemonDetailTabs(container) {
  const tabs = [...container.querySelectorAll('[data-pokemon-detail-tab]')];
  const activateTab = (tab) => {
    const selectedKey = tab.dataset.pokemonDetailTab;
    if (!selectedKey) return;
    selectedPokemonDetailTab = selectedKey;
    tabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle('active', isSelected);
      item.setAttribute('aria-selected', String(isSelected));
      item.tabIndex = isSelected ? 0 : -1;
    });
    container.querySelectorAll('[data-pokemon-detail-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.pokemonDetailPanel !== selectedKey;
    });
    if (selectedKey === 'moveset') loadMovesetGeneration(selectedMovesetGeneration);
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const index = tabs.indexOf(tab);
      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? tabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
      activateTab(tabs[nextIndex]);
      tabs[nextIndex].focus();
    });
  });
}

function bindPokemonMovesetControls(container, pokemon) {
  container.querySelectorAll('.moveset-generation-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMovesetGeneration = Number(button.dataset.generation);
      loadMovesetGeneration(selectedMovesetGeneration);
      renderDetails(pokemon);
    });
  });

  container.querySelectorAll('.moveset-gameset-tab').forEach((button) => {
    button.addEventListener('click', () => {
      selectedMovesetGamesetByGeneration[selectedMovesetGeneration] = button.dataset.gameset;
      renderDetails(pokemon);
    });
  });

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
  let moveGroups = [
    { key: 'levelUp', label: 'Level-Up' },
    { key: 'tm', label: 'TM' },
    { key: 'hm', label: 'HM' },
    { key: 'tr', label: 'TR' },
    { key: 'egg', label: 'Egg' },
    { key: 'evolution', label: 'EV' },
    { key: 'reminder', label: 'Reminder' },
    { key: 'tutor', label: 'Move Tutor' }
  ];

  const generationTabs = Array.from({ length: 9 }, (_, index) => index + 1)
    .map((generation) => `<button type="button" class="moveset-tab moveset-generation-tab${selectedMovesetGeneration === generation ? ' active' : ''}" data-generation="${generation}" aria-pressed="${selectedMovesetGeneration === generation}">Gen ${generation}</button>`)
    .join('');
  const generationData = movesetGenerationData[selectedMovesetGeneration];
  let gameSet = null;
  let gameSetTabs = '';
  let movesByGroup = new Map(moveGroups.map((group) => [group.key, []]));
  let movesetNotice = '';

  if (!generationData || generationData.status === 'loading') {
    movesetNotice = `<p class="moveset-status">Loading move data for Generation ${selectedMovesetGeneration}...</p>`;
  } else if (generationData.status === 'error') {
    movesetNotice = `<p class="moveset-status">Move data for Generation ${selectedMovesetGeneration} could not be loaded. Select this generation to try again.</p>`;
  } else if (!generationData.gamesets.length) {
    movesetNotice = `<p class="moveset-status">No move data is available for Generation ${selectedMovesetGeneration}.</p>`;
  } else {
    const selectedGamesetKey = selectedMovesetGamesetByGeneration[selectedMovesetGeneration];
    gameSet = generationData.gamesets.find((item) => item.key === selectedGamesetKey)
      || generationData.gamesets[0];
    selectedMovesetGamesetByGeneration[selectedMovesetGeneration] = gameSet.key;
    moveGroups = gameSet.categories;
    movesByGroup = new Map(moveGroups.map((group) => [group.key, []]));
    if (generationData.gamesets.length > 1) {
      gameSetTabs = `<div class="moveset-gameset-tabs" role="group" aria-label="Generation ${selectedMovesetGeneration} games">${generationData.gamesets.map((item) => `<button type="button" class="moveset-tab moveset-gameset-tab${gameSet.key === item.key ? ' active' : ''}" data-gameset="${escapeHtml(item.key)}" aria-pressed="${gameSet.key === item.key}">${escapeHtml(item.tabLabel)}</button>`).join('')}</div>`;
    } else {
      gameSetTabs = `<p class="moveset-gameset-label">${escapeHtml(gameSet.name)}</p>`;
    }

    const pokemonMoves = gameSet.pokemon.get(normalizePokemonName(pokemon.name));
    if (!pokemonMoves) {
      movesetNotice = `<p class="moveset-status">No moveset data is listed for ${escapeHtml(pokemon.name)} in ${escapeHtml(gameSet.name)}.</p>`;
    } else {
      movesByGroup = new Map(moveGroups.map((group) => [
        group.key,
        String(pokemonMoves[group.key] || '')
          .split('|')
          .map((entry) => entry.trim())
          .filter(Boolean)
      ]));
      const hasAnyMoves = [...movesByGroup.values()].some((moves) => moves.length > 0);
      if (!hasAnyMoves) {
        movesetNotice = `<p class="moveset-status">No moveset data is available for ${escapeHtml(pokemon.name)} in ${escapeHtml(gameSet.name)}.</p>`;
      }
    }
  }

  const movesetAvailable = [...movesByGroup.values()].some((moves) => moves.length > 0);
  const activeGroup = moveGroups.find((group) => group.key === selectedMoveCategory) || moveGroups[0];
  if (activeGroup) selectedMoveCategory = activeGroup.key;
  const currentMoves = movesByGroup.get(activeGroup.key) || [];

  const rowsHtml = currentMoves.length
    ? currentMoves
        .map((entry) => {
          const [moveId, ...valueParts] = entry.split('-');
          const levelValue = valueParts.join('-');
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

  const categoryTabs = moveGroups
    .map((group) => {
      const hasMoves = movesByGroup.get(group.key).length > 0;
      return `<button type="button" class="moveset-tab ${activeGroup.key === group.key ? 'active' : ''}${hasMoves ? '' : ' disabled'}" data-category="${group.key}">${group.label}</button>`;
    })
    .join('');

  const tableHtml = movesetAvailable && gameSet
    ? `<div class="moveset-tabs">${categoryTabs}</div>
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
      </div>`
    : '';

  return `
    <section class="moveset-card stats-card">
      <div class="section-header">
        <div>
          <h2>Moveset</h2>
        </div>
      </div>
      <div class="moveset-generation-tabs" role="group" aria-label="Moveset generation">${generationTabs}</div>
      ${gameSetTabs}
      ${movesetNotice}
      ${tableHtml}
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

function showAttributeCountPopup(label, value, clientX, clientY, targetElement, subjectPokemon = selectedPokemon) {
  createMovePopup();
  const popup = document.getElementById('move-popup');
  resetPopupTheme(popup);
  const count = allPokemon.filter((pokemon) => pokemon !== subjectPokemon && String(pokemon[value.key] || '').trim() === value.value).length;

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
  const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
  const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
  popup.style.boxSizing = 'border-box';
  popup.style.width = 'fit-content';
  popup.style.minWidth = '0';
  const popupWidthLimit = window.matchMedia('(max-width: 640px)').matches ? 280 : 420;
  popup.style.maxWidth = `${Math.max(0, Math.min(popupWidthLimit, viewportWidth - 24))}px`;
  popup.style.maxHeight = `${Math.max(0, viewportHeight - 24)}px`;
  popup.style.overflowY = 'auto';
  popup.style.overflowWrap = 'anywhere';
  popup.querySelectorAll('div[style*="display:flex"]').forEach((row) => {
    row.style.flexWrap = 'wrap';
    row.style.maxWidth = '100%';
    [...row.children].forEach((child) => {
      child.style.minWidth = '0';
      child.style.overflowWrap = 'anywhere';
    });
  });
  // make visible with animation
  if (!popup.classList.contains('visible')) popup.classList.add('visible');
  const offset = 8;
  // Measure after content set
  const width = popup.offsetWidth || 260;
  const height = popup.offsetHeight || 120;
  let left = 0;
  let top = 0;
  const movesetTable = targetElement?.closest?.('.moveset-table');
  const movesetTableWrap = movesetTable?.closest('.moveset-table-wrap');
  const tableOverflowsViewport = movesetTable
    && movesetTableWrap
    && (movesetTable.scrollWidth > viewportWidth || movesetTable.getBoundingClientRect().width > viewportWidth);
  if (tableOverflowsViewport) {
    const rect = movesetTableWrap.getBoundingClientRect();
    const visibleLeft = Math.max(8, rect.left);
    const visibleRight = Math.min(viewportWidth - 8, rect.right);
    const visibleTop = Math.max(8, rect.top);
    const visibleBottom = Math.min(viewportHeight - 8, rect.bottom);
    left = visibleRight > visibleLeft ? (visibleLeft + visibleRight - width) / 2 : (viewportWidth - width) / 2;
    top = visibleBottom > visibleTop ? (visibleTop + visibleBottom - height) / 2 : (viewportHeight - height) / 2;
  } else if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
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
  popup.style.left = `${Math.min(Math.max(12, Math.round(left)), Math.max(12, viewportWidth - width - 12))}px`;
  popup.style.top = `${Math.min(Math.max(12, Math.round(top)), Math.max(12, viewportHeight - height - 12))}px`;
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
