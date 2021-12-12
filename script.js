// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante “Mi Piace” di un post, incrementare il contatore di like al post e cambiare colore al testo del bottone.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
// Buon lavoro!




const post = [
    {
        name: "chiara passaro",
        profile: "image=12",
        month: "2 mesi fa",
        text: "voluptatem, rerum deserunt laudantium, est vel ratione illum architecto nihil at explicabo quos tempora? Provident.",
        img:"image=1",
        likes: 23,
    },
    {
        name: "fulvio gaudenzi",
        profile: "image=16",
        month: "3 mesi fa",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        img:"image=2",
        likes: 26,
    },
    {
        name: "chiaro sole",
        profile: "image=110",
        month: "1 mesi fa",
        text: "dwivuevowvovwov",
        img:"image=3",
        likes: 43,
    },
    {
        name: "togli le",
        profile: "image=10",
        month: "1 mesi fa",
        text: "ceiuchehqwiovhioewveoivoqwibvienviodwnciudbcbudiio",
        img:"image=4",
        likes: 45,
    },
    {
        name: "mani dal naso",
        profile: "image=9",
        month: "6 mesi fa",
        text: "oewihvewoivnew",
        img:"image=5",
        likes: 12,
    },
    {
        name: "susanna fiore",
        profile: "image=8",
        month: "7 mesi fa",
        text: "cewicewiuf9248fb327g24fuhu2f",
        img:"image=6",
        likes: 212,
    },

]

const container = document.getElementById("container");



const getInitials = (name) => {
    let initials = name.split(' ');
    
    if(initials.length > 1) {
      initials = initials.shift().charAt(0) + initials.pop().charAt(0);
    } else {
      initials = name.substring(0, 2);
    }
    
    return initials.toUpperCase();
  }
  

// cambio data
function changeDate() {
    const changeMonths = ["2 months ago", "3 months ago", "1 months ago", "1 months ago", "6 months ago" , "7 months ago"] 

    for (let i = 0; i < post.length; i++) {
        const element = post[i];
        element.month = changeMonths[i]
        
    }
}

changeDate()

// /cambio data

for (let i = 0; i < post.length; i++) {
    const element = post[i];
    let initials = getInitials(element.name)

    if (element.profile == "") {
        const card = `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <div class="profile-pic-default">
                    <span>${initials}</span>
                     </div>                   
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.name}</div>
                    <div class="post-meta__time">${element.month}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.text}</div>
        <div class="post__image">
            <img src="https://unsplash.it/300/300?${element.img}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
        </div>
        `   
            container.innerHTML += card
    
    } else {
        const card = `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="https://unsplash.it/300/300?${element.profile} " alt="${element.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.name}</div>
                    <div class="post-meta__time">${element.month}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.text}</div>
        <div class="post__image">
            <img src="https://unsplash.it/300/300?${element.img}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
        </div>
        `   
            container.innerHTML += card
    }

 
    
}



const button = document.querySelectorAll(".likes__cta");
const likes_button = document.querySelectorAll(".js-likes-counter");
const green = document.querySelectorAll(".like-button")

for (let x = 0; x < button.length; x++) {
    let likes = likes_button[x] // classe like
    const element = button[x]; //tutti bottoni
    let elementLikes = post[x].likes; //24
    let greenLikes = green[x];
    element.addEventListener("click", function() { 
        if (!greenLikes.classList.contains("like-button--liked")) {
            likes.innerHTML = elementLikes += 1;
            greenLikes.classList.add("like-button--liked");   
        }else {
            likes.innerHTML = elementLikes -= 1; 
            greenLikes.classList.remove("like-button--liked")
        }
    })
}





// const team = [

//     {
//         name: "pippo solo",
//         profile: 23,
//         date: "06/12/2021",
//         text: "et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         img: 21,
//         likes: 24
//     },
//     {
//         name: "pippa sola",
//         profile: 24,
//         date: "07/13/2021",
//         text: "ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores",
//         img: 25,
//         likes: 26
//     },
//     {
//         name: "pippo solo",
//         profile: 27,
//         date: "09/14/2021",
//         text: "et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         img: 28,
//         likes: 29
//     },
//     {
//         name: "pippo solo",
//         profile: 29,
//         date: "10/18/2021",
//         text: "ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores",
//         img: 30,
//         likes: 227
//     },
//     {
//         name: "pippo solo",
//         profile: 31,
//         date: "10/12/2021",
//         text: "et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         img: 21,
//         likes: 24
//     }, 
// ]

// const container = document.getElementById("container");

// function init(container, team) {

    

//     for (let i = 0; i < team.length; i++) {
//         const element = team[i];

//         let change = `<img class="profile-pic" src="https://unsplash.it/300/300?image=${element.profile}" alt="${element.name}">` 

//         if (element.profile == "") {
//             change = `
//             <div class="profile-pic-default" >
//             <span>${getInitials(element.name)}</span>
//             </div>
//             `
//         }

//         container.innerHTML += `
//         <div class="post">
//             <div class="post__header">
//                 <div class="post-meta">                    
//                     <div class="post-meta__icon">
//                        ${change}                  
//                     </div>
//                     <div class="post-meta__data">
//                         <div class="post-meta__author">${element.name}</div>
//                         <div class="post-meta__time">${element.date}</div>
//                     </div>                    
//                 </div>
//             </div>
//             <div class="post__text">${element.text}</div>
//             <div class="post__image">
//                 <img src="https://unsplash.it/300/300?image=${element.img}
//                 " alt="">
//             </div>
//             <div class="post__footer">
//                 <div class="likes js-likes">
//                     <div class="likes__cta">
//                         <a class="like-button  js-like-button"  data-postid="1">
//                             <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
//                             <span class="like-button__label">Mi Piace</span>
//                         </a>
//                     </div>
//                     <div class="likes__counter">
//                         Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
//                     </div>
//                 </div> 
//             </div>            
//         </div>
//         `
//     }
// }

// function changeDate(team) {
//     const array = ["2 months ago", "3 months ago", "1 months ago", "1 months ago"]
//     for (let i = 0; i < team.length; i++) {
//         const arrayTeam = array[i]
//         const element = team[i];
//         element.date = arrayTeam
//     }
// }

// const getInitials = (name) => {
//     let initials = name.split(' ');
    
//     if(initials.length > 1) {
//       initials = initials.shift().charAt(0) + initials.pop().charAt(0);
//     } else {
//       initials = name.substring(0, 2);
//     }
    
//     return initials.toUpperCase();
//   }



// changeDate(team);

// init(container, team);

// const button = document.querySelectorAll(".likes__cta");
// const greenLikes = document.querySelectorAll(".like-button");
// const likes = document.querySelectorAll(".js-likes-counter");


// for (let i = 0; i < button.length; i++) {
//     const arrayButton = button[i];
//     const arrayGreen = greenLikes[i];
//     const elementLike = likes[i];
//     let Elementteam = team[i].likes

//     arrayButton.addEventListener("click", function () {
//         if (arrayGreen.classList.contains("like-button--liked")) {
//             arrayGreen.classList.remove("like-button--liked")
//             elementLike.innerHTML = Elementteam -= 1
//         }else {
//             arrayGreen.classList.add("like-button--liked")
//             elementLike.innerHTML = Elementteam += 1
//         }

       
//      })
// }































