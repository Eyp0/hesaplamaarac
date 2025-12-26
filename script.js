function asalHesapla() {
    let sayi = document.getElementById("sayi").value;
    console.log("Hesaplanıyor...");
    console.log(sayi);
    let asalMi = "Sayı Asaldır";
    let bolenler;
    if (sayi < 1) {
        asalMi = "Sayı 1'den küçük olamaz";
    }
    if (sayi == 1) {
        asalMi = "Sayı 1'e eşit olamaz";
    }
    for (let i = 2; i < sayi; i++) {
        if (sayi % i === 0) {
            asalMi = "Sayı Asal Değildir";
            bolenler = i;
            break;
        }
    }
    if (asalMi == "Sayı Asal Değildir") {
        document.getElementById("bolenler").innerHTML = "Bölenler: " + bolenler;
    }

    document.getElementById("sonuc").innerHTML = asalMi;
}


function faktoriyalHesapla() {
    let sayi = document.getElementById("sayi").value;
    console.log("Hesaplanıyor...");
    console.log(sayi);
    let faktoriyal = 1;
    if (sayi < 0) {
        document.getElementById("sonuc").innerHTML = "Sayı 0'dan küçük olamaz";
    }
    if (sayi == 0) {
        document.getElementById("sonuc").innerHTML = "Sayı 0'a eşit olamaz";
    }
    for (let i = 1; i <= sayi; i++) {
        faktoriyal *= i;
    }

    document.getElementById("sonuc").innerHTML = faktoriyal;
}

function usHesapla() {
    let sayi = parseFloat(document.getElementById("sayi").value);
    let us = parseInt(document.getElementById("us").value);
    let sonuc = 1;

    console.log("Hesaplanıyor...");
    console.log(sayi);
    if (us === 0) {

        sonuc = 1;
    } else if (us < 0) {

        for (let i = 0; i < -us; i++) {
            sonuc *= sayi;
        }
        sonuc = 1 / sonuc;
    } else {

        for (let i = 0; i < us; i++) {
            sonuc *= sayi;
        }
    }

    document.getElementById("sonuc").innerHTML = sonuc;
}

function kareHesapla() {
    let sayi = parseInt(document.getElementById("sayi").value);
    let sonuc = 1;

    console.log("Hesaplanıyor...");
    console.log(sayi);
    sonuc = sayi * sayi;

    document.getElementById("sonuc").innerHTML = sonuc;
}

function kupHesapla() {
    let sayi = parseInt(document.getElementById("sayi").value);
    let sonuc = 1;

    console.log("Hesaplanıyor...");
    console.log(sayi);
    sonuc = sayi * sayi * sayi;

    document.getElementById("sonuc").innerHTML = sonuc;
}

function yasHesapla() {
    let dogum = document.getElementById("dogum").value;
    let yil = new Date(dogum);
    let simdi = new Date();
    console.log("dogum");
    console.log("hesaplanıyor...");
    console.log(sonuc);
    let fark = simdi - yil;
    let saniye = Math.floor(fark / 1000);
    let dakika = Math.floor(saniye / 60);
    let saat = Math.floor(dakika / 60);
    let gun = Math.floor(saat / 24);
    let kalanSaniye = saniye % 60;
    let kalanDakika = dakika % 60;
    let kalanSaat = saat % 24;
    let yilSayisi = Math.floor(gun / 365);
    let aySayisi = Math.floor((gun % 365) / 30);
    let kalanGun = (gun % 365) % 30;

    document.getElementById("sonuc").innerHTML =
        yilSayisi + " yıl " +
        aySayisi + " ay " +
        kalanGun + " gün " +
        kalanSaat + " saat " +
        kalanDakika + " dakika " +
        kalanSaniye + " saniye ";
}

function fahrenheitHesapla() {
    let derece = parseFloat(document.getElementById("santigrat").value);
    let sonuc = derece * 9 / 5 + 32;
    console.log("Hesaplanıyor...");
    console.log(sonuc);

    document.getElementById("sonuc").innerHTML = sonuc + "°F(Fahrenhait)";
}

function santigratHesapla() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let sonuc = (fahrenheit - 32) * 5 / 9;
    console.log("Hesaplanıyor...");
    console.log(sonuc);

    document.getElementById("sonuc").innerHTML = sonuc + " °C (Santigrat)";
}

