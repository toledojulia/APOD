$("#btn").on("click", function(){
    apiKey = 'rEbmYtvC8XucMZx9GJ2sgZrFl05KhDRIG1XnYMR2'
    data = $("#procuraData").val()
      let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${data}`
  
      $.ajax({
          url: url,
          type: "GET",
          dataType: "json",
  
          success: function(result){
              console.log(result)
              $('#apodTitulo').html(result.title)
            $('#apodTexto').html(result.explanation)
             $('#apodImg').html(`<img src="${result.url}"/>`)
          }
      })
  })