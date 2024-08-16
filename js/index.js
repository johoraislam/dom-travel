const allBtn = document.getElementsByClassName('bt');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count++

        const placeName = e.target.parentNode.childNodes[1].innerText

        const cost = e.target.parentNode.childNodes[3].childNodes[1].innerText

        const selectedPlace = document.getElementById('selected-place-container');

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = cost;

        li.appendChild(p)
        li.appendChild(p2)

        const budget = document.getElementById('doller').innerText;
         const convartedBudget = parseInt(budget)
         document.getElementById('doller').innerText=convartedBudget - parseInt(cost);

         if(convartedBudget - parseInt(cost)<0){
            alert('Your budget is low,you can not select more place')
            return;
         }

        selectedPlace.appendChild(li)

        

        totalCost('total-cost',parseInt(cost));

        grandTotalCost('g-total',parseInt(cost));


        // setInnerText('total-cost', sum);
        
        setInnerText('add', count);

    })

}

function totalCost(id,value){
    const add = document.getElementById(id).innerText;

    const convertAdd = parseInt(add);
    const plus = convertAdd + parseInt(value);

    setInnerText(id, plus)

    }


function grandTotalCost(category){
    console.log(category)
    const add = document.getElementById('total-cost').innerText;

    const convertAdd = parseInt(add);

    // const plus = convertAdd + parseInt(value);

    if(category==='bus'){
        setInnerText('g-total', convertAdd +100)
    }
    else if(category==='train'){
        setInnerText('g-total', convertAdd - 200)
    }
    else if(category==='flight'){
        setInnerText('g-total', convertAdd + 500)
    }
    else {
        setInnerText('g-total', convertAdd )
    }

    
    }


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}