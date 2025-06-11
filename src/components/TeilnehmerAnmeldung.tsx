import React, { useState } from 'react';

const TeilnehmerAnmeldung: React.FC = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Teilnehmeranmeldung</h1>
      {submitted ? (
        <p>Danke für deine Anmeldung, {name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <button type="submit">Absenden</button>
        </form>
      )}
    </div>
  );
};

export default TeilnehmerAnmeldung;
