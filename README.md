# Bitcoin Price

Le projet consiste en la création d'un petit projet en JavaScript avec NodeJS pour pouvoir obtenir, en ligne de commande, le cours actuel du bitcoin. Pour cela, j'utilise l'[API Coinbase](https://www.coinbase.com/cloud/) pour obtenir le cours du bitcoin dans plusieurs devises.

## Démarrer le programme.

On peut lancer le programme de plusieurs façons différentes :

- `node btc.js <currency>`
- `nodemon btc.js <currency>`
- `npm run dev <currency>`
- `./btc.js <currency>`

__Liste des devises possibles :__

- `USD`
- `EUR`
- `GBP`

## Packages utilisés

- [axios](https://www.npmjs.com/package/axios/) qui permet de faire des requêtes HTTP.