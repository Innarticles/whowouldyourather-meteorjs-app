
AutoForm.hooks({
  insertPostForm: {
    formToDoc: function(doc) {
      // doc.celebOptions = $('[data-schema-key="celebOptions"]').val();
      console.log(doc);
      return doc;
    },
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
         // Router.go('products');
         console.log("Hurray!")
    },

    // Called when any operation fails, where operation will be
    // "validation", "insert", "update", "submit", or the method name.
    onError: function(operation, error, template) {
        alert(error)
    }
  }
});