
'use strict';

const autorekisteri = require('../autorekisteri');
const autot=require('../tietovarasto.json');

describe('Testataan konstruktori', ()=>{
    test('puuttuva parametri aiheuttaa poikkeuksen "parametri puuttuu"', ()=>{
        expect(() => new autorekisteri()).toThrow('parametri puuttuu');
    });
});

describe('Testataan metodi hae_yksityiskohdat', ()=>{
    test('Testi 1: käytetään oletusdataa', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_yksityiskohdat(1)).toEqual({
            "voimanlähde": "Bensiini",
            "kulutusSatasella": 1,
            "huomautus": "-"
          });
       
    });
    test('Testi 2: haetaan yksityiskohdat ei olissa olevalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_yksityiskohdat('a')).toBeNull();
       
    });
    test('Testi 3: haetaan yksityiskohdat puuttuvalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_yksityiskohdat('')).toBeNull();
       
    });
    

    


});
describe('Testataan metodi hae_auton_lisävarusteet', ()=>{

    test('Testi 1: käytetään oletusdataa', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_auton_lisävarusteet(1)).toEqual( [
            "kahvinlämmitin",
            "korjaussetti",
            "tutka"
          ]
            
          );
       
    });
    test('Testi 2: haetaan lisävarusteet ei olissa olevalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_auton_lisävarusteet('a')).toEqual([]);
       
    });
    test('Testi 3: haetaan lisävarusteet puuttuvalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_auton_lisävarusteet()).toEqual([]);
       
    });

}
);
describe('testataan metodi haehinta', ()=>{
    test('Testi 1: käytetään oletusdataa', ()=>{
        const rekisteri=new autorekisteri(autot);
      expect(rekisteri.hae_hinta(1)).toEqual(25000);
       
    });
    test('Testi 2: haetaan lisävarusteet ei olissa olevalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(() =>rekisteri.hae_hinta('a')).toThrow('annetulla avaimella ei löytynyt tietoja');
       
    });
    test('Testi 3: haetaan lisävarusteet puuttuvalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(() =>rekisteri.hae_hinta()).toThrow('annetulla avaimella ei löytynyt tietoja');
       
    });


});


describe('testataan metodi hae_auton_teho_avaimella_merkki', ()=>{

    test('Testi 1: käytetään oletusdataa', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_auton_teho_avaimella_merkki("Menopeli")).toEqual( [10]
            
          );
       
    });
    test('Testi 2: haetaan lisävarusteet ei olissa olevalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_auton_teho_avaimella_merkki('a')).toBeNull();
       
    });
    test('Testi 3: haetaan lisävarusteet puuttuvalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(()=>rekisteri.hae_auton_teho_avaimella_merkki()).toThrow('parametri puuttuu');
       
    });


});

describe('testataan metodia hae_autoja_tiedolla_malli', ()=>{
    test('Testi 1: käytetään oletusdataa', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_autoja_tiedolla_malli("Menopeli")).toEqual([{"hinta": 25000, "lisävarusteet": ["kahvinlämmitin", "korjaussetti", "tutka"], "malli": "GT", "merkki": "Menopeli", "numero": 1, "teho": 10, "yksityiskohdat": {"huomautus": "-", "kulutusSatasella": 1, "voimanlähde": "Bensiini"}}]
            
          );
       
    });
    test('Testi 2: haetaan lisävarusteet ei olissa olevalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(rekisteri.hae_autoja_tiedolla_malli('a')).toEqual([]);
       
    });
    test('Testi 3: haetaan lisävarusteet puuttuvalla parametrilla', ()=>{
        const rekisteri=new autorekisteri(autot);
        expect(()=>rekisteri.hae_autoja_tiedolla_malli()).toThrow('parametri puuttuu');
       
    });

})

