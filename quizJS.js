// 1- Girilen sayıya kadar olan sayıların kareleri ve küplerinin toplamı

// var sayi=+prompt("Lütfen bir sayı giriniz.")
// let topla=0
// let kareToplam=0
// var kupToplam=0
//  for(let i=1;i<=sayi;i++){
//     kareToplam+=i**2
//  }
//  for(let i=1;i<=sayi;i++){
//     kupToplam+=i**3
//  }
//  document.write(kareToplam+kupToplam)

// 2- Klavyeden girilen 4 sayi küçükten büyüğe doğru sıralama
// let sayilar=[]
// for(let i=0;i<4;i++){
//     sayilar.push(+prompt("Lütfen sayıları giriniz"))
// }
// sayilar.sort()
// for(let i=0;i<sayilar.length;i++){
//     console.log(sayilar[i])
// }

// 2.SORUDAKİ NOTLAR CHaTGPT
// Yani burada ilk olarak diziyi oluşturup boş bırkaktık föngüyü kurduk ve sonra kullanıcının girdiği her sayıyı push ile dizinin içine ekledik sonra sortla da küçükten büyüğe sıraladık sonrada ekrana yazdık

// 3- Hangi sayının karesini istediğini sorup kaç kere yazılacağını soracağız
 
// var sayi=+prompt("Hangi sayının karesini istiyorsunuz?")
// let dongu=+prompt("Kaç kere yazılmasını istiyorsunuz?")
// sayi=sayi*sayi
// for(let i=0;i<dongu;i++){
//  console.log(sayi)
// }

// 4- Klavyeden girilen iki sayının ebobunu bulunuz. Sonra sonucun faktöriyelini bulunuz. Sonuç tek is muğla çift ise antalya yazsın
// let sayi1=+prompt("Lütfen bir sayı giriniz: ")
// let sayi2=+prompt("Lütfen bir sayı giriniz: ")
// var ebob=1

// for(let i=1;i<=sayi2;i++){
//     if(sayi1%i==0 && sayi2%i==0){
//         ebob*=i
//     }
// }
// document.write("<br>Ebobu: "+ebob)

// let carpim=1
// for(let i=1;i<=ebob;i++){
//     carpim*=i
// }
// document.write("<br>Faktöriyeli: "+carpim)
// sonuc=carpim
// if(sonuc%2==0){
//     document.write("<br>ANTALYA")
// }
// else{
//     document.write("<br>MUĞLA")
// }

// 5- Girilen sayının pozitif negatif mi olduğunu bulan kod
// let sayi=+prompt("Lütfen bir sayı giriniz: ")
// if(sayi<0){
//     alert("Girdiğiniz sayı negatiftir.")
// }
// else{
//     alert("Girdiğiniz sayi pozitiftir.")
// }

// 6- 1 den 100 e kadar olan sayılardan 2 adet seçiniz seçtiğiniz sayılar hem 3 hem 5 e bölünüyorsa bu sayıları toplayınız. hem 3 e hem 4 e bölünüyorsa bu sayıları çarpınız.
// let topla=0
// var carp=1
// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         topla+=i
//     }
//     if(i%3==0 && i%4==0){
//         carp*=i
//     }
// }
// console.log("Toplanan sayılar: "+topla+"\nÇarpılan sayılar: "+carp)

//

// ÖRNEK

// let sayi=+prompt("Sayı giriniz. ve çıkmak için 0 giriniz.")
// let toplam=0

//WHİLE KULLANIMI

// while(sayi!=0){
//     toplam+=sayi
//     sayi=+prompt("Sayı giriniz. ve çıkmak için 0 giriniz.")
// }
// console.log(toplam)

//FOR KULLANIMI

// for(;sayi!=0;){
//     toplam+=sayi
//     sayi=+prompt("Sayı giriniz. ve çıkmak için 0 giriniz.")
// }
// console.log(toplam)

// 7- Faktöriyel hesabını while dögüsü ile yap

//BENİM YAPTIĞIM ÇALIŞIYOR.

// let carpim=1
// var sayi=+prompt("Lütfen bir sayı giriniz çıkmak için 0 a basınız.")
// while(sayi!=0){
//     carpim*=sayi
//     sayi--
// }
// console.log(carpim)

//HOCANIN ÇÖZÜMÜ

// let sayi=+prompt("Lütfen bir sayı giriniz.")
// let sonuc=1
// let i=1
// while(i<=sayi){
//     sonuc*=i
//     i++
// }
// console.log(sonuc)

// 8-Fibonacci dizisini while ile yapınız.

//BU BENİM YAPTIĞIM ÇALIŞIYOR

// let sayi1=0
// let sayi2=1
// let sonSayi=+prompt("lütfen bir sayı giriniz.")
// var toplam=1
// var i=0
// console.log(sayi2)
// while(i<=sonSayi){
//     toplam=sayi1+sayi2
//     sayi1=sayi2
//     sayi2=toplam
//     console.log(toplam)
//     i++
// }

// BU HOCANIN YAPTIĞI ÇÖZÜM

// let fn=0
// let ilk=0
// let ikinci=1
// let i=1
// let sayi=+prompt("SAyı Gir.")
// console.log(ikinci)
// while(i<sayi){
//     fn=ilk+ikinci
//     ilk=ikinci
//     ikinci=fn
//     console.log(fn)
//     i++
// }


//girdiğin sayıları toplama sıfıra basınca çıkış işlemi
// let toplam=0
// while(true){
//     let sayi=+prompt("Lütfen sayı gir. Çıkmak için sıfır yaz.")
//     if(sayi==0)
//         break
//     toplam+=sayi
// }
// console.log(toplam)

