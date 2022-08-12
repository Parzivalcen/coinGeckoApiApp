export default class gecko {
  static getTopCoinsData = async (coinsPerPage, pageN) =>{
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsPerPage}&page=${pageN}&sparkline=false&price_change_percentage=24h`);
    let data = await response.json();
    return data;
  } 
}

