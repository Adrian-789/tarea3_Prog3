const inputName = document.getElementById("name");
const inputDirection = document.getElementById("direction");
const inputPhone = document.getElementById("phone");
const inputMail = document.getElementById("mail");
const inputWebSite = document.getElementById("webSite");
const inputResumen = document.getElementById("resumen");
const inputLanguage = document.getElementById("language");
const inputJobs = document.getElementById("jobs");
const inputEducation = document.getElementById("education");
const inputSkill = document.getElementById("skill");
const inputCertification = document.getElementById("certification");

function Clear(){
    inputName.value = "";
    inputName.classList.remove("input-error");
    inputName.classList.remove("input-success");
    inputName.focus();

    inputDirection.value = "";
    inputDirection.classList.remove("input-error");
    inputDirection.classList.remove("input-success");

    inputPhone.value = "";
    inputPhone.classList.remove("input-error");
    inputPhone.classList.remove("input-success");

    inputMail.value = "";
    inputMail.classList.remove("input-error");
    inputMail.classList.remove("input-success");

    inputWebSite.value = "";
    inputWebSite.classList.remove("input-error");
    inputWebSite.classList.remove("input-success");

    inputResumen.value = "";
    inputResumen.classList.remove("input-error");
    inputResumen.classList.remove("input-success");

    inputLanguage.value = "";
    inputLanguage.classList.remove("input-error");
    inputLanguage.classList.remove("input-success");

    inputJobs.value = "";
    inputJobs.classList.remove("input-error");
    inputJobs.classList.remove("input-success");

    inputEducation.value = "";
    inputEducation.classList.remove("input-error");
    inputEducation.classList.remove("input-success");

    inputSkill.value = "";
    inputSkill.classList.remove("input-error");
    inputSkill.classList.remove("input-success");

    inputCertification.value = "";
    inputCertification.classList.remove("input-error");
    inputCertification.classList.remove("input-success");
}

function createContact(){
    if(Validate()){
    
    const valueName = inputName.value;
    const valueDirection = inputDirection.value;
    const valuePhone = inputPhone.value;
    const valueMail = inputMail.value;
    const valueWebSite = inputWebSite.value;
    const valueResumen = inputResumen.value;
    const valueLanguage = inputLanguage.value;
    const valueJobs = inputJobs.value;
    const valueEducation = inputEducation.value;
    const valueSkill = inputSkill.value;
    const valueCertification = inputCertification.value;

    const contactContainer = document.getElementById("contact-container");

    const divCol = document.createElement("div");
    divCol.setAttribute("class","col12 col-sm-12 col-md-15 mt-3");

    const divMainCard = document.createElement("div");
    divMainCard.setAttribute("class","card");

    const divCardHeader = document.createElement("div");
    divCardHeader.setAttribute("class","card-header bg-danger text-light");

    const h5CardHeader = document.createElement("h5");
    h5CardHeader.setAttribute("class","text-center fw-bold");
    h5CardHeader.innerText = "Curriculum - Vitae";

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class","card-body");

    const divCardUL = document.createElement("div");
    divCardUL.setAttribute("class","card");

    const UlCardBody = document.createElement("ul");
    UlCardBody.setAttribute("class","list-group list-group-flush");
    
    const LiName = document.createElement("li");
    LiName.setAttribute("class","list-group-item");
    LiName.innerText = `Nombre: ${valueName}`;

    const LiDirection = document.createElement("li");
    LiDirection.setAttribute("class","list-group-item");
    LiDirection.innerText = `Direccion: ${valueDirection}`;

    const LiPhone = document.createElement("li");
    LiPhone.setAttribute("class","list-group-item");
    LiPhone.innerText = `Telefono: ${valuePhone}`;

    const LiMail = document.createElement("li");
    LiMail.setAttribute("class","list-group-item");
    LiMail.innerText = `Correo: ${valueMail}`;

    const LiWebSite = document.createElement("li");
    LiWebSite.setAttribute("class","list-group-item");
    LiWebSite.innerText = `Pagina Web: ${valueWebSite}`;

    const LiResumen = document.createElement("li");
    LiResumen.setAttribute("class","list-group-item");
    LiResumen.innerText = `Resumen: ${valueResumen}`;

    const LiLanguage = document.createElement("li");
    LiLanguage.setAttribute("class","list-group-item");
    LiLanguage.innerText = `Lenguajes: ${valueLanguage}`;

    const LiJobs = document.createElement("li");
    LiJobs.setAttribute("class","list-group-item");
    LiJobs.innerText = `Trabajos: ${valueJobs}`;

    const LiEducation = document.createElement("li");
    LiEducation.setAttribute("class","list-group-item");
    LiEducation.innerText = `Educacion: ${valueEducation}`;

    const LiSkill = document.createElement("li");
    LiSkill.setAttribute("class","list-group-item");
    LiSkill.innerText = `Habilidades: ${valueSkill}`;

    const LiCertification = document.createElement("li");
    LiCertification.setAttribute("class","list-group-item");
    LiCertification.innerText = `Certificaciones: ${valueCertification}`;

    const btnDelete = document.createElement("button");
    btnDelete.type = "button";
    btnDelete.setAttribute("class","btn btn-outline-danger float-end mt-2");
    btnDelete.innerText = "Eliminar";
    btnDelete.addEventListener("click",function(){

        if(confirm("Esta seguro que desea eliminar este CV?")){
            contactContainer.removeChild(divCol);
            alert("Se ha eliminado correctamente el CV seleccionado!");
        }

    });

    UlCardBody.appendChild(LiName);
    UlCardBody.appendChild(LiDirection);
    UlCardBody.appendChild(LiPhone);
    UlCardBody.appendChild(LiMail);
    UlCardBody.appendChild(LiWebSite);
    UlCardBody.appendChild(LiResumen);
    UlCardBody.appendChild(LiLanguage);
    UlCardBody.appendChild(LiJobs);
    UlCardBody.appendChild(LiEducation);
    UlCardBody.appendChild(LiSkill);
    UlCardBody.appendChild(LiCertification);

    divCardUL.appendChild(UlCardBody);
    divCardBody.appendChild(divCardUL);
    divCardBody.appendChild(btnDelete);
    divCardHeader.appendChild(h5CardHeader);
    divMainCard.appendChild(divCardHeader);
    divMainCard.appendChild(divCardBody);
    divCol.appendChild(divMainCard);

    contactContainer.appendChild(divCol);

    Clear();

}else{
    alert("Debe de completar toda la informacion requerida");
}

}

