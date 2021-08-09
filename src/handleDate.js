function handleDate(initialDate) {
    const pad = v => v.padStart(2, `0`);
    
    initialDate
    .split(/[-/]/).map(pad).join("/");
    const toFragments = dateString => initialDate
    .split(/[-/]/).map(pad);
    const dateTo_ddmmyyyy = ([date, month, year], divider = "/") => 
    `${date}${divider}${month}${divider}${year}`;
    const [date, month, year] = toFragments(initialDate);
  
  olddate = ( `${
    [month, date, year].join('-') }` );
  
  
  newdate = olddate.replace(/(^|-)0+/g, "$1"); // => "2-3"
  
  return newdate;
  }