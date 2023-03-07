



const main              = document.querySelector('.main');
const arrow_bottom      = document.querySelector('.image-arrow');
const buttonSelection   = document.querySelector('.container-popular-desc');

const arrow_up          = document.createElement('img');
arrow_up.src            = "./img/arrow-up.png"
arrow_up.style.width    = "6%"



// ============= Data Movies ==============

const movies = [
    {
        title   : 'Fight Club',
        rating  : 8.9,
        image   : './img/movies/fightclub.jfif',
        date    : 'Feb 01,2023'
    },
    {
        title   : 'The 100',
        rating  : 8.0,
        image   : './img/movies/The_100.webp',
        date    : 'Jan 02,2020'
    },
    {
        title   : 'The Gray Man',
        rating  : 8.0,
        image   : './img/movies/grayman.jfif',
        date    : 'Mar 05,2018'
    },
    {
        title   : 'The Last Dances',
        rating  : 9.0,
        image   : './img/movies/thelastdance.jfif',
        date    : 'Apr 10,2023'
    },
    {
        title   : 'The Witcher',
        rating  : 8.5,
        image   : './img/movies/thewitcher.jfif',
        date    : 'Mar 10,2021'
    },
    {
        title   : 'The Vikings',
        rating  : 8.5,
        image   : './img/movies/viking.jfif',
        date    : 'Oct 26,2023'
    },
    {
        title   : 'The Breaking Bad',
        rating  : 8.8,
        image   : './img/movies/breakingbad.jfif',
        date    : 'Dec 31,2021'
    },
    {
        title   : 'Peaky Blinders',
        rating  : 9.5,
        image   : './img/movies/peakyblinders.jpg',
        date    : 'Apr 10,2021'
    },
    {
        title   : 'The Umbrella Academy',
        rating  : 8.6,
        image   : './img/movies/umbrellaacademy.jfif',
        date    : 'Jun 21,2022'
    },
    {
        title   : 'Wednesday',
        rating  : 8.5,
        image   : './img/movies/wednesday.jfif',
        date    : 'Jul 20,2021'
    },
]



// =========== Mapping Random ==============

movies.map((item) => {
    
    main.innerHTML += `
    <div class="box" >
        <img src="${item.image}" alt="" class="img-full">
        <div style="padding: 8px;">
            <h5>${item.title}</h5>
            <p style="font-size: 14px;color: rgb(132, 132, 132);">${item.date}</p>
        </div>
        </div>
    `

        

})



// =========== Function Asc And Dsc ===============
const asc = () => {
    
    
    const text              = document.querySelector('.text-popularity');
    
    
    if ( text.innerHTML === "Popularity Descending") {
    
    arrow_bottom.parentNode.removeChild(arrow_bottom);
    buttonSelection.append(arrow_up)
    
    text.innerHTML = "Popularity Ascending"
    main.innerHTML = ''
    
    // Sorting  
    movies.sort((a, b) => {return a.rating-b.rating})
    
    
    movies.map((item) => {
        
        //Mapping Movies
        main.innerHTML += `
                <div class="box" >
                <img src="${item.image}" alt="" class="img-full">
                <div style="padding: 8px;">
                <h5>${item.title}</h5>
                <p style="font-size: 14px;color: rgb(132, 132, 132);">${item.date}</p>
                </div>
                </div>
            `
        })

    } else {
        
        
        text.innerHTML      = "Popularity Descending"
        main.innerHTML      = ''
        
        arrow_up.parentNode.removeChild(arrow_up)
        buttonSelection.append(arrow_bottom)
        
        movies.sort((a, b) =>{return b.rating-a.rating})
        
        movies.map((item) => {
            
            main.innerHTML += `
                <div class="box" >
                <img src="${item.image}" alt="" class="img-full">
                <div style="padding: 8px;">
                <h5>${item.title}</h5>
                <p style="font-size: 14px;color: rgb(132, 132, 132);">${item.date}</p>
                </div>
                </div>
                `
            })


    }

    

}


   














