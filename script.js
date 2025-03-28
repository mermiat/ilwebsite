let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.transform = `translateY(${value * 0.5}px)`;
    text.style.opacity = 1 - value * 0.002; 
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".navigation a");
        const contentSection = document.querySelector(".sec");
    

        function loadPage(url) {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, "text/html");
                    const newContent = doc.querySelector(".sec").innerHTML;
    
                    contentSection.style.opacity = "0";
                    setTimeout(() => {
                        contentSection.innerHTML = newContent;
                        contentSection.style.opacity = "1";
                        window.history.pushState({}, "", url); 
                    }, 300); 
                })
                .catch(err => console.error("Error loading page:", err));
        }
    
        links.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetPage = this.getAttribute("href");
                loadPage(targetPage);
            });
        });
    
        window.addEventListener("popstate", function () {
            loadPage(window.location.pathname);
        });
    });})

// button

const images = [
    {
        src: "pp1.png",
        title: "Dieng Frizz",
        description:"Jenis minuman yang kami pilih dengan tujuan untuk membantu menyegarkan badan melalui minuman bersoda dingin dengan komposisi soda sprite, es batu, sirup, dan jelly. Cocok saat musim panas ini dan terutama saat hari-h bazaar dimana akan panas sekali suasananya. Awalnya, kami rencana untuk membuat pop ice, tetapi dengan tahap yang merepotkan, kami ubah menjadi minuman ini." },
    {
        src: "pp2.png",
        title: "Wafflicious",
        description: "Hidangan penutup kami, yaitu waffle yang kami awalnya ingin buat untuk produk bioteknologi (menggunakan ragi instan) tetapi pada akhirnya tidak terpilih. Waffle yang kami sajikan ini kami persiapkan tiga topping yaitu gula aren, whipped cream, maple syrup tetapi dengan penambahan harga Rp2.000 per topping."
    },
    {
        src: "pp3.png",
        title: "Mambo Delight",
        description: "Hidangan dingin ini yang kami pilih karena tidak memerlukan bahan yang ribet dan cepat untuk dibuat. Hidangan ini berbentuk lonjong dan panjang yaitu es mambo yang mempunyai 4 rasa; bubblegum, mangga, stroberi, dan anggur yang sudah kami persiapkan dan dibeku di rumah sehingga dapat bertekstur sama seperti es batu tetapi dengan rasa-rasa yang variatif."
    },
    {
        src: "pp4.png",
        title: "Wrap & Roll",
        description: "Salah satu makanan yang pernah viral di media sosial yang kami pikir akan mudah menarik perhatian banyak orang karena dengan cara makan yang lebih unik daripada biasanya, mie instan yang dibungkus dengan rice paper. Mie instan yang sudah dibungkus dengan rice paper agar lebih krispi, dipanggang lagi biar mengeluarkan bunyi yang renyah saat mengunyah makanan tersebut."
    },
    {
        src: "pp5.png",
        title: "Hairbow Batik",
        description: "Aksesoris cantik terbentuk dari kain batik khas Indonesia yang kami buat untuk produk kesenian. Awalnya kami ingin membuat brooch dan pita batik, tetapi karena terlalu sulit untuk dibuat, kami direkomendasi untuk membuat hairbow batik. Akhirnya kami memilih hairbow batik dengan ada tiga jenis warna yang indah untuk mempercantik diri dengan ikat rambut yang sudah dijahit dibelakangnya."
    },
    {
        src: "pp6.png",
        title: "Stikantara",
        description: "Produk umum yang banyak dibeli oleh masyarakat ini kami rencanakan dengan tema flora, fauna, makanan, alat musik, dan rumah adat yang dapat ditemukan di Indonesia. Stiker kami buat dengan menggunakan media aplikasi digital untuk menggambar bertujuan untuk memenuhi produk PPKn. Terdiri dari 10 jenis stiker yang berbeda dan dapat dikoleksi."
    },
    {
        src: "pp7.png",
        title: "NusaPouchy",
        description: "Termasuk juga produk umum untuk menyimpan barang-barang kecil ataupun barang-barang yang penting. Pouch yang sudah kami persiapkan menggunakan gambar Mbaru Niang, Monas, dan Keris yang merupakan kebudayaan khas Indonesia dengan ada kertas yang menjelaskan tentang gambar-gambar tersebut. Menggunakan teknik menggambar digital dan bertujuan untuk memenuhi produk PPKn."
    },
    {
        src: "pp8.png",
        title: "RingRaja",
        description: "Produk yang seringkali dikoleksi dan dimana-mana pasti ada mau di media sosial atau secara langsung. Keychain ini dibuat dengan teknik menggambar digital yang bertema bunga-bunga khas Indonesia yang kami pilih yaitu anggrek ungu, rafflesia arnoldii, dan melati putih. Kami juga pikir bahwa akan lebih seru ketika diletakkan di dalam tempat blind box agar bisa lebih seru dan mengejutkan apa yang akan didapatkan. Ini juga bertujuan untuk memenuhi produk PPKn"
    }, {
        src: "pp9.png",
        title: "Treasure Bundle",
        description: "Perkumpulan produk kami dari yaitu RingRaja (gantungan kunci), NusaPouchy (pouch), dan Stikantara (stiker). Kami berpikir bahwa membuat tiga produk ini dijadikan bundle dengan harga yang sedikit murah daripada harga biasa dan terjangkau. Juga, karena tiga produk ini berupa semua produk PPKn yang kami sudah merencanakan."
    },
    {
        src: "pp10.png",
        title: "Flores Ink Bundle",
        description: "Perkumpulan produk yang berisi kertas daur ulang (produk bioteknologi), washi tapes, dan feather pen. Bundle ini kami rencanakan sebagai journaling set karena cocok untuk remaja-remaja sekarang yang sedang mencari perlengkapan tulis. Bundle ini kami buat se-estetika mungkin dengan kertas daur ulang kami gunakan bunga sebagai dekorasi tambahan agar terlihat lebih indah."
    },
    
];


let currentIndex = 0;

function showImage(index) {
    const image = images[index];
    document.getElementById("carousel-img").src = image.src;
    document.getElementById("carousel-title").textContent = image.title;
    document.getElementById("carousel-description").textContent = image.description;
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showImage(currentIndex);
});
document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const elements = document.querySelectorAll('p'); // Selects all elements
    
    elements.forEach(element => {
        if (element.textContent) {
            const text = element.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                // buat highlighting search termnnya
                const highlightedText = text.replace(new RegExp(searchTerm, 'g'), (match) => `<mark>${match}</mark>`);
                element.innerHTML = highlightedText;
            } else {
                element.innerHTML = element.textContent; // buat hilangin highlights kalau if not found
            }
        }
    });
    });