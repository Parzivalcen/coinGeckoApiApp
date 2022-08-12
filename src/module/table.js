export default function table () {
  const tableContainer = document.createElement('div')
  tableContainer.classList.add('table-container');
  tableContainer.innerHTML = `
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Coin</th>
      <th scope="col">Price</th>
      <th scope="col">24h</th>
      <th scope="col">Market cap</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>
<div class="page-control-btns">
  <button class="previous-page">previous</button>
  <button class="next-page">next</button>
  <span>page number 1</span>
</div>`
return tableContainer
}