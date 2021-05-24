var data = {
    "test_1": {
        "free": "1", "time": "20", "lang": "pl", "cat": "1", "img": "https://picsum.photos/500/300/?image=7"
    },
    "test_2": { "free": "1", "time": "10", "lang": "en", "cat": "0", "img": "https://picsum.photos/500/300/?image=2" },
    "test_3": { "free": "1", "time": "15", "lang": "pl", "cat": "0", "img": "https://picsum.photos/500/300/?image=5" },
    "test_4": { "free": "0", "time": "45", "lang": "en", "cat": "0", "img": "https://picsum.photos/500/300/?image=1" },
    "test_5": { "free": "1", "time": "30", "lang": "pl", "cat": "1", "img": "https://picsum.photos/500/300/?image=3" },
    "test_6": { "free": "0", "time": "12", "lang": "en", "cat": "1", "img": "https://picsum.photos/500/300/?image=4" },
    "test_7": { "free": "0", "time": "15", "lang": "en", "cat": "1", "img": "https://picsum.photos/500/300/?image=6" },
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

    <div class="card_content">
    <h2 class="card_title">`;

    start_card = start_card + test_id;
    start_card = start_card + `
    </h2>
            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout`;


    start_card = start_card + data[test_id]["free"] + data[test_id]["cat"] + data[test_id]["lang"] + `</p> 
    <a class="btn" href="./tests/test_desc.html">Więcej</a>
        </div>
        </div>
    </li>
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