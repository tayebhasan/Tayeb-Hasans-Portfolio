$(".introduction").hide();
$(".experient").hide();
$(".hlome").hide();

$(".about").click(function() {
    $(".introduction").show();
    $(".hlome").show();
});

$(".home").click(function() {
    $(".introduction").hide();
    $(".hlome").hide();
    });