var modal = new tingle.modal({
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
modal.setContent('<h5>Joining a liveDraft</h5><input id="join_name" placeholder="What is your name/identifier"/><br><br><input id="join_code" placeholder="What is the join code"/>');

// add a button
modal.addFooterBtn('Join', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

// add another button
modal.addFooterBtn('Cancel', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
});