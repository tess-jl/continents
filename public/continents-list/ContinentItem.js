import Component from '../Component.js';

class ContinentItem extends Component {
    renderHTML() {
        const continent = this.props.continent;

        return /*html*/`
            <li class="continent-item">
                <div class="info-container">
                    <h2>${continent.name}</h2>
                    <p class="continent-hemisphere">${continent.hemisphere}</p>
                </div>

                <div class="image-container">
                    <img src="${continent.img}" alt="${continent.name} image">
                </div>
                <p class="num-countries">Number of countries: ${continent.numCountries}</p>
            </li>
        `;
    }
}

export default ContinentItem;