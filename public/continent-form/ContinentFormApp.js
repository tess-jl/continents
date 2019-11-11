import Component from '../Component.js';
import Header from '../common/Header.js';

class ContinentFormApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Add a Cat' });
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                    <p>Continent Form Page</p>
                </main>
            </div>
        `;
    }
}

export default ContinentFormApp;