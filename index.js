const progresE = document.querySelector('.progress');
const prevE = document.querySelector("#prev");
const nextE = document.querySelector("#next");
const circlE = document.querySelectorAll(".circle1");

let currentActive = 1; 

nextE.addEventListener('click', function(e){
    currentActive++
    if(currentActive > circlE.length){
        currentActive = circlE.length        
    }

    update()
});

prevE.addEventListener('click', function(){
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    update()
});

function update(){
    for(let [idx, circle1] of circlE.entries()){
        if(idx < currentActive){
            circle1.classList.add('active')
        }else{
            circle1.classList.remove('active')
        }
    }


    const Active = document.querySelectorAll('.active');
    progresE.style.width = (Active.length - 1) / (circlE.length - 1 ) * 100 + '%'
    

    if(currentActive === 1){
        prevE.disabled = true
    }else if(currentActive === circlE.length){
        nextE.disabled = true
    }else{
        prevE.disabled = false
        nextE.disabled = false
    }
}





