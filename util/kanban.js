 $(function() {
    $( ".column" ).sortable({
      connectWith: ".column",
      //handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all",
      opacity: 0.6,
      cursor: 'grabbing',
      update: function () {
          /*var id = $(this).children('.portlet').children('.tarefa_id').val();
          if(id) {
                $.post("updateStatus.php", {id: id, status: $(this).attr('id')})
                alert('ID: '+ id +'\nColuna: '+$(this).attr('id'));
          }*/
          if ($('#admin').val() == 'n') {
            var coluna = $(this).attr('id');
            $(this).children('.portlet').children('.tarefa_id').each(function() {
                $.post("../Projeto/updateStatus.php", {id: $(this).val(), status: coluna});
            });
            setTimeout(function (){
                location.reload(true);
            }, 500);
          } else {
            $('#exampleModalCenter').modal('toggle');
          }
      }
    });
    
    document.getElementById("designar").addEventListener('click',function () {
        $('.tarefa_id').each(function() {
            $.post("updateStatus.php", {id: $(this).val(), status: $(this).closest(".column").attr('id'), usuario: $('#usuario').children("option:selected"). val()});
           //alert($(this).val()); 
           //alert($('#usuario').children("option:selected"). val());
           //alert($(this).closest(".column").attr('id'));
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