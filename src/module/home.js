import Row from "./addrows";
import table from "./table";

export default class home {
  static hero(){
    const hero = document.createElement('div');
    hero.classList.add('container', 'container-hero');
    // add table
    hero.appendChild(table());
    // add rows

    return hero
  }
}