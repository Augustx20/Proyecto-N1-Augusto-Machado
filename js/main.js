    

 function MEGADULCE() {
    
 
alert("Bienvenido a Mega Dulce")    
    const megadulce =[];
    do {
    conti = prompt("Escriba Ok para comenzar su compra. Ten en cuenta que si actualiza la pagina comenzara todo desde el incio").toLocaleLowerCase();  
    } while ((conti != "ok"));
    

            seccion = confirm("Bienvenido a nuestro seccion de Dulces. Por el momento tenemos disponible la venta de Tortas")
            let PrecioTortas = 100;
            let CantiTortas = 0;
            conti = alert("cada torta cuesta $ "+ PrecioTortas);
            CantiTortas = prompt("Escriba cuantas torta desea llevar(Limite 50 Unidades)") 
            
            const ResultadoConPrecioCantidad = PrecioTortas * CantiTortas;
            alert("su total es de $ "+ ResultadoConPrecioCantidad);
            //Precio de Envio
    
            let nombre__nombre = prompt("Escriba su Nombre")
            let Direccion__direccion = prompt("Escriba su dirrecion") 
            const PrecioCapital = 50;
            const PrecioZonaNorte = 40;
            const PrecioZonaSur = 90;
            
class Person {
    constructor(name, Direccion,Total, TotalFinal,pago) {
        this.name = name;
        this.Direccion = Direccion;
        this.Total = Total;
        this.TotalFinal = TotalFinal;
        this.pago = pago;


    }
}
megadulce.push(Person)
                
            function Localidades () {
                
                do {
                    Localidades = prompt("En que localidad se ubica. Capital / Provincia: Zona Norte / Zona Sur").toLocaleLowerCase();  
               } while ((Localidades != "capital") && (Localidades != "zona norte") && (Localidades != "zona sur"));

            
            }   
            function MetodoPago(Total, Precio ){
                    do{ Pago__pago = prompt("Desea pagar con Efectivo o Tarjeta ?").toLocaleLowerCase()}
                    while ((Pago__pago != "efectivo") && (Pago__pago != "tarjeta")){}
    
                   if(Pago__pago == "efectivo"){
                    alert("Usted esta pagando en efectivo")
                        alert("Su pago es de $" + Total)
                         si = confirm("Confirme para aceptar el pago")
                        const Datos = new Person(nombre__nombre, Direccion__direccion, Pago__pago,(ResultadoConPrecioCantidad + Precio), Pago__pago );
                        console.log(Datos)
                        
                        alert(nombre__nombre + " Su pedido sera enviado a " + Direccion__direccion + " Su total es de $" + (ResultadoConPrecioCantidad + Precio) + " Gracias por Elegirnos") 
                        alert("Su compra a sido enviada")


                    }
                   if(Pago__pago == "tarjeta"){
                    alert("Usted esta pagando con tarjeta")
                    alert("Su pago es de $"+ Total)
                    let Cuota = prompt("Con Cuantas cuotas desea abonar")
                    let PrecioDivido = Total / Cuota;
                    alert("Usted estara pagando cada cuota de $" + PrecioDivido)
                    si = confirm("Confirme para aceptar el pago")
                        const Datos = new Person(nombre__nombre, Direccion__direccion, Pago__pago,PrecioDivido, Pago__pago );
                        console.log(Datos)

                        alert(nombre__nombre + " Su pedido sera enviado a " + Direccion__direccion + " Su total es de $" +  PrecioDivido + " Gracias por Elegirnos") 
                        alert("Su compra a sido enviada")

                   }
                
            }
            function CostosDeMenoresCantidades() {
                switch (Localidades) {
                    case "capital":
                        alert("El costo del envio es de $" + PrecioCapital)
                        alert("Su total es de $" +(ResultadoConPrecioCantidad + PrecioCapital));
                        MetodoPago(ResultadoConPrecioCantidad + PrecioCapital, PrecioCapital);
                        break;

                        case "zona norte":
                        alert("El costo del envio es de $" + PrecioZonaNorte);
                        alert("Su total es de $" + (ResultadoConPrecioCantidad + PrecioZonaNorte));
                        MetodoPago(ResultadoConPrecioCantidad + PrecioZonaNorte, PrecioZonaNorte);
                            break;
                            case "zona sur":
                                alert("El costo del envio es de $" + PrecioZonaSur)
                                alert("Su total es de $" + (ResultadoConPrecioCantidad + PrecioZonaSur))
                                MetodoPago(ResultadoConPrecioCantidad + PrecioZonaSur, PrecioZonaSur);

                            break;
                    default:
                    console.log("Su localidad no se encuentra disponible aun")
                        break;
                }
                
            }
            function CostosDeMayoresCantidades(data) {

            switch (Localidades) {
            case "capital":
            
            let PreciototalCapital = data + PrecioCapital; // PrecioCapital valor de envio
            alert("El costo del envio es de $" + PrecioCapital)
            alert("Su total es de $" + PreciototalCapital)
            MetodoPago(PreciototalCapital, PrecioCapital);
            
            break;
            case "zona norte":
            let PreciototalZonaNorte = data + PrecioZonaNorte; 
            alert("El costo del envio es de $" + PrecioZonaNorte)
            alert("Su total es de " + PreciototalZonaNorte )
            MetodoPago(PreciototalZonaNorte, PrecioZonaNorte);
            break;

            case"zona sur":
            let PreciototalZonaSur = data + PrecioZonaSur; 
            alert("El costo del envio es de $" + PrecioZonaSur)
            alert("Su total es de $" + PreciototalZonaSur)
            MetodoPago(PreciototalZonaSur, PrecioZonaSur);
            break;


            default:
            break;
    }
}
            // Proceso de Compra
            if (CantiTortas <= 5){ 
                alert("Su Seleccion del pedido ha sido un exito")
                Localidades();
                CostosDeMenoresCantidades();
            }
            if (CantiTortas >= 5){

                alert("su pedido supera los $500 pesos. ")
                switch (ResultadoConPrecioCantidad) {
                    case 600: 
                        let descuento = 90
                        let data =  ResultadoConPrecioCantidad - descuento
                        alert("Se le aplica un descuento de $ " + descuento + " pesos");
                        alert("Su Descuento ha sido aplicado. Su compra sera de " + data) 
                        Localidades();
                        CostosDeMayoresCantidades(data)
                    break;
                    case 700:  

                        let descuentoValor700 = 110
                        let dataValor700 =  ResultadoConPrecioCantidad - descuento;

                        alert("Se le aplica un descuento de $ " + descuentoValor700 + "pesos");
                        alert("Su Descuento ha sido aplicado. Su compra sera de " + caso2) 
                        Localidades()
                        CostosDeMayoresCantidades(dataValor700)
                    break;
                    case 800:   
                        let descuentoValor800 = 150
                        let dataValor800 =  ResultadoConPrecioCantidad - descuento;

                        alert("Se le aplica un descuento de $ "+ descuentoValor800 +  "pesos");
                        alert("Su Descuento ha sido aplicado. Su compra sera de " + dataValor800) 
                        
                        Localidades();
                        CostosDeMayoresCantidades(dataValor800)
                    break;
                    default:
                        let descuentoValorMayor = 190
                        let dataValorMayor = ResultadoConPrecioCantidad - descuentoValorMayor;
                        alert("Su decuento sera de $ " + descuentoValorMayor)
                        alert("Su Descuento ha sido aplicado. Su compra sera de $ " + dataValorMayor) 
                        Localidades()
                        CostosDeMayoresCantidades(dataValorMayor)
                    break;   
            }
        } 
    }

    MEGADULCE()