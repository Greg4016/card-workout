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
let cardNum = 20

let temps = document.querySelector('#temps').children

let deck = document.querySelector('#deck')
let deckPos = {x : deck.getBoundingClientRect().x, y : deck.getBoundingClientRect().y}

let infobar = document.querySelector('#side #info')
let infoOpen = false

let table = document.querySelector('#table')

cards = []


// Init cards
for(let i = 0; i < cardNum; i++) {

    let sil = table.appendChild(document.createElement('div'))
    sil.classList.add('card-silhouette', 'card-sizing')

    cards.push({
        card : sil.appendChild(temps[0].content.firstElementChild.cloneNode(true)),
        sil : sil,
        value : '',
    })

    cards[i].card.style.left = deckPos.x + 'px'
    cards[i].card.style.top = deckPos.y + 'px'
}


// Deal cards
function deal() {

    let cardValuesCopy = [...cardValues]

    cards.forEach((c, i) => {
        setTimeout(() => {
            c.card.style.left = c.sil.getBoundingClientRect().x + 'px'
            c.card.style.top = c.sil.getBoundingClientRect().y + 'px'
            c.card.style.setProperty('pointer-events', 'all')


            c.value = cardValuesCopy.splice( Math.round(Math.random() * (cardValuesCopy.length-1)), 1 )[0]

            c.card.addEventListener('click', () => {
                c.card.classList.add('flipped')

                cval = c.value.split(' ')

                c.card.classList.add(cval[0])

                c.card.querySelectorAll('span').forEach(el => el.innerText = cval[1])
                if(cval[1] == 'A' || cval[1] == 'K' || cval[1] == 'Q' || cval[1] == 'J') {
                    c.card.children[1].append(temps[1].content.cloneNode(true))
                } else {
                    c.card.children[1].append(temps[cval[1]].content.cloneNode(true))
                }

                c.card.addEventListener('click', () => {
                    if(infoOpen) {
                        infobar.style.left = '100%'
                    } else {
                        infobar.style.left = '0'

                    }
                    infoOpen = !infoOpen
                })

            }, { once : true })

            setTimeout(() => {
                c.card.style.position = 'unset'
            }, 500)
            
        }, i * 100)

        
    })
}


deck.addEventListener('click', deal, { once : true })