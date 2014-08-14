var gfx = {};
 
/**
 * Exemple de tuile
 */
/**
 * Function exemple
 * @purpose : Génère un sol.
 */
gfx.sol = function ($x, $y, $decalage, $decalage2, line_decal)
{
        //On crée une nouvelle instance de la classe Shape

        this.gfx = new Shape();
 
        //On accéde a la propriété grapgics
         //On accéde a la propriété grapgics
        var doge = new Image();
        doge.src = "images/herbe64.png";
        var bitmap = new Bitmap(doge);
        bitmap.x = 600 + ($x * 64) + decalage2;
        bitmap.y = 200 + ($y * 32) - decalage;
        bitmap.y = bitmap.y + line_decal * 16;
        bitmap.x = bitmap.x - line_decal * 32;
        bitmap.onClick = handleClick;
       // bitmap.y =  + line_decal;
        stage.addChild(bitmap);
        stage.update();
        return this.gfx;
};
function handleClick(event)
{
        alert(event);
}

gfx.solTAlea = function ( $r, $g, $b )
{
        var r = $r - Math.round(Math.random()*40), g = $g - Math.round(Math.random()*40), b = $b - Math.round(Math.random()*40);
 
        return this.sol ( r, g, b );
};

gfx.mur = function ( $r, $g, $b )
{
	if ( (!$r && $r !== 0) || (!$g && $g !== 0) || (!$b && $b !== 0) ) { $r = $g = $b = 200; }
        this.gfx = new Shape();
 
        /**
         * On définit les couleurs des côtés (plus sombres).
         */
        $color = Graphics.getRGB ( $r, $g, $b );
 
        /**
         * Création des deux autr couleurs.
         */
        $color_g = Graphics.getRGB ( Math.round(0.8 * $r), Math.round(0.8 * $g), Math.round(0.8 * $b) );
        $color_d = Graphics.getRGB ( Math.round(0.6 * $r), Math.round(0.6 * $g), Math.round(0.6 * $b) );
 
        /**
         * Face droite.
         */
	this.gfx.graphics.beginFill($color_d);
        this.gfx.graphics.moveTo(0/2,-18/2).lineTo(0/2,22/2).lineTo(64/2,0/2).lineTo(64/2,-50/2).lineTo(0/2,-18/2);
 
        /**
         * Face supérieure.
         */
        this.gfx.graphics.beginFill($color);
        this.gfx.graphics.moveTo(64/2,-50/2).lineTo(0/2,-82/2).lineTo(-64/2,-50/2).lineTo(0,-18/2).lineTo(64/2,-50/2);
 
        /**
         * Face gauche.
         */
        this.gfx.graphics.beginFill($color_g);
        this.gfx.graphics.moveTo(-64/2,-50/2).lineTo(-64/2,0/2).lineTo(0/2,32/2).lineTo(0/2,-18/2).lineTo(-64/2,-50/2).beginFill();
        this.gfx.graphics.closePath();
 
	return this.gfx;
};