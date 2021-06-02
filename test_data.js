var opened = 0;

var data = {
    "Kompetencjometr": {
        "free": "1", "time": "8", "lang": "pl", "cat": "1", "img": "images/2.png", "link": "http://kompetencjometr.mlodziwlodzi.pl/", "desc": "Test stylu rozwiązywania konfliktów"
    },
    "Co po maturze?": { "free": "1", "time": "10", "lang": "pl", "cat": "1", "img": "images/3.png", "link": "https://copomaturze.lazarski.pl/ ", "desc": "Test stylu rozwiązywania konfliktów" },
    "16 personalities": { "free": "1", "time": "12", "lang": "pl", "cat": "0", "img": "images/4.png", "link": "https://www.16personalities.com/pl ", "desc": "Test stylu rozwiązywania konfliktów" },
    "Predyspozycje zawodowe": { "free": "1", "time": "10", "lang": "pl", "cat": "1", "img": "images/5.png", "link": "https://predyspozycje-zawodowe.pl/ ", "desc": "Test stylu rozwiązywania konfliktów" },
    "WOPZ": { "free": "1", "time": "15", "lang": "pl", "cat": "1", "img": "images/6.png", "link": "https://wybierz-zawod.eu/", "desc": "przeznaczone do diagnozy preferencji zawodowych", "page": "tests/5.html" },
    "Test Kariery": { "free": "1", "time": "10", "lang": "pl", "cat": "1", "img": "images/7.png", "link": "http://testkariery.pl/", "desc": "Test osobowości (Meyersa-Briggsa) ", "page": "tests/6.html" },
    "Test Hartmana": { "free": "1", "time": "10", "lang": "pl", "cat": "0", "img": "images/8.png", "link": "https://testhartmana.pl/ ", "desc": "Test osobowości (dr Hartman)", "page": "tests/7.html" },
    "Test Thomasa Kilmanna": { "free": "1", "time": "-", "lang": "pl", "cat": "0", "img": "images/9.png", "link": "https://www.cdr.gov.pl/pol/o_poznan/metodyka/rozw_zadan_8_3.pdf", "desc": "Test stylu rozwiązywania konfliktów", "page": "tests/8.html" },
    "Test Belbina": { "free": "0", "time": "-", "lang": "pl", "cat": "0", "img": "images/12.png", "link": "https://www.belbin.pl/", "desc": "Dostępny w dwóch wersjach. (w tym płatnej)", "page": "tests/9.html" },
    "Test Gallupa": { "free": "0", "time": "60", "lang": "en", "cat": "1", "img": "images/11.png", "link": "https://www.gallup.com/cliftonstrengths/en/home.aspx", "desc": "Pomaga zidentyfikowac talenty", "page": "tests/10.html" },
    "Zamek": {
        "free": "1", "time": "25", "lang": "pl", "cat": "1", "img": "images/10.png", "link": "http://www.e-zamek.pl/  ", "desc": "Test predyspozycji zawodowych", "page": "tests/11.html"
    },
};


var start_gallery = '<ul class="cards">';
var end_gallery = '</ul>';

// function createCard(){
//     start_card = '<li class="cards_item">
//     <div class="card">
//       <div class="card_image"><img src="https://picsum.photos/500/300/?image=2"></div>
//       <div class="card_content">
//         <h2 class="card_title">Test 7</h2>
//         <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
//         <button class="btn card_btn">Read More</button>
//       </div>
//     </div>
//   </li>

// }

function createCard(test_id) {
    start_card = `
    <li class="cards_item">
    <div class="card">
    <div class="card_image"><img src=` + String(data[test_id]["img"]) + '>';

    start_card = start_card + `

    <div class="card_content">`
    // start_card = start_card + test_id + '</h2>';
    start_card += '<a class="test_link" href=' + String(data[test_id]["link"]) + '>' + test_id + '</a>';
    // start_card = '<a href="' + String(data[test_id]["link"]) + '">' + test_id + '</a>';
    start_card = start_card + '<p class="card_text">' + data[test_id]["desc"];

    start_card = start_card + '<div style="text-align: center; font-weight: 900; display: grid; grid-template-columns: auto auto auto;"><p>jęz: ';
    start_card = start_card + data[test_id]["lang"] + '</p>';
    // start_card = start_card + '<img src=' + '"pl.png"' + '>';
    start_card = start_card + '<p>czas: ' + data[test_id]["time"] + 'min</p>';

    if (data[test_id]["free"] == "0") {
        start_card = start_card + '<p> $$$ </p>';

    }

    start_card = start_card + '</div>';
    start_card = start_card + '<a class="btn" href="' + data[test_id]["page"] + '">Więcej</a>';
    start_card = start_card + `
        </div>
        </div><i class="icofont-clock-time"></i>
    </li><i class="icofont-clock-time"></i>
    `;

    return start_card;

}






function filerTests() {
    var selected_tests = [];
    var checkbox_1 = document.getElementById('filter_1');
    var checkbox_2 = document.getElementById('filter_2');
    var checkbox_3 = document.getElementById('filter_3');
    var checkbox_4 = document.getElementById('filter_4');


    for (var [key, value] of Object.entries(data)) {
        var filter_dismatch = 0;
        if (checkbox_1.checked == true) {
            if (value.free == 0) {
                filter_dismatch += 1;
            }
        }
        if (checkbox_2.checked == true) {
            if (value.lang == "en") {
                filter_dismatch += 1;
            }
        }
        if (checkbox_3.checked == false) {
            if (value.cat == 1) {
                filter_dismatch += 1;
            }
        }
        if (checkbox_4.checked == false) {
            if (value.cat == 0) {
                filter_dismatch += 1;
            }
        }

        if (filter_dismatch == 0) {
            selected_tests.push(key);
        }
    }

    var filtered_tests = start_gallery

    for (var i = 0; i < selected_tests.length; i++) {
        filtered_tests += createCard(selected_tests[i]);
    }

    filtered_tests += end_gallery;

    document.getElementById('gallery').innerHTML = filtered_tests;
}


function selectTests(clicked_id) {
    if (clicked_id == 'oso') {
        document.getElementById('filter_3').checked = false;
        document.getElementById('filter_4').checked = true;
    }

    if (clicked_id == 'zawo') {
        document.getElementById('filter_3').checked = true;
        document.getElementById('filter_4').checked = false;
    }

    filerTests();

}
