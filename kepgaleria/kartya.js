class Kartya {

    constructor(elem, adat, idIndex){
        //Létrehozunk változókat az új elemhez.
        this.elem = elem;
        this.idIndex = idIndex;
        //Változókat hozunk létre az elem eggyek grafikus részihez.
        this.cim = this.elem.children("h3");
        this.kep = this.elem.children("img").attr('id', idIndex);
        this.leiras = this.elem.children("p");
        this.adat = adat;
        //konténer elemkenek értékeket adunk: 
        this.cim.html(this.adat.cim);
        this.kep.attr("src",this.adat.eleres);
        this.cim.html(this.adat.leiras);
    }


   


}