export {}
let data:string[] = ['nik' , 'mik', 'sik' , 'zik', 'tik'];
// let data = ['nik' , 'mik', 'sik' , 'zik', 'tik', 15, true];
// let data:string= ['nik' , 'mik', 'sik' , 'zik', 'tik', 15, true]; //error because we only define string not told string of array
// data.push('jik');   can push 
// data.push(10000); only push if your array have different datatype
data[7] = 'ram';
console.warn(data)