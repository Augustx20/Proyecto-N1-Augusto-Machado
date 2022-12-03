
function megadulce() {
    

alert("Bienvenido a Mega Dulce")

    do {
         conti = prompt("Escriba Ok para comenzar su compra. Ten en cuenta que si actualiza la pagina comenzara todo desde el incio").toLocaleLowerCase();  
    } while ((conti != "ok"));
do {
    EleccionPostres = prompt("Eliga los siguientes Postres: Torta ").toLocaleLowerCase();
} while ((EleccionPostres != "torta") && (EleccionPostres != "tortas"))

            let PrecioTortas = 100;
            let CantiTortas = 1;  
            conti = alert("cada torta es de "+ PrecioTortas);
            CantiTortas = prompt("Escriba cuantas torta desea llevar")
            alert("su total es de $ "+ PrecioTortas * CantiTortas)

            if (CantiTortas <= 5){ 
                alert("su pedido no se aplicara descuento.")

                let PrecioSinDescuento = PrecioTortas * CantiTortas;
                let Direccion = prompt("Ingrese su Dirreccion")
                let Ingresenombre = prompt("ingrese su nombre:");
                do {
                    Localidad = prompt("En que localidad se ubica. Capital Federal/ Provincia: Zona Norte / Zona Sur").toLocaleLowerCase();  
               } while ((Localidad != "capital federal") && (Localidad != "zona norte") && (Localidad != "zona sur"));
        
               let caso1 = PrecioSinDescuento

            if(Localidad == "capital federal"){

                let PrecioCapital = 50;
                let Preciotoal = caso1 + PrecioCapital; 
                
                alert("El costo del envio es de " + PrecioCapital)
                alert("Su total es de " + Preciotoal)

                    alert(Ingresenombre + " Su pedido sera va enviado a " + Direccion + " Su total es de " + Preciotoal + " Gracias por Elegirnos") 
                    alert("Su compra a sido enviada")
            }

            if (Localidad == "zona norte") {

                let PrecioZonaNorte = 40;
                let Preciotoal = caso1 + PrecioZonaNorte;


                alert("El costo del envio es de " + PrecioZonaNorte)
                alert("Su total es de " + Preciotoal )


                alert(Ingresenombre + " Su pedido sera va enviado a " + Direccion + " Su total es de " + Preciotoal + " Gracias por Elegirnos") 
                alert("Su compra a sido enviada")
            }
            if (Localidad == "zona sur") {
                let PrecioZonaSur = 90;
                let Preciotoal = caso1 + PrecioZonaSur;


                alert("El costo del envio es de " + PrecioZonaSur)
                alert("Su total es de " + Preciotoal)


                alert(Ingresenombre + " Su pedido sera va enviado a " + Direccion + " Su total es de " + Preciotoal + " Gracias por Elegirnos") 
                alert("Su compra a sido enviada")
            }

            }
            if (CantiTortas >= 5){

                let precioFinal = (PrecioTortas * CantiTortas)
                alert("su pedido supera los $500 pesos. ")

                let Descuento1 = 90
                let Descuento2 = 110
                let Descuento3 = 140
                let Descuento4 = 200
                let caso1 = precioFinal - Descuento1;
                let caso2 = precioFinal - Descuento2;
                let caso3 = precioFinal - Descuento3;
                let caso4 = precioFinal - Descuento4;
                

                switch (precioFinal) {
                    case 600:  
                        alert("Se le aplica un descuento de 100 pesos");
                        alert("A su pedido se la hecho el descuento. Su compra sera de " + caso1) 

                        do {
                            Localidad = prompt("En que localidad se ubica. Capital Federal/ Provincia: Zona Norte / Zona Sur").toLocaleLowerCase();  
                       } while ((Localidad != "capital federal") && (Localidad != "zona norte") && (Localidad != "zona sur"));
                
                
                       if(Localidad == "capital federal"){
                
                        let PrecioCapital = 50;
                        let Preciotoal = caso1 + PrecioCapital; 
                        
                        alert("El costo del envio es de " + PrecioCapital)
                        alert("Su total es de " + Preciotoal)
                    }
                
                    if (Localidad == "zona norte") {
                
                        let PrecioZonaNorte = 40;
                        let Preciotoal = caso1 + PrecioZonaNorte;
                
                
                        alert("El costo del envio es de " + PrecioZonaNorte)
                        alert("Su total es de " + Preciotoal )
                    }
                    if (Localidad == "zona sur") {
                        let PrecioZonaSur = 90;
                        let Preciotoal = caso1 + PrecioZonaSur;
                
                
                        alert("El costo del envio es de " + PrecioZonaSur)
                        alert("Su total es de " + Preciotoal)
                    }

                    alert(Ingresenombre + " Su pedido sera va enviado a " + Direccion + " Su total es de " + caso1 + " Gracias por Elegirnos") 
                    alert("Su compra a sido enviada")

                    break;
                    case 700:  
                        alert("Se le aplica un descuento de 110 pesos");
                        alert("A su pedido se la hecho el descuento. Su compra sera de " + caso2)

                        do {
                            Localidad = prompt("En que localidad se ubica. Capital Federal/ Provincia: Zona Norte / Zona Sur").toLocaleLowerCase();  
                       } while ((Localidad != "capital federal") && (Localidad != "zona norte") && (Localidad != "zona sur"));
                
                
                       if(Localidad == "capital federal"){
                
                        let PrecioCapital = 50;
                        let Preciotoal = caso2 + PrecioCapital; 
                        
                        alert("El costo del envio es de " + PrecioCapital)
                        alert("Su total es de " + Preciotoal)
                    }
                
                    if (Localidad == "zona norte") {
                
                        let PrecioZonaNorte = 40;
                        let Preciotoal = caso2 + PrecioZonaNorte;
                
                
                        alert("El costo del envio es de " + PrecioZonaNorte)
                        alert("Su total es de " + Preciotoal )
                    }
                    if (Localidad == "zona sur") {
                        let PrecioZonaSur = 90;
                        let Preciotoal = caso2 + PrecioZonaSur;
                
                
                        alert("El costo del envio es de " + PrecioZonaSur)
                        alert("Su total es de " + Preciotoal)
                    }
                    alert(Ingresenombre + " Su pedido sera va enviado a " + Direccion + " Su total es de " + caso2 + " Gracias por Elegirnos") 
                    alert("Su compra a sido enviada")

                    break;
                    case 800:   
                        alert("Se le aplica un descuento de 150 pesos");
                        alert("A su pedido se la hecho el descuento. Su compra sera de "+ caso3)
                        do {
                            Localidad = prompt("En que localidad se ubica. Capital Federal/ Provincia: Zona Norte / Zona Sur").toLocaleLowerCase();  
                       } while ((Localidad != "capital federal") && (Localidad != "zona norte") && (Localidad != "zona sur"));
                
                
                       if(Localidad == "capital federal"){
                
                        let PrecioCapital = 50;
                        let Preciotoal = caso3 + PrecioCapital; 
                        
                        alert("El costo del envio es de " + PrecioCapital)
                        alert("Su total es de " + Preciotoal)
                    }
                
                    if (Localidad == "zona norte") {
                
                        let PrecioZonaNorte = 40;
                        let Preciotoal = caso3 + PrecioZonaNorte;
                
                
                        alert("El costo del envio es de " + PrecioZonaNorte)
                        alert("Su total es de " + Preciotoal )
                    }
                    if (Localidad == "zona sur") {
                        let PrecioZonaSur = 90;
                        let Preciotoal = caso3 + PrecioZonaSur;
                
                
                        alert("El costo del envio es de " + PrecioZonaSur)
                        alert("Su total es de " + Preciotoal)
                    }
                    alert(Ingresenombre + " Su pedido sera va enviado a " + Direccion + " Su total es de " + caso3 + " Gracias por Elegirnos") 
                    alert("Su compra a sido enviada")


                    break;
                    default:
                        alert(precioFinal - Descuento4)
                        alert("A su pedido se la hecho el descuento. Su compra sera de "+ caso4)
                        
                        do {
                            Localidad = prompt("En que localidad se ubica. Capital Federal/ Provincia: Zona Norte / Zona Sur").toLocaleLowerCase();  
                       } while ((Localidad != "capital federal") && (Localidad != "zona norte") && (Localidad != "zona sur"));
                
                
                       if(Localidad == "capital federal"){
                
                        let PrecioCapital = 50;
                        let Preciotoal = caso4 + PrecioCapital; 
                        
                        alert("El costo del envio es de " + PrecioCapital)
                        alert("Su total es de " + Preciotoal)
                    }
                
                    if (Localidad == "zona norte") {
                
                        let PrecioZonaNorte = 40;
                        let Preciotoal = caso4 + PrecioZonaNorte;
                
                
                        alert("El costo del envio es de " + PrecioZonaNorte)
                        alert("Su total es de " + Preciotoal )
                    }
                    if (Localidad == "zona sur") {
                        let PrecioZonaSur = 90;
                        let Preciotoal = caso4 + PrecioZonaSur;
                
                
                        alert("El costo del envio es de " + PrecioZonaSur)
                        alert("Su total es de " + Preciotoal)
                    }

                    
                    alert(Ingresenombre + " Su pedido sera va enviado a " + Direccion + " Su total es de " + caso4 + " Gracias por Elegirnos") 
                    alert("Su compra a sido enviada")

                    break;   
            }
        }  
    }
    megadulce();
