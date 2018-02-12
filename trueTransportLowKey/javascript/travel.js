function getAddresses(){
        var destArray = new Array();
         destArray["fromAddress"] = document.getElementById('fromAddress').value;
         destArray["toAddress"] = document.getElementById('toAddress').value;
         destArray["leaveDate"] = document.getElementById('leaveDate').value;
         destArray["leaveTime"]  = document.getElementById('leaveTime').value;
         document.write("You are traveling from: "+destArray["fromAddress"] + "</br>");
         document.write("to:" + destArray["toAddress"] + "</br>");
         document.write("You want to be picked up: "+destArray["leaveDate"]+ "</br>");
         document.write("At: "+destArray["leaveTime"]);
}

function printFunc(burgerThing){
        for(i = 0; i<burgerThing.length; i++){
                var div = document.getElementById("display");
                document.write(burgerThing[i]+"<br>");
        }
}

function displayTravel(){
        var destArray = new Array();
         destArray["fromAddress"] = document.getElementById('fromAddress').value;
         destArray["toAddress"] = document.getElementById('toAddress').value;
         destArray["leaveDate"] = document.getElementById('leaveDate').value;
         destArray["leaveTime"]  = document.getElementById('leaveTime').value;
        // printFunc(destArray);

         return destArray;
         /*
        var div = document.getElementById("display");
        var headerOne = document.createTextNode("You are traveling from: "+destArray["fromAddress"] );
        div.appendChild(headerOne);
        var headerOne2 = document.createTextNode("to:" + destArray["toAddress"] );
        div.appendChild(headerOne2);
        var headerOne3 = document.createTextNode("You want to be picked up: "+destArray["leaveDate"] );
        div.appendChild(headerOne3);
        var headerOne4 = document.createTextNode("At: "+destArray["leaveTime"]);
        div.appendChild(headerOne4);
        */
}


var vm = new Vue ({
        el: '#display',
        data: {
                arr: []
        },

        methods: {
                popDisplay: function (event) {
                        var destArray = displayTravel(); 
                        this.arr = destArray;

                }
        }
});
