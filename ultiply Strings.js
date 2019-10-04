/**
 * step 1: using array to solve the problem; num1="10", num2="91"; solution[0]=0*91=0; solution[1]=1*91+"0"="910";
 * step 2: solution[0]+solution[1]="910";
 */
var multiply = function(num1, num2) {   // num1 = "010"; num2 = "0091";
    if((num1.length==1&&Number(num1)===0)||(num2.length==1&&Number(num2)===0)) { return "0"; }
    num1 = num1.replace(/^0+/g, "");    // num1 = "10";
    num2 = num2.replace(/^0+/g, "");    // num2 = "91";
    var arr1 = num1.split(""),
        arr2 = num2.split("");
    var str = "",
        product = 0,
        result = "",
        solution = [];
    var firstStr = "",
        secondStr = "",
        mantissaZero = "";
    for(var i=arr1.length-1; i>=0; i--){ // step 1
        var state = "";
        if(Number(arr1[i])===0) { mantissaZero += "0"; continue; }
        str = ""; firstStr = ""; secondStr = "";    // clear
        for(var j=arr2.length-1; j>=0; j--){
            if(Number(arr2[j])===0) {
                str = Number(firstStr)===0?"0"+str:firstStr+str;
                firstStr = "";
                continue;
            }
            product = Number(arr1[i]) * Number(arr2[j]);
            product += Number(firstStr);
            if(product<10){
                firstStr = "";
                secondStr = "" + product;
            }else{
                firstStr = ("" + product).substr(0, ("" + product).length-1);
                secondStr = ("" + product).substr(("" + product).length-1);
            }
            if(j){ str = secondStr + str; }else{ str = product + str; }
            // console.log("product=Number(arr1["+i+"])*Number(arr2["+j+"])+Number("+firstStr+")="+Number(arr1[i])+"*"+Number(arr2[j])+"+"+Number(firstStr)+"="+product+"; str="+str+"; firstStr="+firstStr+"; secondStr="+secondStr+"; mantissaZero="+mantissaZero+";");
        }
        solution.push(str + mantissaZero);
        mantissaZero += "0";
        // console.log("solution=["+solution+"]; mantissaZero="+mantissaZero+";");
    }
    for(i=1, result=solution[0]; i<solution.length; i++){ // step 2
        result = stringAdd(result, solution[i]);
    }
    function stringAdd(str1, str2) {
        var str = "",
            arr = [],
            arr1 = str1.split("").reverse(),
            arr2 = str2.split("").reverse(),
            length = (arr1.length>=arr2.length)?arr1.length:arr2.length;
        // console.log("arr1=["+arr1+"]; arr2=["+arr2+"];");
        for(var i=0; i<length; i++){
            if(arr[i]===undefined) { arr[i] = "0"; }
            if(arr1[i]===undefined) { arr1[i] = "0"; }
            if(arr2[i]===undefined) { arr2[i] = "0"; }
            if(Number(arr[i])+Number(arr1[i])+Number(arr2[i])<10){
                arr[i] = Number(arr[i]) + Number(arr1[i]) + Number(arr2[i]);
            }else{
                arr[i] = Number(arr[i]) + Number(arr1[i]) + Number(arr2[i]) - 10;
                arr[i+1] = 1;
            }
        }
        // console.log(arr);
        str = arr.reverse().join("");
        return str;
    }
    return result;
};