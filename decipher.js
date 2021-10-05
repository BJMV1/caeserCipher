function enDeCode(){
    let strMessage = document.getElementById("userMessage").value;
    let encode = document.getElementById("encode");
    let userKey = Number(document.getElementById("userKey").value);
    let newStrMessage = (strMessage.trim()).toLocaleLowerCase();
    let outPutMessage = "";
    let flag = true;

    if(encode.checked){
        // encode
        for (let i = 0; i < newStrMessage.length; i++){
            let number = newStrMessage.charCodeAt(i);
            number = number + userKey;
            //console.log(number);

            if (((number - userKey) > 96) && (number - userKey) < 123){
                if(number > 122){
                    number = number - 26
                }
                outPutMessage += String.fromCharCode(number)

            } else {
                outPutMessage += newStrMessage[i];

            }
        
        }
        flag = true;
    } else{
        //decode
        for (let i = 0; i < newStrMessage.length; i++){
            let number = newStrMessage.charCodeAt(i);
            number = number - userKey

            if (((number + userKey) > 96) && (number + userKey) < 123){
                if(number < 97){
                    number = number + 26
                }
                outPutMessage += String.fromCharCode(number) 

            
            }else{
                outPutMessage += newStrMessage[i];
                 
            }
        }

        flag = false;
    }


document.getElementById("output").value = outPutMessage;

}

/*

if(encode.checked){
        // encode
        for (let i = 0; i < newStrMessage.length; i++){
            let number = newStrMessage.charCodeAt(i);
            number = number + userKey;
            //console.log(number);

            if (((number - userKey) > 96) && (number - userKey) < 123){
                if(number > 122){
                    number = number - 26
                }
                outPutMessage += String.fromCharCode(number)

            } else {
                outPutMessage += newStrMessage[i];

            }
        
        }
        flag = true;
    } else{
        //decode
        for (let i = 0; i < newStrMessage.length; i++){
            let number = newStrMessage.charCodeAt(i);
            number = number - userKey

            if (((number - userKey) > 32) && (number - userKey) < 65){
                outPutMessage += newStrMessage[i]; //

            }
            
            else if (number < 97 && number != (32 - userKey)){
                outPutMessage += String.fromCharCode(number + 26)

            } else if(number == 32 - userKey){
                outPutMessage += " ";
            }
            
            else{
                outPutMessage += String.fromCharCode(number) 
            }
        }

        flag = false;
    }
}*/
