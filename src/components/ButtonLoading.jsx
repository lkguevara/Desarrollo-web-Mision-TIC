import React from 'react';
import ReactLoading from 'react-loading';

const ButtonLoading = ({ disabled, loading, text, onClick = () => {} }) => {
  return (
    <button
      data-testid='button-loading'
      onClick={onClick}
      disabled={disabled}
      type='submit'
      className='bg-yellow-200 text-gray-500 font-bold text-lg py-3 px-6  rounded-xl hover:bg-red-100 shadow-md my-2 disabled:opacity-50 disabled:bg-gray-700'
    >
      {loading ? <ReactLoading data-testid="loading-in-button" type='spin' height={30} width={30} /> : text}
    </button>
  );
};

export default ButtonLoading;