var productList = document.getElementById('product-list');

// veritabanına ürünler için istek atma
fetch('https://api.escuelajs.co/api/v1/products')
  // eğerki veritabanı olumlu dönüş yaparsa çalışır
  .then(function (cevap) {
    // cevabı işleme ve aşşağıya gönderme
    return cevap.json();
  })
  .then(function (veri) {
    // veri dizisindeki herbir obje için fonksiyon çalıştır
    veri.forEach(function (urun) {
      console.log(urun);

      //   div oluştur
      var urunDiv = document.createElement('div');

      //  dive class verme
      urunDiv.classList.add('product');

      // oluşan divin içeriğini belirleme
      urunDiv.innerHTML = `
        <img src="${urun.images[0]}" />
        <p>${urun.title}</p>
        <p>${urun.category.name}</p>
        <div class="product-info">
          <span>${urun.price}</span>
          <button>Sepete Ekle</button>
        </div>
    `;

      // oluşan kardı htmle gönder
      productList.appendChild(urunDiv);
    });
  });
