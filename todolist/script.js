//gerekli DOM'lar
let ulDOM = document.querySelector("#list");
let createSpanDOM = `<span class = "close">x</span>`
let liDOm = document.querySelectorAll("li");
let ekleButtonDOM = document.querySelector("#liveToastBtn");
let clickClose = document.getElementsByClassName("close");
let arr = []; //li elemanlarını arr listesinde tutuyorum.

//li elemanlarına span eklemek
liDOm.forEach(index => {
    index.innerHTML += createSpanDOM; // sabit li elemanlarına span eklemek
    arr.push(index); // li'leri arr listesine eklemek
});


// çarpıya tıklandıgında eleman silmek
for (let i = 0; i < clickClose.length; i++) {
    clickClose[i].addEventListener("click", function() { //close'lara tek tek ulaşmak
        this.parentElement.style.display = "none"; //li elemanlarının displayını none yapmak
    });
}

arr.forEach(index => { // arr arrayındaki li elemanlarına tek tek ulaşmak
    index.addEventListener("click", () => { // li elemanlarına tıklama fonsıyonu
        index.classList.toggle("checked") // checked classını toggle'lamak
    });

})

//listeye li ve li'nin içine span elemanı eklemek
let newElement = () => { // html'de tanımlı newElement fonksıyonu. ekle butonuna basıldıgında çalış.
    let createLiDOM = document.createElement("li");
    let inputValDOM = document.querySelector("#task");
    let errorDOM = document.querySelector(".error");
    let successDOM = document.querySelector(".success");
    let toastDOM = document.querySelector(".toast");
    
    if (!(inputValDOM.value == "")) { // input degerı boş değil ise çalış
        createLiDOM.innerHTML = inputValDOM.value + createSpanDOM; //li ierisine inputtan gelen değeri, span'ımızı eklemek
        ulDOM.append(createLiDOM); // listemize li elemanımızı eklemek
        inputValDOM.value = ""; // input degerımızı 0'lamak
        arr.push(createLiDOM) // yeni oluşan li elemanını arr listesine pushlamak.
        successDOM.classList.replace("hide","show"); // listeye eklendi toast'ını göstermek
    }

    else {
        errorDOM.classList.replace("hide","show"); // boş input durumunda errorDOM toastını gostermek
    }

    // yeni eklenen li elementi için close(spanımızı) çaıştırmak.
    for (let i = 0; i < clickClose.length; i++) {
        clickClose[i].addEventListener("click", function() {
            this.parentElement.style.display = "none";

            if(this.parentElement.parentElement == errorDOM){ // errorDOM diye tanımlı toastımız için işlemler
                this.parentElement.style.display = "inline" // toastın içindeki close(x) kaybolmaması için.
                errorDOM.classList.replace("show", "hide"); // toastı kapatmak
            }

            if(this.parentElement.parentElement == successDOM){
                this.parentElement.style.display = "inline"
                successDOM.classList.replace("show", "hide");
            }
            
        });
    }

    arr.forEach(index => { //arr içindeki yeni liste elemanlarına ulaşmak
        index.addEventListener("click", () => { //click 
            index.classList.toggle("checked")  //yeni eklenen elemanlardaki checked classını toggle'lamak.
        });
    })
    
};