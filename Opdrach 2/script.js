var Opdracht2 = function(invoer) {
    var obj = {};

    obj.invoerBedrag = 0;
    obj.total = 0;
    obj.exclbtw = 0;
    obj.btw = 0;

    obj.calculate = function(invoer){
        if(invoer == ''){
           invoer = 0;
        }

        obj.invoerBedrag = parseInt(invoer);
        obj.total = parseInt(eval(obj.total + '+' + obj.invoerBedrag)).toFixed(2);
        obj.exclbtw = (obj.total/121*100).toFixed(2);
        obj.btw = (obj.total/121*21).toFixed(2);

        obj.vieuwfix();
        obj.update();
    };

    obj.vieuwfix = function(){
        document.getElementById('number').value = null;
        document.getElementById('berekenbtw').innerHTML = null;
    };

    obj.update = function(){
        document.getElementById('display').innerHTML = '&euro; '+obj.total;
        document.getElementById('displayexcl').innerHTML = '&euro; '+obj.exclbtw;
    };

    obj.BTWshow = function(){
      document.getElementById('berekenbtw').innerHTML = '&euro; '+obj.btw;
    };

    obj.restart = function(){
        delete(obj);
        return "start()";
    };


    return obj;
};



window.onload = function(){
    start();

    function submiting(){
        eyy.calculate(document.getElementById('number').value);
    }

    function clear(){
        eval(eyy.restart());
    }

    function start(){
        eyy = Opdracht2();
        eyy.update();
    }



    document.getElementById('leeg').onclick = function(){clear()};
    document.getElementById('BTW').onclick = function(){eyy.BTWshow()};
    document.getElementById('form').onsubmit = function(){submiting()};
};
