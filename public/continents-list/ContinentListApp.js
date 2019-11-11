import Component from '../Component.js';
import Header from '../common/Header.js';
import ContinentList from './ContinentList.js';
import { getContinents } from '../services/continent-api.js';

class ContinentListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'List of Continents' });
        dom.prepend(header.renderDOM());

        const list = new ContinentList({ continents: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        getContinents().then(continents => {
            list.update({ continents });
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main></main>
            </div>
        `;
    }
}

export default ContinentListApp;