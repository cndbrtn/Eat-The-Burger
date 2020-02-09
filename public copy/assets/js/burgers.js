$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      var isEaten = {
        eaten: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isEaten
      }).then(
        function() {
          console.log("eaten");
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurg = {
        name: $("#burg").val().trim(),
        eaten: false,
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burgie");
          location.reload();
        }
      );
    });
  
  });
  