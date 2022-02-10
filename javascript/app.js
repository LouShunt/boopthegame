class Rectangle{
    constructor(posX1,posY1,posX2,posY2){
        this.posX1 = posX1;
        this.posY1 = posY1;
        this.posX2 = posX2;
        this.posY2 = posY2;
    }

    containsPosition(posX,posY){
        return (posX>this.posX1 && posX<this.posX2) && (posY > this.posY1 && posY < this.posY2);
    }
}

class Animal{
    constructor(image, rectangle){
        this._image = image;
        this._rectangle = rectangle;
    }

    get rectangle(){
        return this._rectangle;
    }

    set rectangle(newRectangle){
        this._rectangle = newRectangle;
    }

    get image(){
        return this._image;
    }

    set image(newImage){
        this._image = newImage;
    }
}
let animals = [new Animal("128948171_118877180071505_2515716263979287604_n.jpg", new Rectangle(307,434,482,540)),
                new Animal("130712964_208567604222622_5655589669350918076_n.jpg", new Rectangle(550,766,729,963)),
                new Animal("138251713_3716911735039817_1122247676371852907_n.jpg", new Rectangle(265,180,405,261)),
                new Animal("182155149_332881501775165_3233751707054774227_n.jpg", new Rectangle(236,378,399,482)),
                new Animal("192675508_176662324386057_1394373087372740441_n.jpg", new Rectangle(209,526,384,646)),
                new Animal("217441121_284657866784075_4240679911536988035_n.jpg", new Rectangle(330,383,644,530)),
                new Animal("222067209_1829663880559410_651091046802900593_n.jpg", new Rectangle(64,156,108,173)),
                new Animal("228052557_256936905937515_1569543675669012037_n.jpg", new Rectangle(475,306,653,422)),
                new Animal("242706603_550305009584316_3315286637603954145_n.jpg", new Rectangle(502,697,919,862)),
                new Animal("243136657_1766782750377722_3254270258160009294_n.jpg", new Rectangle(388,598,493,669)),
                new Animal("257584640_619734872714522_612016088335271700_n.jpg", new Rectangle(461,341,660,493)),
                new Animal("257627117_403704814834536_1563055248256455030_n.jpg", new Rectangle(134,498,193,547)),
                new Animal("265971039_222770849898926_8867215954703864290_n.jpg", new Rectangle(126,134,250,220)),
                new Animal("266833676_4461691907262734_1288435793602697922_n.jpg", new Rectangle(272,178,330,211)),
                new Animal("269750196_461875732172257_2352546840398448670_n.jpg", new Rectangle(235,155,343,217)),
                new Animal("269976703_4724349980988965_1971536119169566162_n.jpg", new Rectangle(221,376,403,515)),
                new Animal("270059337_291246576385739_4314503601468636645_n.jpg", new Rectangle(409,532,490,605)),
                new Animal("270081404_424927462640681_485780722409050091_n.jpg", new Rectangle(276,415,350,460)),
                new Animal("270119506_268272428701926_1120785250372544446_n.jpg", new Rectangle(225,200,292,233)),
                new Animal("271555823_120995463762255_2734307485851532567_n.jpg", new Rectangle(321,408,390,454)),
                new Animal("271956979_931772777537580_7179624967978783334_n.jpg", new Rectangle(241,380,325,468)),
                new Animal("272014567_997623714295807_5421071427877309297_n.jpg", new Rectangle(284,290,377,342)),
                new Animal("272111587_1007339246520163_6082463236076481238_n.jpg", new Rectangle(224,499,361,587)),
                new Animal("272129336_4814800358600652_8184123944285162388_n.jpg", new Rectangle(227,94,251,125)),
                new Animal("272325998_513531863332649_7069256226414729286_n.jpg", new Rectangle(641,866,954,1024)),
                new Animal("272346167_134342469072179_7916802351468360416_n.jpg", new Rectangle(200,216,285,286)),
                new Animal("Capture-decran-le-2020-09-11-a-10.25.14.jpg", new Rectangle(296,251,326,270)),
                new Animal("EmptyName-2395.jpg", new Rectangle(362,139,418,164)),
                new Animal("Été-ani-cerv-daim-8.jpg", new Rectangle(542,195,564,221)),
                new Animal("Été-ani-cerv-rouge-3.jpg", new Rectangle(360,269,390,291)),
                new Animal("Été-ani-cerv-virginie-4.jpg", new Rectangle(377,248,418,277)),
                new Animal("Hiv-ani-cerv-caribou-3.jpg", new Rectangle(294,382,344,417)),
                new Animal("Hiv-ani-renard-arct-5.jpg", new Rectangle(521,328,574,372)),
                new Animal("Hiv-ani-renard-arct-7.jpg", new Rectangle(307,280,358,313)),
                new Animal("Jouets-en-peluche-de-sceau-Kawaii-animaux-en-peluche-oreillers-grandes-poup-es-douces-d-corations.jpg_Q90.jpg", new Rectangle(786,597,900,671)),
                new Animal("271195188_450862449903110_3149505800413493754_n.jpg", new Rectangle(196,512,303,593)),
                new Animal("268593143_255338459998512_3257250621246015360_n.jpg", new Rectangle(648,384,745,458)),
                new Animal("270057190_608922453496294_6146720004026654589_n.jpg", new Rectangle(137,177,169,196)),
                new Animal("240530842_563797005034045_5584967270335333443_n.jpg", new Rectangle(625,694,730,767)),
                new Animal("272787675_633745944620155_4081664264523802517_n.jpg", new Rectangle(337,495,424,555)),
                new Animal("20220128_103651.jpg", new Rectangle(1238,2192,1603,2453)),
                new Animal("20220129_113810.jpg", new Rectangle(1107,1275,1555,1712)),
                new Animal("20220129_114118.jpg", new Rectangle(1610,1494,1844,1755)),
                new Animal("20220129_131049.jpg", new Rectangle(453,1762,1555,2939))];
var currentAnimal;
var count = 0;
$(document).ready(function(){
    document.body.style.opacity=1;
    setAnimal(animals[Math.floor(Math.random()*animals.length)]);
    //setAnimal(animals[animals.length-1]);
    document.getElementById("boop-animal").addEventListener('click',function(event){
        bounds = this.getBoundingClientRect();
        var left=bounds.left;
        var top=bounds.top;
        var x = event.pageX - left;
        var y = event.pageY - top;
        var cw=this.clientWidth
        var ch=this.clientHeight
        var iw=this.naturalWidth
        var ih=this.naturalHeight
        var px=x/cw*iw
        var py=y/ch*ih
        //alert(px+" "+py);
        if(currentAnimal.rectangle.containsPosition(px,py))
            setAnimal(animals[Math.floor(Math.random()*animals.length)]);
            
    });
});

function setAnimal(animal){
    currentAnimal = animal;

    $(".bg-image").css("background-image","url(image/"+currentAnimal.image+")");

    $("#boop-animal").attr("src","image/"+currentAnimal.image);

    $("#favicon").attr("href","image/"+currentAnimal.image);
}