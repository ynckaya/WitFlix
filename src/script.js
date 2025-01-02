const filmListesi = [1,2,3,4,6,7,8,9];

if(filmListesi.length > 0{}

for(let film of filmListesi){



    let item = `
        <div id="${film}" class="item">
            <img src="src/images/film${film.id}.png" alt="">
            <h3>${film.MovieName}</h3>
            <div class="detail">
                <span class="maturity-rating">${film.minAge}</span>
                <span class="duration">2 h 20 min</span>
            </div>
            <div class="btn">Play Now</div>
        </div>
    `;

    $("#popular").append(item);
}

