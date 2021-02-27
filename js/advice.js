var handleSearchByKeyword = () => {
    let input = document.getElementById('search-advice-input').value;
    search(input);
}

var handleRandomAdvice = () => {
    let slipId = Math.floor(Math.random() * 217) + 1; // the api has 217 advice slips and it's fetch random link
    let url = 'https://api.adviceslip.com/advice/' + slipId;

    fetch(url)
        .then( response => {
            if(response.status != 200){
                throw -1;
            }else{
                return response.text(); // the text isn't formatted correctly in the API
                                        // so i'm fixing it and then getting the json from that
            }
        }).then( text => {
            text += '}';
            document.getElementById('result').innerHTML = JSON.parse(text).slip.advice;
        }).catch( error => {
            document.getElementById('result').innerHTML = 'There was an error fetching random advice.';
        });
}

var search = query => {
    let url = 'https://api.adviceslip.com/advice/search/' + query;
    fetch(url)
        .then( response => {
            if(response.status != 200) {
                throw -1;
            }else{
                return response.json();
            }
        }).then( json => {
            if(json.total_results === 0) throw -1;

            let el = json.slips[Math.floor(Math.random() * json.slips.length)];
            document.getElementById('result').innerHTML = el.advice;
        }).catch( error => {
            document.getElementById('result').innerHTML = 'Sorry, but nothing came up for that query';
        });
}