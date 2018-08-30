var macros; // contents of macros.txt
var itemLocations; // contents of item_locations.txt
var macrosLoaded = false;
var itemLocationsLoaded = false;

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
    'Bird\'s Peak Rock',
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
    'The Great Sea'
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
    'Ganon\'s Tower'
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

// tracker should modify these
var items = {
    "Tingle Tuner": 0,
    "Wind Waker": 0,
    "Spoils Bag": 0,
    "Grappling Hook": 0,
    "Power Bracelets": 0,
    "Iron Boots": 0,
    "Bait Bag": 0,
    "Boomerang": 0,
    "Hookshot": 0,
    "Delivery Bag": 0,
    "Bombs": 0,
    "Skull Hammer": 0,
    "Deku Leaf": 0,
    "Hero's Shield": 0,
    "Mirror Shield": 0,

    "Triforce Shard 1": 0,
    "Triforce Shard 2": 0,
    "Triforce Shard 3": 0,
    "Triforce Shard 4": 0,
    "Triforce Shard 5": 0,
    "Triforce Shard 6": 0,
    "Triforce Shard 7": 0,
    "Triforce Shard 8": 0,

    "Nayru's Pearl": 0,
    "Din's Pearl": 0,
    "Farore's Pearl": 0,

    "Wind's Requiem": 0,
    "Ballad of Gales": 0,
    "Command Melody": 0,
    "Earth God's Lyric": 0,
    "Wind God's Aria": 0,
    "Song of Passing": 0,

    "Boat's Sail": 0,

    "Note to Mom": 0,
    "Maggie's Letter": 0,
    "Moblin's Letter": 0,
    "Cabana Deed": 0,

    "Magic Meter Upgrade": 0,

    "Ghost Ship Chart": 0,

    "Progressive Sword": 0,
    "Progressive Bow": 0,
    "Progressive Wallet": 0,
    "Progressive Picto Box": 0,
    "Empty Bottle": 0,

    "DRC Big Key": 0,
    "DRC Small Key": 0,
    "FW Big Key": 0,
    "FW Small Key": 0,
    "TotG Big Key": 0,
    "TotG Small Key": 0,
    "ET Big Key": 0,
    "ET Small Key": 0,
    "WT Big Key": 0,
    "WT Small Key": 0,

    "Entered DRC": 0,
    "Entered FW": 0,
    "Entered TotG": 0,
    "Entered ET": 0,
    "Entered WT": 0,

    "Treasure Chart 1": 0,
    "Treasure Chart 2": 0,
    "Treasure Chart 3": 0,
    "Treasure Chart 4": 0,
    "Treasure Chart 5": 0,
    "Treasure Chart 6": 0,
    "Treasure Chart 7": 0,
    "Treasure Chart 8": 0,
    "Treasure Chart 9": 0,
    "Treasure Chart 10": 0,
    "Treasure Chart 11": 0,
    "Treasure Chart 12": 0,
    "Treasure Chart 13": 0,
    "Treasure Chart 14": 0,
    "Treasure Chart 15": 0,
    "Treasure Chart 16": 0,
    "Treasure Chart 17": 0,
    "Treasure Chart 18": 0,
    "Treasure Chart 19": 0,
    "Treasure Chart 20": 0,
    "Treasure Chart 21": 0,
    "Treasure Chart 22": 0,
    "Treasure Chart 23": 0,
    "Treasure Chart 24": 0,
    "Treasure Chart 25": 0,
    "Treasure Chart 26": 0,
    "Treasure Chart 27": 0,
    "Treasure Chart 28": 0,
    "Treasure Chart 29": 0,
    "Treasure Chart 30": 0,
    "Treasure Chart 31": 0,
    "Treasure Chart 32": 0,
    "Treasure Chart 33": 0,
    "Treasure Chart 34": 0,
    "Treasure Chart 35": 0,
    "Treasure Chart 36": 0,
    "Treasure Chart 37": 0,
    "Treasure Chart 38": 0,
    "Treasure Chart 39": 0,
    "Treasure Chart 40": 0,
    "Treasure Chart 41": 0,

    "Triforce Chart 1": 0,
    "Triforce Chart 2": 0,
    "Triforce Chart 3": 0,
    "Triforce Chart 4": 0,
    "Triforce Chart 5": 0,
    "Triforce Chart 6": 0,
    "Triforce Chart 7": 0,
    "Triforce Chart 8": 0,

    "Telescope": 0,
    "Magic Armor": 0,
    "Hero's Charm": 0,
    "Progressive Quiver": 0,
    "Progressive Bomb Bag": 0,
    "Hurricane Spin": 0
};
var startingItems = {}; // the items you get at the start of a new playthrough
var impossibleItems = []; // the items that are missing from the item pool and are impossible to obtain
var keys = {
    "DRC Big Key": 0,
    "DRC Small Key": 0,
    "FW Big Key": 0,
    "FW Small Key": 0,
    "TotG Big Key": 0,
    "TotG Small Key": 0,
    "ET Big Key": 0,
    "ET Small Key": 0,
    "WT Big Key": 0,
    "WT Small Key": 0,
};
var locationsChecked = {};
var flags = [];
var isKeyLunacy = false;
var isRandomEntrances = false;
var isRandomCharts = false;
var swordMode = "sword";
var skipRematchBosses = false; // on by default in settings, but we set it to false for backwards compatibility
var startingTriforceShards = 0;

