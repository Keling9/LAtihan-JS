//soal

let array1=[1,3,5]
let array2=[2,4,6]
let array3=["mulai","tengah","stop"]

// from the defined arrays above,
// buat array baru kalo di console log kayak ini:
// ["mulai",1,2,3,"tengah",4,5,6,"stop"]

//jawaban
let jawaban=[]
jawaban.push(array3[0])
jawaban.push(array1[0])
jawaban.push(array2[0])
jawaban.push(array1[1])
jawaban.push(array3[1])
jawaban.push(array2[1])
jawaban.push(array1[2])
jawaban.push(array2[2])
jawaban.push(array3[2])


//console.log(jawaban)

//soal2 
// dari variable jawaban, hapus semua string dan tambahkan angka 0 diawal dan 7 diakhir

jawaban.pop()
jawaban.shift()
jawaban.push(7)
jawaban.unshift(0)
jawaban.splice(4,1)
jawaban.splice(1,1)
jawaban.splice(2,1)
jawaban.splice(3,1)
jawaban.splice(4,1)

//console.log(jawaban)

//soal

// 1. buat looping console log hanya ganjil
// 2. hanya string
let soal2=["mulai",1,2,3,"tengah",4,5,6,"stop"]

for(i in soal2){
    if(soal2[i]%2==1){
        console.log("index ke :" , i , "isi index :", soal2[i])
    }

    

    
}
for (x in soal2){
    if(typeof(soal2[x])=="string"){
        console.log(soal2[x])
    }
}
// for(a in soal2){
//     if(soal2[a]%1==undefined){
//         console.log("index ke :" , a , "isi index :" , soal2[a])
//     }
// }