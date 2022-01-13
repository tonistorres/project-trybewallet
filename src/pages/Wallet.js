import React from 'react';
import Header from '../components/HeaderWallet';
import BodyWallet from '../components/BodyWallet';
import '../index.css';
// import DetailBody from '../components/DetailBody';
import Table from '../components/TableDespesas';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-container-main">
        <Header />
        <BodyWallet />
        <Table />
      </div>
    );
  }
}
export default Wallet;
