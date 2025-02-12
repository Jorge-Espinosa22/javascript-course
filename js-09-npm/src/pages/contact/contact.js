import "/src/css/styles.scss";
import "./contact.css"

import { insertMainHeader } from "/src/modules/header/header";
import { insertMainFooter } from "/src/modules/footer/footer";
import * as bootstrap from 'bootstrap';

window.addEventListener( "load", async() => document.getElementById("app").innerHTML = `
    ${insertMainHeader()} 
    <main class="container text-center my-4">
      <h1>Contáctanos</h1>
    </main>
    ${insertMainFooter()}
`
);