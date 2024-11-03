const ap1 = Vue.createApp({
    data() {
        return {
            // Aca se declaran las variables
            newProducto: '',
            newCantidad: '',
            newPrecio: '',
            // Aca van los items, sacado de un codigo de anahí xD
            items: [],
        };
    },

    // computed poq así lo pide anahí xd
    computed: {

        // se calcula el total de las catidades 
        totalCantidad() {

            // Se declara total
            total = 0;

            // Este wey recorre todos los elementos en items,
            for (i = 0; i < this.items.length; i++) {

                // aca se suman todos conforme a "i" y se guardan en total
                total += this.items[i].cantidad;
            }
            //se imprime/regresa total
            return total;
        },

        totalImporte() {

            // aca se hace lo mismo, pero se debe de tener en cuenta que total se "limpa" borra los valores previamente almacenados

            total = 0;

            // Este wey recorre todos los elementos en items,
            for (i = 0; i < this.items.length; i++) {

                // aca se suman todos conforme a "i" y se guardan en total
                total += this.items[i].cantidad * this.items[i].precio;
            }
            //se imprime/regresa total
            return total;
        }
    },

    // El metodo, se ejecuta cuando presionas el boton
    methods: {

        // agregar que es lo que esta en el @click que ejecuta un if
        agregar() {

            // Si estan las 3 variables, se ejecuta el if
            if (this.newProducto && this.newCantidad && this.newPrecio) {

                //Checa que en verdad cantidad no sea mayor a 12
                if (parseInt(this.newCantidad) > 12) {
                    //manda alerta sobre que es mayor a 12 y se regresa sin ingresar algo
                    alert("La cantidad es mayor a 12.");
                    return;
                }
                // Aca se agrega un nuevo item y lo envia al html
                this.items.push({
                    producto: this.newProducto,
                    cantidad: parseInt(this.newCantidad),

                    //precio se deja para que pueda hacerse la operacion desde el html
                    precio: parseFloat(this.newPrecio),
                });

                // se borran las variables para que se puedan rellenar con mas datos
                this.newProducto = '';
                this.newCantidad = '';
                this.newPrecio = '';
            }
        },
    },
});

// Se muestra el codigo en el html
ap1.mount('#formulario');
