    $(document).ready(function () {
        var num_tr = $("body>div:nth-child(2)>table>tbody>tr");
        //console.log(num_tr.length);
        var counter = 0
        while (counter < num_tr.length){
            var num_tr2 = "body>div:nth-child(2)>table>tbody>tr:nth-child(" + counter +")>td>span>a";
            counter++;
            //console.log($(num_tr2).text())
            if($(num_tr2).text()){
                if($(num_tr2).text() == "Bestsellers (HOTP)"){
                    $(num_tr2).append(" Special Collection. Must visit library to borrow, cannot request or hold.").css({"color":"red","font-size":"1.35em"});
                }else if($(num_tr2).text() == "Pay Collection"){
                    $(num_tr2).append(", Rental fee is $1.50 for 3 days with no renewal.").css({"color":"red","font-size":"1.35em"});
                }
            }
        }
    });
