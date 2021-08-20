
// for section title Text color 
document.getElementById('blogs-section').style.color = 'hotpink';
document.getElementById('top-writers').style.color = 'hotpink';

// writers section colors 
document.getElementById("players").style.backgroundColor = 'rgba(255, 99, 71, 0.418)';


// creating Elements by clicking a button
document.getElementById('button').addEventListener('click', function(){


    const list = document.createElement('li');
    list.innerText = 'Brand New List'
    const ulList = document.getElementById('ul-list');
    ulList.appendChild(list);
})

document.getElementById('my-btn').addEventListener('click', function(){
    const buttonDisabled = true;
    const input = document.getElementById('input-text');
    const inputText = input.value;
    const inputNumber = parseFloat(inputText);
    if(input.value < 5){
        input.value = inputNumber + 1;
    }
    else if(buttonDisabled == true ){
        
        document.getElementById('my-btn').disabled = true;
    }
})

// function 

// const list = document.createElement('li');
//     list.innerText = 'Brand New List'
//     const ulList = document.getElementById('ul-list');
//     ulList.appendChild(list);