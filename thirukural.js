async function getKural(){
    let number = document.getElementById("number").value;

    if(number === ""){
        alert("Please Enter Kural Number");
        return;
    }

    try{

        let response = await fetch(
            "https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json"
        );

        let data = await response.json();

        console.log(data);

        // Access kural array correctly
        let kuralList = data.kural;

        // Find selected kural
        let kural = kuralList.find(item => item.Number == number);

        // If not found
        if(!kural){

            document.getElementById("result").innerHTML = `
                <h2>Kural Not Found</h2>
            `;

            return;
        }

        // Display kural
        document.getElementById("result").innerHTML = `

            <h2>Kural Number : ${kural.Number}</h2>

            <h3>${kural.Line1}</h3>

            <h3>${kural.Line2}</h3>

            <p>
                <strong>Meaning :</strong>
                ${kural.mv}
            </p>

        `;

    }

    catch(error){

        console.log("Error :", error);

    }

}


// var x = 1; function test() { console.log(x); var x = 2; } test();
// for(var i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },100)
// }