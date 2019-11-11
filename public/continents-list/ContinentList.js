import Component from '../Component.js';
import ContinentItem from './ContinentItem.js';

class ContinentList extends Component {
    
    onRender(dom) {
        const continents = this.props.continents;

        continents.forEach(continent => {
            const props = { continent: continent };
            const continentItem = new ContinentItem(props);
            const continentItemDOM = continentItem.renderDOM();
            dom.appendChild(continentItemDOM);
        });

    }

    renderHTML() {
        
        return /*html*/`
            <ul class="continents"></ul>
        `;
    }
}

export default ContinentList;
