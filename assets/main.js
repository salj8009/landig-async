const API = 'https://twitter154.p.rapidapi.com/user/tweets?username=eskoria120&limit=10';

const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e27110012msh9f48ba5cbf74104p1b8b59jsn2927108502c7',
		'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}
const fragment =  document.createDocumentFragment();
(async () =>{
    try {
        const twitts = await fetchData(API);
        console.log(twitts)
        let view =
            twitts.map(twit => {
                const imagen = document.createElement('IMG');
                const parrafo = document.createElement('P');
                const parrafo2 = document.createElement('P');

                parrafo2.classList.add('p-tw');

                imagen.src= `${twit.user.profile_pic_url}`;
                imagen.alt = "imagen-perfil";
                parrafo.textContent = twit.user.username;
                parrafo2.textContent = twit.text;


                fragment.appendChild(imagen);
                fragment.appendChild(parrafo);
                fragment.appendChild(parrafo2);
             
            });
            
        content.appendChild(fragment);
    } catch (error) {
        console.log(error);
    }
})();

