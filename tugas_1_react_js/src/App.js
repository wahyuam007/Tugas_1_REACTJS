import React from 'react';
import MenuUtama from './page/MenuUtama';
import MenuKontak from './page/MenuKontak';
import MenuTentangKami from './page/MenuTentangKami';
import MenuProduct from './page/MenuProduct';

function Header() {
  return (
    <div>
      <h1>Ini Halman Untuk Header</h1>
    </div>
  );
}
function Footer() {
  return (
    <h1>Ini Halaman Untuk Footer</h1>
  )
}

function App() {
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

export default App;
