function verify()
{
    var pwdnum=document.getElementById("passwrd").value;
       
           var pwdlen=pwdnum.length;
           var nov=0;

           for(l=0;l<pwdlen;l++)
        
            {
                
                    if ((pwdnum.charCodeAt(0)>=65 && pwdnum.charCodeAt(0)<=90) &&
                    (pwdnum.charCodeAt(1)>=65 && pwdnum.charCodeAt(1)<=90) &&
                    (pwdnum.charCodeAt(2)>=65 && pwdnum.charCodeAt(2)<=90) &&
                    (pwdnum.charCodeAt(3)==32) &&
                    (pwdnum.charCodeAt(4)>=48 && pwdnum.charCodeAt(4)<=57) &&
                    (pwdnum.charCodeAt(5)>=48 && pwdnum.charCodeAt(5)<=57) &&
                    (pwdnum.charCodeAt(6)==32) &&  
                    (pwdnum.charCodeAt(7)>=97 && pwdnum.charCodeAt(7)<=122) &&
                    (pwdnum.charCodeAt(8)>=97 && pwdnum.charCodeAt(8)<=122))
                    

                    {
                        nov=nov+1;
                    }

                    
                
            
            
          
              
                    
            }


            if(nov!=parseInt(pwdlen))
            {
                alert("Invalid vechicle reg.")

            }
            else
            {
                alert("valid registration number")
            }
        }
