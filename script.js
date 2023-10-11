const container = document.querySelector('.container');
const cardInfos = document.querySelector('.card-infos');

container.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log(e)
    if (e.target.className === 'container') {
        cardInfos.style.display = `flex`;
        cardInfos.style.top = `${e.y}px`;
        cardInfos.style.left = `${e.x}px`;
    }
})

container.addEventListener('click', function(e) {
    if (e.target.className === 'container') {
        cardInfos.style.display = `none`;
    }
})

// function showCardInfos(e) {
//     cardInfos.style.display = `flex`;
//     cardInfos.style.top = `${e.y}px`;
//     cardInfos.style.left = `${e.x}px`;
// }
