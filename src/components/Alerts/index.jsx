import Swal from 'sweetalert2';

// css
import './style.css';

/**
 * Displays a toast message using SweetAlert2 library.
 *
 * @function
 * @param {string} theme The theme for the toast message (e.g. success, error, warning).
 * @param {string} handler The handler for the toast message (e.g. copyText).
 * @returns {Promise} A Promise that resolves with the toast message if the handler is "copyText".
 */

export default function index(theme, handler) {
    return new Promise(async (resolve, reject) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: '#2d2c2c',
            customClass: {
                popup: 'minecraft-alert'

            },
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });
    
        const showToast = async (message) => {
            await Toast.fire({
                icon: theme,
                title: message
            });
        }
    
        if(handler === "copyText") {
            resolve(showToast("¡Servidor copiado en el portapapeles!"));
        }
    });
}