// tracker should use these without modifying them
var locationsAreProgress = {};
var locationsAreAvailable = {};

$(document).ready(function () {
    loadFlags();
    loadStartingItems();
    loadMacros();
    loadItemLocations();
});

function loadMacros() {
    $.ajax(
        {
            url: 'https://raw.githubusercontent.com/LagoLunatic/wwrando/' + versionParam + '/logic/macros.txt',
            success: function (data) {
                macros = jsyaml.load(data);
                macrosLoaded = true;
                afterLoad();
            },
            error: function () {
                showLoadingError();
            }
        }
    )
}

function loadItemLocations() {
    $.ajax(
        {
            url: 'https://raw.githubusercontent.com/LagoLunatic/wwrando/' + versionParam + '/logic/item_locations.txt',
            success: function (data) {
                itemLocations = jsyaml.load(data);
                itemLocationsLoaded = true;
                afterLoad();
            },
            error: function () {
                showLoadingError();
            }
        }
    )
}

function afterLoad() {
    if (macrosLoaded && itemLocationsLoaded) {
        addDefeatGanondorf();
        setLocationsAreProgress();
        initializeLocationsChecked();
        updateDungeonEntranceMacros();
        updateChartMacros();
        updateRematchBossesMacros();
        updateSwordModeMacros();
        loadProgress();
        dataChanged();
    }
}

// tracker should call this after changing 'items', 'keys', or 'locationsChecked'
function dataChanged() {
    setLocationsAreAvailable();
    refreshAllImagesAndCounts();
    refreshLocationColors();
    recreateTooltips();
    updateStatistics();
}

function loadStartingItems() {
    if (swordMode == "sword") {
        startingItems["Progressive Sword"] = 1;
    } else if (swordMode == "swordless") {
        impossibleItems.push("Progressive Sword x1");
        impossibleItems.push("Progressive Sword x2");
        impossibleItems.push("Progressive Sword x3");
        impossibleItems.push("Progressive Sword x4");
        impossibleItems.push("Hurricane Spin");
    }
    startingItems["Hero's Shield"] = 1;
    startingItems["Wind Waker"] = 1;
    startingItems["Boat's Sail"] = 1;
    startingItems["Wind's Requiem"] = 1;
    startingItems["Ballad of Gales"] = 1;
    startingItems["Song of Passing"] = 1;
    for (var i = 0; i < startingTriforceShards; i++) {
        var shardName = "Triforce Shard " + (i + 1);
        startingItems[shardName] = 1;
    }

    Object.keys(startingItems).forEach(function (item) {
        items[item] = startingItems[item];
    });
}

function addDefeatGanondorf() {
    flags.push("Finish Game");
    itemLocations["Ganon's Tower - Defeat Ganondorf"] = {
        Need: "Can Reach and Defeat Ganondorf",
        Types: "Finish Game"
    };
}

