var gfx = {};
 
/**
 * Exemple de tuile
 */
/**
 * Function exemple
 * @purpose : Génère un sol.
 */
gfx.sol = function ()
{
        //On crée une nouvelle instance de la classe Shape

        this.gfx = new Shape();
 
        //On accéde a la propriété grapgics
        this.gfx.graphics
                //On initie un nouveau tracé (ici, gris)
                .beginFill("#CCCCCC")
                //On applique les actions vues dans le schémà
                .moveTo(32,0)
                .lineTo(0,-16)
                .lineTo(-32,0)
                .lineTo(0,16)
                .lineTo(32,0)
                //On termine le tracé.
                .closePath();
        return this.gfx;
};


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