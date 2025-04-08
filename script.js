function handleClick(el){
    let bill = parseFloat(document.getElementById('bill').value);
    let tip = parseFloat(document.getElementById('tip').value);

    let percent = (bill/100) * tip;
    let result = bill + percent ;
    
    document.getElementById('total').innerText = result.toFixed(2);
    document.getElementById('bill').disabled = true;
    document.getElementById('tip').disabled = true;
    
}