function getDetailedLocations(generalLocation, isDungeon) {
    var result = [];
    var allDetailedLocations = locationsAreProgress[generalLocation];
    Object.keys(allDetailedLocations).forEach(function (detailedLocation) {
        if ((isValidForLocation(generalLocation, detailedLocation, isDungeon))
            && (showNonProgressLocations || locationsAreProgress[generalLocation][detailedLocation])) {
            result.push(detailedLocation);
        }
    })
    return result;
}

function setLocationsAreProgress() {
    locationsAreProgress = setLocations(isLocationProgress);
}

function setLocationsAreAvailable() {
    if (hideLocationLogic) {
        locationsAreAvailable = setLocations(() => true);
    } else {
        transferKeys();
        locationsAreAvailable = setLocations(isLocationAvailable);
        setGuaranteedKeys();
    }
}

function initializeLocationsChecked() {
    locationsChecked = setLocations(() => false);
}

function updateDungeonEntranceMacros() {
    if (isRandomEntrances) {
        for (var i = 0; i < dungeons.length; i++) {
            var dungeonName = dungeons[i];
            if (isMainDungeon(dungeonName)) {
                var macroName = "Can Access " + dungeonName;
                var entryName = "Entered " + shortDungeonNames[i];
                macros[macroName] = entryName;
            }
        }
    }
}

function updateChartMacros() {
    if (isRandomCharts) {
        for (var i = 0; i < charts.length; i++) {
            var chartName = charts[i];
            var macroName = "Chart for Island " + (i + 1);
            macros[macroName] = chartName; // we assume everything is a Treasure Chart and clear any additional requirements like wallet upgrades
        }
    }
}

function updateRematchBossesMacros() {
    if (skipRematchBosses) {
        macros["Can Unlock Ganon's Tower Four Boss Door"] = "Nothing";
    }
}

function updateSwordModeMacros() {
    if (swordMode == "swordless") {
        macros["Can Sword Fight with Orca"] = "Can Sword Fight with Orca in Swordless";
        macros["Can Defeat Phantom Ganon"] = "Can Defeat Phantom Ganon in Swordless";
        macros["Can Access Hyrule"] = "Can Access Hyrule in Swordless";
        macros["Can Defeat Ganondorf"] = "Can Defeat Ganondorf in Swordless";
    }
}

function transferKeys() {
    Object.keys(keys).forEach(function (keyName) {
        if (isKeyLunacy) {
            items[keyName] = keys[keyName];
        } else {
            items[keyName] = 5;
        }
    });
}

function setGuaranteedKeys() {
    if (!isKeyLunacy) {
        for (var i = 0; i < dungeons.length; i++) {
            var dungeonName = dungeons[i];
            if (isMainDungeon(dungeonName)) {
                var guaranteedKeys = getGuaranteedKeysForDungeon(dungeonName);
                var shortDungeonName = shortDungeonNames[i];
                var smallKeyName = shortDungeonName + " Small Key";
                var bigKeyName = shortDungeonName + " Big Key";
                items[smallKeyName] = Math.max(guaranteedKeys.small, keys[smallKeyName]);
                items[bigKeyName] = Math.max(guaranteedKeys.big, keys[bigKeyName]);
            }
        }
        locationsAreAvailable = setLocations(isLocationAvailable);
    }
}

function getGuaranteedKeysForDungeon(dugeonName) {
    var guaranteedSmallKeys = 5;
    var guaranteedBigKeys = 1;
    Object.keys(locationsAreAvailable[dugeonName]).forEach(function (detailedLocation) {
        if (isValidForLocation(dugeonName, detailedLocation, true)
            && !locationsAreAvailable[dugeonName][detailedLocation]
            && !locationsChecked[dugeonName][detailedLocation]) {
            var keyReqs = getKeyRequirementsForLocation(dugeonName, detailedLocation);
            guaranteedSmallKeys = Math.min(guaranteedSmallKeys, keyReqs.small);
            guaranteedBigKeys = Math.min(guaranteedBigKeys, keyReqs.big);
        }
    });
    return { small: guaranteedSmallKeys, big: guaranteedBigKeys };
}

