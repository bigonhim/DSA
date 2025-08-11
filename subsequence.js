// This one checks if there exist a subsequence between two strings e.g. -> ace is a subsequence of abcde.
// This also utilizes the two pointers technique

const subsequence = (s,t) => {
    let i = 0;
    let j = 0;
    let str = "";
    while(i < s.length && j < t.length){
       if(s[i] === t[j]){
        str = str + s[i];
        i++;
        j++;
       }
       else{
        j++;
       }
    }
    if(str === s){
      return true;
    }
    else{
      return false;
    }
}

console.log(subsequence("abc","abcde"));