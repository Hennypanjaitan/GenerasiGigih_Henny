import React from 'react';

const Search = ({ handleChange, handleSubmit }) => {
  return (
    <div
      style={{
        padding: '1rem',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <input
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        onChange={handleChange}
        placeholder="Masukkan track yang ingin anda cari"
        style={{ padding: '0.5rem 1rem', width: '80%', fontSize: '1rem' }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '0.55rem 2rem',
          fontSize: '16px',
          backgroundColor: '#F0A500',
          outline: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;