function getKeyRequirementsForLocation(dungeonName, detailedLocation) {
    var fullName = dungeonName + " - " + detailedLocation;
    var requirements = itemLocations[fullName].Need;
    var smallReq = 0;
    var bigReq = 0;
    var smallIndex = requirements.indexOf("Small Key x");
    if (smallIndex >= 0) {
        var smallReqName = requirements.substring(smallIndex, "Small Key x1".length + smallIndex);
        smallReq = getProgressiveNumRequired(smallReqName);
    }
    if (requirements.includes("Big Key")) {
        bigReq = 1;
    }
    return { small: smallReq, big: bigReq };
}

function isMainDungeon(dungeonName) {
    if (dungeonName == "Forsaken Fortress" || dungeonName == "Ganon's Tower") {
        return false;
    }
    return dungeons.includes(dungeonName);
}

function isValidForLocation(generalLocation, detailedLocation, isDungeon) {
    if (islands.includes(generalLocation) && dungeons.includes(generalLocation)) {
        var fullName = generalLocation + " - " + detailedLocation;
        return isDungeon == itemLocations[fullName].Types.includes("Dungeon");
    }
    return true;
}

function getChestCountsForLocation(generalLocation, isDungeon) {
    var curChecked = 0;
    var curProgress = 0;
    var curAvailable = 0;
    var curTotalProgress = 0;
    var curTotalDisplayed = 0;
    var curLocation = locationsChecked[generalLocation];
    Object.keys(curLocation).forEach(function (detailedLocation) {
        if (isValidForLocation(generalLocation, detailedLocation, isDungeon)) {
            var hasProgress = locationsAreProgress[generalLocation][detailedLocation];
            if (hasProgress || showNonProgressLocations) {
                if (locationsChecked[generalLocation][detailedLocation]) {
                    curChecked++;
                } else {
                    curTotalDisplayed++;
                    if (hasProgress) {
                        curTotalProgress++;
                    }
                    if (locationsAreAvailable[generalLocation][detailedLocation]) {
                        curAvailable++;
                        if (hasProgress) {
                            curProgress++;
                        }
                    }
                }
            }
        }
    });
    return {
        checked: curChecked, // number of locations that have been checked
        progress: curProgress, // number of available locations that can contain progesss
        available: curAvailable, // number of available locations
        total: curTotalDisplayed, // total locations remaining
        totalProgress: curTotalProgress, // total locations remaining that can contain progress
    };
}

function setLocations(valueCallback) {
    result = {};
    Object.keys(itemLocations).forEach(function (locationName) {
        var split = locationName.indexOf(' - ');
        var generalLocation = locationName.substring(0, split);
        var detailedLocation = locationName.substring(split + 3);
        if (!(generalLocation in result)) {
            result[generalLocation] = {};
        }
        var locationValue = valueCallback(locationName);
        result[generalLocation][detailedLocation] = locationValue;
    });
    return result;
}

function checkRequirementMet(reqName) {
    if (reqName.startsWith('Progressive') || reqName.includes('Small Key x')) {
        return checkProgressiveItemRequirementRemaining(reqName, items) <= 0;
    }
    if (reqName.startsWith('Can Access Other Location "')) {
        return checkOtherLocationReq(reqName);
    }
    if (reqName in items) {
        return items[reqName] > 0;
    }
    if (reqName in macros) {
        var macro = macros[reqName];
        var splitExpression = getSplitExpression(macro);
        return checkLogicalExpressionReq(splitExpression);
    }
    if (reqName == "Nothing") {
        return true;
    }
    if (reqName == "Impossible") {
        return false;
    }
}

function checkProgressiveItemRequirementRemaining(reqName, itemSet) {
    var itemName = getProgressiveItemName(reqName);
    var numRequired = getProgressiveNumRequired(reqName);
    return numRequired - itemSet[itemName];
}

function getProgressiveItemName(reqName) {
    return reqName.substring(0, reqName.length - 3);
}

function getProgressiveNumRequired(reqName) {
    return parseInt(reqName.charAt(reqName.length - 1));
}

function getProgressiveRequirementName(itemName, numRequired) {
    return `${itemName} x${numRequired}`;
}

function checkOtherLocationReq(reqName) {
    var otherLocation = reqName.substring('Can Access Other Location "'.length, reqName.length - 1);
    var splitExpression = getSplitExpression(itemLocations[otherLocation].Need)
    return checkLogicalExpressionReq(splitExpression);
}

