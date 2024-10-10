import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const currencyRates = {
  UZS: 15500, 
  RUBL: 100,
  GBP: 1,
};

const useCurrency = (price: number) => {
  const currency = useSelector((state: RootState) => state.currency.currency);

  const convertPrice = () => {
    const rate = currencyRates[currency as keyof typeof currencyRates];
    return (price * rate).toFixed(2);
  };

  return { currency, convertPrice };
};

export default useCurrency;
