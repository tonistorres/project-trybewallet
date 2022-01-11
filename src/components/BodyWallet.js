import React, { Component } from 'react';

class BodyWallet extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          <p>Valor:</p>
          <input type="text" name="valor" />
        </label>

        <label htmlFor="valor">
          Name:
          <input type="text" name="valor" />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BodyWallet;