function bmiHesapla() {
    let boy = parseFloat(document.getElementById("boy").value) / 100;
    let kilo = parseFloat(document.getElementById("kilo").value);
    let sonuc = kilo / (boy * boy);
    let kategori = "";
    console.log("Hesaplanıyor...");
    console.log(sonuc);
    if (sonuc < 18.5)
        kategori = "Zayıf";
    else if (sonuc >= 18.5 && sonuc < 25)
        kategori = "Normal";
    else if (sonuc >= 25 && sonuc < 30)
        kategori = "Aşırı Kilolu";
    else if (sonuc >= 30)
        kategori = "Obez";
    else
        kategori = "Geçerli Sayı Giriniz";
    console.log(kategori);

    document.getElementById("sonuc").innerHTML = sonuc + "→" + kategori;

}

function hipotenusHesapla() {
    let a = parseFloat(document.getElementById("birinicidikkenar").value);
    let b = parseFloat(document.getElementById("ikincidikkenar").value);
    if (a < 0 || b < 0) {
        document.getElementById("sonuc").innerHTML = "Sayı 0'dan küçük olamaz";
        return;
    }
    let kare = ((a * a) + (b * b));
    let sonuc = Math.sqrt(kare);
    console.log("Hesaplanıyor...");
    console.log(sonuc);

    document.getElementById("sonuc").innerHTML = sonuc;
}

function lisenotHesapla() {
    let not1 = parseFloat(document.getElementById("not1").value);
    let not2 = parseFloat(document.getElementById("not2").value);
    let not3 = parseFloat(document.getElementById("not3").value);
    let not4 = parseFloat(document.getElementById("not4").value);
    let not5 = parseFloat(document.getElementById("not5").value);
    let not6 = parseFloat(document.getElementById("not6").value);
    let not7 = parseFloat(document.getElementById("not7").value);
    let not8 = parseFloat(document.getElementById("not8").value);
    let toplam = not1 + not2 + not3 + not4 + not5 + not6 + not7 + not8;
    let sonuc = toplam / 8;
    console.log("Hesaplanıyor...");
    console.log(sonuc);
    let mesaj = " ";
    if (isNaN(not1) || isNaN(not2) || isNaN(not3) || isNaN(not4) || isNaN(not5) || isNaN(not6) || isNaN(not7) || isNaN(not8)) {
        document.getElementById("sonuc").innerHTML = "Lütfen tüm notları giriniz.";
        return;
    }

    if (sonuc >= 85) mesaj = "Takdir 🎉";
    else if (sonuc >= 70) mesaj = "Teşekkür 😊";
    else if (sonuc >= 50) mesaj = "Geçti 👍";
    else mesaj = "Kaldı ❌";
    console.log(mesaj);

    document.getElementById("sonuc").innerHTML = "Ortalama: " + sonuc.toFixed(2) + " - " + mesaj;

}

function ortaokulnotHesapla() {
    let not1 = parseFloat(document.getElementById("not1").value);
    let not2 = parseFloat(document.getElementById("not2").value);
    let not3 = parseFloat(document.getElementById("not3").value);
    let not4 = parseFloat(document.getElementById("not4").value);
    let not5 = parseFloat(document.getElementById("not5").value);
    let not6 = parseFloat(document.getElementById("not6").value);
    let not7 = parseFloat(document.getElementById("not7").value);
    let toplam = not1 + not2 + not3 + not4 + not5 + not6 + not7;
    let sonuc = toplam / 7;
    console.log("Hesaplanıyor...");
    console.log(sonuc);
    let mesaj = " ";
    if (isNaN(not1) || isNaN(not2) || isNaN(not3) || isNaN(not4) || isNaN(not5) || isNaN(not6) || isNaN(not7)) {
        document.getElementById("sonuc").innerHTML = "Lütfen tüm notları giriniz.";
        return;
    }

    if (sonuc >= 85) mesaj = "Takdir 🎉";
    else if (sonuc >= 70) mesaj = "Teşekkür 😊";
    else if (sonuc >= 50) mesaj = "Geçti 👍";
    else mesaj = "Kaldı ❌";
    console.log(mesaj);

    document.getElementById("sonuc").innerHTML = "Ortalama: " + sonuc.toFixed(2) + " - " + mesaj;

}

function galonHesapla() {
    let litre = parseFloat(document.getElementById("litre").value);
    let sonuc = (litre * 0.264172);
    if (isNaN(litre))
        document.getElementById("litre").innerHTML = "Lütfen Değer Giriniz.";
    console.log("Hesaplanıyor...");
    console.log(sonuc);

    document.getElementById("sonuc").innerHTML = sonuc + " Gal";
}

