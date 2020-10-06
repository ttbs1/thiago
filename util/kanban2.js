 $(function() {
    $( ".column" ).sortable({
      connectWith: ".column",
      //handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all",
      opacity: 0.6,
      cursor: 'grabbing',
      update: function () {
        $('#exampleModalCenter').modal('toggle');
      }
    });
    
    document.getElementById("confirmar").addEventListener('click',function () {
        $('.tarefa_id').each(function() {
            $.post("../Projeto/updateStatus.php", {id: $(this).val(), status: $(this).closest(".column").attr('id')});
        });
        $('#exampleModalCenter').modal('toggle');
        setTimeout(function (){
            location.reload(true);
        }, 500);
    });
    
    $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
        location.reload(true);
    });
 
    $( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" );
       
 
    $( ".portlet-toggle" ).click(function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
  });