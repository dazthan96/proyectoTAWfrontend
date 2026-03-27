// --- INTERFACES (Siguiendo tu SQL) ---

export interface Usuario {
    id_usuario: number;
    nombre_usuario: string;
    constrasenia: string;
    rol: 'admin' | 'barista';
    estado: boolean;
    creado: string;
}

export interface Proveedor {
    nit: string;
    nombre: string;
    contacto_nombre: string;
    telefono: string;
    correo: string;
    activo: boolean;
}

export interface Categoria {
    id_categoria: number;
    nombre: string;
}

export interface Producto {
    id_producto: number;
    id_categoria: number;
    id_proveedor: string;
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
    }
];

export const CATEGORIAS: Categoria[] = [
    { id_categoria: 1, nombre: 'Cafetería Caliente' },
    { id_categoria: 2, nombre: 'Pastelería' },
    { id_categoria: 3, nombre: 'Insumos' }
];

export const PRODUCTOS: Producto[] = [
    {
        id_producto: 1,
        id_categoria: 1,
        id_proveedor: '1020304050',
        nombre: 'Café Americano 12oz',
        descripcion: 'Café de especialidad tostado medio',
        precio_venta: 15.00,
        stock_actual: 50,
        stock_minimo: 10,
        fecha_eliminacion: null
    },
    {
        id_producto: 2,
        id_categoria: 2,
        id_proveedor: '1020304050',
        nombre: 'Croissant de Mantequilla',
        descripcion: 'Hojaldre artesanal francés',
        precio_venta: 12.50,
        stock_actual: 4,
        stock_minimo: 8,
        fecha_eliminacion: null
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

