function handleDate(n) {
    if (n.length === 6) {
      return n.replace(/(\d{1})(\d{1})(\d{4})/, "$1-$2-$3");
    } else if (n.length === 8) {
      return n.replace(/(\d{2})(\d{2})(\d{4})/, "$1-$2-$3");
    } else {
      return 
    }
}

console.log(handleDate("182021"));
console.log(handleDate("11122021"));