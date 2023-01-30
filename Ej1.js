let json = `[{
    "universe": "Marvel Comics",
    "alterEgo":"нет, полное имя — Тор Одинсон",
    "superpowers": "Все, что может Бог + молот Мельёнир",
    "detailed": "персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении.    Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии" 
},{
    "universe": "DC Comics",
    "alterEgo":"Диана Принс",
    "superpowers": "сверхчеловеческая сила и скорость, выносливость, полет",
    "detailed":  "Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма"
},{
    "universe": "Marvel Comics",
    "alterEgo":"Наташа Романофф",
    "superpowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
    "detailed":  "супергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы "
}]`;

document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(json);
    
    let heroesContent = "";
for (let hero of heroes) {
    heroesContent += `<div class = 'hero'>
    <h2>Вселенная: ${hero.universe}</h2>
    <div>Альтер Эго: ${hero.alterEgo}</div>    
    <div>Суперсилы: ${hero.superpowers}</div>
    <div>Подробности: ${hero.detailed}</div>
    <p class="rating__character">Оцените персонажа по шкале от 1 до 10:</p>
    <input  class="score" type="number" name="score" min="1" max="10" value="10" />
    <button class="save">Сохранить оценку</button>
    </div>
    <p class="result"></p>
    </div>`;
}
document.getElementById("heroesContainer").innerHTML = heroesContent;
}
    );

