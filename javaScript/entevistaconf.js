window.onload = function(){
    const btnRegister = document.getElementById("btnRegister")
    btnRegister.addEventListener("click",function(){})
}
swal({
    title: "Participar na entrevista",
    html:
        '<input id= "txtName" class="swal2-input" placeholder="name">'+
        '<input id= "txtFunction" class="swal2-input" placeholder="funtion">',
    showCancelButton:true,
    confirmButtonText: "Participar",
    cancelButtonText: "Cancelar",
    showLoaderOnConfirm: true,
    preConfirm:() => {
        const name= document.getElementById('txtName').value
        const funcao= document.getElementById('txtFunction').value
        const url_base = "https://fcawebbook.herokuapp.com"
        return
    }


})