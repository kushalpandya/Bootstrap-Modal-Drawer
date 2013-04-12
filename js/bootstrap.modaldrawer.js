var buttons = $("button");
var modalDisableOverlay = $('<div class="modal-disable-overlay">&nbsp;</div>');
$.each(buttons, function(index, button) {
	if($(button).data("drawer"))
	{
		var launcher = $(button);
		var drawer = launcher.parents().eq(2).find(".modal-drawer");
		var drawerCloseBtn = drawer.find(".modal-drawer-footer button");

		var dismissDrawer = function() {
			drawer.parent().find(modalDisableOverlay).remove();
			drawer.slideUp(250);
		};

		launcher.on("click", function(){
			if(drawer.css("display") === "none")
			{
				drawer.parent().append(modalDisableOverlay);
				drawer.slideDown(250);
			}
		});

		drawerCloseBtn.on("click", dismissDrawer);
		return;
	}
});