import { createContext, useEffect, useState } from "react"

export const StockContext = createContext();

const StockContextProvider = (props)=> {

  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: 'usd',
    symbol: '$'
  });

  const fetchAllStock = async () => {
    const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-EhByxvHe1EPSJvzHuxG7vdYZ'}
};

  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo`, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

  }

  useEffect(() => {
    fetchAllStock();
  }, [currency])

  const contextValue = {
    allCoin, currency, setCurrency
  };

  return(
    <StockContext.Provider value={contextValue}>
      {props.children}
    </StockContext.Provider>
  )
}

export default StockContextProvider;