<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
        <title>Respo Fit - workoutExt.jsp</title>

        <script type="text/javascript">
		var buildVersion = {
			version: "${version}",
			displayVersion: "${display_version}",
			versionEncoded: "${display_version_encoded}",
			profile: "${settings.filename}",
			timestamp: "${timestamp}"
		};

        var response = {
            "success":true,
            "status":"200",
            "items":[{
            "id":28,
            "name":"123456",
            "shortDesc":"test gbghjbhj jhbhjfbhb",
            "description":"<p>mknsdjkbnjkd dbhjbhbh</p>",
            "category":3,
            "videoMaleUrl":null,
            "videoFemaleUrl":null,
            "audioMaleUrl":"service/media/tsmismxg.mp3",
            "audioFemaleUrl":null,
            "pictureUrl":"service/media/oexqx4vf.jpg",
            "pictureThumb":"service/media/oexqx4vf.jpg?thumb=1",
            "videoMaleUpload":null,
            "videoFemaleUpload":null,
            "pictureUpload":null,
            "audioMaleUpload":null,
            "audioFemaleUpload":null,
            "duration":{"toExhaustion":false,"time":15,"unit":"unit.minutes"},
            "date":{
                "type":"WEEKDAY",
                "items":["weekday.monday","weekday.friday","weekday.sunday","weekday.wednesday"]
                   },
            "time":{
                "type":"TIME","items":["12:15","20:00"]
                   }
            }],
            "total":1
        };
        </script>

        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700&amp;subset=latin,latin-ext">
        <link rel="stylesheet" type="text/css" href="css/client/style.css?build=${display_version_encoded}" />
        <link rel="stylesheet" type="text/css" href="css/main.min.css?build=${display_version_encoded}" />
        <link rel="stylesheet" type="text/css" href="css/mediaelementplayer.css?build=${display_version_encoded}" />
        <script type="text/javascript" src="js/client/3rdparty/jquery-1.11.0.min.js"></script>
    </head>
    <body>
        <div class="header">
            <div class="header__inner">
                <a class="header__logo"></a>
                <ul class="header__menu right">
                    <li class="header__menu-item">
                        <a class="header__menu-link header__menu-link_menu"></a>
                        <ul class="dropdown">
                            <li class="menu__item"><a class="menu__link">Mein Trainingsplan<i class="menu__icon menu__icon_time"></i></a></li>
                            <li class="menu__item"><a class="menu__link">Ubungen<i class="menu__icon menu__icon_exercises"></i></a></li>
                            <li class="menu__item"><a class="menu__link">Training Historie<i class="menu__icon menu__icon_history"></i></a></li>
                            <li class="menu__item"><a class="menu__link">Einstellungen<i class="menu__icon menu__icon_settings"></i></a></li>
                        </ul>
                    </li>
                    <li class="header__menu-item"><a class="header__menu-link header__menu-link_logout"></a></li>
                </ul>
            </div>
        </div>

        <div class="container">
            <div class="container__inner">
                <div class="head">
                    <div class="head__col">
                        <a class="head__button-back">Zurück<i class="head__button-back_arrow"></i></a>
                    </div>
                    <div class="head__col">
                        <h2 class="head__title right">Details</h2>
                    </div>
                </div>
                <div class="search">
                    <h3 class="search__title left">Kategorie</h3>
                    <div class="search__category"><span></span></div>
                </div>

                <div class="content">
                    <div class="w__details">
                        <div class="w__details_media">
                            <img class="w__details_media_img" src="service/media/jefycdgl.jpg">
                        </div>
                        <div class="w__details_description">
                            <div>
                                <p>The test consists of one writing prompt that will define an issue and describe two points of view on that issue. You are asked to respond to a question about your position on the issue described in the writing prompt. In doing so, you may adopt one or the other of the perspectives described in the prompt, or you may present a different point of view on the issue. Your score will not be affected by the point of view you take on the issue.</p>
                                <p>The test consists of one writing prompt that will define an issue and describe two points of view on that issue. You are asked to respond to a question about your position on the issue described in the writing prompt. In doing so, you may adopt one or the other of the perspectives described in the prompt, or you may present a different point of view on the issue. Your score will not be affected by the point of view you take on the issue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $(function() {
                console.log( "ready!" );
                $('.search__category span').text('category');
            });
        </script>
    </body>
</html>