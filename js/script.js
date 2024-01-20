let poems = [
    {
        poemText: `
        <p>
        С Новым годом поздравляю<br>
        И от всей души желаю,<br>
        Чтоб сбывались все мечты,<br>
        В праздник зимней красоты!<br>

        Чтобы счастье приходило,<br>
        Вам везение дарило,<br>
        А еще успех и радость,<br>
        Чудеса, удачи сладость!
    </p>
        `,
        img: 'url(/img/fon4.jpg)'
    },
    {
        poemText: `
        <p>
                        Желаю сказочного года<br>
                        Без бед, болезней и помех!<br>
                        Готовьтесь к новым поворотам<br>
                        На неожиданный успех.<br>

                        Пусть только радостные лица<br>
                        Вас дома будут окружать,<br>
                        И давняя мечта свершится,<br>
                        Не заставляя долго ждать!
                    </p>
        `,
        img: 'url(/img/fon2.jpg)'
    },
    {
        poemText: `
        <p>
        Желаю счастья в Новый год.<br>
        Пусть он удачу принесет,<br>
        Любовью души пусть согреет,<br>
        Улыбок, смеха не жалеет.<br>

        Сердца наполнит добротой,<br>
        Подарит встречу пусть с мечтой,<br>
        Надежды крылья распахнет,<br>
        Добро и мир нам принесет.
    </p>
        `,
        img: 'url(/img/fon3.jpg)'
    },
    {
        poemText: `
        <p>
        Желаю счастья в Новый год.<br>
        Пусть он удачу принесет,<br>
        Любовью души пусть согреет,<br>
        Улыбок, смеха не жалеет.<br>
        
        Сердца наполнит добротой,<br>
        Подарит встречу пусть с мечтой,<br>
        Надежды крылья распахнет,<br>
        Добро и мир нам принесет.
    </p>
        `,
        img: 'url(/img/fon5.jpeg)'
    },
    {
        poemText: `
        <p>
        Новый год — волшебный праздник,<br>
        День чудес и торжества.<br>
        В Вашем доме пожелаем<br>
        Чашу полную всегда!<br>
        
        Наступает время сказок,<br>
        Будет пусть чудес гора,<br>
        Пожелаем много счастья,<br>
        Света, мира и добра!<br>
        
        В ночь волшебную у елки<br>
        Загадаем, как всегда,<br>
        Чтобы были все здоровы<br>
        И любимы навсегда!
    </p>
        `,
        img: 'url(/img/fon6.jpg)'
    },
    {
        poemText: `
        <p>
        Новый год уж наступает.
Пусть несет в ваш дом добро,
Радость, волшебство, удачу,
И достаток, и тепло!

Силы, крепкое здоровье,
Чудо, мир и позитив,
А проблемы и печали
Заберет, разгонит вмиг!

Елку красками украсит
И узоры на стекле
Пусть морозом разукрасит
Он, приблизив вас к мечте!
    </p>
        `,
        img: 'url(/img/fon7.jpg)'
    },
    {
        poemText: `
        <p>
        С Новым годом поздравляю!
И желаю перемен,
Чтобы не было печалей,
Чтобы не было проблем!

Чтобы жили − не тужили,
И мечтать всегда могли,
Свой доход приумножали,
Свое счастье берегли!

Чтобы радостных мгновений
Было больше с каждым днем,
Чтобы праздничным салютом
Освещен был Новый год!
    </p>
        `,
        img: 'url(/img/fon8.jpg)'
    },
];

let wrapper = document.querySelector('.wrapper')
let btn = document.getElementById('btn')
let poem = document.querySelector('.content_poem')

btn.addEventListener('click', function () {
    let randomIndex
    let randomBg
    randomIndex = Math.floor(Math.random() * poems.length)
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText
    randomBg = Math.floor(Math.random() * poems.length)
   wrapper.style.backgroundImage='';
   wrapper.style.backgroundImage=poems[randomBg].img;  
})