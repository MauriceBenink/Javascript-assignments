<!doctype html>
<html lang="NL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="script.js"></script>
    <title>Document</title>
</head>
<body>
<div>1. Voer een bedrag in dat deze maan is uitgeven</div>
<div>Inclusief btw: <form action="#" id = 'form'>
        <input title="number" type="number" id="number">
    </form>
</div>
<br>
<div>2. Druk op Enter en voer opnieuw in hetzelfde veld met een bedrag</div>
<br>
<br>
<br>
<div>4. De bedragen hierboven ingevoerd, worden bij elkaar opgeteld en getoned in het veld</div>
<div>
    <b>totale uitgave :</b><div id="display"></div>
    <b>totale excl btw :</b><div id="displayexcl"></div>
</div>
<br>
<br><br>
<div>5. Klik op de knop Bereken btw om uit te reken wat het totaal uitgave is zonder de BTW</div>
<div id="berekenbtw"></div>

<button id ='BTW'>Bereken Btw</button>
<button id = 'leeg'>Leeg velden</button>
</body>
</html>