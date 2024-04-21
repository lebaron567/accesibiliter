import React from 'react';
import './style.css'; // Assurez-vous d'importer votre fichier CSS si nécessaire

const PaymentConfirmation = () => {
  const handleContinue = () => {
    // Redirection vers http://www.example.com
    window.location.href = "http://www.example.com";
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-message">
        <i className="fas fa-check-circle"></i>
        <p>Merci ! Vos détails de carte ont été ajoutés.</p>
        <button onClick={handleContinue}>Continuer</button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
