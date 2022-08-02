let socket = new io();

window.onload=function(){
  let parrafo = document.getElementById("parrafo")
  let form_data_user = document.getElementById('formulario')
        form_data_user.addEventListener("submit", e =>{
            e.preventDefault();
              let chat = {
                email: e.target[0].value,
                text: e.target[1].value,
                idUser: e.target[2].value,
                tipo: 'usuario'
            }
          
                          
            if(chat.email == "" || chat.consulta == ""){
              alert("Un campo incompleto");
            }
            form_data_user.reset();
            socket.emit("nuevoChat", chat)
        })
     
         /* socket.on("iniciarChat",() => {
          console.log("entro a iniciarChat");
          console.log(chats); */
           /*  if(data.length > 0){
              
                fill_messageInit(data) 
            } 
          }) */

        socket.on("mensaje", data =>{
          console.log(data)
          fill_message(data)
        })

          function fill_message(data){
            //let sms_html = ``;
            //for(const sms of data){
                let sms_html = `<span style="color: green;"><b>${data.email}</b></span><span style="color: red;">|${data.hora}|</span><p><i> ${data.text} </i></p>`
           // }
            parrafo.innerHTML += sms_html
        }

       /*  function fill_messageInit(data){
              let sms_html = "";
            for(const sms of data){
                sms_html += `<p><b>${sms.mail}</b>|${sms.hora}|:<i> ${sms.text} </i> <img src="${sms.avatar}" alt="" style="height: 50px; width: 50px;"></p>`
            }
            parrafo.innerHTML = sms_html
        } */
      }