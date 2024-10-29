const makeChange = (c) => {
  const quarter=25;
	const dime=10;
	const nickel=5;
	const penny=1;

	const q=Math.floor(c/quarter);
	c %=quarter;
	const d=Math.floor(c/dime);
	c %=dime;
	const n=Math.floor(c/nickel);
	c%-nickel;
	const p=c;
	return {q,d,n,p};
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
