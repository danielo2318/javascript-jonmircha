 const d = document,
 n = navigator;

export default function webCam(id){
  const $video = d.getElementById(id);
  //console.log(n.mediaDevices.getUserMedia)
//validar que la funcion exista en el navegador
  if(n.mediaDevices.getUserMedia){
   n.mediaDevices
   .getUserMedia({video:true, audio:false})
   .then((stream) => {
    console.log(stream);
    $video.srcObject = stream;
    $video.play();
   })
   .catch((err) => {
    $video.insertAdjacentHTML("beforebegin", `<p>Sucedió el siguiente error!:<mark>${err}</mark></p>`)
   //console.log(`Sucedió el siguiente error! ${err}`); 
    });  //esta funcion es una promesa class 47
  }
}
 