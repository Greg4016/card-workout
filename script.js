let cardValues = [
    'clubs A',
    'clubs 2',
    'clubs 3',
    'clubs 4',
    'clubs 5',
    'clubs 6',
    'clubs 7',
    'clubs 8',
    'clubs 9',
    'clubs 10',
    'clubs K',
    'clubs Q',
    'clubs J',

    'diamonds A',
    'diamonds 2',
    'diamonds 3',
    'diamonds 4',
    'diamonds 5',
    'diamonds 6',
    'diamonds 7',
    'diamonds 8',
    'diamonds 9',
    'diamonds 10',
    'diamonds K',
    'diamonds Q',
    'diamonds J',

    'hearts A',
    'hearts 2',
    'hearts 3',
    'hearts 4',
    'hearts 5',
    'hearts 6',
    'hearts 7',
    'hearts 8',
    'hearts 9',
    'hearts 10',
    'hearts K',
    'hearts Q',
    'hearts J',

    'spades A',
    'spades 2',
    'spades 3',
    'spades 4',
    'spades 5',
    'spades 6',
    'spades 7',
    'spades 8',
    'spades 9',
    'spades 10',
    'spades K',
    'spades Q',
    'spades J',
]

let temps = document.querySelector('#temps').children

let deck = document.querySelector('#deck')
let deckPos = {x : deck.getBoundingClientRect().x, y : deck.getBoundingClientRect().y}

cards = []

let sils = document.querySelectorAll('.card-silhouette')
document.querySelectorAll('.card').forEach((el,i) => {
    el.style.left = deckPos.x - sils[i].getBoundingClientRect().x + 'px'
    el.style.top = deckPos.y - sils[i].getBoundingClientRect().y + 'px'

    cards.push({
        card : el,
        sil : sils[i],
        value : ''
    })
})


function deal() {

    let cardValuesCopy = [...cardValues]

    cards.forEach((c, i) => {
        setTimeout(() => {
            c.card.style.left = 0
            c.card.style.top = 0
            c.card.style.setProperty('pointer-events', 'all')


            c.value = cardValuesCopy.splice( Math.round(Math.random() * (cardValuesCopy.length-1)), 1 )[0]

            c.card.addEventListener('click', () => {
                c.card.classList.add('flipped')

                cval = c.value.split(' ')

                c.card.classList.add(cval[0])

                c.card.querySelectorAll('span').forEach(el => el.innerText = cval[1])
                if(cval[1] == 'A' || cval[1] == 'K' || cval[1] == 'Q' || cval[1] == 'J') {
                    c.card.children[1].append(temps[0].content.cloneNode(true))
                } else {
                    c.card.children[1].append(temps[cval[1]-1].content.cloneNode(true))
                }

            }, { once : true })
            
        }, i * 100)
    })
}


deck.addEventListener('click', deal, { once : true })