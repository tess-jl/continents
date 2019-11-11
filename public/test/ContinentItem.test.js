import ContinentItem from '../continents-list/ContinentItem.js';
const test = QUnit.test;

QUnit.module('Render Continent Item');

test('renders html from data', assert => {
    // arrange
    const continent = {
        name: 'Africa',
        hemisphere: 'Northern, Southern',
        img: 'assets/continents/africa.png',
        num_countries: 54,
        fifty_plus_countries: true
    };

    const expected = /*html*/`
        <li class="continent-item">
            <div class="info-container">
                <h2>${continent.name}</h2>
                <p class="continent-hemisphere">${continent.hemisphere}</p>
            </div>

            <div class="image-container">
                <img src="${continent.img}" alt=" ${continent.name} image">
            </div>
            <p class="num-countries">${continent.num_countries}</p>
        </li>
    `;
    // act
    const props = { continent: continent };
    const continentItem = new ContinentItem(props);
    const html = continentItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});