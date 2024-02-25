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


// console.log(jawaban)

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

console.log(jawaban)
