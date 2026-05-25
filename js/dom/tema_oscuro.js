const d = document,
    ls= localStorage;

export default function darkTheme(btn, classDark){
 const $themeBtn = d.querySelector(btn),
   $selectors = d.querySelectorAll("[data-dark]");
   //cuando quieres aplicar estilos por un tipo de atributo especifica corchetes [] y en css eso significa aplica la regla a elementos que tengan dicho atributo
   //console.log($selectors);

   let moon = "🌙",
      sun = "☀️";

const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
}

const darkMode = () => {
    $selectors.forEach(el => el.classList.add(classDark));
    $themeBtn.textContent= sun;
    ls.setItem("theme", "dark");
}

 d.addEventListener("click", (e) => {
    if(e.target.matches(btn)){
        //console.log($themeBtn.textContent);
        if($themeBtn.textContent === moon){
            darkMode();
        }else{
            lightMode();
        }
    }
 });

 d.addEventListener("DOMContentLoaded", (e) =>{
    if(ls.getItem("theme")=== null) ls.setItem("theme", "light");
   
    if(ls.getItem("theme") === "light")lightMode();
    
    if(ls.getItem("theme") === "dark")darkMode();
    
 })

}

//DOMContentLoaded, normalmente los programadores lo usan para ejecutar código JS 
// lo antes posible, pero asegurandonos de que los elementos HTML ya existen. Si intentas 
//seleccionar un btn con documentquerySelector antes de que este evento ocurra
// podrias recibir un null porque el navegador aun no sabe que ese boton existe