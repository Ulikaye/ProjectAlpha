const translations = {
    swahili: {
         video_text: "Simu Janja ",
         controller_text: "Zinapatikana",
         banner_text: "Kwa mahitaji ya Iphone, Samsung, Google Pixel, Song, Nokia, pamoja na vifaa vya simu",
         shop_bt: "Agiza sasa",
         about_text: "Kuhusu sisi",
         lorem_text: "Sisi ni Johmaster_Phones, wakala wa kuuza simu za mkononi anayeongoza, anayetoa mifano ya hivi punde kutoka kwa chapa maarufu kama vile Apple, Samsung, Google na nyinginezo. Iwapo unatafuta mifano ya hali ya juu au simu za bei nafuu, tumekushughulikia.",
         shop_bt_2: "Agiza sasa",
         product_text:"Bidhaa zetu",
         long_text:"Hizi ni baadhi kati ya vile tulivyonavyo kwenye ghala letu",
         price_text:"Bei TZ 700K",
         see_bt: "Tazama zaidi",
         video_text_2: "Jiunge na Ushinde",
         controller_text_2: "Pamoja nasi",
         banner_text_2: "Hukuza mtindo wako wa simu, tunakupa maisha bora - ishi maisha ya kidijitali, kwa nini uridhike na kidogo? miliki simu ya kisasa zaidi.",
         testimonial_text:"Shuhuda",
         ipsum_text:"Shuhuda kutoka kwa moja ya wateja wetu",
         dolor_text: "Niliagiza kifurushi cha simu kutoka Johmaster_Phones hivi karibuni, na sijawahi kufurahia ununuzi wangu kama huu. Uwasilishaji ulikuwa wa haraka na ufungaji ulikuwa salama. Simu ilifika katika hali nzuri kabisa, kama ilivyoelezwa kwenye tovuti. Kilichonivutia zaidi ni umakini wa maelezo; vifaa vilivyojumuishwa kwenye kifurushi vilikuwa vya ubora wa juu, na kuweka simu ilikuwa rahisi sana. Timu ya huduma kwa wateja ilikuwa ya kujibu maswali yangu kwa haraka na msaada. Ninapendekeza sana Johmaster_Phones kwa yeyote anayetafuta kununua simu!",
         sandy_text_1: "Mfanyabiashara"
        },
    eng: {
        controller_text: "Available",
        banner_text: "For your needs of iPhone, Samsung, Google Pixel, Song, Nokia, along with mobile accessories"
    }
};

function translateContent(language) {

    //Translate elements with class 'controller_text'
let controllerElements = document.getElementsByClassName('controller_text');

for (let i = 0; i < controllerElements.length; i++){
    controllerElements[i].innerText = translations[language].controller_text;
}
 
   //Translate elements with class 'banner_text'
   let bannerElements = document.getElementsByClassName('banner_text');

   for (let i = 0; i < bannerElements.length; i++){
       bannerElements[i].innerText = translations[language].banner_text;
   }
    
   //Translate elements with class 'video_text'
     let videoElements = document.getElementsByClassName('video_text');

     for (let i = 0; i < videoElements.length; i++){
         videoElements[i].innerText = translations[language].video_text;
     }

      //Translate elements with class 'shop_bt'
      let shop_btElements = document.getElementsByClassName('shop_bt');

      for (let i = 0; i < shop_btElements.length; i++){
        shop_btElements[i].innerText = translations[language].shop_bt;
      }

       //Translate elements with class 'about_text'
       let about_textElements = document.getElementsByClassName('about_text');

       for (let i = 0; i < about_textElements.length; i++){
        about_textElements[i].innerText = translations[language].about_text;
       }

          //Translate elements with class ' lorem_text'
          let lorem_textElements = document.getElementsByClassName('lorem_text');

          for (let i = 0; i < lorem_textElements.length; i++){
            lorem_textElements[i].innerText = translations[language].lorem_text;
          }

           //Translate elements with class 'shop_bt_2'
           let shop_bt_2Elements = document.getElementsByClassName('shop_bt_2');

           for (let i = 0; i < shop_bt_2Elements.length; i++){
            shop_bt_2Elements[i].innerText = translations[language].shop_bt_2;
           }

           //Translate elements with class 'product_text'
           let product_textElements = document.getElementsByClassName('product_text');

           for (let i = 0; i < product_textElements.length; i++){
            product_textElements[i].innerText = translations[language].product_text;
           }

           //Translate elements with class 'long_text'
           let long_textElements = document.getElementsByClassName('long_text');

           for (let i = 0; i < long_textElements.length; i++){
            long_textElements[i].innerText = translations[language].long_text;
           }

            //Translate elements with class ' price_text'
            let price_textElements = document.getElementsByClassName(' price_text');

            for (let i = 0; i <  price_textElements.length; i++){
                price_textElements[i].innerText = translations[language].price_text;
            }

              //Translate elements with class 'see_bt'
              let see_btElements = document.getElementsByClassName('see_bt');

              for (let i = 0; i <  see_btElements.length; i++){
                see_btElements[i].innerText = translations[language].see_bt;
              }

                //Translate elements with class 'video_text_2'
                let video_text_2Elements = document.getElementsByClassName('video_text_2');

                for (let i = 0; i <  video_text_2Elements.length; i++){
                  video_text_2Elements[i].innerText = translations[language].video_text_2;
                }

                 //Translate elements with class 'controller_text_2'
                 let controller_text_2Elements = document.getElementsByClassName('controller_text_2');

                 for (let i = 0; i <  controller_text_2Elements.length; i++){
                    controller_text_2Elements[i].innerText = translations[language].controller_text_2;
                 }

                    //Translate elements with class 'banner_text_2'
                    let banner_text_2Elements = document.getElementsByClassName('banner_text_2');

                    for (let i = 0; i <  banner_text_2Elements.length; i++){
                        banner_text_2Elements[i].innerText = translations[language].banner_text_2;
                    }

                    //Translate elements with class ' testimonial_text'
                    let  testimonial_textElements = document.getElementsByClassName(' testimonial_text');

                    for (let i = 0; i <   testimonial_textElements.length; i++){
                        testimonial_textElements[i].innerText = translations[language]. testimonial_text;
                    }

                       //Translate elements with class 'ipsum_text'
                       let  ipsum_textElements = document.getElementsByClassName('ipsum_text');

                       for (let i = 0; i <   ipsum_textElements.length; i++){
                        ipsum_textElements[i].innerText = translations[language].ipsum_text;
                       }

                       //Translate elements with class 'dolor_text'
                       let  dolor_textElements = document.getElementsByClassName('dolor_text');

                       for (let i = 0; i <   dolor_textElements.length; i++){
                        dolor_textElements[i].innerText = translations[language].dolor_text;
                       }

                            //Translate elements with class 'sandy_text_1'
                            let  sandy_text_1Elements = document.getElementsByClassName('sandy_text_1');

                            for (let i = 0; i <   sandy_text_1Elements.length; i++){
                              sandy_text_1Elements[i].innerText = translations[language].sandy_text_1;
                            }

}
// Optional: Default to English on page load
translateContent('eng');