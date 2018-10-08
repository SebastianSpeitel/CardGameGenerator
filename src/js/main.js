const faces = {
    '2': { v: 2 },
    '3': { v: 3 },
    '4': { v: 4 },
    '5': { v: 5 },
    '6': { v: 6 },
    '7': { v: 7 },
    '8': { v: 8 },
    '9': { v: 9 },
    '10': { v: 10 },
    'J': { v: 11 },
    'Q': { v: 12 },
    'K': { v: 13 },
    'A': { v: 14 }
};
const suits = {
    s: {}, h: {}, c: {}, d: {}
};


class Card {
    constructor(opt = {}) {
        this._f = opt.f;
        this._s = opt.s;
        this._v = opt.v;
    }

    get f() {
        return this._f;
    }

    get s() {
        return this._s;
    }

    get v() {
        return this._v || faces[this._f].v;
    }

    toString() {
        return this.f + this.s;
    }
}

const fullDeck = [];
for (let f in faces) for (let s in suits) fullDeck.push(new Card({ f: f, s: s }));
console.log(fullDeck);
console.log(fullDeck.join());