function litreHesapla() {
    let galon = parseFloat(document.getElementById("galon").value);
    let sonuc = (galon * 3.78541);
    if (isNaN(galon))
        document.getElementById("litre").innerHTML = "Lütfen Değer Giriniz.";
    console.log("Hesaplanıyor...");
    console.log(sonuc);

    document.getElementById("sonuc").innerHTML = sonuc + " Litre";
}


function enterbasildi(e, fonksiyon) {
    if (e.key === "Enter") {
        fonksiyon();
    }
}

function dersEkle() {
    const container = document.getElementById("dersler-container");
    const div = document.createElement("div");
    div.className = "ders-row";
    div.innerHTML = `
        <input type="text" placeholder="Ders Adı" class="ders-adi">
        <input type="number" placeholder="Kredi" class="ders-kredi" min="0">
        <select class="ders-notu">
            <option value="" disabled selected>Not Seçiniz</option>
            <option value="4.0">AA</option>
            <option value="3.5">BA</option>
            <option value="3.0">BB</option>
            <option value="2.5">CB</option>
            <option value="2.0">CC</option>
            <option value="1.5">DC</option>
            <option value="1.0">DD</option>
            <option value="0.5">FD</option>
            <option value="0.0">FF</option>
        </select>
    `;
    container.appendChild(div);
}

function universitenotHesapla() {
    const notlar = document.getElementsByClassName("ders-notu");
    const krediler = document.getElementsByClassName("ders-kredi");

    let toplamPuan = 0;
    let toplamKredi = 0;

    for (let i = 0; i < notlar.length; i++) {
        const notDegeri = parseFloat(notlar[i].value);
        const kredi = parseFloat(krediler[i].value);

        if (!isNaN(notDegeri) && !isNaN(kredi)) {
            toplamPuan += notDegeri * kredi;
            toplamKredi += kredi;
        }
    }

    console.log("Hesaplanıyor...");

    if (toplamKredi === 0) {
        document.getElementById("sonuc").innerHTML = "Lütfen geçerli ders ve kredi giriniz.";
        return;
    }

    const gano = toplamPuan / toplamKredi;
    document.getElementById("sonuc").innerHTML = "Genel Not Ortalaması (GNO): " + gano.toFixed(2);
}

function gunluksuHesapla() {
    let kilogram = parseFloat(document.getElementById("kilogram").value);
    let sonuc = kilogram * 0.033;
    console.log("Hesaplanıyor...");
    console.log(sonuc);

    document.getElementById("sonuc").innerHTML = sonuc + " Litre";
}

function uzunlukHesapla() {
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const value = parseFloat(document.getElementById("value").value);
    const resultEl = document.getElementById("sonuc");
    const units = {
        metre: 1,
        kilometre: 1000,
        santimetre: 0.01,
        milimetre: 0.001,
        yard: 0.9144,
        feet: 0.3048,
        inc: 0.0254
    };
    if (isNaN(value)) {
        resultEl.innerText = "Lütfen geçerli bir değer giriniz";
        return;
    }
    const baseValue = value * units[from];
    const result = baseValue / units[to];

    console.log("Hesaplanıyor...");
    console.log(result);
    resultEl.innerText = `${value} ${from} = ${result.toFixed(4)} ${to}`;
}

function yksnetHesapla() {
    let turkceD = parseFloat(document.getElementById("turkce-d").value) || 0;
    let turkceY = parseFloat(document.getElementById("turkce-y").value) || 0;
    let turkceNet = turkceD - (turkceY / 4);
    document.getElementById("turkce-net").innerText = turkceNet.toFixed(2);

    let sosyalD = parseFloat(document.getElementById("sosyal-d").value) || 0;
    let sosyalY = parseFloat(document.getElementById("sosyal-y").value) || 0;
    let sosyalNet = sosyalD - (sosyalY / 4);
    document.getElementById("sosyal-net").innerText = sosyalNet.toFixed(2);

    let matD = parseFloat(document.getElementById("mat-d").value) || 0;
    let matY = parseFloat(document.getElementById("mat-y").value) || 0;
    let matNet = matD - (matY / 4);
    document.getElementById("mat-net").innerText = matNet.toFixed(2);

    let fenD = parseFloat(document.getElementById("fen-d").value) || 0;
    let fenY = parseFloat(document.getElementById("fen-y").value) || 0;
    let fenNet = fenD - (fenY / 4);
    document.getElementById("fen-net").innerText = fenNet.toFixed(2);
    let totalNet = turkceNet + sosyalNet + matNet + fenNet;

    console.log("Hesaplanıyor...");
    console.log(totalNet);
    document.getElementById("sonuc").innerHTML = "Toplam Net: " + totalNet.toFixed(2);
}






