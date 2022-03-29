import "../styles.css";

/*
 1) spezzare l'html nelle funzioni di :
 appHeader, appMenuLeft, Content, Footer
 
 in modo che nel return vedo solo 

 <div>
{appHeader()}
{appMenuleft()}
{appContent()}
{appFooter()}
 </div>
 
Attenzione, quando faccio return, devo sempre restituire in solo elemento c
con al suo interno il resto dei tag esempio 

ERRATO : 
const appFooter = ()=>     
      <div class="box s66 ">contenuto pagina</div>
      <div class="box s100 secondBg">copyright 2022</div>

corretto : 

const appFooter = ()=>   
  <div>  
     <div class="box s66 ">contenuto pagina</div>
     <div class="box s100 secondBg">copyright 2022</div>
  </div>

2) mettere le funzioni in files separati (file) ESPORTANDOLE
importarli e vedere se funzionano

3) se voglio espoertarli con export default, devo eliminare const e nome esempio :
  const appHeader = () => 

  diventa senza const e appHeader e con default dopo export :

    export default () => (

  se esporto senza default devo invece inserite const AppHeader

  export const AppHeader = () => s

  in questo caso aggiusto subito il nome con il primo carattere grande, 
  in modo che react capisce che è un componente e può usarlo come tag html. 

4) renderli come componenti 
il nome della funzione deve avere il primo carattere in grande
se passiamo dei parametri li passiamo nel tag da noi creato come attributi html, 
e dentro la funzione chiamo i parametri passati nel html, dentto le parentesi graffe

<appHeadr list={xxx} >

nel file esportato : 
export function({list}){}

*/

export default function () {
  return (
    <div className="App">
      <div class="box s100 firsBg">
        <div class="box s30">First React</div>
        <div class="box s50 right textWhite">
          <a href="home" class="button textWhite">
            home
          </a>
          <a href="prodotti" class="button textWhite">
            prodotti
          </a>
          <a href="contatti " class="button textWhite">
            contatti
          </a>
        </div>
      </div>

      <div class="box s30 ">
        <ul>
          <li>
            <a href="somepage.html" class="button">
              Camion
            </a>
          </li>
          <li>
            <a href="somepage.html" class="button">
              Vetture
            </a>
          </li>
          <li>
            <a href="somepage.html" class="button">
              Moto
            </a>
          </li>
        </ul>
      </div>
      <div class="box s100 ">Contenuto</div>
      <div class="box s100 ">footer</div>
      <div class="box s100 secondBg">copyright 2022</div>
    </div>
  );
}
