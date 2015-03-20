AutoForm.hooks({
  insertCelebForm: {
    formToDoc: function(doc) {
      doc.nMarry = 0;
      doc.nLaid = 0;
      doc.nKill = 0;
      console.log(doc);
      return doc;
    },

    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
         // Router.go('celebs');
         console.log("Hurray!")
    },

    // Called when any operation fails, where operation will be
    // "validation", "insert", "update", "submit", or the method name.
    onError: function(operation, error, template) {
        alert(error)
    }
  }
});