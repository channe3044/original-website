document.addEventListener("DOMContentLoaded", () => {
  // ─── 🔍 要素の取得 ───
  const toggleBtn =
    document.getElementById("lang-toggle-btn") ||
    document.getElementById("lang-btn") ||
    document.querySelector(".lang-btn");

  const translatableElements = document.querySelectorAll(".translatable");

  const worldBtn = document.getElementById("world-btn");
  const seaMenu = document.getElementById("sea-menu-container");
  const seaButtons = document.querySelectorAll(".sea-btn");

  // ─── 🎛️ タブ切り替え用のボタンとグリッド、タイトルバーを取得 ───
  const btnFruits = document.getElementById("btn-fruits");
  const btnStyles = document.getElementById("btn-styles");
  const btnSwords = document.getElementById("btn-swords");
  const btnGuns = document.getElementById("btn-guns");
  const btnGears = document.getElementById("btn-gears");
  const btnRods = document.getElementById("btn-rods");

  const fruitGrid = document.getElementById("fruit-grid");
  const styleGrid = document.getElementById("style-grid");
  const swordGrid = document.getElementById("sword-grid");
  const gunGrid = document.getElementById("gun-grid");
  const gearGrid = document.getElementById("gear-grid");
  const rodGrid = document.getElementById("rod-grid");
  const islandGrid =
    document.getElementById("island-grid") ||
    document.getElementById("islands-grid");
  const wikiTitleBar = document.getElementById("wiki-title-bar");

  // 初期値は英語スタート
  let currentLang = "en";

  // ─── 🌐 言語切り替えボタンの処理 ───
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ja" : "en";

      if (currentLang === "ja") {
        toggleBtn.classList.add("active");
      } else {
        toggleBtn.classList.remove("active");
      }

      translatableElements.forEach((el) => {
        if (el.id === "world-btn") return;

        const jaText = el.getAttribute("data-ja");
        const enText = el.getAttribute("data-en");

        if (currentLang === "ja") {
          if (jaText) el.innerHTML = jaText;
        } else {
          if (enText) el.innerHTML = enText;
        }
      });
    });
  }

  // ─── 🍍 悪魔の実リスト ───
  const fruitsList = [
    { name: "Rocket", rarity: "common" },
    { name: "Spin", rarity: "common" },
    { name: "Blade", rarity: "common" },
    { name: "Spring", rarity: "common" },
    { name: "Bomb", rarity: "common" },
    { name: "Smoke", rarity: "common" },
    { name: "Spike", rarity: "common" },
    { name: "Flame", rarity: "uncommon" },
    { name: "Ice", rarity: "uncommon" },
    { name: "Sand", rarity: "uncommon" },
    { name: "Dark", rarity: "uncommon" },
    { name: "Eagle", rarity: "uncommon" },
    { name: "Diamond", rarity: "uncommon" },
    { name: "Light", rarity: "rare" },
    { name: "rubber", rarity: "rare" },
    { name: "Ghost", rarity: "rare" },
    { name: "Magma", rarity: "rare" },
    { name: "Quake", rarity: "legendary" },
    { name: "Buddha", rarity: "legendary" },
    { name: "Love", rarity: "legendary" },
    { name: "Creation", rarity: "legendary" },
    { name: "Spider", rarity: "legendary" },
    { name: "Sound", rarity: "legendary" },
    { name: "Phoenix", rarity: "legendary" },
    { name: "Pain", rarity: "legendary" },
    { name: "Blizzard", rarity: "legendary" },
    { name: "Gravity", rarity: "mythical" },
    { name: "Mammoth", rarity: "mythical" },
    { name: "T-rex", rarity: "mythical" },
    { name: "Dough", rarity: "mythical" },
    { name: "Shadow", rarity: "mythical" },
    { name: "Venom", rarity: "mythical" },
    { name: "Gas", rarity: "mythical" },
    { name: "Spirit", rarity: "mythical" },
    { name: "Tiger", rarity: "mythical" },
    { name: "Yeti", rarity: "mythical" },
    { name: "Magnet", rarity: "mythical" },
    { name: "Kitsune", rarity: "mythical" },
    { name: "Control", rarity: "mythical" },
    { name: "Dragon", rarity: "mythical" },
  ];

  // ─── 🥊 格闘スタイル（Fighting Styles）リスト ───
  const stylesList = [
    { name: "Combat", rarity: "common" },
    { name: "Dark_Step", rarity: "uncommon" },
    { name: "Electric", rarity: "uncommon" },
    { name: "Water_Kung_Fu", rarity: "uncommon" },
    { name: "Dragon_Breath", rarity: "rare" },
    { name: "Superhuman", rarity: "rare" },
    { name: "Death_Step", rarity: "rare" },
    { name: "Sharkman_Karate", rarity: "rare" },
    { name: "Electric_Claw", rarity: "mythical" },
    { name: "Dragon_Talon", rarity: "mythical" },
    { name: "Godhuman", rarity: "mythical" },
    { name: "Sanguine_Art", rarity: "mythical" },
    { name: "Celestial_Art", rarity: "style-yellow" },
  ];

  // ─── ⚔️ ソードリスト ───
  const swordsList = [
    { name: "Katana", rarity: "common" },
    { name: "Cutlass", rarity: "common" },
    { name: "Dual_Katana", rarity: "common" },
    { name: "Fishing_Trophy", rarity: "uncommon" },
    { name: "Triple_Katana", rarity: "uncommon" },
    { name: "Iron_Mace", rarity: "uncommon" },
    { name: "Twin_Hooks", rarity: "uncommon" },
    { name: "Shark_Saw", rarity: "uncommon" },
    { name: "Flail", rarity: "rare" },
    { name: "Dragon_Trident", rarity: "rare" },
    { name: "Pipe", rarity: "rare" },
    { name: "Longsword", rarity: "rare" },
    { name: "Wardens_Sword", rarity: "rare" },
    { name: "Gravity_Blade", rarity: "rare" },
    { name: "Trident", rarity: "rare" },
    { name: "Dual-Headed_Blade", rarity: "rare" },
    { name: "Soul_Cane", rarity: "rare" },
    { name: "Tushita", rarity: "legendary" },
    { name: "Yama", rarity: "legendary" },
    { name: "Pole(2ndForm)", rarity: "legendary" },
    { name: "Canvander", rarity: "legendary" },
    { name: "Rengoku", rarity: "legendary" },
    { name: "Midnight_Blade", rarity: "legendary" },
    { name: "Koko", rarity: "legendary" },
    { name: "Pole(1stForm)", rarity: "legendary" },
    { name: "Dark_Dagger", rarity: "legendary" },
    { name: "Shizu", rarity: "legendary" },
    { name: "Saishi", rarity: "legendary" },
    { name: "Saber", rarity: "legendary" },
    { name: "Oroshi", rarity: "legendary" },
    { name: "Fox_Lamp", rarity: "legendary" },
    { name: "Dragonheart", rarity: "legendary" },
    { name: "Shark_Anchor", rarity: "legendary" },
    { name: "Bisento", rarity: "legendary" },
    { name: "Buddy_Sword", rarity: "legendary" },
    { name: "Spikey_Trident", rarity: "legendary" },
    { name: "True_Triple_Katana", rarity: "mythical" },
    { name: "Hallow_Scythe", rarity: "mythical" },
    { name: "Cursed_Dual_Katana", rarity: "mythical" },
    { name: "Dark_Blade", rarity: "mythical" },
    { name: "Triple_Dark_Blade", rarity: "mythical" },
    { name: "Dog_Blade", rarity: "mythical" },
  ];

  // ─── 🔫 銃リスト ───
  const gunsList = [
    { name: "Slingshot", rarity: "common" },
    { name: "Flintlock", rarity: "uncommon" },
    { name: "Musket", rarity: "uncommon" },
    { name: "Acidum_Rifle", rarity: "rare" },
    { name: "Bizarre_Revolver", rarity: "rare" },
    { name: "Cannon", rarity: "rare" },
    { name: "Dual_Flintlock", rarity: "rare" },
    { name: "Magma_Blaster", rarity: "rare" },
    { name: "Refined_Slingshot", rarity: "rare" },
    { name: "Bazooka", rarity: "rare" },
    { name: "Dragonstorm", rarity: "legendary" },
    { name: "Kabucha", rarity: "legendary" },
    { name: "Venom_Bow", rarity: "legendary" },
    { name: "Skull_Guitar", rarity: "mythical" },
  ];

  // ─── ⚙️ Gears（アクセサリー）リスト ───
  const gearsList = [
    { name: "Headband_Blue", rarity: "common" },
    { name: "Headband_Green", rarity: "common" },
    { name: "Headband_Orange", rarity: "common" },
    { name: "Headband_Purple", rarity: "common" },
    { name: "Headband_Red", rarity: "common" },
    { name: "Headband_White", rarity: "common" },
    { name: "Headband_Yellow", rarity: "common" },
    { name: "DojoBelt_Blue", rarity: "uncommon" },
    { name: "DojoBelt_Green", rarity: "uncommon" },
    { name: "DojoBelt_Orange", rarity: "uncommon" },
    { name: "DojoBelt_Purple", rarity: "uncommon" },
    { name: "DojoBelt_Red", rarity: "uncommon" },
    { name: "DojoBelt_White", rarity: "uncommon" },
    { name: "DojoBelt_Yellow", rarity: "uncommon" },
    { name: "Headband_Black", rarity: "uncommon" },
    { name: "Pink_Coat", rarity: "uncommon" },
    { name: "Warrior_Helmet", rarity: "rare" },
    { name: "Usoaps_Hat", rarity: "rare" },
    { name: "Top_Hat", rarity: "rare" },
    { name: "Tomoe_Ring", rarity: "rare" },
    { name: "T-Rex_Skull", rarity: "rare" },
    { name: "Swordsman_Hat", rarity: "rare" },
    { name: "Shark_Tooth_Necklace", rarity: "rare" },
    { name: "Santa_Hat", rarity: "rare" },
    { name: "Red_Spikey_Coat", rarity: "rare" },
    { name: "Pretty_Helmet", rarity: "rare" },
    { name: "Pilot_Helmet", rarity: "rare" },
    { name: "Marine_Cap", rarity: "rare" },
    { name: "Lei", rarity: "rare" },
    { name: "Jaw_Shield", rarity: "rare" },
    { name: "Hunter_Cape_Red", rarity: "rare" },
    { name: "Hunter_Cape_Green", rarity: "rare" },
    { name: "Hunter_Cape_Black", rarity: "rare" },
    { name: "Golden_Sunhat", rarity: "rare" },
    { name: "Ghoul_Mask", rarity: "rare" },
    { name: "Elf_Hat", rarity: "rare" },
    { name: "Dojo_Belt_Black", rarity: "rare" },
    { name: "Cool_Shades", rarity: "rare" },
    { name: "Coat_Pirate", rarity: "rare" },
    { name: "Choppa", rarity: "rare" },
    { name: "Blue_Spikey_Coat", rarity: "rare" },
    { name: "Black_Spikey_Coat", rarity: "rare" },
    { name: "Black_Cape", rarity: "rare" },
    { name: "Bear_Ears", rarity: "rare" },
    { name: "Bandanna_Red", rarity: "rare" },
    { name: "Bandanna_Green", rarity: "rare" },
    { name: "Bandanna_Black", rarity: "rare" },
    { name: "Cupids_Coat", rarity: "legendary" },
    { name: "D.S._Coat", rarity: "legendary" },
    { name: "Dino_Hood", rarity: "legendary" },
    { name: "Dragon_Mantle", rarity: "legendary" },
    { name: "Feathered_Visage", rarity: "legendary" },
    { name: "Heart_Shades", rarity: "legendary" },
    { name: "Holy_Crown", rarity: "legendary" },
    { name: "Kitsune_Mask", rarity: "legendary" },
    { name: "Kitsune_Ribbon", rarity: "legendary" },
    { name: "Leviathan_Crown", rarity: "legendary" },
    { name: "Musketeer_Hat", rarity: "legendary" },
    { name: "Pale_Scarf", rarity: "legendary" },
    { name: "Swan_Glasses", rarity: "legendary" },
    { name: "Terror_Jaw", rarity: "legendary" },
    { name: "Valkyrie_Helm", rarity: "legendary" },
    { name: "Wyvern_Helmet", rarity: "legendary" },
    { name: "Zebra_Cap", rarity: "legendary" },
    { name: "50b_Party_Hat", rarity: "mythical" },
    { name: "Celestial_Helmet", rarity: "mythical" },
    { name: "Coven_Witch_Hat", rarity: "mythical" },
    { name: "Cracked_Egg_Helmet", rarity: "mythical" },
    { name: "Cupids_Top_Hat", rarity: "mythical" },
    { name: "Dark_Coat", rarity: "mythical" },
    { name: "Divine_Cloak", rarity: "mythical" },
    { name: "Easter_Bunny_Cape", rarity: "mythical" },
    { name: "Frosty_Helmet", rarity: "mythical" },
    { name: "Holiday_Cloak", rarity: "mythical" },
    { name: "Leviathan_Shield", rarity: "mythical" },
    { name: "Oni_Helmet", rarity: "mythical" },
    { name: "Party_Hat", rarity: "mythical" },
    { name: "Peppermint_Helmet", rarity: "mythical" },
    { name: "Pumpkin_Mask", rarity: "mythical" },
    { name: "Red_Ribbon", rarity: "mythical" },
    { name: "Romantic_Bouquet", rarity: "mythical" },
    { name: "Sanguine_Cloak", rarity: "mythical" },
    { name: "Uzoths_Cloak", rarity: "mythical" },
  ];

  // ─── 🎣 Rods（釣竿）リスト ───
  const rodsList = [
    { name: "Fishing_Rod", rarity: "common" },
    { name: "Gold_Rod", rarity: "uncommon" },
    { name: "Shark_Rod", rarity: "uncommon" },
    { name: "Shell_Rod", rarity: "rare" },
    { name: "Shark_Corrupted", rarity: "legendary" },
    { name: "Shell_yelestial", rarity: "legendary" },
    { name: "Treasure_Rod", rarity: "legendary" },
    { name: "Admin_Rod", rarity: "mythical" },
  ];

  // ─── 🏝️ 島（World / Sea 1 & 2）データリスト ───
  const islandsList = [
    { name: "Pirate_Starter", displayName: "Pirate Starter", sea: 1 },
    { name: "Marine_Starter", displayName: "Marine Starter", sea: 1 },
    { name: "Middle_Town", displayName: "Middle Town", sea: 1 },
    { name: "Jungle", displayName: "Jungle", sea: 1 },
    { name: "Pirate_Village", displayName: "Pirate Village", sea: 1 },
    { name: "Desert", displayName: "Desert", sea: 1 },
    { name: "Frozen_Village", displayName: "Frozen Village", sea: 1 },
    { name: "Marine_Fortress", displayName: "Marine Fortress", sea: 1 },
    { name: "Skylands", displayName: "Skylands", sea: 1 },
    { name: "Prison", displayName: "Prison", sea: 1 },
    { name: "Colosseum", displayName: "Colosseum", sea: 1 },
    { name: "Magma_Village", displayName: "Magma Village", sea: 1 },
    { name: "Whirlpool", displayName: "Whirlpool", sea: 1 },
    { name: "Underwater_City", displayName: "Underwater City", sea: 1 },
    {
      name: "Skylands(Upper_Sky)",
      displayName: "Skylands (Upper Sky)",
      sea: 1,
    },
    { name: "Fountain_City", displayName: "Fountain City", sea: 1 },
    { name: "Unnamed_Island", displayName: "Unnamed Island", sea: 1 },

    // ─── Sea 2 ───
    { name: "Kingdom_of_Rose", displayName: "Kingdom of Rose", sea: 2 },
    { name: "Second_Colosseum", displayName: "Colosseum", sea: 2 },
    { name: "Mansion", displayName: "Mansion", sea: 2 },
    { name: "Doghouse", displayName: "Doghouse", sea: 2 },
    { name: "Cafe", displayName: "Cafe", sea: 2 },
    { name: "Factory", displayName: "Factory", sea: 2 },
    { name: "Green_Zone", displayName: "Green Zone", sea: 2 },
    { name: "Graveyard_Island", displayName: "Graveyard Island", sea: 2 },
    { name: "Snow_Mountain", displayName: "Snow Mountain", sea: 2 },
    { name: "Hot_and_Cold", displayName: "Hot and Cold", sea: 2 },
    { name: "Cursed_Ship", displayName: "Cursed Ship", sea: 2 },
    { name: "Ice_Castle", displayName: "Ice Castle", sea: 2 },
    { name: "Forgotten_Island", displayName: "Forgotten Island", sea: 2 },
    { name: "Docks_1", displayName: "Docks 1", sea: 2 },
    { name: "Docks_2", displayName: "Docks 2", sea: 2 },
    { name: "Docks_3", displayName: "Docks 3", sea: 2 },
    { name: "Docks_4", displayName: "Docks 4", sea: 2 },
    { name: "Lava", displayName: "Lava", sea: 2 },
    { name: "Raid", displayName: "Raid", sea: 2 },
    { name: "Lab", displayName: "Lab", sea: 2 },
    { name: "Dark_Arena", displayName: "Dark Arena", sea: 2 },
    { name: "Remote", displayName: "Remote", sea: 2 },
    { name: "Second_Unnamed_Island", displayName: "Unnamed Island", sea: 2 },
  ];

  // ─── 🛠️ リストを描画する共通関数（★詳細ページへのクリック機能を追加） ───
  function renderList(list, gridElement, type) {
    if (!gridElement) return;
    gridElement.innerHTML = "";

    list.forEach((itemData) => {
      const item = document.createElement("div");
      item.className = `fruit-item rarity-${itemData.rarity}`;
      item.style.cursor = "pointer";

      // 👆 クリックしたら詳細ページ（detail.html）へ移動する処理
      item.addEventListener("click", () => {
        window.location.href = `detail.html?name=${encodeURIComponent(
          itemData.name,
        )}&type=${type}`;
      });

      const wrapper = document.createElement("div");
      wrapper.className = "fruit-img-wrapper";

      const img = document.createElement("img");

      if (type === "style") {
        img.src = `images/styles/${itemData.name}.webp`;
      } else if (type === "sword") {
        img.src = `images/swords/${itemData.name}.webp`;
      } else if (type === "gun") {
        img.src = `images/guns/${itemData.name}.webp`;
      } else if (type === "gear") {
        img.src = `images/gears/${itemData.name}.webp`;
      } else if (type === "rod") {
        img.src = `images/rods/${itemData.name}.webp`;
      } else {
        img.src = `images/fruits/${itemData.name}_Fruit.webp`;
      }

      img.alt = itemData.name;
      img.className = "fruit-icon";

      img.onerror = () => {
        if (img.src.endsWith(".webp")) {
          img.src = img.src.replace(".webp", ".png");
        } else {
          img.src = "images/ItemPlaceHolder.webp";
        }
      };

      let displayName = itemData.name.replace(/_/g, " ");

      if (type === "gear") {
        const targetPrefixes = [
          "Headband",
          "DojoBelt",
          "Dojo Belt",
          "Hunter Cape",
          "Bandanna",
        ];
        targetPrefixes.forEach((prefix) => {
          if (displayName.startsWith(prefix)) {
            const parts = displayName.split(" ");
            const color = parts.pop();
            displayName = `${parts.join(" ")} (${color})`;
          }
        });
      } else if (type === "rod") {
        if (itemData.name === "Shark_Corrupted") {
          displayName = "Shark Rod (Corrupted)";
        } else if (itemData.name === "Shell_yelestial") {
          displayName = "Shell (Celestial)";
        }
      }

      const nameDiv = document.createElement("div");
      nameDiv.className = "fruit-name";
      nameDiv.textContent = displayName;

      wrapper.appendChild(img);
      item.appendChild(wrapper);
      item.appendChild(nameDiv);
      gridElement.appendChild(item);
    });
  }

  // ─── 🏝️ 指定されたSeaの島カードを描画する関数 ───
  function renderIslands(seaNumber) {
    if (!islandGrid) return;
    islandGrid.innerHTML = "";

    const filtered = islandsList.filter(
      (item) => item.sea === Number(seaNumber),
    );

    filtered.forEach((island) => {
      const card = document.createElement("div");
      card.className = "island-item";

      const img = document.createElement("img");
      img.alt = island.displayName;
      img.className = "island-img";

      const nameWithSpace = island.displayName;
      const nameWithUnderscore = island.name;
      const folderPath = `images/islands/sea${island.sea}/`;

      const srcCandidates = [
        `${folderPath}${nameWithSpace}.png`,
        `${folderPath}${nameWithSpace}.PNG`,
        `${folderPath}${nameWithSpace}.webp`,
        `${folderPath}${nameWithUnderscore}.png`,
        `${folderPath}${nameWithUnderscore}.PNG`,
        `${folderPath}${nameWithUnderscore}.webp`,
      ];

      let candidateIndex = 0;
      img.src = srcCandidates[candidateIndex];

      img.onerror = () => {
        candidateIndex++;
        if (candidateIndex < srcCandidates.length) {
          img.src = srcCandidates[candidateIndex];
        } else {
          img.src = "images/ItemPlaceHolder.webp";
          img.onerror = null;
        }
      };

      card.appendChild(img);

      const nameDiv = document.createElement("div");
      nameDiv.className = "fruit-name";
      nameDiv.textContent = island.displayName;
      card.appendChild(nameDiv);

      islandGrid.appendChild(card);
    });
  }

  // 各リストの初期描画
  renderList(fruitsList, fruitGrid, "fruit");
  renderList(stylesList, styleGrid, "style");
  renderList(swordsList, swordGrid, "sword");
  renderList(gunsList, gunGrid, "gun");
  renderList(gearsList, gearGrid, "gear");
  renderList(rodsList, rodGrid, "rod");

  // ─── 🔄 タブ表示の切り替え関数 ───
  function switchTab(tabName) {
    if (btnFruits) btnFruits.classList.remove("active");
    if (btnStyles) btnStyles.classList.remove("active");
    if (btnSwords) btnSwords.classList.remove("active");
    if (btnGuns) btnGuns.classList.remove("active");
    if (btnGears) btnGears.classList.remove("active");
    if (btnRods) btnRods.classList.remove("active");
    if (worldBtn) worldBtn.classList.remove("active");

    if (fruitGrid) fruitGrid.style.display = "none";
    if (styleGrid) styleGrid.style.display = "none";
    if (swordGrid) swordGrid.style.display = "none";
    if (gunGrid) gunGrid.style.display = "none";
    if (gearGrid) gearGrid.style.display = "none";
    if (rodGrid) rodGrid.style.display = "none";
    if (islandGrid) islandGrid.style.display = "none";
    if (seaMenu) seaMenu.style.display = "none";

    if (tabName === "styles") {
      if (btnStyles) btnStyles.classList.add("active");
      if (styleGrid) styleGrid.style.display = "grid";
      if (wikiTitleBar) wikiTitleBar.textContent = "Fighting Style List";
    } else if (tabName === "swords") {
      if (btnSwords) btnSwords.classList.add("active");
      if (swordGrid) swordGrid.style.display = "grid";
      if (wikiTitleBar) wikiTitleBar.textContent = "Sword List";
    } else if (tabName === "guns") {
      if (btnGuns) btnGuns.classList.add("active");
      if (gunGrid) gunGrid.style.display = "grid";
      if (wikiTitleBar) wikiTitleBar.textContent = "Gun List";
    } else if (tabName === "gears") {
      if (btnGears) btnGears.classList.add("active");
      if (gearGrid) gearGrid.style.display = "grid";
      if (wikiTitleBar) wikiTitleBar.textContent = "Gear & Accessory List";
    } else if (tabName === "rods") {
      if (btnRods) btnRods.classList.add("active");
      if (rodGrid) rodGrid.style.display = "grid";
      if (wikiTitleBar) wikiTitleBar.textContent = "Fishing Rod List";
    } else if (tabName === "world") {
      if (worldBtn) worldBtn.classList.add("active");
      if (islandGrid) islandGrid.style.display = "grid";
      if (seaMenu) seaMenu.style.display = "flex";
      if (wikiTitleBar) wikiTitleBar.textContent = "World List";

      const activeSeaBtn =
        document.querySelector(".sea-btn.active") || seaButtons[0];
      const seaNum = activeSeaBtn ? activeSeaBtn.dataset.sea || 1 : 1;
      renderIslands(seaNum);
    } else {
      if (btnFruits) btnFruits.classList.add("active");
      if (fruitGrid) fruitGrid.style.display = "grid";
      if (wikiTitleBar) wikiTitleBar.textContent = "Blox Fruit List";
      tabName = "fruits";
    }

    localStorage.setItem("activeWikiTab", tabName);
  }

  // 💾 復元とイベント設定
  const savedTab = localStorage.getItem("activeWikiTab") || "fruits";
  switchTab(savedTab);

  if (btnFruits)
    btnFruits.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("fruits");
    });
  if (btnStyles)
    btnStyles.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("styles");
    });
  if (btnSwords)
    btnSwords.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("swords");
    });
  if (btnGuns)
    btnGuns.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("guns");
    });
  if (btnGears)
    btnGears.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("gears");
    });
  if (btnRods)
    btnRods.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("rods");
    });
  if (worldBtn)
    worldBtn.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("world");
    });

  seaButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      seaButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (worldBtn) worldBtn.classList.add("active");
      const selectedSea = btn.dataset.sea || 1;
      renderIslands(selectedSea);
    });
  });
});
