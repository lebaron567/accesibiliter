import React, { useState } from 'react';
import PaymentContainer from './PaymentContainer';
import PaymentConfirmation from './PaymentConfirmation';

function App() {
  const [currentPage, setCurrentPage] = useState('payment'); // État initial pour déterminer la page actuelle

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'payment' && <PaymentContainer />}
      {currentPage === 'confirmation' && <PaymentConfirmation />}

    </div>
  );
}

export default App;
