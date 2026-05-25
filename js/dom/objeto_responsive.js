const d= document,
     w = window;
//El metodo matchMedia() es una herramienta de JavaScript que te permite verificar si el navegador
//cumple con una media query especifica
export default function responsiveMedia(id, mq, mobileContent, desktopContent){
  let breakpoint = w.matchMedia(mq);
  
  const responsive = (e) => {
    if(e.matches){
        d.getElementById(id).innerHTML = desktopContent;
    }else{
        d.getElementById(id).innerHTML = mobileContent;
    }

    //console.log("MQ", breakpoint, e.matches)
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}