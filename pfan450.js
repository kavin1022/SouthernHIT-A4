const fetchArray = () => {
    fetch("http://localhost:5000/api/S", {
	})
    .then(res => res.json())
    .then(array => {
        document.getElementById("array").innerHTML = "[" + array + "]"
        fetchIcon(array);
    })
}

const fetchIcon = (array) => {
    fetch("http://localhost:5000/api/GetIcon", {
	})
    .then(res => res.text())
    .then(data => {
        document.getElementById("baseRef").innerHTML = data;
        display(array, data)
    })
}

const display = (array, data) => {
    console.log(array)
    const container = document.getElementById("container");
    for (let i = 1; i < array.length; i++){
        let temp = `<div id="row">
                        <p style="width: 17px">${i}.</p>`
        for(let j = 0; j < array[i - 1]; j++){
            if (j % 2 == 0){
                temp += `<svg xmlns='http://www.w3.org/2000/svg' class="svg2">
                            <use href="#sDrop" height="20" />
                        </svg>`
            }else{
                temp += `<svg xmlns='http://www.w3.org/2000/svg' class="svg2-flipped">
                            <use href="#sDrop" height="20" />
                        </svg>`
            }
        }
        temp += "</div>"
        container.innerHTML += temp
    }
}

