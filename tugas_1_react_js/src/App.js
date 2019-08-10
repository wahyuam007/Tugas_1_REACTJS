import React, {Component} from 'react';
import MenuUtama from './page/MenuUtama';
import MenuKontak from './page/MenuKontak';
import MenuTentangKami from './page/MenuTentangKami';
import MenuProduct from './page/MenuProduct';

const Header = () => {
  return (
    <div>
      <h1>Ini Halman Untuk Header</h1>
    </div>
  );
}
const Footer = () => {
  return (
    <h1>Ini Halaman Untuk Footer</h1>
  );
}

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <Footer />  
      </div>
    );
  }
}

export default App;
