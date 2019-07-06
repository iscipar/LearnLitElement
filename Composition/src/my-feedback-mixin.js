export const MyFeedbackMixin = (Superclass) => {
    return class extends Superclass {
        enviarMensaje(mensaje) {
            this.dispatchEvent(new CustomEvent('my-feedback-message', {
                bubbles: true,
                composed: true,
                detail: mensaje
            }));
        }
    }
}