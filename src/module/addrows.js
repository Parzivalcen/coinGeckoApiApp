import gecko from "./getData";

export default class Row {
  constructor (position, coin, price, priceChange, marketCap){
    this.position = position;
    this.coin = coin;
    this.price = price;
    this.priceChange = priceChange;
    this.marketCap = marketCap;
  }

  static storeData(page){
    let data =  gecko.getTopCoinsData(100, page);
    console.log(data);
    return {data};
  }

  static async newRow(number, page){
    let data = await this.storeData(page).data;
    data = data [number];
    const newRow = new Row(
      data.market_cap_rank,
      data.name,
      data.current_price,
      data.price_change_percentage_24h,
      data.market_cap);
      return newRow;
    // loop to add all coins
    
  }
  static async addRow(row){
    const tableBody = document.querySelector('tbody');
    const tableRow = document.createElement('tr');
    row = await row;
    tableRow.innerHTML = `
    <th scope="row">${row.position}</th>
      <td>${row.coin}</td>
      <td>${row.price}</td>
      <td>${row.priceChange}</td>
      <td>${row.marketCap}</td>
    
    `
    
    tableBody.append(tableRow)
    // console.log(tableBody.innerHTML);
  }
  static pagination (){
    const btnContainer = document.querySelector('.page-control-btns');
    const tableBody = document.querySelector('tbody');
    const btn = document.querySelector('.next-page');
    btn.addEventListener('mouseup', async ()=>{
      tableBody.innerHTML = '';
      let currentPage = btnContainer.querySelector('span').innerText;
      currentPage = +currentPage.charAt(currentPage.length -1); 
      for(let i = 0; i<100; i++){
        await this.addRow(this.newRow(i, currentPage++));
      }
    })
  }
}