let show = document.getElementById('show');
show.addEventListener('click', function () {
    var str = "";
    if (document.getElementById('trivia').checked) {
        str = `trivia`;
    }
    else if (document.getElementById('math').checked) {
        str = `math`;
    }
    else if (document.getElementById('date').checked) {
        str = `date`;
    }
    else if (document.getElementById('year').checked) {
        str = `year`;
    }
    else {
        alert('Please select an option below')
        return;
    }

    url = `http://numbersapi.com/random/${str}`;

    fetch(url).then(function (element) {
        return element.text();
    }).then(function (data) {
        let html = `<div class="card-body">
                        <h5 class="card-title text-center">${str.toUpperCase()} FACT</h5>
                        <p class="card-text">${data}</p>
                    </div>`
        let showHere = document.getElementById('showHere');
        showHere.innerHTML = html;
    })



    // const xhr = new XMLHttpRequest;
    // xhr.open('GET', `http://numbersapi.com/random/${str}`, true);
    // xhr.onload = function () {
    //     let html = `<div class="card-body">
    //                     <h5 class="card-title text-center">${str.toUpperCase()} FACT</h5>
    //                     <p class="card-text">${this.responseText}</p>
    //                 </div>`
    //     let showHere=document.getElementById('showHere');
    //     showHere.innerHTML=html;
    // }
    // xhr.send();
})
