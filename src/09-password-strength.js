/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
if (typeof password != "string" || password.length==0) {
  return "weak" ;
}


  let strengthLevel = 0 ;
  
  // checking of lowercase letter
  let lc = false ;
for(let i = 97 ; i <= 122 ; i++) {
  lc = password.includes(String.fromCharCode(i)) ;
  if(lc) {
    strengthLevel ++ ;
    break ;
  } 
} 

// checking of uppercase letter
let uc = false ;
for(let i = 65 ; i <= 90 ; i++) {
  uc = password.includes(String.fromCharCode(i)) ;
  if(uc) {
    strengthLevel ++ ;
    break ;
  } 
} 
// checking whether the length of the password is atleast 8 characters long
if ( password.length >= 8) {
  strengthLevel ++ ;
}

//contains alteast one number 
let n = false ;
for ( let i = 0 ;i <= 9 ; i++) {
n = password.includes(String(i)) ;
if (n) {
  strengthLevel ++ ;
  break ;
}
}

// contains alteast one special character
let sc = false ;
const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?" ;
for ( let i = 0 ; i<specialChars.length ; i++) {
  sc = password.includes (specialChars[i]) ;
  if ( sc) {
    strengthLevel ++ ;
    break ;
  }
}

//evaluation of password strength 
if ( strengthLevel ===1 || strengthLevel ===0) {
  return "weak"
} else if ( strengthLevel ===2 || strengthLevel ===3) {
  return "medium"
} else if ( strengthLevel === 4) {
  return "strong"
} else if ( strengthLevel ===5) {
  return "very strong" ;
}
}