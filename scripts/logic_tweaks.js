function updateLocations() {
  addDefeatGanondorf();
  updateTingleStatueReward();
  addMailTooltips();
}

function updateMacros() {
  if (!loadingProgress) {
    updateDungeonEntranceMacros();
    updateCaveEntranceMacros();
    updateChartMacros();
    updateTriforceMacro();
  }
}

function addDefeatGanondorf() {
  if (!loadingProgress) {
    flags.push('Finish Game');
  }
  itemLocations["Ganon's Tower - Defeat Ganondorf"] = {
    Need: 'Can Reach and Defeat Ganondorf',
    Types: 'Finish Game'
  };
}

function updateDungeonEntranceMacros() {
  if (isRandomEntrances()) {
    for (var i = 0; i < dungeons.length; i++) {
      var dungeonName = dungeons[i];
      if (isMainDungeon(dungeonName)) {
        var macroName = 'Can Access ' + dungeonName;
        var entryName = getDungeonEntryName(i);
        macros[macroName] = entryName;
        items[entryName] = 0;
      }
    }
  }
}

function updateCaveEntranceMacros() {
  if (isRandomCaves()) {
    for (var i = 0; i < caves.length; i++) {
      var macroName = 'Can Access ' + caves[i];
      var entryName = getCaveEntryName(i);
      macros[macroName] = entryName;
      items[entryName] = 0;
    }
  }
}

function updateChartMacros() {
  for (var i = 0; i < charts.length; i++) {
    var chartName = charts[i];
    items[chartName] = 0;
    if (options.randomize_charts) {
      var macroName = 'Chart for Island ' + (i + 1);
      macros[macroName] = chartName; // we assume everything is a Treasure Chart and clear any additional requirements like wallet upgrades
    }
  }
}

function updateTriforceMacro() {
  macros['All 8 Triforce Shards'] = 'Triforce Shard x8';
}

function updateTingleStatueReward() {
  var tingleStatueReward = itemLocations['Tingle Island - Ankle - Reward for All Tingle Statues'];
  if (tingleStatueReward) {
    tingleStatueReward.Need = 'Tingle Statue x5';
  }
}

function addMailTooltips() {
  addNeedToItem("Mailbox - Letter from Baito", letterTooltipItems.beatET);
  addNeedToItem("Mailbox - Letter from Orca", letterTooltipItems.beatFW);
  addNeedToItem("Mailbox - Letter from Aryll", letterTooltipItems.beatFF);
  addNeedToItem("Mailbox - Letter from Tingle", letterTooltipItems.beatFF);
}

function addNeedToItem(itemName, requiredItem) {
  var oldNeeds = itemLocations[itemName].Need;
  var newNeeds = "( " + oldNeeds + " ) & " + requiredItem;
  itemLocations[itemName].Need = newNeeds;
}

function clearRaceModeBannedLocations() {
  var mailbox = locationsChecked["Mailbox"];
  if (currentGeneralLocation == "Forbidden Woods") {
    mailbox["Letter from Orca"] = true;
  } else if (currentGeneralLocation == "Forsaken Fortress") {
    mailbox["Letter from Aryll"] = true;
    mailbox["Letter from Tingle"] = true;
  } else if (currentGeneralLocation == "Earth Temple") {
    mailbox["Letter from Baito"] = true;
  }
}
