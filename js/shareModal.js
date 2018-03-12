var shareModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        //return false; // nothing happens
    }
});

// set content
shareModal.setContent('<h3>Joining a liveDraft</h3>');

// add a button
shareModal.addFooterBtn('Join', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    shareModal.close();
});

// add another button
shareModal.addFooterBtn('Cancel', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    shareModal.close();
});