function getSplitExpression(expression) {
    return expression.split(/([(&\|)])/g);
}

function checkLogicalExpressionReq(splitExpression) {
    var expressionType = "";
    var subexpressionResults = [];
    while (splitExpression.length > 0) {
        var cur = splitExpression[0].trim();
        splitExpression.shift();
        if (cur && cur.length > 0) {
            if (cur == "|") {
                expressionType = "OR";
            } else if (cur == "&") {
                expressionType = "AND";
            } else if (cur == "(") {
                var result = checkLogicalExpressionReq(splitExpression);
                subexpressionResults.push(result);
            } else if (cur == ')') {
                break;
            } else {
                result = checkRequirementMet(cur);
                subexpressionResults.push(result);
            }
        }
    }
    if (expressionType == "OR") {
        return subexpressionResults.some(element => element);
    }
    return subexpressionResults.every(element => element);
}

function itemsRequiredForOtherLocation(reqName) {
    var otherLocation = reqName.substring('Can Access Other Location "'.length, reqName.length - 1);
    var splitExpression = getSplitExpression(itemLocations[otherLocation].Need)
    return itemsRequiredForLogicalExpression(splitExpression);
}

function itemsForRequirement(reqName) {
    if (impossibleItems.includes(reqName) || reqName == "Impossible") {
        var requiredItems = "Impossible";
        var reqMet = false;
        var remainingProgress = NaN;
    } else if (reqName.startsWith('Progressive') || reqName.includes('Small Key x')) {
        var progressCheck = checkProgressiveItemRequirementRemaining(reqName, items);
        var reqMet = progressCheck <= 0;
        var remainingProgress = Math.max(0, progressCheck);
        if (reqMet && checkProgressiveItemRequirementRemaining(reqName, startingItems) <= 0) {
            var requiredItems = "None";
        } else {
            var requiredItems = reqName; // don't replace names yet. we do some logic with them and then replace them later
        }
    } else if (reqName.startsWith('Can Access Other Location "')) {
        return itemsRequiredForOtherLocation(reqName);
    } else if (reqName.includes("Triforce Shard")) {
        var requiredItems = "Triforce of Courage";
        var remainingProgress = 8 - getTriforceShardCount();
        var reqMet = remainingProgress == 0;
    } else if (reqName in items) {
        var reqMet = items[reqName] > 0;
        if (reqMet && startingItems[reqName] > 0) {
            var requiredItems = "None";
        } else {
            var requiredItems = reqName;
        }
        var remainingProgress = reqMet ? 0 : 1;
    }
    else if (reqName in macros) {
        var macro = macros[reqName];
        var splitExpression = getSplitExpression(macro);
        return itemsRequiredForLogicalExpression(splitExpression);
    }
    else if (reqName == "Nothing") {
        var requiredItems = "None";
        var reqMet = true;
        var remainingProgress = 0;
    }
    return { items: requiredItems, eval: reqMet, countdown: remainingProgress };
}

function itemsRequiredForLogicalExpression(splitExpression) {
    var expressionType = "";
    var subexpressionResults = [];
    while (splitExpression.length > 0) {
        var cur = splitExpression[0].trim();
        splitExpression.shift();
        if (cur && cur.length > 0) {
            if (cur == "|") {
                expressionType = "OR";
            } else if (cur == "&") {
                expressionType = "AND";
            } else if (cur == "(") {
                var result = itemsRequiredForLogicalExpression(splitExpression);
                if (result) {
                    subexpressionResults.push(result);
                }
            } else if (cur == ')') {
                break;
            } else {
                var result = itemsForRequirement(cur);
                if (result) {
                    subexpressionResults.push(result);
                }
            }
        }
    }
    return getFlatSubexpression(subexpressionResults, expressionType);
}

function getFlatSubexpression(itemsReq, expressionType) {
    var expression = getSubexpression(itemsReq, expressionType);
    return flattenArrays(expression);
}

