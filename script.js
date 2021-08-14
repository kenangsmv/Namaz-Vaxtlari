let country_box = document.querySelector('#country_select');
let city_box = document.querySelector('#city_select');
let region_box = document.querySelector('#region_select');
let namaz_table =document.querySelector('table');


let addbutton = document.querySelector('#add');

// country.addEventListener('change', citySelect);

countrySelect();

function countrySelect() {
    
    fetch('https://ezanvakti.herokuapp.com/ulkeler')
    .then(response => response.json())
    .then(country =>{
    
        
      country.forEach(element => {

           let option = document.createElement("option");
           option.innerText=`${element.UlkeAdi}`;
           option.setAttribute("value",`${element.UlkeID}`)
           
           country_box.appendChild(option);
      });

    })

}

  country_box.addEventListener('change', function (e) {
      
     e.preventDefault();
     citySelect(e.target.value);
  });

function citySelect(countryID) {
   
    fetch(`https://ezanvakti.herokuapp.com/sehirler/${countryID}`)
    .then(response => response.json())
    .then(city =>{
    
        
      city.forEach(element => {
        let option = document.createElement("option");
        option.innerText=`${element.SehirAdi}`;
        option.setAttribute("value",`${element.SehirID}`)
        
        city_box.appendChild(option);
           
      });
       
    })
}

city_box.addEventListener('change', function (e) {
      
    
    regionSelect(e.target.value);
 });

function regionSelect(cityID) {
   
    fetch(`https://ezanvakti.herokuapp.com/ilceler/${cityID}`)
    .then(response => response.json())
    .then(region =>{
    
        
      region.forEach(element => {
        let option = document.createElement("option");
        option.innerText=`${element.IlceAdi}`;
        option.setAttribute("value",`${element.IlceID}`)
        
        region_box.appendChild(option);
           
      });
      
    })
}

region_box.addEventListener('change', function (e) {
      
    
    namazVakitleri(e.target.value);
 });

function namazVakitleri(regionID) {
    fetch(`https://ezanvakti.herokuapp.com/vakitler/${regionID}`)
    .then(response => response.json())
    .then(times =>{
    
        
      times.forEach(element => {
        let tr = document.createElement("tr");
        
        tr.setAttribute("id","table-items");
        
        let tdMiladi =document.createElement("td");
        tdMiladi.innerText=`${element.MiladiTarihUzun}`;
        let tdImsak =document.createElement("td");
        tdImsak.innerText=`${element.Imsak}`;
        let tdGunes =document.createElement("td");
        tdGunes.innerText=`${element.Gunes}`;
        let tdOgle =document.createElement("td");
        tdOgle.innerText=`${element.Ogle}`;
        let tdIkindi =document.createElement("td");
        tdIkindi.innerText=`${element.Ikindi}`;
        let tdAksam =document.createElement("td");
        tdAksam.innerText=`${element.Aksam}`;
        let tdYatsi =document.createElement("td");
        tdYatsi.innerText=`${element.Yatsi}`;
        
         tr.appendChild(tdMiladi);
         tr.appendChild(tdImsak);
         tr.appendChild(tdGunes);
         tr.appendChild(tdOgle);
         tr.appendChild(tdIkindi);
         tr.appendChild(tdAksam);
         tr.appendChild(tdYatsi);

         namaz_table.appendChild(tr);
           
      });
      
    })
}




