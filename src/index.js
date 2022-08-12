import Row from "./module/addrows";
import gecko from "./module/getData";
import home from "./module/home";
import table from "./module/table";

const body = document.body

const homePage = home.hero();
body.appendChild(homePage);
for(let i = 0; i<100; i++){
  await Row.addRow(Row.newRow(i, 1));
}
Row.pagination();

// Row.newRow(1);
