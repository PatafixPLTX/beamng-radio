//                                .....                                     
//                                @@@@@&@@@@@@@@@@@@@@@@@@@@*                          
//                          .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                     
//                       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&/                 
//                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&#(((%%*              
//                 (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&%((//**((&%            
//               (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%#((/(//(#(%%@&          
//             ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&((/(//(#%%%%&@@@@&        
//            &@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%#(///((#%%&&@@@@@@@@@.      
//           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%##(((##%&&&@@@@@@@@@@@@&*     
//          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@&%(((%&@@@@@@@((#%&&@@@@@@@@@@@@@@@@@@,    
//         @@@@@@@@@@@@@@@@@@@@@@@@@@@@%/((((//////////%&@@@&@@@@@@@@@@@@@@@@@@@@@@.   
//        ,@@@@@@@@@@@@@@@@@@@@@@@@@@(/((((((((((((/////(#@@@@@@@@@@@@@@@@@@@@@@@@@@   
//        @@@@@@@@@@@@@@@@@@@@@@@@@@/((((((((////////(/////@@@@@@@@@@@@@@@@@@@@@@@@@.  
//        @@@@@@@@@@@@@@@@@@@@@@@@@((((((((/(//(((/////////(@@@@@@@@@@@@@@@@@@@@@@@@/  
//        @@@@@@@@@@@@@@@@@@@@@@@@@((((//((((/*.#(////////(/@@@@@@@@@@@@@@@@@@@@@@@@(  
//        @@@@@@@@@@@@@@@@@@@@@@@@@(((((((//(/(///(((((((//#@@@@@@@@@@@@@@@@@@@@@@@@/  
//        &@@@@@@@@@@@@@@@@@@@@@@@@@(((/(*(///////(((((((/(@@@@@@@@@@@@@@@@@@@@@@@@@   
//        ,@@@@@@@@@@@@@@@@@@@@&@@@@@%((((/(//////(((((((&@@@@@@@@@@@@@@@@@@@@@@@@@&   
//         @@@@@@@@@@@@@@@@@@@&&%%&@@@@@(((((((((((((/%@@@@@@@@@@@@@@@@@@@@@@@@@@@@    
//          @@@@@@@@@@@@&&&@&&%%####%@@@@@@@@@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.    
//           @@@@@@@@@&&&&%%%##(%##%&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,     
//            &@@@@@&&&%%%%######%%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       
//             ,@@&&&%%##%#####%%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#        
//               (@&%##%###%#%%%&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&          
//                 /&%((##%%%%&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&            
//                    @&##%%&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,              
//                       &@@@@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,                 
//                          .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*.                    
//                                #@@@@@@@@@@@@@@@@@@@@@@@@@                           
//                                                  .                                  



// LIST OF RADIO STATIONS IN THE FRANCE (24 pistes)

var franceinter = new Howl({
    src: ['http://icecast.radiofrance.fr/franceinter-midfi.mp3'],
    html5: true,
    volume: 1.0,
    
});

var virginradio = new Howl({
    src: ['http://stream.virginradio.fr/virgin.mp3'],
    html5: true,
    volume: 1.0,
    
});

var skyrock = new Howl({
    src: ['http://www.skyrock.fm/stream.php/tunein16_128mp3.mp3'],
    html5: true,
    volume: 1.0,
    
});

var nrj = new Howl({
    src: ['http://scdn.nrjaudio.fm/adwz2/fr/30001/mp3_128.mp3?origine=fluxradios'],
    html5: true,
    volume: 1.0,
    
});

var nostalgie = new Howl({
    src: ['http://scdn.nrjaudio.fm/adwz2/fr/30601/mp3_128.mp3?origine=fluxradios'],
    html5: true,
    volume: 1.0,
    
});

var cheriefm = new Howl({
    src: ['http://scdn.nrjaudio.fm/adwz2/fr/30201/mp3_128.mp3?origine=fluxradios'],
    html5: true,
    volume: 1.0,
    
});

var rirechansons = new Howl({
    src: ['http://scdn.nrjaudio.fm/adwz2/fr/30401/mp3_128.mp3?origine=fluxradios'],
    html5: true,
    volume: 1.0,
    
});

var rtl = new Howl({
    src: ['http://icecast.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg'],
    html5: true,
    volume: 1.0,
    
});

var rtl2 = new Howl({
    src: ['http://icecast.rtl2.fr/rtl2-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg'],
    html5: true,
    volume: 1.0,
    
});

var funradio = new Howl({
    src: [' http://icecast.funradio.fr/fun-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg'],
    html5: true,
    volume: 1.0,
    
});

var europe1 = new Howl({
    src: [' http://stream.europe1.fr/europe1.mp3'],
    html5: true,
    volume: 1.0,
    
});

var rfm = new Howl({
    src: [' https://ais-live.cloud-services.paris:8443/rfm.mp3'],
    html5: true,
    volume: 1.0,
    
});

var rmc = new Howl({
    src: ['  http://rmc.bfmtv.com/rmcinfo-mp3'],
    html5: true,
    volume: 1.0,
    
});

var radioclassique = new Howl({
    src: ['  http://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3'],
    html5: true,
    volume: 1.0,
    
});

var franceinfo = new Howl({
    src: ['http://icecast.radiofrance.fr/franceinfo-midfi.mp3'],
    html5: true,
    volume: 1.0,
    
});

var franceculture = new Howl({
    src: [' http://icecast.radiofrance.fr/franceculture-midfi.mp3'],
    html5: true,
    volume: 1.0,
    
});

var francemusique = new Howl({
    src: ['http://direct.francemusique.fr/live/francemusique-midfi.mp3'],
    html5: true,
    volume: 1.0,
    
});

var francebleu = new Howl({
    src: [' http://direct.francebleu.fr/live/fb1071-midfi.mp3'],
    html5: true,
    volume: 1.0,
    
});

var fip = new Howl({
    src: ['http://icecast.radiofrance.fr/fip-midfi.mp3'],
    html5: true,
    volume: 1.0,
    
});

var mouv = new Howl({
    src: ['http://direct.mouv.fr/live/mouv-midfi.mp3'],
    html5: true,
    volume: 1.0,
    
});

var ouifm = new Howl({
    src: [' http://target-ad-2.cdn.dvmr.fr/ouifm-high.mp3'],
    html5: true,
    volume: 1.0,
    
});

var jazzradio = new Howl({
    src: ['http://jazzradio.ice.infomaniak.ch/jazzradio-high.mp3'],
    html5: true,
    volume: 1.0,
    
});

var mfm = new Howl({
    src: ['http://mfm.ice.infomaniak.ch/mfm-128.mp3'],
    html5: true,
    volume: 1.0,
    
});

// LIST OF RADIO STATIONS IN THE BELGIUM (24 pistes)

// http://fluxradios.blogspot.com/

// LIST OF RADIO STATIONS IN THE QUEBEC (24 pistes)



// LIST OF RADIO STATIONS IN THE SWITZERLAND (24 pistes)







// USER CONTROLS

virginradio.play()