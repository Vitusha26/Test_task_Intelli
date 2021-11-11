//нажимаєте на кнопку Click me pleaseeee! і вилітає віконце
let dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function() {
    dialog.show();
};
document.querySelector('#close').onclick = function() {
    dialog.close();
};
