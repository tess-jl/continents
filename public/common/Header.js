import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Famous Cats';

        return /*html*/`
            <header>
                <img class="logo" src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
                <h1>${title}</h1>
                <nav>
                    <a href="./">Home</a>
                    <a href="./continent-list.html">Continents</a>
                    <a href="./continent-form.html">Add a Continent</a>
                </nav>
            </header>
        `;
    }
}

export default Header;