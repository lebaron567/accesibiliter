import React, { useState } from 'react';
import './desktop.css'; // Importer votre fichier CSS
import img from '../src/images/bg-main-desktop.png';
import img2 from '../src/images/bg-card-back.png';

const PaymentForm = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [formErrors, setFormErrors] = useState({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation des champs
    let errors = {};
    let formIsValid = true;

    if (!cardHolder) {
      formIsValid = false;
      errors.cardHolder = 'Veuillez entrer le nom du titulaire de la carte';
    }

    if (!cardNumber.match(/^\d{16}$/)) {
      formIsValid = false;
      errors.cardNumber = 'Veuillez entrer un numéro de carte valide (16 chiffres)';
    }

    if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
      formIsValid = false;
      errors.expiryDate = 'Veuillez entrer une date d\'expiration valide (format MM/AA)';
    }

    if (!cvv.match(/^\d{3}$/)) {
      formIsValid = false;
      errors.cvv = 'Veuillez entrer un code CVV valide (3 chiffres)';
    }

    setFormErrors(errors);

    // Soumission du formulaire si valide
    if (formIsValid) {
      // Votre logique de soumission du formulaire ici

      // Redirection vers la page de confirmation
      window.location.href = "/confirmation"; // Spécifiez le chemin de votre page de confirmation
    }
  };

  return (
    <div className="PaymentForm">
      <img src={img} alt="font" className="front" />
      <img src={img2} alt="font" className="front-card" />
      <div className="payment-container">
        <h1>Effectuer un Paiement</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2 htmlFor="card-holder">CARDHOLDER NAME</h2>
            <input
              type="text"
              id="card-holder"
              name="card-holder"
              placeholder="John Doe"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              required
            />
            {formErrors.cardHolder && <span className="error">{formErrors.cardHolder}</span>}
          </div>
          <div className="form-group">
            <h2 htmlFor="card-number">CARD NUMBER</h2>
            <input
              type="text"
              id="card-number"
              name="card-number"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
            {formErrors.cardNumber && <span className="error">{formErrors.cardNumber}</span>}
          </div>
          <div className="form-group">
            <h2 htmlFor="expiry-date">EXP. DATE (MM/YY)</h2>
            <input
              type="text"
              id="expiry-date"
              name="expiry-date"
              placeholder="MM/AA"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
            {formErrors.expiryDate && <span className="error">{formErrors.expiryDate}</span>}
          </div>
          <div className="form-group">
            <h2 htmlFor="cvv">CVV</h2>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
            {formErrors.cvv && <span className="error">{formErrors.cvv}</span>}
          </div>
          <button type="submit">Payer</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
