import "./styles.css";

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

3) renderli come componenti 
il nome della funzione deve avere il primo carattere in grande
se passiamo dei parametri li passiamo nel tag da noi creato come attributi html, 
e dentro la funzione chiamo i parametri passati nel html, dentto le parentesi graffe

<appHeadr list={xxx} >

nel file esportato : 
export function({list}){}

*/

export default function App() {
  const appHeader = () => (
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
  );

  const appMenuLeft = () => (
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
  );

  const appContent = () => <div class="box s66 ">contenuto pagina</div>;
  const appFooter = () => (
    <>
      <div class="box s100 ">all reserved</div>
      <div class="box s100 secondBg">copyright 2022</div>
    </>
  );

  return (
    <div className="App">
      {appHeader()}
      {appMenuLeft()}
      {appContent()}
      {appFooter()}
    </div>
  );
}
