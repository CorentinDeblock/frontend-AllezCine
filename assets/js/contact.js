
let texte = "";

document.getElementById("envoyer").addEventListener("click", function(){
    let nom = document.getElementById("firstname").value;
    let prenom = document.getElementById("lastname").value;
    let mail = document.getElementById("email").value;
    let sujet = document.getElementById("subject").value;
    let msg = document.getElementById("message").value;
   
    texte = "Tu t'appelles " + nom + " " + prenom + ", ton email est : " + mail + ". Ton sujet de message est: " + sujet + " et le contenu est: " + msg;
    alert(texte);
}); 



document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 3000) ? "cVisible" : "cInvisible";
    };
});