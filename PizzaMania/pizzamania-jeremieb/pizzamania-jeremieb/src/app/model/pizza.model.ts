export class Pizza {

  miel: boolean;
  anchois: boolean;
  magret: boolean;
  jambon: boolean;
  pate: string;
  base: string;

  constructor() {
    this.anchois = false;
    this.magret = false;
    this.miel = false;
    this.jambon = false;
    this.base = null;
    this.pate = null;
  }

  public getPrix(): number {

    let prix = 0
    if (this.miel) {
      prix += 2;
    }
    if (this.magret) {
      prix += 4;
    }
    if (this.jambon) {
      prix += 2;
    }
    if (this.anchois) {
      prix += 1;
    }
    if (this.base === 'tomate') {
      prix += 3;
    }
    if (this.base === 'creme') {
      prix += 4;
    }
    return prix;
  }
  public getIngrediant(): string{
    let igts: string;
    igts.concat(' ,').concat(this.base);
    if (this.miel){
      igts.concat(' ,Miel');
    }

    if (this.magret){
      igts.concat(' ,Magret');
    }

    if (this.anchois){
      igts.concat(' ,Anchois');
    }

    if (this.jambon){
      igts.concat(' ,Jambon');
    }
    return igts;
  }

}
