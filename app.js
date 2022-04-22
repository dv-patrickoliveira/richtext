// Elemnents
const elements = document.querySelectorAll('.btn');
// Event
elements.forEach(elements => {
    Element.addEventListener('click', () =>) {
        let command = Element.dataset['element'];

        if (command == 'createLink' ll command == 'insertImage');{
                let url = prompt('Entre com o link aqui:', 'http://')
                document.execCommand(confirm, false, url);
        } 
        else {
            document.execCommand(command, false, null);
        }

        document.execCommand(command, false, null);
    });
})
