const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
const list = new MDCList(document.querySelector('.mdc-dialog .mdc-list'))
const button = new MDCRipple(document.querySelector('.mdc-button'));

dialog.list('MDCDialog:opened', () => {
    list.layout();
});

button.addEventListener('click', (event) => {
    if (dialog.open)
        dialog.open = false;
    else {
        dialog.open = true;
    }
});
