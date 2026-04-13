// --- INTERFACES (Siguiendo tu SQL) ---

export interface Usuario {
    id_usuario: number;
    nombre_usuario: string;
    constrasenia: string;
    rol: 'admin' | 'barista';
    estado: boolean;
    creado: string;
}
export interface Categoria {
    id_categoria: number;
    nombre: string;
}
export interface Proveedor {
    nit: string;
    nombre: string;
    contacto_nombre: string;
    telefono: string;
    correo: string;
    activo: boolean;
}



export interface Producto {
    id_producto: number;
    id_categoria: number;
    nombre: string;
    descripcion: string;
    precio_venta: number;
    stock_actual: number;
    stock_minimo: number;
    fecha_eliminacion: string | null;
}

export interface Cliente {
    carnet: string;
    nombre: string;
    apellido: string;
    apellido_materno: string;
    correo: string;
    telefono: string;
    activo: boolean;
}

// --- DATOS MOCK (Colecciones) ---

export const USUARIOS: Usuario[] = [
    {
        id_usuario: 1,
        nombre_usuario: 'admin_central',
        constrasenia: '123456789', // Simulación de bcrypt
        rol: 'admin',
        estado: true,
        creado: '2023-01-15T08:00:00Z'
    },
    {
        id_usuario: 2,
        nombre_usuario: 'lucia_barista',
        constrasenia: '987654321', 
        rol: 'barista',
        estado: true,
        creado: '2023-02-10T09:30:00Z'
    }
];

export const PROVEEDORES: Proveedor[] = [
    {
        nit: '1020304050',
        nombre: 'Distribuidora Granos de Oro',
        contacto_nombre: 'Carlos Méndez',
        telefono: '70011223',
        correo: 'ventas@granosoro.com',
        activo: true
    },
    {
        nit: '9988776655', nombre: 'Lácteos El Porvenir',
        contacto_nombre: 'María Ramos', telefono: '72233445',
        correo: 'pedidos@elporvenir.com', activo: true
    }
];

export const CATEGORIAS: Categoria[] = [
    { id_categoria: 1, nombre: 'Cafetería' },
    { id_categoria: 2, nombre: 'Pastelería Fina' },
    { id_categoria: 3, nombre: 'Bollería y Panes' },
    { id_categoria: 4, nombre: 'Bebidas Frías' },
];

export const PRODUCTOS: Producto[] = [
    {
        id_producto: 1, id_categoria: 1, 
        nombre: 'Café Americano 12oz',
        descripcion: 'Café de especialidad tostado medio',
        precio_venta: 15.00,
        stock_actual: 50,
        stock_minimo: 10,
        fecha_eliminacion: null
    },
    {
        id_producto: 3, id_categoria: 1, 
        nombre: 'Capuccino Italiano', descripcion: 'Espresso con espuma de leche cremosa',
        precio_venta: 18.00, stock_actual: 40, stock_minimo: 10, fecha_eliminacion: null
    },
    {
        id_producto: 4, id_categoria: 1, 
        nombre: 'Latte Vainilla', descripcion: 'Café latte con sirope artesanal',
        precio_venta: 20.00, stock_actual: 30, stock_minimo: 5, fecha_eliminacion: null
    },

    {
        id_producto: 5, id_categoria: 2, 
        nombre: 'Cheesecake de Frutos Rojos', descripcion: 'Base de galleta y coulis natural',
        precio_venta: 25.00, stock_actual: 8, stock_minimo: 5, fecha_eliminacion: null
    },
    {
        id_producto: 6, id_categoria: 2, 
        nombre: 'Tarta de Limón (Lemon Pie)', descripcion: 'Merengue suizo y crema cítrica',
        precio_venta: 22.00, stock_actual: 15, stock_minimo: 4, fecha_eliminacion: null
    },
    {
        id_producto: 7, id_categoria: 2, 
        nombre: 'Mousse de Chocolate 70%', descripcion: 'Chocolate amargo con láminas de oro',
        precio_venta: 28.00, stock_actual: 3, stock_minimo: 5, fecha_eliminacion: '2023-10-27T00:00:00Z' // Ejemplo eliminado
    },

    {
        id_producto: 2, id_categoria: 3, 
        nombre: 'Croissant de Mantequilla', descripcion: 'Hojaldre artesanal francés',
        precio_venta: 12.50, stock_actual: 4, stock_minimo: 8, fecha_eliminacion: null // STOCK BAJO
    },
    {
        id_producto: 8, id_categoria: 3, 
        nombre: 'Roll de Canela', descripcion: 'Con glaseado de queso crema',
        precio_venta: 14.00, stock_actual: 15, stock_minimo: 6, fecha_eliminacion: null
    },
    {
        id_producto: 9, id_categoria: 3, 
        nombre: 'Pan Au Chocolat', descripcion: 'Hojaldre relleno de chocolate belga',
        precio_venta: 15.50, stock_actual: 10, stock_minimo: 5, fecha_eliminacion: null
    },

    {
        id_producto: 10, id_categoria: 4, 
        nombre: 'Iced Latte Caramelo', descripcion: 'Café frío con caramelo salado',
        precio_venta: 22.00, stock_actual: 25, stock_minimo: 10, fecha_eliminacion: null
    },
    {
        id_producto: 11, id_categoria: 4,
        nombre: 'Limonada de Menta', descripcion: 'Refrescante con menta orgánica',
        precio_venta: 12.00, stock_actual: 30, stock_minimo: 10, fecha_eliminacion: null
    }
];

export const CLIENTES: Cliente[] = [
    {
        carnet: '6543210LP',
        nombre: 'Ana',
        apellido: 'Zubiri',
        apellido_materno: 'Vaca',
        correo: 'ana.z@mail.com',
        telefono: '60554433',
        activo: true
    },
    {
        carnet: '1234567SC', nombre: 'Juan', apellido: 'Pérez',
        apellido_materno: 'Gómez', correo: 'jperez@mail.com',
        telefono: '78899001', activo: true
    }
];

// Ejemplo de una VENTA para tu historial
export const VENTAS_EJEMPLO = [
    {
        id_venta: 1,
        id_usuario: 2,
        id_cliente: '6543210LP',
        monto_total: 27.50,
        metodo_pago: 'efectivo',
        fecha_venta: '2023-10-27T10:15:00Z',
        detalles: [
            { id_producto: 1, cantidad: 1, precio_unitario: 15.00, subtotal: 15.00 },
            { id_producto: 2, cantidad: 1, precio_unitario: 12.50, subtotal: 12.50 }
        ]
    }
];

