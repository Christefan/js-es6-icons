const icons = [
        {
        name: 'cat',
        display: 'cat',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'crow',
        display: 'crow',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'dog',
        display: 'dog',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'dove',
        display: 'dove',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'dragon',
        display: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'horse',
        display: 'horse',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'hippo',
        display: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'fish',
        display: 'fish',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'carrot',
        display: 'carrot',
        family: 'fas',
        prefix: 'fa-',
        type: 'vegetable'
        },
        {
        name: 'apple-alt',
        display: 'apple',
        family: 'fas',
        prefix: 'fa-',
        type: 'vegetable'
        },
        {
        name: 'lemon',
        display: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        type: 'vegetable'
        },
        {
        name: 'pepper-hot',
        display: 'pepper-hot',
        family: 'fas',
        prefix: 'fa-',
        type: 'vegetable'
        },
        {
        name: 'user-astronaut',
        display: 'astronaut',
        family: 'fas',
        prefix: 'fa-',
        type: 'user'
        },
        {
        name: 'user-graduate',
        display: 'graduate',
        family: 'fas',
        prefix: 'fa-',
        type: 'user'
        },
        {
        name: 'user-ninja',
        display: 'ninja',
        family: 'fas',
        prefix: 'fa-',
        type: 'user'
        },
        {
        name: 'user-secret',
        display: 'secret agent',
        family: 'fas',
        prefix: 'fa-',
        type: 'user'
        }
    ];




const container = document.querySelector(".container-box");
mostratutto(icons);
// console.log(container)
function mostratutto(risultato){
	risultato.forEach((element) => {
	let newElement = document.createElement("div");
	let color; 
	//Utilizzando un confronto tra i tipi all' interno del array di oggetti, inseriamo il colore specifico
	if(element.type === 'animal'){
		color = 'blue';
	}else if(element.type === 'vegetable'){
		color = 'orange';
	}else{
		color = 'purple'
	}
	//stampa su console
	console.log(color);

	newElement.classList.add("box");
	newElement.innerHTML += `
		<i class = "${element.family} ${element.prefix}${element.name} ${color}"></i> 
		<p>${element.name.toUpperCase()}</p> `
		;
		
	container.append(newElement);
});
}
const selected = document.getElementById('selection');

selected.addEventListener("click",//prova funzionamento change
	function() {
	
		container.innerHTML="";
		if (this.value === 'all') {
			mostratutto(icons);
		}
		 else{ 
			if(this.value === 'animal'){
	 		choice = icons.filter((element) => {
	 			if(element.type === 'animal'){
	 			return true;
	 		}
	 		return false;
	 		});
			
	 		}else if(this.value === 'vegetable'){
				choice = icons.filter((element) => {
					if(element.type === "vegetable"){
	 				return true;
				}
				return false;
	 		});
			
	 		} else {
	 			choice = icons.filter((element) => {
	 				if(element.type === "user"){
	 				return true;
	 			}
	 			return false;
	 		});
			 
			}
			mostratutto(choice);
		}
		
	 }
);