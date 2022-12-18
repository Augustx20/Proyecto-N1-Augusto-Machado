
function megadulce(){
    

alert("Bienvenido a Mega Dulce")

    
    do {
    conti = prompt("Escriba Ok para comenzar su compra. Ten en cuenta que si actualiza la pagina comenzara todo desde el incio").toLocaleLowerCase();  
    } while ((conti != "ok"));
    
    do {
        EleccionPostres = prompt("Eliga los siguientes Postres: Torta ").toLocaleLowerCase();
    } while ((EleccionPostres != "torta") && (EleccionPostres != "tortas"))

            let PrecioTortas = 100;
            let CantiTortas = 1;
            conti = alert("cada torta cuesta $ "+ PrecioTortas);
            CantiTortas = prompt("Escriba cuantas torta desea llevar")
            alert("su total es de $ "+ PrecioTortas * CantiTortas)

            //Precio de Envio
            const PrecioCapital = 50;
            const PrecioZonaNorte = 40;
            const PrecioZonaSur = 90;
            const ResultadoConPrecioCantidad = PrecioTortas * CantiTortas;

            let nombre = prompt("Escriba su Nombre")
            let Direccion = prompt("Escriba su dirrecion")
                
                

            function Localidades () {
                
                do {
                    Localidades = prompt("En que localidad se ubica. Capital / Provincia: Zona Norte / Zona Sur").toLocaleLowerCase();  
               } while ((Localidades != "capital") && (Localidades != "zona norte") && (Localidades != "zona sur"));

            
            }
        
            function MetodoPago(Total, Precio ){
                    do{ Pago = prompt("Desea pagar con Efectivo o Tarjeta ?").toLocaleLowerCase()}
                    while ((Pago != "efectivo") && (Pago != "tarjeta")){}
    
                   if(Pago == "efectivo"){
                    alert("Usted esta pagando en efectivo")
                        alert("Su pago es de $" + Total)
                        let si = prompt("Escriba si para Finalizar el Pago").toLocaleLowerCase();  
                        while (si != "si"){};

                        alert(nombre + " Su pedido sera va enviado a " + Direccion + " Su total es de $" + (ResultadoConPrecioCantidad + Precio) + " Gracias por Elegirnos") 
                        alert("Su compra a sido enviada")

                    }
                   if(Pago == "tarjeta"){
                    alert("Usted esta pagando con tarjeta")
                    alert("Su pago es de $"+ Total)
                    let Cuota = prompt("Con Cuantas cuotas desea abonar")
                    let PrecioDivido = Total / Cuota;
                    alert("Usted estara pagando cada cuota de $" + PrecioDivido)
                    let si = prompt("Escriba si para Finalizar el Pago").toLocaleLowerCase();  
                        while(si != "si"){};

                        alert(nombre + " Su pedido sera va enviado a " + Direccion + " Su total es de $" +  PrecioDivido + " Gracias por Elegirnos") 
                        alert("Su compra a sido enviada")

                   }
                
            }

                // Proceso de Compra
            if (CantiTortas <= 5){ 
                alert("Su Seleccion del pedido ha sido un exito")
                Localidades();

            if(Localidades == "capital"){
            
                alert("El costo del envio es de $" + PrecioCapital)
                alert("Su total es de $" +(ResultadoConPrecioCantidad + PrecioCapital));
                MetodoPago(ResultadoConPrecioCantidad + PrecioCapital, PrecioCapital);
                
                
            }
            if (Localidades == "zona norte") {

                alert("El costo del envio es de $" + PrecioZonaNorte);
                alert("Su total es de $" + (ResultadoConPrecioCantidad + PrecioZonaNorte));
                MetodoPago(ResultadoConPrecioCantidad + PrecioZonaNorte, PrecioZonaNorte);
                
            }
            if (Localidades == "zona sur") {

                alert("El costo del envio es de $" + PrecioZonaSur)
                alert("Su total es de $" + (ResultadoConPrecioCantidad + PrecioZonaSur))
                MetodoPago(ResultadoConPrecioCantidad + PrecioZonaSur, PrecioZonaSur);
                
            }

            }
            if (CantiTortas >= 5){

                alert("su pedido supera los $500 pesos. ")
                let descuento1 = 90;
                let descuento2 = 110;
                let descuento3 = 140;
                let descuento4 = 200;
                let caso1 = ResultadoConPrecioCantidad - descuento1;
                let caso2 = ResultadoConPrecioCantidad - descuento2;
                let caso3 = ResultadoConPrecioCantidad - descuento3;
                let caso4 = ResultadoConPrecioCantidad - descuento4;

                switch (ResultadoConPrecioCantidad) {
                    case 600:  
                        alert("Se le aplica un descuento de 100 pesos");
                        alert("Su Descuento ha sido aplicado. Su compra sera de " + caso1) 

                        Localidades();
                        

                    if(Localidades == "capital"){
                        let Preciototal = caso1 + PrecioCapital; 
                        alert("El costo del envio es de $" + PrecioCapital)
                        alert("Su total es de $" + Preciototal)
                        MetodoPago(Preciototal, PrecioCapital);
                        
                    }
                
                    if (Localidades == "zona norte") {
                        let Preciototal = caso1 + PrecioZonaNorte; 
                        alert("El costo del envio es de $" + PrecioZonaNorte)
                        alert("Su total es de " + Preciototal )
                        MetodoPago(Preciototal, PrecioZonaNorte);
                    }
                    if (Localidades == "zona sur") {
                        let Preciototal = caso1 + PrecioZonaSur; 
                        alert("El costo del envio es de $" + PrecioZonaSur)
                        alert("Su total es de $" + Preciototal)
                        MetodoPago(Preciototal, PrecioZonaSur);
                    }
                    break;
                    case 700:  
                        alert("Se le aplica un descuento de 110 pesos");
                        alert("Su Descuento ha sido aplicado. Su compra sera de " + caso2) 

                        Localidades();
                
                
                       if(Localidades == "capital"){
                        let Preciototal = caso2 + PrecioCapital; 
                        alert("El costo del envio es de $" + PrecioCapital)
                        alert("Su total es de $" + Preciototal)
                        MetodoPago(Preciototal, PrecioCapital);
                    }
                    if (Localidades == "zona norte"){
                        let Preciototal = caso2 + PrecioZonaNorte;
                        alert("El costo del envio es de $" + PrecioZonaNorte)
                        alert("Su total es de $" + Preciototal )
                        MetodoPago(Preciototal, PrecioZonaNorte);
                    }
                    if (Localidades == "zona sur") {
                        let Preciototal = caso2 + PrecioZonaSur;
                        alert("El costo del envio es de $" + PrecioZonaSur)
                        alert("Su total es de $" + Preciototal)
                        MetodoPago(Preciototal, PrecioZonaSur);
                    }
                    break;
                    case 800:   
                        alert("Se le aplica un descuento de 150 pesos");
                        alert("Su Descuento ha sido aplicado. Su compra sera de " + caso3) 
                        
                        Localidades();
            
                       if(Localidades == "capital"){
                        let Preciototal = caso3 + PrecioCapital; 
                        alert("El costo del envio es de $" + PrecioCapital)
                        alert("Su total es de $" + Preciototal)
                        MetodoPago(Preciototal, PrecioCapital);
                    }
                
                    if (Localidades == "zona norte") {
                
                        
                        let Preciototal = caso3 + PrecioZonaNorte;
                
                
                        alert("El costo del envio es de $" + PrecioZonaNorte)
                        alert("Su total es de $" + Preciototal )
                        MetodoPago(Preciototal, PrecioZonaNorte);
                    }
                    if (Localidades == "zona sur") {
                        let Preciototal = caso3 + PrecioZonaSur;
                        alert("El costo del envio es de $" + PrecioZonaSur)
                        alert("Su total es de $" + Preciototal)
                        MetodoPago(Preciototal, PrecioZonaSur);
                    }
                    break;
                    default:
                        alert("Su decuento sera de " + descuento4)
                        alert("Su Descuento ha sido aplicado. Su compra sera de " + caso4) 
                        
                        Localidades()
                
                       if(Localidades == "capital"){
                
                        let Preciototal = caso4 + PrecioCapital; 
                        
                        alert("El costo del envio es de $" + PrecioCapital)
                        alert("Su total es de $" + Preciototal);
                        MetodoPago(Preciototal, PrecioCapital);
                    }
                
                    if (Localidades == "zona norte") {
                
                        let Preciototal = caso4 + PrecioZonaNorte;
                        alert("El costo del envio es de $" + PrecioZonaNorte)
                        alert("Su total es de $" + Preciototal);
                        MetodoPago(Preciototal, PrecioZonaNorte);
                    }
                    if (Localidades == "zona sur") {
                        let Preciototal = caso4 + PrecioZonaSur;
                        alert("El costo del envio es de $" + PrecioZonaSur);
                        alert("Su total es de $" + Preciototal);
                        MetodoPago(Preciototal, PrecioZonaSur);
                    }   

                    break;   
            }
        }  
    }
    megadulce();

