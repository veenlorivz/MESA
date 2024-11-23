const foods = [
    { name: 'Odeng', sugar: 23.2 },
    { name: 'Roti Goreng', sugar: 5.6 },
    { name: 'Kentang', sugar: 0.85 },
    { name: 'Nugget', sugar: 0.27 },
    { name: 'Es Teh', sugar: 14.7 },
    { name: 'Thai Tea', sugar: 13 },
    { name: 'Es Jeruk', sugar: 8.4 },
    { name: 'Es Coklat', sugar: 19 },
    { name: 'Spaghetti', sugar: 5 },
    { name: 'Sosis', sugar: 0.8 },
    { name: 'Telor', sugar: 0.5 },
    { name: 'Nasi Goreng', sugar: 1.5 },
    { name: 'Ketoprak', sugar: 12 },
    { name: 'Salad Buah', sugar: 10.4 },
    { name: 'Nasi', sugar: 3 },
    { name: 'Cumi', sugar: 1.425 },
    { name: 'Kwetiau', sugar: 0.25 },
    { name: 'Chicken Katsu', sugar: 4.4 },
    { name: 'Puding', sugar: 4 },
    { name: 'Makaroni', sugar: 3 },
    { name: 'Mie Jebew', sugar: 6 },
    { name: 'Donat', sugar: 4.8 },
    { name: 'Otak Otak', sugar: 0.6 },
    { name: 'Sempol', sugar: 0.4 },
    { name: 'Martabak Tahu', sugar: 1.5 },
    { name: 'Ayam Geprek', sugar: 3.3 },
    { name: 'Kebab', sugar: 6 },
    { name: 'Donat Pak Ali', sugar: 3.2 },
    { name: 'Es Teh Pak Ali', sugar: 25.2 },
    { name: 'Tahu Isi', sugar: 0.375 },
    { name: 'Chicken Katsu', sugar: 3.3 },
    { name: 'Takoyaki', sugar: 5.5 },
]

contents = [
    `
        <h3 class="mb-3" >Step 1: Masukan Identitas</h3>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="name" placeholder="name">
          <label for="name">Masukan Nama</label>
          <p style="color: red;" id="name-error-message"></p>
          </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="age" placeholder="0-80" min="10" max="80" onkeyup="maxAge(this)">
          <label for="age">Masukan Umur (0-80)</label>
          <p style="color: red;" id="age-error-message"></p>
        </div>
        <button type="button" class="btn btn-primary w-100 mb-3 mt-2" id="step1Button">Selanjutnya</button>
    `,
    `    <h3 class="mb-3">Step 2: Masukan Makanan</h3> ` +
    `    <div class="form-control-wrap">` +
    `    <select id="mySelect" multiple="multiple" style="width: 300px;" class="form-select food__form"> ` +
    foods.map( food => `<option value="${food.name}" data-sugar="${food.sugar}">${food.name}</option>`) + 
    `    </select> ` +
    '    <p style="color: red;" id="food-error-message"></p>' +
    `    </div>` +
    `    <button type="button" class="btn btn-primary w-100 mb-3 mt-2" id="step2Button">Selanjutnya</button>`
]

tips = [
    { 
        type: 'Rendah', 
        advices: [
            'Makan teratur dengan makanan yang sehat Dan usahakan sarapan!.',
            'Pilih camilan sehat, seperti buah yogurt atau roti.',
            'Perhatikan Porsi dan Jenis Karbohidrat seperti nasi merah, oatmeal, atau roti gandum.',
            'Usahakan olahraga (minimal 30 menit sehari) tapi jangan berlebihan dan usahakan makan dulu sebelum olahraga yahh.',
            'Hindari makan makanan manis karena bisa membuat gula darah naik cepat, tetapi juga akan turun drastis.',
            'Jika sudah ada tanda tanda pusing, gemetar mudah lelah segera makanan camilan manis seperti permen atau jus buah.',
        ],
        notes: 'Kamu lebih kuat dari yang kamu kira. Atur pola makanmu, jaga kesehatan, dan tubuhmu akan semakin bertenaga setiap hari!'
    },
    {
        type: 'Normal',
        advices: [
            'Minum air putih yang cukup untuk membantu metabolisme berjalan lancar.',
            'Tidurlah yang cukup karena menjaga keseimbangan hormon yang mengatur kadar gula darah.',
            'Batasi makanan minuman manis karena bisa menyebabkan lonjakan gula darah :D',
            'Jangan lupa seringlah berolahraga ( minimal 30 menit sehari ) karena membantu gula darah agar tetap stabil', 
            'Makanlah camilan sehat seperti buah, kacang-kacangan, yogurt, atau biskuit gandum'
        ],
        notes: 'Membangun kesehatan itu butuh usaha, dan kamu sudah melakukannya dengan baik . Terus lanjutkan!!!'
    },
    {
        type: 'Tinggi',
        advices: [
            'Kurangi makanan tinggi gula seperti donat, permen, es teh dan lain lain',
            'Makan dalam porsi kecil namun sering! Agar membantu menjaga gula darah lebih stabil',
            'Pilih minuman rendah gula (less sugar) atau tanpa gula',
            'Perhatikan Porsi dan kombinasi makanan. Usahakan di setiap makanan yg kamu makan ada protein serat dan karbohidrat.',
            'Jagalah pola tidur ( minimal 6 jam sehari ) dan jangan bergadang alasannya karena membantu tubuh lebih seimbang dalam mengatur kadar gula darah.',
            'Berolahragalah secara teratur ( minimal 30 menit sehari ) seperti jalan kaki, bersepeda dll. Usahain olahraga 30 menit tiap hari.',
            'Konsultasi ke dokter atau ahli gizi, Jika kadar makanan yang dikonsumsi tinggi supaya mereka bisa beri saran yang tepat sesuai kebutuhan dan kondisi masing-masing.'
        ],
        notes: 'Menjaga pola makan, rutin berolahraga, dan mengelola stres adalah langkah penting untuk kesehatan. Tetap semangat, karena kesehatan adalah perjalanan panjang yang layak diperjuangkan!'
    }
]