function getSubexpression(itemsReq, expressionType) {
    if (itemsReq.length > 1) {
        if (expressionType == "OR") {
            var isExpressionTrue = itemsReq.some(item => item.eval);
        } else {
            var isExpressionTrue = itemsReq.every(item => item.eval);
        }

        if (isExpressionTrue) {
            var groupCountdown = 0;
        } else {
            var groupCountdown = itemsReq.reduce((a, b) => typeof a === 'object' ? (a.countdown + b.countdown) : (a + b.countdown));
        }
        return { type: expressionType, items: itemsReq, eval: isExpressionTrue, countdown: groupCountdown };
    }
    if (itemsReq.length === 1) {
        var isExpressionTrue = itemsReq[0].eval;
        return { items: itemsReq[0], eval: isExpressionTrue, countdown: (isExpressionTrue ? 0 : 1) };
    }
    return null;
}

function flattenArrays(expression) {
    if (!expression) {
        return null;
    }
    var itemsReq = expression.items;
    if (!itemsReq) {
        return expression;
    }
    if (!Array.isArray(itemsReq)) {
        return itemsReq;
    }
    if (itemsReq.length === 1) {
        return itemsReq[0];
    }

    var newItems = [];
    for (var i = 0; i < itemsReq.length; i++) {
        var curItem = itemsReq[i];
        var subExpression = flattenArrays(curItem);
        if (subExpression) {
            if (!subExpression.type) {
                var fullExpr = { items: subExpression, eval: curItem.eval, countdown: curItem.countdown };
                newItems.push(fullExpr);
            } else if (subExpression.type == expression.type) {
                newItems.push.apply(newItems, subExpression.items);
            } else {
                newItems.push(subExpression);
            }
        }
    }
    return getSubexpression(newItems, expression.type);
}

function indexOfItem(expressionItems, item) {
    for (var i = 0; i < expressionItems.length; i++) {
        var curItem = expressionItems[i];
        if (curItem.items == item.items) {
            return i;
        }
    }
    return -1;
}

function removeDuplicateItems(expression) {
    if (!expression || (!expression.type)) {
        return expression;
    }
    var itemsReq = expression.items;
    var newItems = [];
    for (var i = 0; i < itemsReq.length; i++) {
        var curItem = itemsReq[i];
        if (curItem.type) {
            var subExpression = removeDuplicateItems(curItem);
            if (subExpression) {
                newItems.push(subExpression);
            }
        } else if (i == indexOfItem(itemsReq, curItem)) {
            newItems.push(curItem);
        }
    }
    return getFlatSubexpression(newItems, expression.type);
}

function removeChildren(expression) {
    if (!expression) {
        return null;
    }
    const impossible = [{ items: "Impossible", eval: false, countdown: NaN }];
    const none = [{ items: "None", eval: true, countdown: 0 }];
    if (expression.type == "AND") {
        if (indexOfItem(expression.items, impossible[0]) > -1) {
            return getFlatSubexpression(impossible, "AND"); // if there is an impossible item in the top level, the whole expression is impossible
        }
        return removeChildExpressions(expression, impossible, none);
    }
    return removeChildExpressions(expression, none, impossible);
}

// remove duplicates that are in lower levels, including progressive items that are obsolete by a higher or lower level item of the same type
function removeChildExpressions(expression, oppositeExprItems, sameExprItems) {
    if (!expression.type) {
        return expression;
    }
    var itemsReq = expression.items;
    var newItems = [];
    for (var i = 0; i < itemsReq.length; i++) {
        var curItem = itemsReq[i];
        var progressiveChildren = getProgressiveItemChildren(itemsReq, expression.type);
        if (indexOfItem(oppositeExprItems, curItem) > -1) { // when the parent items have an opposite expression, we remove the whole child expression
            return null;
        } else if (indexOfItem(sameExprItems, curItem) == -1  // when the parent items have the same expression, we just remove the child
            && indexOfItem(progressiveChildren, curItem) == -1) { // we don't add any items that are subsumed by another progressive item in the same level
            if (curItem.type) {
                var newSameExprItems = sameExprItems.concat(itemsReq).concat(progressiveChildren);
                var subExpression = removeChildExpressions(curItem, newSameExprItems, oppositeExprItems);
                if (subExpression) {
                    newItems.push(subExpression);
                } else if (expression.type == "OR") {
                    return null;
                }
            } else {
                newItems.push(curItem);
            }
        }
    }
    return getFlatSubexpression(newItems, expression.type);
}

