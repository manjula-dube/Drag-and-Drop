$(document).ready(function(){
         
		$(".objectDrag").draggable({cursor: "move",helper:'clone'});  
		var i=1;
		$("#garbageCollector").droppable({
			accept: ".objectDrag",
			drop: function(event,ui){
					console.log("Item was Dropped");
					$(this).append($(ui.draggable).clone());
					$("#garbageCollector .objectDrag").attr("id","item"+i);
					$("#item"+i).removeClass("ui-draggable objectDrag");
					
					$("#item"+i).draggable({
						containment: 'parent',
						grid: [150,150]
					});
					$("#item"+i).css('position', 'absolute');
					$("#item"+i).css('top', ui.position.top - $(this).position().top);
					$("#item"+i).css('left', ui.position.left - $(this).position().left);
					i++;
				}
		});
		
		function handleDragStop( event, ui ) {
		  var offsetXPos = parseInt( ui.offset.left );
		  var offsetYPos = parseInt( ui.offset.top );
		  alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
		}

	});