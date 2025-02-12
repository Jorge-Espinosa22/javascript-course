import{i as l}from"./bootstrap.esm-DhjEgBJg.js";import{i as a}from"./footer-CCTUu1Yo.js";const o=e=>{e.addEventListener("submit",i=>{i.preventDefault(),console.log("Manejo del botón registro")})};window.addEventListener("load",()=>{document.getElementById("app").innerHTML=`
    ${l()} 
    <main id="app" class="container my-4">
        <div class="row justify-content-center">
            <!-- image -->
            <div class="col-md-6 d-none d-md-block">
                <img class="img-fluid rounded-3" src="/public/images/ninja-girl-02.jpg"
                    alt="Chica ninja con trofeos de desarrolladora web">
            </div>
            <!-- contact form -->
            <div class="col-md-6">
                <form id="contactForm">
                    <div class="rounded-box">

                        <div class="mx-3 mb-3">                            
                            <label for="name" class="form-label"><i class="bi bi-person-hearts me-2"></i>Nombre</label>
                            <div class="position-relative">
                                <input type="text" class="form-control form-control-with-icon" id="name"
                                    placeholder="Arenita">
                            </div>
                        </div>

                        <div class="mx-3 mb-3">
                            
                            <label for="family-name" class="form-label"><i class="bi bi-heart-arrow me-2"></i>Apellido</label>
                            <div class="position-relative">
                                <input type="text" class="form-control form-control-with-icon" id="family-name"
                                    placeholder="Mejillas">
                            </div>
                        </div>

                        <div class="mx-3 mb-3">
                            
                            <label for="email" class="form-label"><i class="bi bi-envelope-paper-heart-fill me-2"></i>Email</label>
                            <div class="position-relative">
                                <input type="email" class="form-control form-control-with-icon text-lowercase" id="email"
                                    placeholder="bob@email.com">
                            </div>
                        </div>

                        <div class="mx-3 mb-3">
                            
                            <label for="new-password" class="form-label"><i class="bi bi-arrow-through-heart-fill me-2"></i>Password</label>
                            <div class="position-relative">
                                <input type="password" class="form-control form-control-with-icon" id="new-password"
                                    placeholder="*******">
                            </div>
                        </div>

                        <div class="mx-3 mb-3">
                            
                            <label for="bday" class="form-label"><i class="bi bi-calendar-heart-fill me-2"></i>Fecha de nacimiento</label>
                            <div class="position-relative">
                                <input type="date" class="form-control form-control-with-icon" id="bday">
                            </div>
                        </div>
                    </div>

                    <div class="mx-3 contenedor-terminos-boton">
                        <input id="terms-agreement" type="checkbox">
                        <label for="terms-agreement">Acepto términos y condiciones </label>
                        <button type="submit" class="mx-3 btn btn-warning">Registrar</button>
                    </div>

                    <!-- alert message -->
                    <div id="alert-message" class="alert alert-warning my-2" role="alert" style="display: none;">
                    </div>

                    <!-- error message -->
                    <div id="error-message" class="alert alert-danger my-2" role="alert" style="display: none;">
                    </div>

                </form>
            </div>
        </div>
    </main>
    ${a()}
`,o(document.getElementById("contactForm"))});
