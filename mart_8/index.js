document.getElementById('women').addEventListener('click', function() {
    const imageContainer = document.querySelector('.im');
    const element = document.getElementById('acr2');
    const element1 = document.getElementById('scr');

    imageContainer.classList.remove('hidden');
    element1.classList.add('le');

    setTimeout(() => {
        imageContainer.classList.add('hidden');
    }, 1000);

    setTimeout(function() {
        element.classList.add('vis');  // показываем меню через vis
    }, 1000);
});

document.getElementById('men').addEventListener('click', function(){
    const mene = document.getElementById('zov');
    mene.classList.remove('hidden');
    setTimeout(() => {
        mene.classList.add('hidden');
    }, 2000);
});

// Кнопка "Поздравление"
document.getElementById('pozd').addEventListener('click', function(){
    const element = document.getElementById('acr2');
    const poze = document.getElementById('pozd1');
    
    poze.classList.add('vis');      // показываем поздравление через vis
    element.classList.remove('vis'); // скрываем меню
    element.classList.add('le');     // и добавляем le для надежности
});

// Кнопка "Назад" в поздравлении
document.getElementById('zad1').addEventListener('click', function() {
    const element = document.getElementById('acr2');
    const element1 = document.getElementById('pozd1');
    
    element.classList.add('vis');    // показываем меню через vis
    element1.classList.remove('vis'); // скрываем поздравление
    element1.classList.add('le');     // и добавляем le
});

document.getElementById('woth').addEventListener('click', function(){
    const element = document.getElementById('acr2');
    const poze = document.getElementById('woth1');

    poze.classList.add('vis');      // показываем поздравление через vis
    element.classList.remove('vis'); // скрываем меню
    element.classList.add('le');     // и добавляем le для надежности
});
document.getElementById('zad2').addEventListener('click', function() {
    const element = document.getElementById('acr2');
    const element1 = document.getElementById('woth1');

    element.classList.add('vis');    // показываем меню через vis
    element1.classList.remove('vis'); // скрываем поздравление
    element1.classList.add('le');     // и добавляем le
});
document.getElementById('woth2').addEventListener('click', function(){
    const element = document.getElementById('pozd1');
    const poze = document.getElementById('woth1');

    poze.classList.add('vis');      // показываем поздравление через vis
    element.classList.remove('vis'); // скрываем меню
    element.classList.add('le');     // и добавляем le для надежности
});