// 9- Bir atm düşünelim Para çekme Para yatırma işlemlerleri olsun bir şifre olsun bu şifre 3 defa yanlış girildiğinde kart bloke olsun ve çıkış yapsın ve bakiye 20000 yaptığın para işlemlerine göre bakiye güncellensin.


//BENİM YAPTIĞIM 


// let bakiye=20000
// let sifre=123456
// var girisHakkı=0
// var girilenSifre=+prompt("Lütfen şifrenizi giriniz: ")
// if(girilenSifre!=sifre){
//     while(girisHakkı<2){
//         girilenSifre=+prompt("Yanlış şifre! Kalan hakkınız: 2. Lütfen şifrenizi tekrar giriniz: ")
//         girisHakkı++
//         girilenSifre=+prompt("Yanlış şifre! Kalan hakkınız: 1. Lütfen şifrenizi tekrar giriniz: ")
//         girisHakkı++
//     }
//     alert("Kartınız bloke oldu")
// }
// else if(girilenSifre==sifre){
    
//     while(true){
//         let secim=+prompt("Bakiyeniz="+bakiye+" TL  Lütfen yapmak istediğiniz işlemi seçiniz. 1.Bakiye Sorgulama 2.Para Çekme 3.Para Yatırma 4.Çıkıs")
//         if(secim==1){
//             alert("Bakiyeniz: "+bakiye)
//         }
//         if(secim==2){
//             var paraCekme=+prompt("Lütfen çekmek istediğiniz tutarı giriniz.")
//             if(paraCekme>bakiye){
//                 alert("Yetersiz Bakiye!")
//             }
//             else{
//                 var onayCekme=+prompt("Çekme işlemi alınmıştır. Çekişlecek tutar: "+paraCekme+"İşlemi onaylıyorsanız 1'e Onaylamıyorsanız 2'ye basın.")
//             if(onayCekme==1){
//                 alert("Çekme işlemi onaylanmıştır. Yeni bakiyeniz: "+(bakiye-paraCekme))
//                 bakiye-=paraCekme
                
//             }
//             else if(onayCekme==2){
//                 alert("Para çekme işlemi iptal edilmiştir.")
                
//             }
//             } 
//         }
//         else if(secim==3){
//             var paraYatırma=+prompt("Lütfen yatırmak istediğiniz tutarı giriniz.")
//             var onayYatırma=+prompt("Yatırma işlemi alınmıştır. Yatırılacak tutar: "+paraYatırma+"İşlemi onaylıyorsanız 1'e Onaylamıyorsanız 2'ye basın.")
//             if(onayYatırma==1){
//                 alert("Yatırma işlemi onaylanmıştır. Yeni bakiyeniz: "+(bakiye+paraYatırma))
//                 bakiye+=paraYatırma
                
//             }
//             else if(onayYatırma==2){
//                 alert("Para yatırma işlemi iptal edilmiştir.")
                
//             }
//             secim=+prompt("Bakiyeniz= "+bakiye+" TL. Lütfen yapmak istediğiniz işlemi seçiniz. 1.Bakiye Sorgulama 2.Para Çekme 3.Para Yatırma 4.Çıkıs")
//         }
//         else if(secim==4){
//             alert("Tekrar görüşmek üzere! :)")
//             break
//         }
//     }
// }

//HOCANIN YAPTIĞI

// let sifre="1234"
// let bakiye=20000
// let bloke=0
// while(true){

//     let kSifre=+prompt("Lütfen şifrenizi giriniz.")
//     if(bloke==2){
//         alert("Kartınız bloke oldu.")
//         break
//     }
//     if(sifre!=kSifre){
//         bloke++
//         continue
//     }
//     while(true){
//         let secim=+prompt("lütfen yapacağınız işlemi seçiniz\n Bakiyeniz: "+bakiye+"\n1-Para Çek\n2-Para Yatır\n0-Çıkış")
//         let girilen=0
//         switch(secim){
//             case 1:
//                 girilen=+prompt("Lütfen çekmek istediğiniz miktarı giriniz: ")
//                 if (bakiye<girilen){
//                     alert("Yetersiz Bakiye")
//                 }
//                 else{
//                     bakiye-=girilen
//                     break
//                 }
//             case 2:
//                 girilen=+prompt("Lütfen yatırmak istediğiniz miktarı giriniz")
//                 bakiye+=girilen
//                 break
//             case 0:
//                 break
//             default:
//                 alert("Hatalı seçim.")

//         }
//         if(secim==0){
//             alert("Bir daha görüşmek üzere")
//             break
//         }
//     }
//     break

// }

// 10- Klavyeden girdiğimiz sayıya kadar olan asal sayıları yazınız.

// let sayi=+prompt("Lütfen bir sayı giriniz.")
// var asalMi=false
// let asalCount=0
// for(let i=2;i<=sayi;i++){
//     for(let j=1;j<(i/2)+1;j++){
//         if(i%j==0){
//             asalCount++
//             break
//         }
//         asalCount=0
//     }
//     if (asalCount==0){
//         console.log(i)
//     }
// }


// 11- Klavyeden girilen sayi asal ise karesini değil ise küpünü yazan kodu yazınız.

let sayi=+prompt("Lüyfen bir sayı giriniz.")
let asalMi=true
for(let i=2;i<(sayi/2)+1;i++){
    if(sayi%i==0){
        asalMi=false
        break
    }
    
}
if(asalMi){
    alert("Sayınız asal ve karesi: "+sayi**2)
}
else{
    alert("Sayınız asal değil ve küpü: "+sayi**3)
}

