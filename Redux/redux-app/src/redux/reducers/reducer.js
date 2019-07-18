const estadoInicial = {
    contador: 0,
    nombre: 'Redux App'
};

export const reducer = (state = estadoInicial, action) => {
    switch(action.type) {
        case "INCREMENTAR":
            return {
                ...state,
                contador: state.contador + 1
            };
        case "DECREMENTAR":
            return {
                ...state,
                contador: state.contador - 1
            };
        case 'CAMBIAR_NOMBRE':
            return {
                ...state,
                nombre: action.nombre
            };
        default:
            return state;
    }
};