const fetchData = () => {
    fetch("../assets/javascript/zodiac.json")
        .then(res => res.json())
        .then(data => {
            const card = data.zodiacData.map(zodiac => {
                return `
                <div class="zodiac-card">
                    <div class="img-container">
                            <img src=${zodiac.image}>
                        </div>
                        <div class="content-container">
                            <h2 class="zodiac-name">${zodiac.name}</h2>
                            <p class="zodiac-date">${zodiac.date.from} - ${zodiac.date.to}</p>
                        <div class="zodiac-traits">
                            <p>${zodiac.traits_one}</p>
                            <p>${zodiac.traits_two}</p>
                        </div>
                    </div>
                </div>    
                `
            }).join("")

            document.querySelector(".zodiac")
                    .insertAdjacentHTML("afterbegin", card)
        })
        .catch(err =>{
            return err
        })
}

fetchData()