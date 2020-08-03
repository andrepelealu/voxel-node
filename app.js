
console.log("running");

const convert = a =>{
    var vocal = a,i,u,e,o;
    var count = a.length;
    var string= [];
    var stringindex = [];
    var countStringIndex = stringindex.length;
    for(var i=0 ; i<count ; i++){
        // console.log(a.charAt(i));
        string.push(a.charAt(i));
        if(a.charAt(i) == 'a' || a.charAt(i) == 'i' || a.charAt(i) == 'u' || a.charAt(i) == 'e' || a.charAt(i) == 'o'){
            stringindex.push(i);
        }    
    }
    
for(var x = 0 ; x<stringindex.length ; x++ ){
    console.log(stringindex[x]);
    string[stringindex[x]] = 'i';
    }
    return string;
}
 
console.log(convert("budi"));
const hapus = () =>{
    var data = [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67];
    var cek = [];
    
    var count = data.length;
    for(i=0 ; i<count ; i++){
        var y = i+1
        console.log('i= ',data[i]);
        console.log('y= ',data[y]);
        if(data[i] == data[y]){
            console.log(true);
            // delete data[i]

        }
        
    }
    // return data
}

// hapus();

const cekString = (a)=>{
    var count = a.length;
    var arr = [];
    var x = count-1;
    var y = 0;

    var cek 
    for(i=0 ; i<=count ; i++){
        arr.push(a.charAt(i));
        if(arr[x] == arr[y]){
            console.log(arr[x]);
            console.log(arr[y]);
            x -- ;
            y++
            cek = true
        }else{
            cek = false
        }
    }
    return cek;
}

// console.log(cekString('kodok')) ;

const book = x =>{
    var array = [
        "1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "10A",
        "1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "10B",
        "1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C",
        "1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D",
        "1E", "2E", "3E", "4E", "5E", "6E", "7E", "8E", "9E", "10E",
        "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F",
        "1G", "2G", "3G", "4G", "5G", "6G", "7G", "8G", "9G", "10G",
        "1H", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H",
        "1I", "2I", "3I", "4I", "5I", "6I", "7I", "8I", "9I", "10I",
        "1J", "2J", "3J", "4J", "5J", "6J", "7J", "8J", "9J", "10J"
    ];
    // console.log(array[3]);
    // array.forEach(arr=>{
    //     console.log(arr);
    // })
    var count = array.length
    // console.log(count);
    var find = false
    for(var i=0 ; i<= count ; i++){
        // console.log(array[i]);
        if(x === array[i]){
            array[i] = array[i]+' - booked'
            find = true
            break;
        }else{
            find = false;
        }
    }
    if(find ){
        return array
    }else{
        return 'not found';
    }
    
} 
// console.log(book("6Jx")); 

// query case 9 
// SELECT * user,profile,jabatan ; 

//cek nilai 

const cekNilai = () =>{
    var arr = [
        data1 = {
            sejarah : 8,
            matematika : 7,
            sosiologi : 6, 
            pkn : 9
    },
        data2 = {
            sejarah : 9,
            matematika : 5,
            sosiologi : 3, 
            pkn : 5
        }
    ]

    // console.log(arrdata1);
}
// cekNilai()