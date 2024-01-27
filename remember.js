/*js – это серверный фреймворк JavaScript с открытым исходным кодом, который запускает код JavaScript вне браузера. Разработчики используют его для создания масштабируемых, быстрых и надежных сетевых приложений на стороне сервера.
*/ 
// string, number, bigint, null, undefined, boolean, object, typeOf

let emtyList = [];
//let dataTypea = [String, number, BigInt, null, undefined, Boolean, Object];
let dataTypesExample = ['Hello world', 1231, null, undefined];
let booleanDataType = [false, true];
let collection = [
    {},
    {},
    {}
];
const application = 
    {
        nameGame: 'Pubg',
        dateRelease: '23.03.2017',
        downloadedGame: 734000000,
        gameDescription: 'PUBG: Battlegrounds является экшн-игрой, в которой не более сотни игроков сражаются в «королевской битве» (англ. Battle Royale), крупномасштабной «last man standing» схватке в deathmatch режиме, где игроки воюют между собой, чтобы стать последним выжившим.',
        whereGameReleased: {
            country: 'Корея',
            city: undefined
        },
        functions: [
            'Выживание', 'Убийство'
        ]
    };


let year = prompt('В каком году внедрили язык js');

if (year == 1995) {
  console.log( 'Хуъш хилла хьун' );
} else {
  console.log( 'Нис жоп дац' ); 
};


function startGame (playersCount) {
    return `Игра началась. Количество игроков: ${playersCount}`
}
console.log(startGame(10));


