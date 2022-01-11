import React from 'react';
import Header from '../components/HeaderWallet';
import BodyWallet from '../components/BodyWallet';
import '../index.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-container-main">
        <Header />
        <BodyWallet />
      </div>
    );
  }
}
export default Wallet;