// gets all the progressive item children that are subsumed by this list of items
function getProgressiveItemChildren(itemsReq, expressionType) {
    var newItems = [];
    for (var i = 0; i < itemsReq.length; i++) {
        var curItem = itemsReq[i];
        var curReq = curItem.items;
        if (!Array.isArray(curReq)) {
            addProgressiveChildrenForReq(newItems, curReq, expressionType);
        }
    }
    return newItems;
}

function addProgressiveChildrenForReq(newItems, curReq, expressionType) {
    if (curReq.startsWith("Progressive") || curReq.includes('Small Key x')) {
        var itemName = getProgressiveItemName(curReq);
        var reqCount = getProgressiveNumRequired(curReq);
        if (expressionType == "OR") { // if the expression type is OR, we add higher level children
            for (var j = reqCount + 1; j <= 5; j++) {
                var newItemName = getProgressiveRequirementName(itemName, j);
                newItems.push({ items: newItemName });
            }
        } else { // if the expression type is AND, we add lower level children
            for (var j = reqCount - 1; j >= 1; j--) {
                var newItemName = getProgressiveRequirementName(itemName, j);
                newItems.push({ items: newItemName });
            }
        }
    }
}

// we want to remove any expression that subsumes another expression at the same level
// a subsuming expression is one that includes every item from another expression
function removeSubsumingExpressions(expression) {
    if (!expression || (!expression.type)) {
        return expression;
    }
    var itemsReq = expression.items;
    var newItems = [];
    for (var i = 0; i < itemsReq.length; i++) {
        var curItem = itemsReq[i];
        if (curItem.type) {
            if (!isSubsumingExpression(curItem, itemsReq, i)) {
                var subExpression = removeSubsumingExpressions(curItem);
                if (subExpression) {
                    newItems.push(subExpression);
                }
            }
        } else {
            newItems.push(curItem);
        }
    }
    return getFlatSubexpression(newItems, expression.type);
}

function isSubsumingExpression(expression, itemsReq, index) {
    for (var i = 0; i < itemsReq.length; i++) {
        if (i != index) {
            var otherExpression = itemsReq[i];
            if (otherExpression.type && expressionSubsumes(expression, otherExpression, i < index)) {
                return true;
            }
        }
    }
    return false;
}

function expressionSubsumes(firstExpression, secondExpression, tiebreaker) {
    if (firstExpression.type != secondExpression.type) {
        return false;
    }
    if (firstExpression.items.length < secondExpression.items.length) {
        return false;
    }
    if (firstExpression.items.length == secondExpression.items.length && !tiebreaker) {
        return false; // if two expressions are identical, we don't want to remove both
    }
    for (var i = 0; i < secondExpression.items.length; i++) {
        var curItem = secondExpression.items[i];
        if (indexOfItem(firstExpression.items, curItem) == -1) {
            return false;
        }
    }
    return true;
}

function replaceItemNames(expression, isParentExprTrue) {
    if (!expression) {
        return;
    }
    if (!expression.type) {
        expression.items = getNameForItem(expression.items);
    } else {
        var itemsReq = expression.items;
        var isExprTrue = isParentExprTrue || expression.eval;
        for (var i = 0; i < itemsReq.length; i++) {
            var curItem = itemsReq[i];
            replaceItemNames(curItem, isExprTrue);
        }
        sortItems(itemsReq, isExprTrue);
    }
}

// we want to put expressions with missing items at the top
function sortItems(itemsReq, isExprTrue) {
    itemsReq.sort(function (a, b) {
        var itemSort = 0;
        if (!a.eval && b.eval) {
            itemSort = -1;
        } else if (a.eval && !b.eval) {
            itemSort = 1;
        }
        if (itemSort != 0) {
            if (isExprTrue) {
                var exprSort = -1; // if the expression is true, we want to put items we have first
            } else {
                var exprSort = 1; // if the expression is false, we want to put items we're missing first
            }
            return exprSort * itemSort;
        }
        if (a.items < b.items) { // otherwise, we sort alphabetically
            return -1;
        }
        if (a.items > b.items) {
            return 1;
        }
    });
}

