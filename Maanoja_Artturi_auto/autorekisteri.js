

module.exports= class autorekisteri{
    constructor(jsondata){
        if (!jsondata) throw new Error('parametri puuttuu');
        this.rekisteri=jsondata;
    }

    hae_yksityiskohdat(hakuavain){
        
       
          let json = this.rekisteri;
          let tulos = json.find(rivi => rivi.numero === hakuavain);
          if (json.find(rivi => rivi.numero === hakuavain) != undefined){
            return tulos.yksityiskohdat;
            
          }
          else {
            return null
          }
        
        
    }
    
    
    hae_auton_lisävarusteet(hakuavain){
        let json = this.rekisteri;
        let tulos = json.find(rivi => rivi.numero === hakuavain);
        if (json.find(rivi => rivi.numero === hakuavain) != undefined){
          return tulos.lisävarusteet;
          
        }
        else {
          return []
        }
        
        
    }
    hae_hinta(numero){
        let json = this.rekisteri;
        let tulos = json.find(rivi => rivi.numero === numero);
        if (json.find(rivi => rivi.numero === numero) != undefined){
          return tulos.hinta;
          
        }
        else {
          throw new Error('annetulla avaimella ei löytynyt tietoja');
        }
        
        
    }
    
      



    hae_auton_teho_avaimella_merkki(hakuarvo){
        if(hakuarvo){
            

        
        
        const loydetyt=[];
        for (let auto of this.rekisteri){
            if (auto.merkki===hakuarvo){
                loydetyt.push(auto.teho);
            }
        }
        if (loydetyt.length===0){
            return null
            
        }
        return loydetyt;
        }
        else{
            throw new Error('parametri puuttuu');
        }

       
    }
 


    hae_autoja_tiedolla_malli(hakuarvo){
        if(hakuarvo){
            

        
        
            const loydetyt=[];
            for (let auto of this.rekisteri){
                if (auto.merkki===hakuarvo){
                    loydetyt.push(auto);
                }
            }
            if (loydetyt.length===0){
                return []
                
            }
            return loydetyt;
        }
        else{
            throw new Error('parametri puuttuu');
        }
        }

    
}