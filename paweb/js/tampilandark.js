var element = document.body;

function ubahWarna(){
     element.classList.toggle("gelap");
     if(element.classList.contains("gelap")){
          localStorage.setItem('tema', 'gelap');
     }else{
          localStorage.setItem('tema', 'terang');
     }
}

var tema = localStorage.getItem("tema");