$(document).ready(function() {
    // Card mouse over animate
    $(".movieCard").hover(function() {
        $(this).animate({
            top: "-10px"
        }, 150);
    }, function() {
        $(this).animate({
            top: "0px"
        }, 150);
    });
    
    $(".movieCard img").click(function() {
        // Show information panel
        $("#movieContent").fadeIn("fast");

        // Get Card order
        var index = $(".movieCard img").index(this);

        // Get movie poster
        var getPoster = $(this).attr("src");

        // Replace information
        // Movie data is stored on "/scripts/movieInfo.js"
        $("#poster img").attr("src", getPoster);
        $(".chineseName p").text(movieInfo[index].chineseName);
        $(".englishName p").text(movieInfo[index].englishName);
        $(".releaseDate span").text(movieInfo[index].releaseDate);
        $(".runningTime span").text(movieInfo[index].runningTime);
        $(".description #desc").text(movieInfo[index].description);

        // Director list generator
        var directorLength = movieInfo[index].director.length;
        var $directorList = "";
        for(var i=0; i<directorLength; i++) {
            $directorList += movieInfo[index].director[i];
            if(i != (directorLength-1)) {
                $directorList += "、";
            } else {
                continue;
            }
        }
        $(".director span").text($directorList);

        // Category list generator
        var categoryLength = movieInfo[index].category.length;
        var $categoryList = "";
        for(var i = 0; i<categoryLength; i++) {
            $categoryList += movieInfo[index].category[i];
            if (i != (categoryLength - 1)) {
                $categoryList += "、";
            } else {
                continue;
            }
        }
        $(".category span").text($categoryList);

        // When category is Anime
        if (movieInfo[index].category[0] == "動畫") {
            var $animeCategory = "<p>演員／配音員：<span></span> 等人</p>";
            $(".cast p").html($animeCategory);
        } else {
            var $animeCat_origin = "<p>演員：<span></span> 等人</p>";
            $(".cast p").html($animeCat_origin);
        }
        
        // Cast list generator
        var castLength = movieInfo[index].cast.length;
        var $castList = "";
        for(var i = 0; i<castLength; i++) {
            $castList += movieInfo[index].cast[i];
            if (i != (castLength - 1)) {
                $castList += "、";
            } else {
                continue;
            }
        }
        $(".cast span").text($castList);
    });

    // Close button in movieContent
    $("#close").click(function() {
        $("#movieContent").fadeOut("fast");
    });

    // Category filter
    $("#All").click(function() {
        $(".movieCard").show();
    });
    
    $("#Action").click(function() {
        $(".movieCard").hide();
        $(".action").show();
    });

    $("#Adventure").click(function() {
        $(".movieCard").hide();
        $(".adventure").show();
    });

    $("#Drama").click(function() {
        $(".movieCard").hide();
        $(".drama").show();
    });

    $("#Comedy").click(function() {
        $(".movieCard").hide();
        $(".comedy").show();
    });

    $("#Horror").click(function() {
        $(".movieCard").hide();
        $(".horror").show();
    });

    $("#Thriller").click(function() {
        $(".movieCard").hide();
        $(".thriller").show();
    });

    $("#Romance").click(function() {
        $(".movieCard").hide();
        $(".romance").show();
    });

    $("#Suspense").click(function() {
        $(".movieCard").hide();
        $(".suspense").show();
    });

    $("#Fantasy").click(function() {
        $(".movieCard").hide();
        $(".fantasy").show();
    });

    $("#Scifi").click(function() {
        $(".movieCard").hide();
        $(".scifi").show();
    });

    $("#Anime").click(function() {
        $(".movieCard").hide();
        $(".anime").show();
    });
});