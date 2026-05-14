//array , tuple, object

let bazarList: String[] = ['eggs', 'milk', 'sugar'];

// bazarList.push(true)//gives error 
let mixedArray: (string | number)[] = ['eggs', 12, 'milk', 1, 'sugar', 2];//also inference type data// now we can push string or number
// mixedArray.push(true) will give error

// tuple fixed length and datatype array
let couple: [string, string] = ['husband', 'wife'];
// reference type: object
const user:{
    organization: "programming hero";// literal type
    //readonly organization: "programming hero" //access modifiers
    firstname: string;
    middlename?: string;//optional by using ?
    lastname: string;
}= {
    organization: "programming hero",
    firstname: 'boni',
    middlename: 'amin',
    lastname: 'gazi'
};
// user.organization = "pro hero";//will give error