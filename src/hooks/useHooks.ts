import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const currencyRates = {
  UZS: 16500, 
  RUBL: 120,
  GBP: 1,
};

const useCurrency = (price: number) => {
  const currency = useSelector((state: RootState) => state.currency.currency);
  const rate = currencyRates[currency as keyof typeof currencyRates];

  const convertPrice = () => {
      if (!rate || isNaN(price)) {
          return price;
      }
      return (price * rate).toFixed(2);
  };

  return { currency, convertPrice };
};


export default useCurrency;
