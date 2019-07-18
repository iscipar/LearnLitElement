export const incrementar = () => {
    return {
        type: 'INCREMENTAR'
    }
};
  
export const decrementar = () => {
    return {
        type: 'DECREMENTAR'
    }
};
  
export const cambiarNombre = (nombre) => {
    return {
        type: 'CAMBIAR_NOMBRE',
        nombre: nombre
    }
};