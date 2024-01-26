const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod= require ("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6)

function signJWT(username,password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature =  jwt.sign({
        username  
    }, jwtPassword)
    return signature;
}


const ans = signJWT("gsuuhgasoif@gmail.com", "awrgabseynjdbndsysf")
console.log(ans)





function verifyJWT(token) {
    try {
        
        const verified = jwt.verify(token, jwtPassword)
        return true;
        }
    catch (error) {
        
    }
    return false;
}

console.log(verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdzdXVoZ2Fzb2lmQGdtYWlsLmNvbSIsImlhdCI6MTcwNjMwMjgzN30.qy9KG23tfA2JQy7WVf5RcUlFd-Cw-H7GOnDbDCFhCtg"))


function decodeToken(token) {
    //return either true or false if the jwt can be decoded
    const decoded = jwt.decode(token);
    if(decoded){
        return true;}
        else{
            return false;
        }

}

// console.log(decodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdzdXVoZ2Fzb2lmQGdtYWlsLmNvbSIsImlhdCI6MTcwNjMwMjU5MH0.C6_sE5xL89MvoR3qvvRuBxSotYxuEPdLKo4GW8KrFYs"));
























































































// //decode,verify, generate are the three main mfunctions


// const value = {
//     name: "Prathamesh",
//     accountNumber : 123123
// }

// //jwt
// const token = jwt.sign(value, "secret");
// //this token has been generated using this secret,
// //and hence this token can only be verified using this secret 
// console.log(token)