function itemsRequiredForLocation(generalLocation, detailedLocation) {
    var fullName = generalLocation + " - " + detailedLocation;
    var splitExpression = getSplitExpression(itemLocations[fullName].Need);
    var itemsReq = itemsRequiredForLogicalExpression(splitExpression);
    itemsReq = removeDuplicateItems(itemsReq);
    itemsReq = removeChildren(itemsReq);
    itemsReq = removeSubsumingExpressions(itemsReq);
    itemsReq = removeChildren(itemsReq); // remove children again so we can catch additional cases
    replaceItemNames(itemsReq, false);
    return itemsReq;
}

function isLocationAvailable(locationName) {
    var splitExpression = getSplitExpression(itemLocations[locationName].Need)
    return checkLogicalExpressionReq(splitExpression);
}

function isLocationProgress(locationName) {
    var types = itemLocations[locationName].Types.split(',').map(x => x.trim());
    for (var i = 0; i < types.length; i++) {
        var type = types[i];
        if (!isRandomCharts
            && type == "Sunken Treasure"
            && itemLocations[locationName]["Original item"].startsWith("Triforce Shard")) {
            if (!flags.includes("Sunken Triforce")) {
                return false;
            }
        } else if (!flags.includes(type)) {
            return false;
        }
    }
    return true;
}

function getNameForItem(itemName) {
    if (itemName.startsWith("Progressive")) {
        var item = getProgressiveItemName(itemName);
        var numRequired = getProgressiveNumRequired(itemName);
        if (item == "Progressive Sword") {
            if (numRequired <= 1) {
                return "Hero's Sword";
            }
            if (numRequired == 2) {
                return "Master Sword";
            }
            if (numRequired == 3) {
                return "Master Sword (Half Power)";
            }
            if (numRequired == 4) {
                return "Master Sword (Full Power)";
            }
        } else if (item == "Progressive Bow") {
            if (numRequired <= 1) {
                return "Hero's Bow";
            }
            if (numRequired == 2) {
                return "Hero's Bow (Fire & Ice Arrows)";
            }
            if (numRequired == 3) {
                return "Hero's Bow (All Arrows)";
            }
        } else if (item == "Progressive Picto Box") {
            if (numRequired <= 1) {
                return "Picto Box";
            }
            if (numRequired == 2) {
                return "Deluxe Picto Box";
            }
        } else if (item == "Progressive Wallet") {
            if (numRequired <= 1) {
                return "Wallet (1000 Rupees)";
            }
            if (numRequired == 2) {
                return "Wallet (5000 Rupees)";
            }
        } else if (item == "Progressive Quiver") {
            if (numRequired <= 1) {
                return "Quiver (60 Arrows)"
            }
            if (numRequired == 2) {
                return "Quiver (99 Arrows)";
            }
        } else if (item == "Progressive Bomb Bag") {
            if (numRequired <= 1) {
                return "Bomb Bag (60 Bombs)"
            }
            if (numRequired == 2) {
                return "Bomb Bag (99 Bombs)";
            }
        }
    }
    else if (itemName == "Boat's Sail") {
        return "Swift Sail";
    }
    else if (isRandomCharts && (itemName.startsWith("Triforce Chart") || itemName.startsWith("Treasure Chart"))) {
        var islandIndex = charts.indexOf(itemName);
        return "Chart for " + islands[islandIndex];
    }
    return itemName;
}

function incrementShield() {
    if (items["Hero's Shield"] == 0) {
        items["Hero's Shield"] = 1;
    } else if (items["Mirror Shield"] == 0) {
        items["Mirror Shield"] = 1;
    } else {
        items["Hero's Shield"] = 0;
        items["Mirror Shield"] = 0;
    }
}

function incrementTriforceShardCount() {
    var newShardCount = (getTriforceShardCount() + 1) % 9; // if the new count is 9, we reset it back to 0
    if (newShardCount > 0) {
        var shardName = "Triforce Shard " + newShardCount;
        items[shardName] = 1;
    } else {
        clearShards();
    }
}

function clearShards() {
    for (var i = 1; i <= 8; i++) {
        var curShard = "Triforce Shard " + i;
        items[curShard] = 0;
    }
}

function getTriforceShardCount() {
    var shards = 0;
    for (var i = 1; i <= 8; i++) {
        if (items["Triforce Shard " + i] > 0) {
            shards++;
        } else break;
    }
    return shards;
}
