document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addCountryInfo').addEventListener('click', showAddNewCountryDialog);
    document.getElementById('getCountryInfo').addEventListener('click', showGetCountryInfoDialog);
    document.getElementById('showCountryList').addEventListener('click', showAllCountries);
    document.getElementById('removeCountryInfo').addEventListener('click', showDeleteCountryInfoDialog);
});

let countryStorage = new HashStorage();
addCountry();

function HashStorage() {
    let hashList = [];

    this.addValue = function(key, value) {
        hashList[key] = value;
    }

    this.getValue = function(key) {
        return (key in hashList) ? hashList[key] : undefined;
    }

    this.deleteValue = function(key) {
        if (key in hashList) {
            delete hashList[key];
            return true;
        } else
            return false;
    }

    this.getKeys = function() {
        return Object.keys(hashList);
    }
}

function addCountry() {
    let belarus = { 'capital': 'минск' };
    let norway = { 'capital': 'осло' };
    let gonduras = { 'capital': 'тегусигальпа' };
    countryStorage.addValue('беларусь', belarus);
    countryStorage.addValue('норвегия', norway);
    countryStorage.addValue('гондурас', gonduras);
}

function showAddNewCountryDialog() {
    let countryInfo = {};
    let name;

    do {
        name = prompt('название страны:');
    } while (name.length == 0);

    do {
        countryInfo.capital = prompt('столица:');
    } while (countryInfo.capital.length == 0);

    countryStorage.addValue(name, countryInfo);
}

function showGetCountryInfoDialog() {
    let country = prompt('введите название страны:');
    alert(getCountryInfo(country));
}

function showDeleteCountryInfoDialog() {
    let country = prompt('информацию о какой стране Вы хотите удалить?');
    alert(countryStorage.deleteValue(country) ? 'Вы удалили информацию о стране' : 'такой страны тут нет');
}

function getCountryInfo(country) {
    let countryInfo = countryStorage.getValue(country);
    return countryInfo ? country + '\n' + countryInfo['capital'] + '\n' : 'такой страны тут нет';
}

function showAllCountries() {
    let country = countryStorage.getKeys();
    alert(country.length > 0 ? country.join(', ') : 'стран больше нет');
}

function toLowCase() {
    let str = document.getElementById("addCountryInfo").value;
    let res = str.toLowerCase();
    document.getElementById("addCountryInfo").value = res;
}

function toLowCase() {
    let str = document.getElementById("getCountryInfo").value;
    let res = str.toLowerCase();
    document.getElementById("getCountryInfo").value = res;
}

function toLowCase() {
    let str = document.getElementById("showCountryList").value;
    let res = str.toLowerCase();
    document.getElementById("showCountryList").value = res;
}

function toLowCase() {
    let str = document.getElementById("removeCountryInfo").value;
    let res = str.toLowerCase();
    document.getElementById("removeCountryInfo").value = res;
}