

 // frist test_KiloMetre To Meter START

 function KiloMetreToMeter (kilometer) { 
  var meter = kilometer*1000;
  return meter;
}
var mainResult = KiloMetreToMeter (5);
 console.log (mainResult);
 
  // frist test_KiloMetre To Meter END

function budgetCalculator (watch, mobile, laptop) {
    var ghori = watch * 50;
    var phone = mobile * 100;
    var computer = laptop * 500;
    var amount = ghori + phone + computer;

    return amount;
}

console.log(budgetCalculator(20 , 20 , 50));


function hotelCost(night) {    
    let amount =0; 
    if (night<=10) {
        amount = night *100;
    }
    else if (night<=20) {
        firstPart = 10 * 100;
        remaining = night - 10;
        secondPart = night * 80;
        amount = firstPart + secondPart;
    }
    else{
        firstPart = 10 * 100 ;
        secondPart = night * 80 ;
        remaining = night - 20 ;
        thirdPart = night * 50;
        amount = firstPart + secondPart + thirdPart;

    }
    return amount;

}
console.log(hotelCost(30));



let friends = [ 'motu vai', 'akram Uddin', 'Sobuj Vai', 'Mrinno Tabassum', 'Talia ', 'Parves' ];

function megaFriend(myFriends) {

    var bigString = myFriends[0];
    
    for (var i = 0; i < myFriends.length; i++) {
        let friends = myFriends[i];

        if (friends.length > bigString.length) {

            bigString = friends;
            
        }

    }

    return bigString;
    
}

    
var count = megaFriend(friends);
console.log(count);