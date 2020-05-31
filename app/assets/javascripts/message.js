$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message">
         <div class="messages-user-date">
           <div class="messages__user-name">
             ${message.user_name}
           </div>
           <div class="messages-date">
             ${message.created_at}
           </div>
         </div>
         <div class="messages-content">
           <p class="messages-content__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message">
         <div class="messages-user-date">
           <div class="messages__user-name">
             ${message.user_name}
           </div>
           <div class="messages-date">
             ${message.created_at}
           </div>
         </div>
         <div class="messages-content">
           <p class="messages-content__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.chat-main__messages-list').append(html);
        $('form')[0].reset();
        $('.chat-main__messages-list').animate({ scrollTop: $('.chat-main__messages-list')[0].scrollHeight});
      })
      .fail(function() {
        alert('error');
      })
      .always(function() {
        $('.submit').prop('disabled', false);
      });
})
});