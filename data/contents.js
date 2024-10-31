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
]

tips = [
    { 
        type: 'Rendah', 
        advices: [
            'Makan teratur dengan makanan yang sehat Dan usahakan sarapan!.',
            'Pilih camilan sehat, seperti  buah yogurt atau roti.',
            'Perhatikan Porsi dan Jenis Karbohidrat seperti nasi merah, oatmeal, atau roti gandum.',
            'Usahakan olahraga tapi jangan berlebihan dan usahakan makan dulu sebelum olahraga yahh.',
            'Hindari makan makanan manis karena bisa membuat gula darah naik cepat, tetapi juga akan turun drastis.',
            'Jika sudah ada tanda tanda pusing, gemetar mudah lelah segera makana camilan manis seperti permen atau jus buah.',
        ],
        notes: 'Kamu lebih kuat dari yang kamu kira. Atur pola makanmu, jaga kesehatan, dan tubuhmu akan semakin bertenaga setiap hari!'
    },
    {
        type: 'Normal',
        advices: [
            'Minum air putih yang cukup untuk membantu metabolisme berjalan lancar.',
            'Tidurlah yang cukup karena menjaga keseimbangan hormon yang mengatur kadar gula darah.',
            'Batasi makanan minuman manis karena bisa menyebabkan lonjakan gula darah :D',
            'Jangan lupa seringlah berolahraga karena membantu gula darah agar tetap stabil', 
            'Makanlah camilan sehat seperti buah, kacang-kacangan, yogurt, atau biskuit gandum'
        ],
        notes: 'Membangun kesehatan itu butuh usaha, dan kamu sudah melakukannya dengan baik . Terus lanjutkan!!!'
    },
    {
        type: 'Tinggi',
        advices: [
            'Kurangi makanan tinggi gula seperti donat, permen, es teh dan lain lain ',
            'Makan dalam porsi kecil namun sering! Agar membantu menjaga gula darah lebih stabil',
            'Pilih minuman tanpa gula (less sugar)',
            'Perhatikan Porsi dan kombinasi makanan. Usahakan di setiap makanan yg kamu makan ada protein serat dan karbohidrat.',
            'Jagalah pola tidur dan jangan bergadang. alasannya karena membantu tubuh lebih seimbang dalam mengatur kadar gula darah.',
            'Berolahragalah secara teratur seperti jalan kaki, bersepeda dll. Usahain olahraga 30 menit tiap hari.',
            'Konsultasi ke dokter atau  ahli gizi. Mereka bisa beri saran yang tepat sesuai kebutuhan dan kondisi masing-masing.'
        ],
        notes: 'Menjaga pola makan, rutin berolahraga, dan mengelola stres adalah langkah penting untuk kesehatan. Tetap semangat, karena kesehatan adalah perjalanan panjang yang layak diperjuangkan!'
    }
]