function Validate(){
let isValid = true;
    
    const valueName = inputName.value;
    const valueDirection = inputDirection.value;
    const valuePhone = inputPhone.value;
    const valueMail = inputMail.value;
    const valueWebSite = inputWebSite.value;
    const valueResumen = inputResumen.value;
    const valueLanguage = inputLanguage.value;
    const valueJobs = inputJobs.value;
    const valueEducation = inputEducation.value;
    const valueSkill = inputSkill.value;
    const valueCertification = inputCertification.value;

    if(valueName == ""|| valueName == null || valueName == undefined){
        isValid = false;
        inputName.classList.add("input-error");
        inputName.classList.remove("input-success");
    }else{
        inputName.classList.remove("input-error");
        inputName.classList.add("input-success");
    }

    if(valueDirection == ""|| valueDirection == null || valueDirection == undefined){
        isValid = false;
        inputDirection.classList.add("input-error");
        inputDirection.classList.remove("input-success");
    }else{
        inputDirection.classList.remove("input-error");
        inputDirection.classList.add("input-success");
    }

    if(valuePhone == ""|| valuePhone == null || valuePhone == undefined){
        isValid = false;
        inputPhone.classList.add("input-error");
        inputPhone.classList.remove("input-success");
    }else{
        inputPhone.classList.remove("input-error");
        inputPhone.classList.add("input-success");
    }

    if(valueMail == ""|| valueMail == null || valueMail == undefined){
        isValid = false;
        inputMail.classList.add("input-error");
        inputMail.classList.remove("input-success");
    }else{
        inputMail.classList.remove("input-error");
        inputMail.classList.add("input-success");
    }

    if(valueWebSite == ""|| valueWebSite == null || valueWebSite == undefined){
        isValid = false;
        inputWebSite.classList.add("input-error");
        inputWebSite.classList.remove("input-success");
    }else{
        inputWebSite.classList.remove("input-error");
        inputWebSite.classList.add("input-success");
    }

    if(valueResumen == ""|| valueResumen == null || valueResumen == undefined){
        isValid = false;
        inputResumen.classList.add("input-error");
        inputResumen.classList.remove("input-success");
    }else{
        inputResumen.classList.remove("input-error");
        inputResumen.classList.add("input-success");
    }

    if(valueLanguage == ""|| valueLanguage == null || valueLanguage == undefined){
        isValid = false;
        inputLanguage.classList.add("input-error");
        inputLanguage.classList.remove("input-success");
    }else{
        inputLanguage.classList.remove("input-error");
        inputLanguage.classList.add("input-success");
    }

    if(valueJobs == ""|| valueJobs == null || valueJobs == undefined){
        isValid = false;
        inputJobs.classList.add("input-error");
        inputJobs.classList.remove("input-success");
    }else{
        inputJobs.classList.remove("input-error");
        inputJobs.classList.add("input-success");
    }

    if(valueEducation == ""|| valueEducation == null || valueEducation == undefined){
        isValid = false;
        inputEducation.classList.add("input-error");
        inputEducation.classList.remove("input-success");
    }else{
        inputEducation.classList.remove("input-error");
        inputEducation.classList.add("input-success");
    }

    if(valueSkill == ""|| valueSkill == null || valueSkill == undefined){
        isValid = false;
        inputSkill.classList.add("input-error");
        inputSkill.classList.remove("input-success");
    }else{
        inputSkill.classList.remove("input-error");
        inputSkill.classList.add("input-success");
    }

    if(valueCertification == ""|| valueCertification == null || valueCertification == undefined){
        isValid = false;
        inputCertification.classList.add("input-error");
        inputCertification.classList.remove("input-success");
    }else{
        inputCertification.classList.remove("input-error");
        inputCertification.classList.add("input-success");
    }

    return isValid;
}