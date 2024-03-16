let deck = document.querySelector('#deck')
let deckPos = {x : deck.getBoundingClientRect().x, y : deck.getBoundingClientRect().y}

let sils = document.querySelectorAll('.card-silhouette')
cards = []

document.querySelectorAll('.card').forEach((el,i) => {
    el.style.left = deckPos.x + 'px'
    el.style.top = deckPos.y + 'px'

    el.addEventListener('click', ev => ev.target.classList.add('flipped'))

    cards.push({
        card : el,
        sil : sils[i],
        value : ''
    })
})


function deal() {

    cards.forEach((c, i) => {
        setTimeout(() => {
            c.card.style.left = c.sil.getBoundingClientRect().x + 'px'
            c.card.style.top = c.sil.getBoundingClientRect().y + 'px'
            c.card.style.setProperty('pointer-events', 'all')
        }, i * 100)
    })

}


deck.addEventListener('click', deal)

deal()