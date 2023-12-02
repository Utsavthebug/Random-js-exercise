// flatten array of array in javascript

const given_array = [[1,2,3],[4,5,6],[12,8],[13,[14,15]]]

//function to flatten array
let flat_array = []

function flatten_array(given_array_func,index){
  
    if(given_array_func.length-1<index){
        return;
    }
    
    if(Array.isArray(given_array_func[index])){
        flatten_array(given_array_func[index],0)
        flatten_array(given_array_func,index+1)
        
    }
    else{
        flat_array.push(given_array_func[index])
        flatten_array(given_array_func,index+1)
    }
    return flat_array;
}


const final_array = flatten_array(given_array,0)

