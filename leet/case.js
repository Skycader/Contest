a = process.argv[2]*1

switch (a) {
	case 23: 
		console.log(1)
		break
	case 115:
		console.log("DANKA")
		break
	
}
const used = process. memoryUsage(). heapUsed / 1024 / 1024;
console. log(`The script uses approximately ${Math. round(used * 100) / 100} MB`);
