let elCountryList = document.querySelector(".country-list");
let elSearchInput = document.querySelector(".search-input")
let elSelect = document.querySelector(".select-capitals")


function renderCountry(arr, list) {
    list.innerHTML = ""
    arr.forEach(item => {
        let elItem = document.createElement("li");
        elItem.className = "bg-white w-[264px] rounded-md overflow-hidden";
        elItem.innerHTML = `
            <img class="h-[160px]" src="${item.flag}" alt="Flag img" width="100%" height="160">
            <div class="p-6">
                <h2 class="font-bold text-[18px] mb-[16px]">${item.name}</h2>
                <ul class="flex flex-col gap-[8px]">
                    <li class="text-[14px]"><span class="font-bold">Population:</span> ${item.population}</li>
                    <li class="text-[14px]"><span class="font-bold">Capital:</span> ${item.capital}</li>
                </ul>
                <div class="flex items-center justify-between mt-5">
                    <button class="w-[40px] h-[40px] rounded-md flex items-center cursor-pointer justify-center border-[2px] border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                    </button>
                    <button class="w-[40px] h-[40px] rounded-md flex items-center cursor-pointer justify-center border-[2px] border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </button>
                    <button class="w-[40px] h-[40px] rounded-md flex items-center cursor-pointer justify-center border-[2px] border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>
                    </button>
                    <button class="w-[40px] h-[40px] rounded-md flex items-center cursor-pointer justify-center border-[2px] border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5h1V3h3v1h-1v11.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 14.5V3H2V2h3V1.5h6z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        list.appendChild(elItem);
    });
}
renderCountry(countries, elCountryList);

elSearchInput.addEventListener("input", function(evt){
   let value = evt.target.value
    if(Number(value)){
        const filterByPopulation = countries.filter(item => String(item.population).includes(value))  
        renderCountry(filterByPopulation, elCountryList);
    }
    else{
        const filterByName = countries.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))  
        renderCountry(filterByName, elCountryList);
    }
})

function renderSelectOptions(){
    countries.forEach(item => {
        let elOption = document.createElement("option")
        elOption.textContent = item.capital
        elOption.value = item.id

        elSelect.appendChild(elOption)
    })
}
renderSelectOptions()
