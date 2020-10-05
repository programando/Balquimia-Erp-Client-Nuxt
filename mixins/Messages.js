import Swal from 'sweetalert2'

export const Messages = {
    Success( textTitle, textContent) {
              Swal.fire( textTitle, textContent, 'success'  );
      }
}