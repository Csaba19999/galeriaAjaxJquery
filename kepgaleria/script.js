$(function () {
  var kepObj = [
    {
      cim: "kep1",
      eleres: "kep1.jpg",
      leiras: "kep1 leirasa",
    },
    {
      cim: "kep2",
      eleres: "kep2.jpg",
      leiras: "kep2 leirasa",
    },
    {
      cim: "kep3",
      eleres: "kep3.jpg",
      leiras: "kep3 leirasa",
    },
  ];

  const galeriaSzulo = $("#bazi-valaszto");
  let sablonElem = $(".kep-valaszto");

  //let ujElem = sablonElem.clone().appendTo(galeriaSzulo);
  console.log(kepObj[0]);
  //const ujKartya = new Kartya(ujElem,kepObj[0])
  let idIndex = 0;
  kepObj.forEach(function (elem) {
    let ujElem = sablonElem.clone().appendTo(galeriaSzulo);
    const ujKartya = new Kartya(ujElem, elem, idIndex);
    idIndex++;
  });

  const nagyKepSzulo = $("#kep-nagy");
  let nagyKep = sablonElem.clone().appendTo(nagyKepSzulo);
  const NagyKartya = new Kartya(nagyKep, kepObj[0]);
  sablonElem.remove();

  $(window).on(".kepValaszto",(event)=>{
    console.log(event.detail);
    //$('#kep-nagy img').attr("src", event.detail.eleres);
    //$('#kep-nagy h3').html(event.detail.cim);
    //$('#kep-nagy pp').html(event.detail.leiras);
    NagyKartya.setAdatom(event.detail);
  });


  


});
