let siparis1 = 
{
    'siparis_id': 101,
    'siparis_tarihi:': '31.12.2023',
    'odeme_sekli':'kredi_karti',
    'kargo_adresi':'Yahaya kaptan mah. Kocaeli/İzmit',
    'satin_alinan_urunler': 
    [
        {
            'urun_id':5,
            'urun_basligi': 'IPhone 13 Pro',
            'urun_url': 'http//:www.abc.com/iphone-13-pro',
            'urun_fiyati': 22000,
        },
       
        {
            'urun_id':6,
            'urun_basligi': 'IPhone 13 Pro Max',
            'urun_url': 'http//:www.abc.com/iphone-13-pro-max',
            'urun_fiyati': 25000,
        },
    ],
    'musteri_id': 12,
    'satici': 
    {
        'firma_id': 34,
        'firma_adi':'apple türkiye'
    }
}

let siparis1_urun1_kadvDahilFiyati = siparis1.satin_alinan_urunler[0].urun_fiyati *= 1.18;
let siparis1_urun2_kadvDahilFiyati = siparis1.satin_alinan_urunler[1].urun_fiyati *= 1.18;
console.log(`siparis1_urun1_kadvDahilFiyati: ${siparis1_urun1_kadvDahilFiyati} TL`);
console.log(`siparis1_urun2_kadvDahilFiyati: ${siparis1_urun2_kadvDahilFiyati} TL`);