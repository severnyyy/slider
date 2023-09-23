const entities = [{
        city: "Rostov-on-Don LCD admiral",
        apartmentArea: "81 m2",
        repairTime: "3.5 months"
    },

    {
        city: "Sochi Thieves",
        apartmentArea: "105 m2",
        repairTime: "4 months"
    },

    {
        city: "Rostov-on-Don Patriotic",
        apartmentArea: "93 m2",
        repairTime: "3 months"
    }
]

const cityTitle = document.querySelector('#cityTitle');
const apartmentArea = document.querySelector('#apartmentArea');
const repairTime = document.querySelector('#repairTime');
const pagination = document.querySelectorAll('.point');
const slider = document.querySelector('#slider');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const slideTitle = document.querySelectorAll('.slide-title');
const underline = document.querySelectorAll('.underline');
let index = 0;


const updatePag = () => {
    pagination.forEach((el) => el.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')
    slideTitle.forEach((el) => el.style.color = 'rgba(255, 255, 255, 0.3)')
    underline.forEach((el) => el.style.border = '#131313');
    pagination[index].style.backgroundColor = 'white';
    underline[index].style.border = '1px solid #E3B873';
    slideTitle[index].style.color = '#E3B873'
};

const updateInfo = () => {
    cityTitle.innerText = entities[index].city
    apartmentArea.innerText = entities[index].apartmentArea
    repairTime.innerText = entities[index].repairTime
}

const prevSlide = () => {
    index == 0 ? index = 2 : index--;
    slider.scrollLeft = (index * (slider.clientWidth)) + (index * 10)
    updatePag();
    updateInfo();
}

const nextSlide = () => {
    index == 2 ? index = 0 : index++;
    slider.scrollLeft = (index * (slider.clientWidth)) + (index * 10)
    updatePag();
    updateInfo();
}

pagination.forEach((el, ind) => {
    el.addEventListener('click', () => {
        index = ind;
        updatePag();
        updateInfo();
        slider.scrollLeft = (index * (slider.clientWidth)) + (index * 10)
    })
})

slideTitle.forEach((el, ind) => {
    el.addEventListener('click', () => {
        index = ind;
        updatePag();
        updateInfo();
        slider.scrollLeft = (index * (slider.clientWidth)) + (index * 10)
    })
})

prev.forEach((el) => {
    el.addEventListener('click', () => {
        prevSlide();
    })
})

next.forEach((el) => {
    el.addEventListener('click', () => {
        nextSlide();
    })
})