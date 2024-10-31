const foods = [
    { name: 'Odeng', sugar: 15.4 },
    { name: 'Roti Goreng', sugar: 16 },
    { name: 'Kentang', sugar: 1 },
    { name: 'Nugget', sugar: 2 },
    { name: 'Es Teh', sugar: 7 },
    { name: 'Thai Tea', sugar: 6.1 },
    { name: 'Es Jeruk', sugar: 4 },
    { name: 'Es Coklat', sugar: 9 },
    { name: 'Spaghetti', sugar: 5 },
    { name: 'Sosis', sugar: 2 },
    { name: 'Telor', sugar: 1 },
    { name: 'Nasi Goreng', sugar: 1 },
    { name: 'Ketoprak', sugar: 6 },
    { name: 'Salad Buah', sugar: 13 },
    { name: 'Nasi', sugar: 2 },
    { name: 'Cumi', sugar: 2.5 },
    { name: 'Kwetiau', sugar: 1 },
    { name: 'Chicken Katsu', sugar: 4 },
    { name: 'Puding', sugar: 5 },
    { name: 'Makaroni', sugar: 6 },
    { name: 'Mie Jebew', sugar: 2.5 },
    { name: 'Donat', sugar: 12 },
    { name: 'Otak Otak', sugar: 3 },
    { name: 'Sempol', sugar: 2 },
    { name: 'Martabak Tahu', sugar: 3 },
    { name: 'Ayam Geprek', sugar: 3 },
    { name: 'Ayam Geprek', sugar: 3 },
    { name: 'Kebab', sugar: 4 },
    { name: 'Donat Pak Ali', sugar: 8 },
    { name: 'Es Teh Pak Ali', sugar: 12 },
    { name: 'Tahu Isi', sugar: 1.5 },
    { name: 'Chicken Katsu', sugar: 3 },
    { name: 'Takoyaki', sugar: 5.5 },
]

contents = [
    `
        <h3 class="mb-3" >Step 1: Masukan Identitas</h3>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="name" placeholder="test">
          <label for="name">Masukan Nama</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="age" placeholder="17">
          <label for="age">Masukan Umur</label>
        </div>
    `,
    `    <h3 class="mb-3">Step 2: Masukan Makanan</h3> ` +
    `    <select id="mySelect" multiple="multiple" style="width: 300px;" class="form-select"> ` +
    foods.map( food => `<option value="${food.name}" data-sugar="${food.sugar}">${food.name}</option>`) + 
    `    </select> `
    ,
    `
        <h3 class="mb-3">Step 3: Hasil</h3>
        <p>Kadar gula darah anda: 8%</p>
        <p>Kadar gula anda termasuk: normal</p>
        <p>Tips-tips untuk gula darah normal : </p>
        <ol class="list-group list-group-numbered mb-3 ">
            <li class="list-group-item">Makan teratur dengan makanan yang sehat Dan usahakan sarapan!.</li>
            <li class="list-group-item">Pilih camilan sehat, seperti  buah yogurt atau roti.</li>
            <li class="list-group-item">Perhatikan Porsi dan Jenis Karbohidrat seperti nasi merah, oatmeal, atau roti gandum.</li>
            <li class="list-group-item">Usahakan olahraga tapi jangan berlebihan dan usahakan makan dulu sebelum olahraga yahh.</li>
            <li class="list-group-item">Hindari makan makanan manis karena bisa membuat gula darah naik cepat, tetapi juga akan turun drastis.</li>
            <li class="list-group-item">Jika sudah ada tanda tanda pusing, gemetar mudah lelah segera makana camilan manis seperti permen atau jus buah.</li>
        </ol>

    `
]