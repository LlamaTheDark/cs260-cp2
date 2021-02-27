var generateInsult = () => {
    let url = 'https://aws.random.cat/meow';
    fetch(url)
        .then(response => {
            if(response.status != 200){
                throw -1;
            }else{
                return response.json();
            }
        }).then(json => {
            document.getElementById('result').innerHTML = '<img id=\'cat-pic\' src=\'' + json.file + '\'/>'
            console.log(document.getElementById('result'));
        }).catch(error => {
            document.getElementById('result').innerHTML = 'There was an error generating an insult... You\'re on your own.'
        });
}