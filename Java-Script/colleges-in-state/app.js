
let url = "https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


async function getColleges() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch(e) {
        console.log(e);
        return [];
    }
}

btn.addEventListener("click", async ()=> {
    let state = document.querySelector("input").value;
    let colArr = await getColleges();
    show(colArr, state);
});

function show(colArr, state) {
    ul.innerText = "";
    for(col of colArr) {
        if (state == col["state-province"]) {
            console.log(col["state-province"]);
            let li = document.createElement("li");
            li.innerText = col.name;
            ul.appendChild(li);
        }
    }
}
