var gameview = document.getElementById('gameview'), stage;
stage = new Stage(gameview);
 
Ticker.setFPS(24);
Ticker.addListener(stage);
 
 
var myMap = new Map ();
myMap.offsetX = 800;
myMap.offsetY = 100;
stage.addChild ( myMap );
 
var map = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
 
var decalage = 0;
var decalage2 = 0;
var pos_ligne = 0;
for ( var i = 0; i < map.length; i++ )
{
        decalage = 0;
        decalage2 = 32;
        pos_ligne = pos_ligne + 1;
        for ( var j = 0; j < map.length; j++ )
        {
                if ( map[i][j] === 0 )
                {

                        decalage += 32/2;
                        decalage2 -= 32;
                        myMap.addTile ( new Tile ( TileType.PNG, gfx.sol(i, j, decalage, decalage2, pos_ligne), true ), i, j, 0 );
                        
                        //gfx.sol(i, j, decalage, decalage2);
                }
                else
                {
                        //myMap.addTile ( new Tile ( TileType.DRAW, gfx.mur(72,61,4), false ), i, j, 0 );
                }
        }
}
 
//var player = new Player ( TileType.DRAW, gfx.mur ( 255, 0, 0 ), true );
//myMap.addTile ( player, 1, 1, 1 );
 
document.addEventListener ( 'keydown', onKeyDown );
function onKeyDown ($e)
{
        switch ( $e.keyCode )
        {
                case 37: //Gauche
                        player.move ( 0, -1 );
                        break;
                case 38: //Haut
                        player.move ( -1, 0 );
                        break;
                case 39: //Droite
                        player.move ( 0, 1 );
                        break;
                case 40: //Bas
                        player.move ( 1, 0 );
                        break;
                default:
                        break;
        }
}