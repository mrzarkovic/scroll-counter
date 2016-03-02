/**
 * Created by milos_000 on 02-Mar-16.
 */
$( document ).ready(function() {
    var scrollTimerHandle = "";
    var positionTimerHandle = "";

    $("#scroller-body").scroll(function() {
        var boxSize = 60;
        var preScrollPosition = parseInt(this.scrollTop / boxSize) * boxSize;
        var newScrollPosition = this.scrollTop - preScrollPosition < boxSize /2 ? preScrollPosition : preScrollPosition + boxSize;
        var order = newScrollPosition / boxSize;

        // Set selected item
        $("[data-order]").removeClass("selected");
        $("[data-order='" + order + "']").addClass("selected");

        _this = this;

        clearInterval(scrollTimerHandle);
        scrollTimerHandle  = setTimeout(function() {
            positionTimerHandle = setInterval(function(){
                if (_this.scrollTop == newScrollPosition){
                    clearInterval(positionTimerHandle);
                } else {
                    if (_this.scrollTop > newScrollPosition){
                        _this.scrollTop--;
                    } else {
                        _this.scrollTop++;
                    }
                }
            }, 10);
        }, 500);
    });
});