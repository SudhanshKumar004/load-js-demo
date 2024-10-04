function load(){
    setTimeout(show,4000);

    function show(){
        let a = document.querySelector('#website');
        a.style.display = 'block';

        let b = document.querySelector ('#img');
        b.style.display = 'none';
    }
}